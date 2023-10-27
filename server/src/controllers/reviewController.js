const factory = require("./handlerFactory");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

const db = require("../models");
const Review = db.Review;
const Post = db.Post;

exports.setUserReview = (req, res, next) => {
  req.body.user = req.user.id;
  next();
};
exports.isDelivery = async (req, res, next) => {
  const post = await Post.findByPk(req.body.post);
  if (post.status !== "Delivery")
    return next(new AppError("This post has not been delivered!", 403));
  next();
};
exports.isUserPost = async (req, res, next) => {
  const post = await Post.findByPk(req.body.post);
  if (post.userPost == req.user.id)
    return next(new AppError("You can not review this post!", 403));
  next();
};
exports.isUserReview = async (req, res, next) => {
  const review = await Review.findByPk(req.params.id);
  if (review.user !== req.user.id)
    return next(new AppError("You are not the author of this post!", 403));
  next();
};
exports.getAllReviews = factory.getAll(Review);
exports.createReview = factory.createOne(Review);
exports.deleteReview = factory.deleteOne(Review);
exports.updateReview = factory.updateOne(Review);
