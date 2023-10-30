const querystringParser = require("@bitovi/sequelize-querystring-parser");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");

exports.getAll = (Model) =>
  catchAsync(async (req, res, next) => {
    const queryObj = querystringParser.parse(req.url.split("?")[1]);
    if (queryObj.errors.length)
      return next(new AppError("Invalid parameter!", 400));
    const data = await Model.findAndCountAll(queryObj.data);
    res.status(200).json({
      status: "success",
      totalItem: data.count,
      data: {
        data: data.rows,
      },
    });
  });
exports.getOne = (Model, options) =>
  catchAsync(async (req, res, next) => {
    const data = await Model.findByPk(req.params.id, options);
    if (!data) {
      return next(new AppError("No data found with that ID", 404));
    }
    res.status(200).json({
      status: "success",
      data: {
        data,
      },
    });
  });

exports.createOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const data = await Model.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        data,
      },
    });
  });

exports.updateOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const data = await Model.update(req.body, {
      where: { id: req.params.id },
    });
    if (!data) {
      return next(new AppError("No data found with that ID", 404));
    }
    const updateData = await Model.findByPk(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        data: updateData,
      },
    });
  });

exports.deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const data = await Model.destroy({
      where: { id: req.params.id },
    });

    if (!data) {
      return next(new AppError("No data found with that ID", 404));
    }

    res.status(204).json({
      status: "success",
      data: null,
    });
  });
