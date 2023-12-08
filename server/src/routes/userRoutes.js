const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const uploadImgMiddleware = require('../middlewares/uploadImg.middleware');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/logout', authController.logout);

router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);

router.use(authController.protect)

router.patch('/updateMyPassword', authController.updatePassword);
router.get('/me', userController.getMe, userController.getUser);
router.patch('/updateMe', userController.updateMe);
router.patch(
  '/avatar',
  uploadImgMiddleware.uploadSingleImg('avatar', 'public/images/users/avatar'),
  userController.updateMe);
router.patch(
  '/coverImage',
  uploadImgMiddleware.uploadSingleImg('coverImage', 'public/images/users/cover'),
  userController.updateMe);
router.delete('/deleteMe', userController.deleteMe);

router
  .patch('/:id/resetDefaultPassword', authController.restrictTo(2), authController.resetDefaultPassword)
router
  .route('/')
  .get(authController.restrictTo(2), userController.getAllUsers)
  .post(authController.restrictTo(2), userController.createUser);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(authController.restrictTo(2), userController.checkDisabledUser, userController.updateUser)
  .delete(authController.restrictTo(2), userController.deleteUser);

module.exports = router;
