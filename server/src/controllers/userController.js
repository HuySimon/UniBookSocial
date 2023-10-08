const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const factory = require("./handlerFactory");

const db = require("../models");
const User = db.User;

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach(el => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

exports.updateMe = catchAsync(async (req, res, next) => {
  // 1) Create error if user POSTs password data
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError(
        'This route is not for password updates. Please use /updateMyPassword.',
        400
      )
    );
  }

  // 2) Filtered out unwanted fields names that are not allowed to be updated
  const allowedFields = [
    'lastName', 'firstName', 'username',
    'phoneNumber', 'avatar', 'coverImage',
    'linkFacebook', 'linkZalo', 'linkInstagram'
  ]
  const filteredBody = filterObj(req.body, ...allowedFields);
  console.log(filteredBody)
  // 3) Update user data
  const user = await User.update(filteredBody, {
    where: { id: req.user.id },
  });
  if (!user) {
    return next(new AppError('No user found with that ID', 404));
  }
  const userUpdate = await User.findByPk(req.user.id)

  res.status(200).json({
    status: 'success',
    data: {
      user: userUpdate
    }
  });
});

exports.deleteMe = catchAsync(async (req, res, next) => {
  const user = await User.update({ status: 'Disabled' }, {
    where: { id: req.user.id },
  });
  if (!user) {
    return next(new AppError('No user found with that ID', 404));
  }

  res.status(204).json({
    status: 'success',
    data: null
  });
});

exports.createUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not defined! Please use /signup instead",
  });
};
exports.getAllUsers = factory.getAll(User);
exports.getUser = factory.getOne(User);
//Do not update password with this!
exports.updateUser = factory.updateOne(User);
exports.deleteUser = factory.deleteOne(User);
