-- Active: 1680850809935@@127.0.0.1@3306@unibooksocial
-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 03, 2023 at 07:58 AM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `unibooksocial`
--

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE `notifications` (
  `id` int NOT NULL,
  `isSeen` tinyint(1) NOT NULL,
  `typeNoti` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `userSend` int NOT NULL,
  `userReceive` int NOT NULL,
  `post` varchar(10) COLLATE utf8mb4_general_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `notifications`
--

INSERT INTO `notifications` (`id`, `isSeen`, `typeNoti`, `content`, `userSend`, `userReceive`, `post`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'Confirm', NULL, 2, 5, '1', '2023-10-06 07:57:50', '2023-10-06 07:57:50'),
(2, 0, 'Confirm', NULL, 17, 6, '3', '2023-10-06 08:02:50', '2023-10-06 08:02:50'),
(3, 0, 'Violation', 'Bài đăng không phù hợp', 10, 20, '2', '2023-10-06 08:13:11', '2023-10-06 08:13:11'),
(4, 0, 'Unconfirm', NULL, 4, 19, '9', '2023-10-06 08:44:44', '2023-10-06 08:44:44'),
(5, 1, 'Confirm', NULL, 12, 3, '6', '2023-10-06 08:49:24', '2023-10-06 08:49:24'),
(6, 0, 'Unconfirm', NULL, 17, 6, '3', '2023-10-06 08:50:31', '2023-10-06 08:50:31'),
(7, 0, 'CheckPost', NULL, 16, 20, '2', '2023-10-22 21:04:12', '2023-10-22 21:04:12'),
(8, 0, 'Confirm', NULL, 42, 15, '5', '2023-11-09 21:15:23', '2023-11-09 21:15:23'),
(9, 0, 'Unconfirmed', NULL, 42, 15, '5', '2023-11-09 21:17:11', '2023-11-09 21:17:11'),
(10, 0, 'Confirm', NULL, 42, 15, '5', '2023-11-09 21:18:02', '2023-11-09 21:18:02'),
(11, 0, 'Unconfirmed', NULL, 15, 42, '5', '2023-11-09 21:18:59', '2023-11-09 21:18:59'),
(12, 0, 'CheckPost', 'Nội dung không phù hợphợp', 16, 15, '5', '2023-11-09 21:21:00', '2023-11-09 21:21:00'),
(13, 0, 'Violation', 'Nội dung không phù hợp', 3, 15, '5', '2023-11-09 21:25:14', '2023-11-09 21:25:14'),
(14, 0, 'Confirm', NULL, 3, 9, '8', '2023-11-10 18:55:59', '2023-11-10 18:55:59'),
(15, 0, 'Unconfirmed', NULL, 3, 9, '8', '2023-11-10 18:56:00', '2023-11-10 18:56:00'),
(16, 0, 'Confirm', NULL, 3, 9, '8', '2023-11-10 18:56:01', '2023-11-10 18:56:01'),
(17, 0, 'Confirm', NULL, 3, 16, '21', '2023-11-10 18:56:29', '2023-11-10 18:56:29'),
(18, 0, 'Unconfirmed', NULL, 3, 16, '21', '2023-11-10 18:56:32', '2023-11-10 18:56:32'),
(19, 0, 'Confirm', NULL, 3, 16, '21', '2023-11-10 18:57:01', '2023-11-10 18:57:01'),
(20, 0, 'Confirm', NULL, 16, 11, '10', '2023-11-10 19:33:24', '2023-11-10 19:33:24'),
(21, 0, 'Unconfirmed', NULL, 16, 11, '10', '2023-11-10 19:33:44', '2023-11-10 19:33:44'),
(22, 0, 'Confirm', NULL, 16, 11, '10', '2023-11-10 19:33:58', '2023-11-10 19:33:58'),
(23, 0, 'Confirm', NULL, 41, 16, '23', '2023-11-17 19:59:35', '2023-11-17 19:59:35'),
(24, 0, 'Unconfirmed', NULL, 41, 16, '23', '2023-11-17 20:00:17', '2023-11-17 20:00:17'),
(25, 0, 'Confirm', NULL, 41, 16, '23', '2023-11-17 20:00:18', '2023-11-17 20:00:18'),
(26, 0, 'Unconfirmed', NULL, 41, 16, '23', '2023-11-17 20:00:22', '2023-11-17 20:00:22'),
(27, 0, 'Confirm', NULL, 41, 16, '23', '2023-11-17 20:00:22', '2023-11-17 20:00:22'),
(28, 1, 'Confirm', NULL, 6, 16, '22', '2023-11-29 21:23:43', '2023-12-02 19:47:49'),
(29, 1, 'Unconfirmed', NULL, 6, 16, '22', '2023-11-29 21:23:51', '2023-12-02 19:47:19'),
(30, 1, 'Confirm', NULL, 6, 16, '22', '2023-11-29 21:23:53', '2023-12-02 19:47:14'),
(31, 0, 'Confirm', NULL, 16, 6, '24', '2023-11-29 21:25:03', '2023-11-29 21:25:03'),
(32, 0, 'Unconfirmed', NULL, 16, 6, '24', '2023-11-29 21:26:52', '2023-11-29 21:26:52');

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` int NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `permissions`
--

INSERT INTO `permissions` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Account.Access', '2023-09-26 22:20:25', '2023-09-26 22:20:25'),
(2, 'Account.Add', '2023-09-26 22:21:19', '2023-09-26 22:21:19'),
(3, 'Account.Update', '2023-09-26 22:21:31', '2023-09-26 22:21:31'),
(4, 'Account.Delete', '2023-09-26 22:21:42', '2023-09-26 22:21:42'),
(5, 'Violation.Access', '2023-09-26 22:21:56', '2023-09-26 22:21:56'),
(6, 'Violation.Update', '2023-09-26 22:23:41', '2023-09-26 22:23:41'),
(7, 'Violation.Delete', '2023-09-26 22:23:54', '2023-09-26 22:23:54');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` varchar(10) COLLATE utf8mb4_general_ci NOT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `price` float NOT NULL,
  `mainImage` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `status` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `isNew` tinyint(1) NOT NULL,
  `isGeneralSubject` tinyint(1) NOT NULL,
  `userConfirm` int DEFAULT NULL,
  `userPost` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `title`, `price`, `mainImage`, `description`, `status`, `isNew`, `isGeneralSubject`, `userConfirm`, `userPost`, `createdAt`, `updatedAt`) VALUES
