const factory = require("./handlerFactory");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

const db = require("../models");
const { post } = require("../routes/postRoutes");
const notificationController = require("../controllers/notificationController");
const Post = db.Post;
const User = db.User;
const Notification = db.Notification;

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
  switch (req.body.status) {
    case "Confirm":
      if (post.userPost === req.user.id)
        return next(new AppError("You can't confirm your post!", 403));
      req.body = { status: "Confirm", userConfirm: req.user.id };
      //   await Notification.create({
      //     isSeen: false,
      //     userSend: req.user.id,
      //     userReceive: post.userPost,
      //     typeNoti: "Confirm",
      //     post: req.params.id,
      //   });
      notificationController.createNotification("Confirm");
      break;
    case "Unconfirm":
      if (post.status === "Confirm") {
        if (post.userPost !== req.user.id && post.userConfirm !== req.user.id) {
          return next(new AppError("You are not belong to this post!", 403));
        }
        req.body = { status: "Unconfirm", userConfirm: null };
        // await Notification.create({
        //   isSeen: false,
        //   userSend: req.user.id,
        //   userReceive: post.userPost,
        //   typeNoti: "Unconfirm",
        //   post: req.params.id,
        // });
        notificationController.createNotification("Unconfirm");
      } else
        return next(new AppError("This post has not been confirmed!", 403));
      break;
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

const postOptions = { include: "userPostData" };
exports.createPost = factory.createOne(Post);
exports.getAllPosts = factory.getAll(Post);
exports.updatePost = factory.updateOne(Post);
const optionGetPost = { include: [User, "userPostData"] };
exports.getPost = factory.getOne(Post, postOptions);
exports.deletePost = factory.deleteOne(Post);
