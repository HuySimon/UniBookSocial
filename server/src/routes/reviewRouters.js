const express = require("express");
const reviewController = require("../controllers/reviewController");
const authController = require("../controllers/authController");
const router = express.Router();

router
  .route("/")
  .get(reviewController.getAllReviews)
  .post(
    authController.protect,
    authController.restrictTo(1),
    reviewController.setUserReview,
    reviewController.isDelivery,
    reviewController.isUserPost,
    reviewController.createReview
  );
router
  .route("/:id")
  .patch(
    authController.protect,
    authController.restrictTo(1),
    reviewController.isUserReview,
    reviewController.updateReview
  )
  .delete(
    authController.protect,
    authController.restrictTo(1),
    reviewController.isUserReview,
    reviewController.deleteReview
  );

module.exports = router;
