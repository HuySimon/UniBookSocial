const express = require('express')
const roleController = require('../controllers/roleController')
const authController = require('../controllers/authController')

const router = express.Router()

router.route('/')
  .get(roleController.getAllRoles)

module.exports = router