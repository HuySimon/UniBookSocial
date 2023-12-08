const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const catchAsync = require('../utils/catchAsync');
const { Op } = require('sequelize')
const crypto = require('crypto')
const AppError = require('../utils/appError');
const sendEmail = require('../utils/email')



const db = require('../models');
const User = db.User
const ResetPasswordToken = db.ResetPasswordToken

const signToken = id => {
	return jwt.sign({ id }, process.env.JWT_SECRET, {
		expiresIn: process.env.JWT_EXPIRES_IN
	});
};

const createSendToken = (user, statusCode, res) => {
	const token = signToken(user.id);
	const cookieOptions = {
		expires: new Date(
			Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
		),
		httpOnly: true
	};
	if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;

	res.cookie('jwt', token, cookieOptions);

	// Remove password from output
	user.password = undefined;

	res.status(statusCode).json({
		status: 'success',
		token,
		data: {
			user
		}
	});
};

exports.signup = catchAsync(async (req, res, next) => {
	const newUser = await User.create({
		email: req.body.email,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		password: req.body.password,
		phoneNumber: req.body.phoneNumber
	});
	createSendToken(newUser, 201, res);
});

exports.login = catchAsync(async (req, res, next) => {
	const { email, password } = req.body;

	// 1) Check if email and password exist
	if (!email || !password) {
		return next(new AppError('Please provide email and password!', 400));
	}
	// 2) Check if user exists && password is correct
	const user = await User.scope('withPassword').findOne({ where: { email } });

	if (!user || !(user.validatePassword(password, user.password))) {
		return next(new AppError('Incorrect email or password', 401));
	}
	if (user.status === 'Disabled') {
		return next(new AppError('You have been banned', 403)); // 403 for forbidden
	}
	if (user.status === 'Deleted') {
		return next(new AppError('Your account has been deleted', 403)); // 403 for forbidden
	}
	// 3) If everything ok, send token to client
	createSendToken(user, 200, res);
});

exports.forgotPassword = catchAsync(async (req, res, next) => {
	// 1) Get user based on POSTed email
	const user = await User.findOne({ where: { email: req.body.email } });
	if (!user) {
		return next(new AppError('There is no user with email address.', 404));
	}
	if (user.status === 'Deleted') {
		return next(new AppError('This account has been deleted', 403)); // 403 for forbidden
	}
	if (user.status === 'Disabled') {
		return next(new AppError('This account has been disabled', 403)); // 403 for forbidden
	}
	// 2) Generate the random reset token
	const resetPasswordToken = ResetPasswordToken.build()
	resetPasswordToken.email = req.body.email
	const resetToken = resetPasswordToken.createPasswordResetToken();
	await resetPasswordToken.save();

	// 3) Send it to user's email

	const message = `Here is your OTP:\n${resetToken}\nIf you didn't forget your password, please ignore this email!`;

	try {
		await sendEmail({
			email: user.email,
			subject: 'Your password reset token (valid for 10 min)',
			message
		});

		res.status(200).json({
			status: 'success',
			message: 'Token sent to email!',
			resetToken
		});
	} catch (err) {
		await resetPasswordToken.destroy()
		console.log(err)
		return next(
			new AppError('There was an error sending the email. Try again later!'),
			500
		);
	}
});

exports.resetPassword = catchAsync(async (req, res, next) => {
	// 1) Get user based on the token
	const hashedToken = crypto
		.createHash('sha256')
		.update(req.params.token)
		.digest('hex');

	const resetPasswordToken = await ResetPasswordToken.findOne({
		where: {
			value: hashedToken,
			expired_at: { [Op.gt]: Date.now() }
		}
	});

	// 2) If token has not expired, and there is user, set the new password
	if (!resetPasswordToken) {
		return next(new AppError('Token is invalid or has expired', 400))
	}
	const user = await User.findOne({ where: { email: resetPasswordToken.email } })
	user.password = req.body.password
	await user.save()

	resetPasswordToken.status = true
	await resetPasswordToken.save()

	// 3) Update changedPasswordAt property for the user
	// 4) Log the user in, send JWT
	createSendToken(user, 200, res)
});

exports.protect = catchAsync(async (req, res, next) => {
	// 1) Getting token and check of it's there
	let token;
	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith('Bearer')
	) {
		token = req.headers.authorization.split(' ')[1];
	} else if (req.cookies.jwt) {
		token = req.cookies.jwt;
	}

	if (!token) {
		return next(
			new AppError('You are not logged in! Please log in to get access.', 401)
		);
	}

	// 2) Verification token
	const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

	// 3) Check if user still exists
	const currentUser = await User.findByPk(decoded.id);
	if (!currentUser) {
		return next(
			new AppError(
				'The user belonging to this token does no longer exist.',
				401
			)
		);
	}

	// 4) Check if user changed password after the token was issued
	// if (currentUser.changedPasswordAfter(decoded.iat)) {
	//   return next(
	//     new AppError('User recently changed password! Please log in again.', 401)
	//   );
	// }

	// GRANT ACCESS TO PROTECTED ROUTE
	req.user = currentUser;
	next();
});

exports.restrictTo = (...roles) => {
	return (req, res, next) => {
		if (!roles.includes(req.user.role)) {
			return next(
				new AppError('You do not have permission to perform this action', 403)
			);
		}

		next();
	};
};

exports.updatePassword = catchAsync(async (req, res, next) => {
	// 1) Get user from collection
	const user = await User.scope('withPassword').findByPk(req.user.id)
	// 2) Check password and passwordConfirm
	if (req.body.password !== req.body.passwordConfirm) {
		return next(new AppError('Passwords are not the same!', 400))
	}
	// 3) Check if POSTed current password is correct
	if (!(await user.validatePassword(req.body.passwordCurrent, user.password))) {
		return next(new AppError('Your current password is wrong.', 401))
	}

	// 4) If so, update password
	user.password = req.body.password
	await user.save()
	// User.findByIdAndUpdate will NOT work as intended!

	// 5) Log user in, send JWT
	createSendToken(user, 200, res)
});
exports.resetDefaultPassword = catchAsync(async (req, res, next) => {
	const user = await User.findByPk(req.params.id)
	user.password = '123456789'
	await user.save()
	res.status(200).json({
		status: 'success',
		data: {
			data: user
		}
	})
})
exports.logout = (req, res) => {
	res.cookie('jwt', 'loggedout', {
		expires: new Date(Date.now() + 5 * 1000),
		httpOnly: true
	});
	res.status(200).json({ status: 'success' });
};