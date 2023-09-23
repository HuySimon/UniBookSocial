const db = require('../models');
const user = require('../models/user');
const User = db.User
exports.getAll = async (req, res) => {
  try {
    const users = await User.findAll({
      include: 'contacts'
    });
    res.status(200).json({
      status: "success",
      result: users.length,
      data: users
    })
  } catch (error) {
    res.status(400).json({
      status: "error",
      error
    })
  }
}

exports.create = async (req, res) => {
  try {
    const newUser = await User.create(req.body)
    res.status(201).json({
      status: "success",
      data: newUser
    })
  } catch (error) {
    res.status(400).json({
      status: "error",
      error
    })
  }
}