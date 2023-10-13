const express = require("express");
const postController = require("../controllers/postController");
const authController = require("../controllers/authController");
// const uploadImgMiddleware = require('../middlewares/upload.middleware')
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images'); // Define the path where uploaded files will be stored.
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });
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
    upload.single('mainImage'),
    (req, res, next) => {
      req.body.mainImage = req.file.filename
      next()
    },
    // upload.single('mainImage'),
    // (req, res, next) => {
    //   console.log(req.body.mainImage)
    //   req.body.mainImage = req.body.mainImage.name
    //   next()
    // },
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
