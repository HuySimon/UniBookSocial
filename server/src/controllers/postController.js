const factory = require("./handlerFactory");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

const db = require("../models");
const { post } = require("../routes/postRoutes");
const Post = db.Post;
const User = db.User

exports.setUserPost = (req, res, next) => {
	req.body.userPost = req.user.id;
	next();
};

exports.isUserBelongToPost = catchAsync(async (req, res, next) => {
	const post = await Post.findByPk(req.params.id);
	if (req.body.status) {
		return next(
			new AppError("This route do not use for update post's status!", 403)
		);
	}
	if (post.userPost !== req.user.id)
		return next(new AppError("You are not the poster!", 403));
	next();
});

exports.updateStatus = catchAsync(async (req, res, next) => {
	const post = await Post.findByPk(req.params.id);
	if (req.body.status == "Confirm") {
		req.body = { status: "Confirm", userConfirm: req.user.id };
		if (post.userPost === req.user.id)
			return next(new AppError("You can't confirm your post!", 403));
	} else if (req.body.status === "Unconfirm") {
		req.body = { status: "Unconfirm", userConfirm: null };
		if (post.userPost !== req.user.id && post.userConfirm !== req.user.id) {
			return next(new AppError("You are not belong to this post!", 403));
		}
	}
	next();
});

exports.isNotDeliveryPost = catchAsync(async (req, res, next) => {
	const post = await Post.findByPk(req.params.id);
	if (post.userPost !== req.user.id && req.user.role != 3)
		return next(
			new AppError("You do not have permission to delete this post!", 403)
		);
	if (post.status === "Delivery" || post.status === "Confirm") {
		return next(new AppError("You can not delete this post!", 403));
	}
	next();
});

const postOptions = { include: 'userPostData' }
exports.createPost = factory.createOne(Post);
exports.getAllPosts = factory.getAll(Post);
exports.updatePost = factory.updateOne(Post);
const optionGetPost = { include: [User, 'userPostData'] }
exports.getPost = factory.getOne(Post, postOptions);
exports.deletePost = factory.deleteOne(Post);
