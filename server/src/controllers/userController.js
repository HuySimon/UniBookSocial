const AppError = require('../utils/appError')
const catchAsync = require('../utils/catchAsync')
const factory = require('./handlerFactory')

const db = require('../models');
const User = db.User

exports.getAll = factory.getAll(User)


exports.create = catchAsync(async (req, res) => {
  const newUser = await User.create(req.body)

  res.status(201).json({
    status: "success",
    data: newUser
  })
})

