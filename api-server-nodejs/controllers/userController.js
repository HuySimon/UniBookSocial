// Create and Save a new Tutorial
const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;

exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        user: newUser
      }
    });
  } catch (err) {
    console.log(err)
  }
};