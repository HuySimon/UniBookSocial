const factory = require('./handlerFactory');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const db = require('../models');
const { Op, fn, col } = require('sequelize');
const { post } = require('../routes/postRoutes');
const notificationController = require('../controllers/notificationController');
const Post = db.Post;
const User = db.User;
const Notification = db.Notification;

exports.statistics = catchAsync(async (req, res, next) => {
	const posts = await Post.findAll({
		attributes: [
			[fn('date_format', col('updatedAt'), '%Y-%m-%d'), 'date_col_formed'],
			[fn('COUNT', col('id')), 'count'],
		],
		where: {
			status: req.params.status,
			updatedAt: {
				[Op.between]: [new Date(req.params.dayStart), new Date(new Date(req.params.dayEnd).getTime() + 24 * 60 * 60 * 1000)]
			}
		},
		group: [fn('date_format', col('updatedAt'), '%Y-%m-%d'), 'date_col_formed'],
	})
	const users = await Post.findAll({
		attributes: [
			[fn('date_format', col('updatedAt'), '%Y-%m-%d'), 'date_col_formed'],
			[fn('COUNT', col('id')), 'count'],
		],
		where: {
			status: req.params.status,
			updatedAt: {
				[Op.between]: [new Date(req.params.dayStart), new Date(new Date(req.params.dayEnd).getTime() + 24 * 60 * 60 * 1000)]
			}
		},
		group: [fn('date_format', col('updatedAt'), '%Y-%m-%d'), 'date_col_formed'],
	})
	res.status(200).json({
		status: 'success',
		posts,
		users
	})
})

exports.setUserPost = (req, res, next) => {
	req.body.userPost = req.user.id;
	next();
};

exports.isUserBelongToPost = catchAsync(async (req, res, next) => {
	const post = await Post.findByPk(req.params.id);
	if (req.body.status) {
		return next(
			new AppError('This route do not use for update post\'s status!', 403)
		);
	}
	if (post.userPost !== req.user.id)
		return next(new AppError('You are not the poster!', 403));
	next();
});

exports.updateStatus = catchAsync(async (req, res, next) => {
	const post = await Post.findByPk(req.params.id);
	if (!post) return next(new AppError('No post found with that Id', 400));
	switch (req.body.status) {
		case 'Confirm':
			if (post.userPost === req.user.id)
				return next(new AppError('You can\'t confirm your post!', 403));
			if (post.status !== 'Unconfirmed')
				return next(new AppError('You can only confirm when the post is unconfirmed', 400));
			req.body.userReceive = post.userPost
			notificationController.createNotification('Confirm', req);
			req.body.userConfirm = req.user.id;
			break;
		case 'Unconfirmed':
			if (post.status !== 'Confirm' && post.status !== 'CheckPost')
				return next(new AppError('You can only unconfirmed when the post is confirm or checkPost', 400));
			if (post.userPost !== req.user.id && post.userConfirm !== req.user.id && req.user.role != 3) {
				return next(new AppError('You are not belong to this post!', 403));
			}
			if (post.status === 'Confirm') {
				if (req.user.id === post.userConfirm)
					req.body.userReceive = post.userPost
				else
					req.body.userReceive = post.userConfirm
				notificationController.createNotification('Unconfirmed', req);
				req.body.userConfirm = null;
			}
			break;
		case 'Delivered':
			if (post.userConfirm !== req.user.id)
				return next(new AppError('You are\'t user Confirm!', 403));
			if (post.status !== 'Confirm')
				return next(new AppError('You can only delivery when the post is confirm', 400));
			break;
		case 'CheckPost':
			if (post.status !== 'Unconfirmed')
				return next(new AppError('You can only checkPost when the post is unconfirmed', 400));
			req.body.userReceive = post.userPost
			notificationController.createNotificationHasContent('CheckPost', req);
			break;
		case 'Violation':
			if (post.status !== 'CheckPost')
				return next(new AppError('You can only violation when the post is checkPost', 400));
			req.body.userReceive = post.userPost
			notificationController.createNotificationHasContent('Violation', req);
			break;
	}
	next();
});

exports.isNotDeliveryPost = catchAsync(async (req, res, next) => {
	const post = await Post.findByPk(req.params.id);
	if (post.userPost !== req.user.id && req.user.role != 3)
		return next(
			new AppError('You do not have permission to delete this post!', 403)
		);
	if (post.status === 'Delivery' || post.status === 'Confirm') {
		return next(new AppError('You can not delete this post!', 403));
	}
	next();
});

const postOptions = { include: 'userPostData' };
exports.createPost = catchAsync(async (req, res, next) => {
	//create new id
	const currentDate =
		new Date().getDate().toString().padStart(2, '0')
		+ (new Date().getMonth() + 1).toString().padStart(2, '0')
		+ new Date().getFullYear().toString().slice(-2)
	const numPost = (await Post.findAll({ where: { id: { [Op.like]: `${currentDate}%` } } })).length
	req.body.id = currentDate + (numPost + 1).toString().padStart(4, '0');
	//create post
	let data = await Post.create(req.body);
	data = await Post.findByPk(data.id, { include: 'userPostData' })
	res.status(201).json({
		status: "success",
		data: {
			data,
		},
	});
})
exports.getAllPosts = factory.getAll(Post);
exports.updatePost = factory.updateOne(Post);
const optionGetPost = { include: [User, 'userPostData'] };
exports.getPost = factory.getOne(Post, postOptions);
exports.deletePost = factory.deleteOne(Post);
