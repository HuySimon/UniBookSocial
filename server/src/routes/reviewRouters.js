const express = require("express");
const reviewController = require("../controllers/reviewController");
const authController = require("../controllers/authController");
const { RoleEnum } = require('../enums/role.enum')
const router = express.Router();


router
  .patch(
    '/:id/show',
    authController.protect,
    authController.restrictTo(RoleEnum.USER),
    reviewController.isUserPost,
    reviewController.updateReview
  )

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
