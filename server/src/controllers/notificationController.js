const factory = require("./handlerFactory");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

const db = require("../models");
const Notification = db.Notification;
const Post = db.Post;

exports.createNotification = (typeNoti) =>
  catchAsync(async (req, res, next) => {
    await Notification.create({
      typeNoti,
      isSeen: false,
      post: req.params.id,
      userSend: req.user.id,
      userReceive: req.body.userReceive,
    });
    next();
  });
exports.createNotificationHasContent = (typeNoti) =>
  catchAsync(async (req, res, next) => {
    await Notification.create({
      typeNoti,
      isSeen: false,
      post: req.params.id,
      content: req.body.content,
      userSend: req.user.id,
      userReceive: req.body.userReceive,
    });
    next();
  });
exports.getAllNotifications = factory.getAll(Notification);
exports.updateNotification = factory.updateOne(Notification);