('0312230001', 'ad', 3, '1701588665043-715470976.png', 'aef', 'Unconfirmed', 1, 0, NULL, 16, '2023-12-03 14:31:05', '2023-12-03 14:31:05'),
('0312230002', 'aef', 4, '1701588924771-855617018.jpg', 'afe', 'Unconfirmed', 1, 0, NULL, 16, '2023-12-03 14:35:24', '2023-12-03 14:35:24'),
('0312230003', 'asef', 45, '1701588954321-110700971.png', 'aef', 'Unconfirmed', 1, 0, NULL, 16, '2023-12-03 14:35:54', '2023-12-03 14:35:54'),
('0312230004', 'asfe', 15000, '1701589067161-712249949.jfif', 'awfe', 'Unconfirmed', 0, 0, NULL, 16, '2023-12-03 14:37:47', '2023-12-03 14:41:59'),
('1', 'Kinh tế chính trị', 15000, 'mainImage.png', 'Tài liệu tham khảo', 'Confirm', 1, 0, 2, 5, '2023-09-25 02:02:24', '2023-09-25 02:02:24'),
('10', 'Lịch sử Đảng cộng sản Việt Nam', 35000, 'mainImage.png', 'Tài liệu tham khảo', 'Delivered', 1, 0, 16, 11, '2023-09-25 02:02:24', '2023-11-10 19:34:02'),
('2', 'Chủ nghĩa xã hội khoa học', 30000, 'mainImage.png', 'Tài liệu tham khảo', 'Violation', 1, 0, NULL, 20, '2023-09-25 02:02:24', '2023-10-22 20:13:52'),
('21', 'Test2', 150000, '1697789874796-804553370.png', 'oke', 'Delivered', 1, 0, 3, 16, '2023-10-20 15:17:54', '2023-11-10 18:57:02'),
('22', 'Hóa 2', 8, '1699620174133-489063823.jfif', 'oke', 'Delivered', 0, 0, 6, 16, '2023-11-10 19:42:54', '2023-11-29 21:23:58'),
('23', 'abc', 12, '1699620421278-845035065.jpg', 'dd', 'Delivered', 1, 1, 41, 16, '2023-11-10 19:47:01', '2023-11-17 20:00:24'),
('24', 'áef', 34, '1701267882560-140506328.jpg', 'ádfe', 'Unconfirmed', 1, 0, NULL, 6, '2023-11-29 21:24:42', '2023-11-29 21:26:52'),
('25', 'aefa', 555, '1701268281247-5068557.jfif', 'áef', 'Unconfirmed', 1, 0, NULL, 16, '2023-11-29 21:31:21', '2023-11-29 21:31:21'),
('3', 'Kỹ thuật lập trình', 20000, 'mainImage.png', 'Tài liệu tham khảo', 'Delivery', 1, 1, 17, 6, '2023-09-25 02:02:24', '2023-09-25 02:02:24'),
('4', 'GDQP và AN I', 10000, 'mainImage.png', 'Tài liệu học tập', 'Confirm', 1, 0, 10, 7, '2023-09-25 02:02:24', '2023-09-25 02:02:24'),
('5', 'Triết học Mac-Lenin', 25000, 'mainImage.png', 'Tài liệu tham khảo', 'Violation', 0, 0, NULL, 15, '2023-09-25 02:02:24', '2023-11-09 21:25:14'),
('6', 'Kinh tế vĩ mô', 20000, 'mainImage.png', 'Tài liệu tham khảo', 'Delivery', 1, 1, 12, 3, '2023-09-25 02:02:24', '2023-09-25 02:02:23'),
('8', 'Tư tưởng Hồ Chí Minh', 15000, 'mainImage.png', 'Tài liệu tham khảo', 'Delivered', 0, 0, 3, 9, '2023-09-25 02:02:24', '2023-11-10 18:56:02'),
('9', 'Kinh tế lượng', 15000, 'mainImage.png', 'Tài liệu tham khảo', 'Confirm', 0, 1, 4, 19, '2023-09-25 02:02:24', '2023-09-25 02:02:24');

