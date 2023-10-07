const AppError = require('../utils/appError')
const catchAsync = require('../utils/catchAsync')
const db = require('../models');
// const user = require('../models/user');
const User = db.User

exports.getAll = catchAsync(async (req, res, next) => {
  const users = await User.findAll();
  res.status(200).json({
    status: "success",
    data: users
  })
})


exports.create = catchAsync(async (req, res) => {
  const newUser = await User.create(req.body)

  res.status(201).json({
    status: "success",
    data: newUser
  })
})

