const factory = require("./handlerFactory");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

const db = require("../models");
const Notification = db.Notification;
const Post = db.Post;

exports.createNotification = (typeNoti) =>
  catchAsync(async (req, res, next) => {
    const post = await Post.findByPk(req.body.post);
    if (!post) return next(new AppError("No post found with that Id", 400));
    const notificationData = {
      typeNoti,
      isSeen: false,
      post: req.body.post,
      userSend: req.user.id,
      userReceive: post.userPost,
    };
    await Notification.create(notificationData);
    next();
  });
exports.createNotificationHasContent = (typeNoti) =>
  catchAsync(async (req, res, next) => {
    const post = await Post.findByPk(req.body.post);
    if (!post) return next(new AppError("No post found with that Id", 400));
    const notificationData = {
      typeNoti,
      isSeen: false,
      post: req.body.post,
      content: req.body.content,
      userSend: req.user.id,
      userReceive: post.userPost,
    };
    await Notification.create(notificationData);
    next();
  });
exports.getAllNotifications = factory.getAll(Notification);
exports.updateNotification = factory.updateOne(Notification);
