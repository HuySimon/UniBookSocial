const querystringParser = require("@bitovi/sequelize-querystring-parser");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");
const { Op } = require('sequelize')

exports.getAll = (Model, filterObj) =>
	catchAsync(async (req, res, next) => {
		let queryObj = querystringParser.parse(req.url.split("?")[1]);
		if (queryObj.errors.length)
			return next(new AppError("Invalid parameter!", 400));
		if (filterObj) {
			queryObj = filterObj(queryObj)
		}
		let data = await Model.findAndCountAll(queryObj.data);

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
		let queryObj = querystringParser.parse(req.url.split("?")[1]);
		if (queryObj.errors.length)
			return next(new AppError("Invalid parameter!", 400));
		const data = await Model.findByPk(req.params.id, queryObj.data);
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

exports.createOne = (Model, options) =>
	catchAsync(async (req, res, next) => {
		let data = await Model.create(req.body, options);
		if (options) {
			data = await Model.findByPk(data.id, options)
		}
		res.status(201).json({
			status: "success",
			data: {
				data,
			},
		});
	});

exports.updateOne = (Model, optionsHooks) =>
	catchAsync(async (req, res, next) => {
		const data = await Model.update(req.body, {
			where: { id: req.params.id },
			...optionsHooks
		});
		console.log(data, req.body, req.params.id);
		if (!data[0]) {
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
