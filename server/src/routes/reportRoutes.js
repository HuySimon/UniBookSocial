const express = require("express");
const authController = require("../controllers/authController");
const reportController = require("../controllers/reportController");
const { RoleEnum } = require('../enums/role.enum')
const router = express.Router();


router.route('/')
  .post(authController.protect,
    authController.restrictTo(RoleEnum.USER),
    reportController.setUserReport,
    (req, res, next) => {
      console.log(req.user)
      next()
    },
    reportController.createReport)

module.exports = router