const express = require("express");
const postController = require("../controllers/postController");
const authController = require("../controllers/authController");
const uploadImgMiddleware = require("../middlewares/uploadImg.middleware");
const router = express.Router();

router.get(
  '/statistics/:status/dayStart/:dayStart/dayEnd/:dayEnd',
  postController.statistics)

router.patch(
  "/:id/status",
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
    uploadImgMiddleware.uploadSingleImg("mainImage", "public/images/posts"),
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
    postController.isNotDeliveryPost,
    postController.deletePost
  );

module.exports = router;
