const querystringParser = require('@bitovi/sequelize-querystring-parser');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.getAll = Model => catchAsync(async (req, res, next) => {
  const queryObj = querystringParser.parse(req.url.split('?')[1]);
  console.log(queryObj)
  const data = await Model.findAll(queryObj.data)
  res.status(200).json({
    status: 'success',
    results: data.length,
    data: {
      data
    }
  });
})