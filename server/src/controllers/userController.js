const AppError = require('../utils/appError')
const catchAsync = require('../utils/catchAsync')
const factory = require('./handlerFactory')

const db = require('../models');
const User = db.User

exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not defined! Please use /signup instead'
  });
};
exports.getAllUsers = factory.getAll(User)
exports.getUser = factory.getOne(User)
//Do not update password with this!
exports.updateUser = factory.updateOne(User)
exports.deleteUser = factory.deleteOne(User)

