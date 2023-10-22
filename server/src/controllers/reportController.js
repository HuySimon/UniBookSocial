const AppError = require('../utils/appError')
const catchAsync = require('../utils/catchAsync')
const factory = require('./handlerFactory')

const db = require('../models');
const Report = db.Report

exports.setUserReport = (req, res, next) => {
  req.body.user = req.user.id
  next();
}

exports.createReport = factory.createOne(Report)