-- --------------------------------------------------------

--
-- Table structure for table `reports`
--

CREATE TABLE `reports` (
  `user` int NOT NULL,
  `post` varchar(10) COLLATE utf8mb4_general_ci NOT NULL,
  `content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `reports`
--

INSERT INTO `reports` (`user`, `post`, `content`, `createdAt`, `updatedAt`) VALUES
(2, '1', 'Tài liệu không giống ảnh', '2023-10-06 07:47:01', '2023-10-06 07:47:01'),
(10, '4', 'Tài liệu mờ một số trang', '2023-10-06 07:49:36', '2023-10-06 07:49:36'),
(12, '6', 'Bán giá quá đắt', '2023-10-06 07:48:22', '2023-10-06 07:48:22'),
(16, '2', 'Nội dung không phù hợp', '2023-10-22 21:04:12', '2023-10-22 21:04:12');

-- --------------------------------------------------------

--
-- Table structure for table `resetpasswordtokens`
--

CREATE TABLE `resetpasswordtokens` (
  `id` int NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `value` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `expired_at` datetime DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `resetpasswordtokens`
--

INSERT INTO `resetpasswordtokens` (`id`, `email`, `value`, `expired_at`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 'hongbao2003@gmail.com', 'ee43ec7cc83b9a0fe422f2b26a3ad983c9ca579ca7bce87d07d971642d9c50eb', '2023-10-07 21:14:14', 1, '2023-10-07 21:04:14', '2023-10-07 21:05:56'),
(2, 'hongbao2003@gmail.com', 'b47f1606518fa8276ca5f82b9a3e67311cdd5c4e68dbe0592ae9f38c574a94f4', '2023-10-07 22:38:43', 1, '2023-10-07 22:28:43', '2023-10-07 22:29:02'),
(3, 'hongbao2003@gmail.com', '46a4efea2592cf8a01e4fc69b1065e39bc2a2520537716c37f390bb81bcebf90', '2023-10-07 22:42:43', 1, '2023-10-07 22:32:43', '2023-10-07 22:32:58'),
(4, 'hongbao2003@gmail.com', 'f7961248034a58c430eda8e243830a0876f062e793810e0bb97d929fc35bb175', '2023-10-07 22:46:46', 1, '2023-10-07 22:36:46', '2023-10-07 22:36:57'),
(5, 'hongbao2003@gmail.com', '9906bd1239f06a0ae1b39ce57c7ca50d3d9eab7989864937b166132e7fdfc908', '2023-11-13 18:15:08', 0, '2023-11-13 18:05:08', '2023-11-13 18:05:08'),
(6, 'hongbao2003@gmail.com', '8fe1d670096b67002f15c2a7d5d7879906687dbf1aec6f48f3539dac2f62826e', '2023-11-13 18:21:01', 0, '2023-11-13 18:11:01', '2023-11-13 18:11:01'),
(7, 'hongbao2003@gmail.com', 'e7a2e37b6eff81fac25ad0d8d09c0ca3c9069f5a3a07048d41ad64648efe913a', '2023-11-14 15:36:19', 0, '2023-11-14 15:26:19', '2023-11-14 15:26:19'),
(8, 'hongbao2003@gmail.com', '0da728f5d368de45514b6d911e43a8af8c3d03e627707160cf6b70242e9dd5f2', '2023-11-17 19:39:20', 0, '2023-11-17 19:29:20', '2023-11-17 19:29:20'),
(9, 'hongbao2003@gmail.com', 'baa2b50f271ab9c29d001e5a1f4f148b8e862deb4d5d4f65aac8e46a6d94c442', '2023-11-17 19:45:12', 0, '2023-11-17 19:35:12', '2023-11-17 19:35:12'),
(10, 'hongbao2003@gmail.com', '746b526e405f19591793271af689824c815b9c6eb4bcf20913d1f57a61e89784', '2023-11-17 20:21:12', 0, '2023-11-17 20:11:12', '2023-11-17 20:11:12'),
(11, 'hongbao2003@gmail.com', '4fffe8816a92b62f8e81b6a74a44bd1e3def5d4b2b7975823c217e55ea5367a8', '2023-11-17 20:21:58', 1, '2023-11-17 20:11:58', '2023-11-17 20:15:49');

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` int NOT NULL,
  `numStars` int NOT NULL,
  `content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `user` int NOT NULL,
  `post` varchar(10) COLLATE utf8mb4_general_ci NOT NULL,
  `isShow` tinyint(1) NOT NULL DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`id`, `numStars`, `content`, `user`, `post`, `isShow`, `createdAt`, `updatedAt`) VALUES
(1, 3, 'Sản phẩm good nha', 17, '3', 1, '2023-10-06 08:54:13', '2023-10-06 08:54:13'),
(3, 5, 'abc', 16, '10', 1, '2023-11-29 21:27:54', '2023-11-29 21:27:54');

-- --------------------------------------------------------

--
-- Table structure for table `rolepermissions`
--

CREATE TABLE `rolepermissions` (
  `permission` int NOT NULL,
  `role` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `rolepermissions`
--

INSERT INTO `rolepermissions` (`permission`, `role`, `createdAt`, `updatedAt`) VALUES
(1, 2, '2023-09-26 22:24:09', '2023-09-26 22:24:09'),
(2, 2, '2023-09-26 22:24:19', '2023-09-26 22:24:19'),
(3, 2, '2023-09-26 22:24:29', '2023-09-26 22:24:29'),
(4, 2, '2023-09-26 22:24:24', '2023-09-26 22:24:24'),
(5, 3, '2023-09-26 22:24:33', '2023-09-26 22:24:33'),
(6, 3, '2023-09-26 22:24:46', '2023-09-26 22:24:46'),
(7, 3, '2023-09-26 22:24:39', '2023-09-26 22:24:39');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Khách hàng', '2023-09-25 04:34:15', '2023-09-25 04:34:15'),
(2, 'Admin', '2023-09-26 22:18:30', '2023-09-26 22:18:30'),
(3, 'Quản lý bài đăng', '2023-09-26 22:18:46', '2023-09-26 22:18:46');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20230923090000-create-role.js'),
('20230923090340-create-user.js'),
('20230923092425-create-post.js'),
('20230923092743-create-notification.js'),
('20230923115216-create-review.js'),
('20230923115953-create-report.js'),
('20230923124254-create-permission.js'),
('20230923124357-create-role-permission.js');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `firstName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `lastName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `coverImage` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `status` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `role` int NOT NULL,
  `linkFacebook` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `linkZalo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `linkInstagram` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `phoneNumber` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `firstName`, `lastName`, `username`, `avatar`, `coverImage`, `password`, `status`, `role`, `linkFacebook`, `linkZalo`, `linkInstagram`, `phoneNumber`, `createdAt`, `updatedAt`) VALUES
