const express = require("express");
const postController = require("../controllers/postController");
const authController = require("../controllers/authController");

const router = express.Router();

router.patch(
  "/:id/updateStatus",
  authController.protect,
  authController.restrictTo(1),
  postController.updateStatus,
  postController.updatePost
);

router
  .route("/")
  .get(postController.getAllPosts)
  .post(
    authController.protect,
    authController.restrictTo(1),
    postController.setUserPost,
    postController.createPost
  );

router
  .route("/:id")
  .get(postController.getPost)
  .patch(
    authController.protect,
    authController.restrictTo(1),
    postController.isUserBelongToPost,
    postController.updatePost
  )
  .delete(
    authController.protect,
    authController.restrictTo(1),
    postController.isNotDeliveryPost,
    postController.deletePost
  );

module.exports = router;
