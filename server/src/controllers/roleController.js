const AppError = require('../utils/appError')
const catchAsync = require('../utils/catchAsync')
const factory = require('./handlerFactory')

const db = require('../models');
const Role = db.Role

exports.getAllRoles = factory.getAll(Role)