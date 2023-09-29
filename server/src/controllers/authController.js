const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');


const db = require('../models');
const User = db.User
const Account = db.Account

const signToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
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
  });
  const newAccount = await Account.create({
    email: req.body.email,
    password: req.body.password,
  });
  const token = signToken(newUser.email);
  // createSendToken({ newUser, newAccount }, 201, res);
  res.status(201).json({
    status: 'success',
    token,
    data: {
      newUser,
      newAccount
    }
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // 1) Check if email and password exist
  if (!email || !password) {
    return next(new AppError('Please provide email and password!', 400));
  }
  // 2) Check if user exists && password is correct
  const account = await Account.findOne({ where: { email } });

  if (!account || !(await account.validatePassword(password, account.password))) {
    return next(new AppError('Incorrect email or password', 401));
  }
  const user = await User.findOne({ where: { email } });
  // 3) If everything ok, send token to client
  // createSendToken(user, 200, res);
  const token = signToken(user.email);
  // createSendToken({ newUser, newAccount }, 201, res);
  res.status(201).json({
    status: 'success',
    token,
    data: {
      user,
      account
    }
  });
});
