const express = require("express");
const notificationController = require("../controllers/notificationController");
const authController = require("../controllers/authController");
const router = express.Router();

router.route("/").get(notificationController.getAllNotifications);
router
  .route("/:id")
  .patch(
    authController.protect,
    authController.restrictTo(1),
    notificationController.updateNotification
  );

module.exports = router;