(1, 'anhhuy2452003@gmail.com', 'Huy', 'Nguyễn', 'Anh Huy Nguyễn', 'avatarDefault.png', 'coverImageDefault.png', '$2a$12$bYHcLnCYh5lfKKr4D7wmgO1m25mIynEw7nPnx3.SzD67AVOCdhBea', 'Active', 2, NULL, NULL, NULL, NULL, '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(2, 'HHH@gmail.com', 'BB', 'Nguyen Van', 'BBNguyen Van', 'avatarDefault.png', 'coverImageDefault.png', '$2a$12$bYHcLnCYh5lfKKr4D7wmgO1m25mIynEw7nPnx3.SzD67AVOCdhBea', 'Active', 1, NULL, NULL, NULL, NULL, '2023-09-29 19:06:01', '2023-09-29 19:06:01'),
(3, 'hongbao2003@gmail.com', 'Bảo', 'Bùi', 'Bùi Bảo', 'avatarDefault.png', 'coverImageDefault.png', '$2a$12$bYHcLnCYh5lfKKr4D7wmgO1m25mIynEw7nPnx3.SzD67AVOCdhBea', 'Active', 3, NULL, NULL, NULL, '0908141453', '2023-09-24 22:03:51', '2023-11-17 20:15:49'),
(4, 'langueofdie@gmail.com', 'Nam', 'Trần', 'Trần Nam', 'avatarDefault.png', 'coverImageDefault.png', '$2a$12$bYHcLnCYh5lfKKr4D7wmgO1m25mIynEw7nPnx3.SzD67AVOCdhBea', 'Active', 2, NULL, NULL, NULL, NULL, '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(5, 'nguoidung10@gmail.com', 'Bảo', 'Võ', 'Gia Bảo', 'avatarDefault.png', 'coverImageDefault.png', '$2a$12$bYHcLnCYh5lfKKr4D7wmgO1m25mIynEw7nPnx3.SzD67AVOCdhBea', 'Active', 1, NULL, NULL, NULL, NULL, '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(6, 'nguoidung11@gmail.com', 'Cảnh', 'Mai', 'Cảnh Mai', 'avatarDefault.png', 'coverImageDefault.png', '$2a$12$bYHcLnCYh5lfKKr4D7wmgO1m25mIynEw7nPnx3.SzD67AVOCdhBea', 'Active', 1, NULL, NULL, NULL, NULL, '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(7, 'nguoidung12@gmail.com', 'Công', 'Nguyễn', 'Chí Công Nguyễn', 'avatarDefault.png', 'coverImageDefault.png', '$2a$12$bYHcLnCYh5lfKKr4D7wmgO1m25mIynEw7nPnx3.SzD67AVOCdhBea', 'Active', 1, NULL, NULL, NULL, NULL, '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(8, 'nguoidung13@gmail.com', 'Danh', 'Huỳnh', 'Thanh Danh', 'avatarDefault.png', 'coverImageDefault.png', '$2a$12$bYHcLnCYh5lfKKr4D7wmgO1m25mIynEw7nPnx3.SzD67AVOCdhBea', 'Active', 1, NULL, NULL, NULL, NULL, '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(9, 'nguoidung14@gmail.com', 'Dũng', 'Huỳnh', 'Tiến Dũng', 'avatarDefault.png', 'coverImageDefault.png', '$2a$12$bYHcLnCYh5lfKKr4D7wmgO1m25mIynEw7nPnx3.SzD67AVOCdhBea', 'Active', 1, NULL, NULL, NULL, NULL, '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(10, 'nguoidung1@gmail.com', 'Sang', 'Nguyễn', 'Sang Nguyễn', 'avatarDefault.png', 'coverImageDefault.png', '$2a$12$bYHcLnCYh5lfKKr4D7wmgO1m25mIynEw7nPnx3.SzD67AVOCdhBea', 'Disabled', 2, NULL, NULL, NULL, NULL, '2023-09-24 22:03:51', '2023-10-08 12:29:36'),
(11, 'nguoidung2@gmail.com', 'Đình', 'Lê', 'Đình Đình', 'avatarDefault.png', 'coverImageDefault.png', '$2a$12$bYHcLnCYh5lfKKr4D7wmgO1m25mIynEw7nPnx3.SzD67AVOCdhBea', 'Active', 1, NULL, NULL, NULL, NULL, '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(12, 'nguoidung3@gmail.com', 'Minh', 'Nguyễn', 'Nguyễn Minh', 'avatarDefault.png', 'coverImageDefault.png', '$2a$12$bYHcLnCYh5lfKKr4D7wmgO1m25mIynEw7nPnx3.SzD67AVOCdhBea', 'Active', 1, NULL, NULL, NULL, NULL, '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(13, 'nguoidung4@gmail.com', 'Duy', 'Trần', 'Duy Trần', 'avatarDefault.png', 'coverImageDefault.png', '$2a$12$bYHcLnCYh5lfKKr4D7wmgO1m25mIynEw7nPnx3.SzD67AVOCdhBea', 'Active', 1, NULL, NULL, NULL, NULL, '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(14, 'nguoidung5@gmail.com', 'Dương', 'Trần', 'Trần Đại Dương', 'avatarDefault.png', 'coverImageDefault.png', '$2a$12$bYHcLnCYh5lfKKr4D7wmgO1m25mIynEw7nPnx3.SzD67AVOCdhBea', 'Active', 3, NULL, NULL, NULL, NULL, '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(15, 'nguoidung6@gmail.com', 'Quân', 'Tăng', 'Quân Tăng Đặng', 'avatarDefault.png', 'coverImageDefault.png', '$2a$12$bYHcLnCYh5lfKKr4D7wmgO1m25mIynEw7nPnx3.SzD67AVOCdhBea', 'Active', 1, NULL, NULL, NULL, NULL, '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(16, 'nguoidung7@gmail.com', 'Tài', 'cc', 'Nhữ Tài', '1699873163987-415762560.png', '1699873238240-423632442.png', '$2a$12$bYHcLnCYh5lfKKr4D7wmgO1m25mIynEw7nPnx3.SzD67AVOCdhBea', 'Active', 1, NULL, NULL, NULL, NULL, '2023-09-24 22:03:51', '2023-11-13 18:12:38'),
(17, 'nguoidung8@gmail.com', 'Anh', 'Võ', 'Võ Mai Anh', 'avatarDefault.png', 'coverImageDefault.png', '$2a$12$bYHcLnCYh5lfKKr4D7wmgO1m25mIynEw7nPnx3.SzD67AVOCdhBea', 'Active', 1, NULL, NULL, NULL, NULL, '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(18, 'nguoidung9@gmail.com', 'Bảo', 'Nguyễn', 'Bảo Nguyễn', 'avatarDefault.png', 'coverImageDefault.png', '$2a$12$bYHcLnCYh5lfKKr4D7wmgO1m25mIynEw7nPnx3.SzD67AVOCdhBea', 'Active', 1, NULL, NULL, NULL, NULL, '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(19, 'tangquoctuan2003@gmail.com', 'Tuấn', 'Tăng', 'Tăng Quốc Tuấn', 'avatarDefault.png', 'coverImageDefault.png', '$2a$12$bYHcLnCYh5lfKKr4D7wmgO1m25mIynEw7nPnx3.SzD67AVOCdhBea', 'Active', 2, NULL, NULL, NULL, NULL, '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(20, 'tienphan09098@gmail.com', 'Tiến', 'Phan', 'Tiến Tiến', 'avatarDefault.png', 'coverImageDefault.png', '$2a$12$bYHcLnCYh5lfKKr4D7wmgO1m25mIynEw7nPnx3.SzD67AVOCdhBea', 'Active', 2, NULL, NULL, NULL, NULL, '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(21, 'tienphatng.693@gmail.com', 'Phát', 'Nguyễn', 'Phát Nguyễn', 'avatarDefault.png', 'coverImageDefault.png', '$2a$12$bYHcLnCYh5lfKKr4D7wmgO1m25mIynEw7nPnx3.SzD67AVOCdhBea', 'Active', 2, NULL, NULL, NULL, NULL, '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(25, 'test3@gmail.com', 'Test', 'Nguyen Van', 'Test Nguyen Van', 'avatarDefault.jpg', 'coverImageDefault.jpg', '$2a$12$bYHcLnCYh5lfKKr4D7wmgO1m25mIynEw7nPnx3.SzD67AVOCdhBea', 'Active', 2, NULL, NULL, NULL, '0908141453', '2023-10-16 18:47:53', '2023-10-16 18:47:53'),
(41, 'test123@gmail.com', 'Test33333', 'Nguyen Van', 'Test33 Nguyen Van', 'avatarDefault.jpg', '1700224365290-486503796.png', '$2a$12$bYHcLnCYh5lfKKr4D7wmgO1m25mIynEw7nPnx3.SzD67AVOCdhBea', 'Active', 1, NULL, NULL, NULL, '0908141453', '2023-11-05 00:35:18', '2023-11-17 20:06:18'),
(42, 'testnha@gmail.com', 'Test33', 'Nguyen Van', 'Test33 Nguyen Van', 'avatarDefault.jpg', 'coverImageDefault.jpg', '$2a$12$bYHcLnCYh5lfKKr4D7wmgO1m25mIynEw7nPnx3.SzD67AVOCdhBea', 'Active', 1, NULL, NULL, NULL, '0908141453', '2023-11-07 15:15:44', '2023-11-07 15:15:44'),
(43, 'hongbao2@gmail.com', 'Bao', 'Bui', 'Bao Bui', 'avatarDefault.jpg', 'coverImageDefault.jpg', '$2a$12$bYHcLnCYh5lfKKr4D7wmgO1m25mIynEw7nPnx3.SzD67AVOCdhBea', 'Active', 1, NULL, NULL, NULL, '0908141453', '2023-11-07 15:17:28', '2023-11-07 15:17:28'),
(45, 'test1234@gmail.com', 'Test2', 'abc', 'Test2 abc', 'avatarDefault.jpg', 'coverImageDefault.jpg', '$2a$12$bYHcLnCYh5lfKKr4D7wmgO1m25mIynEw7nPnx3.SzD67AVOCdhBea', 'Active', 1, NULL, NULL, NULL, '0908141453', '2023-11-17 20:10:44', '2023-11-17 20:10:44');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userSend` (`userSend`),
  ADD KEY `userReceive` (`userReceive`),
  ADD KEY `post` (`post`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userConfirm` (`userConfirm`),
  ADD KEY `userPost` (`userPost`);

--
-- Indexes for table `reports`
--
ALTER TABLE `reports`
  ADD PRIMARY KEY (`user`,`post`),
  ADD KEY `post` (`post`);

--
-- Indexes for table `resetpasswordtokens`
--
ALTER TABLE `resetpasswordtokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `resetpasswordtokens_ibfk_1` (`email`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user` (`user`),
  ADD KEY `post` (`post`);

--
-- Indexes for table `rolepermissions`
--
ALTER TABLE `rolepermissions`
  ADD PRIMARY KEY (`permission`,`role`),
  ADD KEY `role` (`role`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `role` (`role`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `resetpasswordtokens`
--
ALTER TABLE `resetpasswordtokens`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `notifications`
--
ALTER TABLE `notifications`
  ADD CONSTRAINT `notifications_ibfk_1` FOREIGN KEY (`userSend`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `notifications_ibfk_2` FOREIGN KEY (`userReceive`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `notifications_ibfk_3` FOREIGN KEY (`post`) REFERENCES `posts` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `reports`
--
ALTER TABLE `reports`
  ADD CONSTRAINT `reports_ibfk_1` FOREIGN KEY (`user`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `reports_ibfk_2` FOREIGN KEY (`post`) REFERENCES `posts` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `resetpasswordtokens`
--
ALTER TABLE `resetpasswordtokens`
  ADD CONSTRAINT `resetpasswordtokens_ibfk_1` FOREIGN KEY (`email`) REFERENCES `users` (`email`);

--
-- Constraints for table `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`user`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `reviews_ibfk_2` FOREIGN KEY (`post`) REFERENCES `posts` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `rolepermissions`
--
ALTER TABLE `rolepermissions`
  ADD CONSTRAINT `rolepermissions_ibfk_1` FOREIGN KEY (`permission`) REFERENCES `permissions` (`id`),
  ADD CONSTRAINT `rolepermissions_ibfk_2` FOREIGN KEY (`role`) REFERENCES `roles` (`id`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role`) REFERENCES `roles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
