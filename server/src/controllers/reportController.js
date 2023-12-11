const AppError = require('../utils/appError')
const catchAsync = require('../utils/catchAsync')
const factory = require('./handlerFactory')

const db = require('../models');
const Report = db.Report
const Post = db.Post
const Notification = db.Notification

exports.createReport = catchAsync(async (req, res, next) => {
  //update status post
  const post = await Post.findByPk(req.body.post);

  if (!post) return next(new AppError('No post found with that ID', 400))

  if (post.status != 'Unconfirmed') {
    return next(new AppError('Unconfirmed posts can only be reported', 400))
  }
  post.status = 'Checking'
  await post.save();
  
  //create report notification
  await Notification.create({
    isSeen: false,
    userSend: req.user.id,
    userReceive: post.userPost,
    typeNoti: 'Checking',
    post: req.body.post
  })

  //set user report
  req.body.user = req.user.id

  //create report
  const report = await Report.create(req.body);


  res.status(201).json({
    status: "success",
    data: {
      data: report,
    },
  });
})