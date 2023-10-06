const querystringParser = require('@bitovi/sequelize-querystring-parser');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.getAll = Model => catchAsync(async (req, res, next) => {
  const queryObj = querystringParser.parse(req.url.split('?')[1]);
  if (queryObj.errors.length) return next(new AppError('Invalid parameter!', 400))
  const data = await Model.findAll(queryObj.data)
  res.status(200).json({
    status: 'success',
    results: data.length,
    data: {
      data
    }
  });
})

exports.createOne = Model => catchAsync(async (req, res, next) => {
  const data = await Model.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      data
    }
  });
})

exports.getOne = Model => catchAsync(async (req, res, next) => {
  const data = await Model.create(req.body);
  if (!data) {
    return next(new AppError('No document found with that ID', 404));
  }
  res.status(200).json({
    status: 'success',
    data: {
      data
    }
  });
})