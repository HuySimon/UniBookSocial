-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 26, 2023 at 07:59 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

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
  `id` int(11) NOT NULL,
  `isSeen` tinyint(1) NOT NULL,
  `typeNoti` varchar(255) NOT NULL,
  `content` text DEFAULT NULL,
  `userSend` int(11) NOT NULL,
  `userReceive` int(11) NOT NULL,
  `post` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `notifications`
--

INSERT INTO `notifications` (`id`, `isSeen`, `typeNoti`, `content`, `userSend`, `userReceive`, `post`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'Confirm', NULL, 2, 5, 1, '2023-10-06 07:57:50', '2023-10-06 07:57:50'),
(2, 0, 'Confirm', NULL, 17, 6, 3, '2023-10-06 08:02:50', '2023-10-06 08:02:50'),
(3, 0, 'Violation', 'Bài đăng không phù hợp', 10, 20, 2, '2023-10-06 08:13:11', '2023-10-06 08:13:11'),
(4, 0, 'Unconfirm', NULL, 4, 19, 9, '2023-10-06 08:44:44', '2023-10-06 08:44:44'),
(5, 1, 'Confirm', NULL, 12, 3, 6, '2023-10-06 08:49:24', '2023-10-06 08:49:24'),
(6, 0, 'Unconfirm', NULL, 17, 6, 3, '2023-10-06 08:50:31', '2023-10-06 08:50:31'),
(7, 0, 'CheckPost', NULL, 15, 20, 2, '2023-11-11 09:30:48', '2023-11-11 09:30:48'),
(8, 0, 'Confirm', NULL, 15, 9, 8, '2023-11-11 10:04:16', '2023-11-11 10:04:16'),
(9, 0, 'Unconfirmed', NULL, 15, 9, 8, '2023-11-11 10:11:38', '2023-11-11 10:11:38'),
(10, 0, 'Confirm', NULL, 15, 9, 8, '2023-11-11 10:14:17', '2023-11-11 10:14:17'),
(11, 0, 'Unconfirmed', NULL, 15, 9, 8, '2023-11-11 10:17:00', '2023-11-11 10:17:00'),
(12, 0, 'Confirm', NULL, 15, 9, 8, '2023-11-11 10:22:49', '2023-11-11 10:22:49'),
(13, 1, 'Confirm', NULL, 15, 11, 10, '2023-11-11 10:31:17', '2023-11-26 10:19:15'),
(14, 1, 'Unconfirmed', NULL, 15, 11, 10, '2023-11-11 10:31:19', '2023-11-26 10:19:19'),
(15, 1, 'Confirm', NULL, 15, 11, 10, '2023-11-11 10:32:51', '2023-11-26 10:22:08'),
(16, 1, 'Unconfirmed', NULL, 15, 11, 10, '2023-11-11 10:32:52', '2023-11-26 10:25:49'),
(17, 1, 'Confirm', NULL, 15, 11, 10, '2023-11-11 10:32:56', '2023-11-26 10:19:42'),
(18, 1, 'Unconfirmed', NULL, 15, 11, 10, '2023-11-11 10:32:57', '2023-11-26 10:24:22'),
(19, 1, 'Confirm', NULL, 15, 11, 10, '2023-11-11 10:33:07', '2023-11-26 10:36:52'),
(20, 1, 'Unconfirmed', NULL, 15, 11, 10, '2023-11-11 10:33:08', '2023-11-26 10:23:25'),
(21, 1, 'Confirm', NULL, 15, 11, 10, '2023-11-11 10:34:10', '2023-11-26 10:25:15'),
(22, 1, 'Unconfirmed', NULL, 15, 11, 10, '2023-11-11 10:34:13', '2023-11-26 10:22:55'),
(23, 1, 'Confirm', NULL, 15, 11, 10, '2023-11-11 10:35:05', '2023-11-26 10:36:54'),
(24, 1, 'Unconfirmed', NULL, 15, 11, 10, '2023-11-11 10:35:07', '2023-11-26 10:23:04'),
(25, 0, 'Confirm', NULL, 15, 11, 10, '2023-11-11 10:35:09', '2023-11-11 10:35:09'),
(26, 1, 'Unconfirmed', NULL, 15, 11, 10, '2023-11-11 10:38:41', '2023-11-26 10:24:20'),
(27, 1, 'Confirm', NULL, 15, 11, 10, '2023-11-11 10:39:28', '2023-11-26 10:37:03'),
(28, 1, 'Unconfirmed', NULL, 15, 11, 10, '2023-11-11 10:39:36', '2023-11-26 10:25:58'),
(29, 1, 'Confirm', NULL, 15, 11, 10, '2023-11-11 10:40:16', '2023-11-26 10:37:22'),
(30, 1, 'Unconfirmed', NULL, 15, 11, 10, '2023-11-11 10:40:23', '2023-11-26 10:26:06'),
(31, 0, 'Confirm', NULL, 15, 11, 10, '2023-11-11 10:41:24', '2023-11-11 10:41:24'),
(32, 1, 'Unconfirmed', NULL, 15, 11, 10, '2023-11-11 10:42:14', '2023-11-26 10:26:23'),
(33, 0, 'Confirm', NULL, 15, 11, 10, '2023-11-11 10:43:09', '2023-11-11 10:43:09'),
(34, 1, 'Unconfirmed', NULL, 15, 11, 10, '2023-11-11 10:43:10', '2023-11-26 10:26:54'),
(35, 0, 'Confirm', NULL, 15, 11, 10, '2023-11-11 10:43:12', '2023-11-11 10:43:12'),
(36, 1, 'Unconfirmed', NULL, 15, 11, 10, '2023-11-11 10:43:13', '2023-11-26 10:36:48'),
(37, 1, 'Confirm', NULL, 15, 11, 10, '2023-11-11 10:43:18', '2023-11-26 10:37:36'),
(38, 1, 'Unconfirmed', NULL, 15, 11, 10, '2023-11-11 10:45:32', '2023-11-26 10:25:30'),
(39, 1, 'Confirm', NULL, 15, 11, 10, '2023-11-11 10:47:11', '2023-11-26 10:37:37'),
(40, 1, 'Unconfirmed', NULL, 15, 11, 10, '2023-11-11 10:47:16', '2023-11-26 10:37:28'),
(41, 1, 'Confirm', NULL, 15, 11, 10, '2023-11-11 10:48:07', '2023-11-26 10:37:32'),
(42, 0, 'Unconfirmed', NULL, 15, 11, 10, '2023-11-11 10:50:18', '2023-11-11 10:50:18'),
(43, 1, 'Confirm', NULL, 16, 15, 5, '2023-11-19 17:51:38', '2023-11-26 12:56:44'),
(44, 1, 'Unconfirmed', NULL, 16, 15, 5, '2023-11-19 17:51:40', '2023-11-26 12:57:03'),
(45, 1, 'Confirm', NULL, 16, 15, 5, '2023-11-19 17:51:43', '2023-11-26 12:56:53'),
(46, 0, 'Unconfirmed', NULL, 16, 15, 5, '2023-11-19 17:52:18', '2023-11-26 13:02:09'),
(47, 1, 'Confirm', NULL, 16, 15, 11, '2023-11-19 17:55:23', '2023-11-26 13:01:06'),
(48, 1, 'Unconfirmed', NULL, 16, 15, 11, '2023-11-19 17:56:12', '2023-11-26 13:01:22');

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
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
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `price` float NOT NULL,
  `mainImage` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `status` varchar(255) NOT NULL,
  `isNew` tinyint(1) NOT NULL,
  `isGeneralSubject` tinyint(1) NOT NULL,
  `userConfirm` int(11) DEFAULT NULL,
  `userPost` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `title`, `price`, `mainImage`, `description`, `status`, `isNew`, `isGeneralSubject`, `userConfirm`, `userPost`, `createdAt`, `updatedAt`) VALUES
(1, 'Kinh tế chính trị', 15000, 'mainImage.png', 'Tài liệu tham khảo', 'Confirm', 1, 0, 2, 5, '2023-09-25 02:02:24', '2023-09-25 02:02:24'),
(2, 'Chủ nghĩa xã hội khoa học', 30000, 'mainImage.png', 'Tài liệu tham khảo', 'Violation', 1, 0, NULL, 20, '2023-09-25 02:02:24', '2023-11-11 09:30:48'),
(3, 'Kỹ thuật lập trình', 20000, 'mainImage.png', 'Tài liệu tham khảo', 'Delivery', 1, 1, 17, 6, '2023-09-25 02:02:24', '2023-09-25 02:02:24'),
(4, 'GDQP và AN I', 10000, 'mainImage.png', 'Tài liệu học tập', 'Confirm', 1, 0, 10, 7, '2023-09-25 02:02:24', '2023-09-25 02:02:24'),
(5, 'Triết học Mac-Lenin', 25000, 'mainImage.png', 'Tài liệu tham khảo', 'Unconfirmed', 0, 0, NULL, 15, '2023-09-25 02:02:24', '2023-11-19 17:52:18'),
(6, 'Kinh tế vĩ mô', 20000, 'mainImage.png', 'Tài liệu tham khảo', 'Delivery', 1, 1, 12, 3, '2023-09-25 02:02:24', '2023-09-25 02:02:24'),
(8, 'Tư tưởng Hồ Chí Minh', 15000, 'mainImage.png', 'Tài liệu tham khảo', 'Delivered', 0, 0, 15, 9, '2023-09-25 02:02:24', '2023-11-11 10:22:49'),
(9, 'Kinh tế lượng', 15000, 'mainImage.png', 'Tài liệu tham khảo', 'Confirm', 0, 1, 4, 19, '2023-09-25 02:02:24', '2023-09-25 02:02:24'),
(10, 'Lịch sử Đảng cộng sản Việt Nam', 35000, 'mainImage.png', 'Tài liệu tham khảo', 'Unconfirmed', 1, 0, NULL, 11, '2023-09-25 02:02:24', '2023-11-11 10:50:18'),
(11, 'The sun rise', 123456, '1700223026828-158933152.png', '123123123', 'Unconfirmed', 1, 0, NULL, 15, '2023-11-17 19:10:26', '2023-11-19 17:56:12');

-- --------------------------------------------------------

--
-- Table structure for table `reports`
--

CREATE TABLE `reports` (
  `user` int(11) NOT NULL,
  `post` int(11) NOT NULL,
  `content` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `reports`
--

INSERT INTO `reports` (`user`, `post`, `content`, `createdAt`, `updatedAt`) VALUES
(2, 1, 'Tài liệu không giống ảnh', '2023-10-06 07:47:01', '2023-10-06 07:47:01'),
(10, 4, 'Tài liệu mờ một số trang', '2023-10-06 07:49:36', '2023-10-06 07:49:36'),
(12, 6, 'Bán giá quá đắt', '2023-10-06 07:48:22', '2023-10-06 07:48:22'),
(15, 2, 'hello world', '2023-11-11 09:30:48', '2023-11-11 09:30:48');

-- --------------------------------------------------------

--
-- Table structure for table `resetpasswordtokens`
--

CREATE TABLE `resetpasswordtokens` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `value` varchar(255) DEFAULT NULL,
  `expired_at` datetime DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `resetpasswordtokens`
--

INSERT INTO `resetpasswordtokens` (`id`, `email`, `value`, `expired_at`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 'hongbao2003@gmail.com', 'ee43ec7cc83b9a0fe422f2b26a3ad983c9ca579ca7bce87d07d971642d9c50eb', '2023-10-07 21:14:14', 1, '2023-10-07 21:04:14', '2023-10-07 21:05:56'),
(2, 'nguoidung6@gmail.com', 'af0d765a96669328d17a953ec87bff37165eecfa80a5ba410f90db8389f8c497', '2023-11-14 15:37:35', 0, '2023-11-14 15:27:35', '2023-11-14 15:27:35'),
(3, 'nguoidung7@gmail.com', '45297c633d331e6ac35169ebaaf75bc7fafd206ebb59ba4efd80566936e46eb0', '2023-11-14 15:44:45', 0, '2023-11-14 15:34:45', '2023-11-14 15:34:45'),
(4, 'nguoidung8@gmail.com', '481885da4f3c8e27e9c4e6a9bc4619ee398c2784cca8a663524abe91b5cb7f47', '2023-11-14 15:46:19', 0, '2023-11-14 15:36:19', '2023-11-14 15:36:19'),
(5, 'nguoidung2@gmail.com', 'ee7e0264108d8ba198b1052eaa9f14a580145e8307c6449a8a81c82fe347ad8b', '2023-11-14 15:47:12', 0, '2023-11-14 15:37:12', '2023-11-14 15:37:12'),
(6, 'nguoidung4@gmail.com', '60d6e8f7ae7a64bf1f0f75076e83e2af49a3bb5b5683b922b3518d0d56e90924', '2023-11-14 15:48:38', 0, '2023-11-14 15:38:38', '2023-11-14 15:38:38'),
(7, 'nguoidung6@gmail.com', 'a77bd5e6de66e9e1a2bfbe08f0eea5988e69e7c2b4044587c57ab1e053a7dacf', '2023-11-14 15:49:50', 0, '2023-11-14 15:39:50', '2023-11-14 15:39:50'),
(8, 'nguoidung3@gmail.com', 'bdcc8eeedf70ba85a663d687e2c016ce09d1e5e221191d274bfd73eba44af5b2', '2023-11-14 15:53:00', 0, '2023-11-14 15:43:00', '2023-11-14 15:43:00'),
(9, 'nguoidung6@gmail.com', '6e0fa02a857e9126c75e076556daef984d473f4be6e015ee49a1545093e1a0c0', '2023-11-14 15:59:57', 0, '2023-11-14 15:49:57', '2023-11-14 15:49:57'),
(10, 'nguoidung6@gmail.com', '3bd8c9090458a32ffcdc0f9351f24e8dc544cfbb9cfb81b88160bf4d6d6db4df', '2023-11-14 16:01:12', 0, '2023-11-14 15:51:12', '2023-11-14 15:51:12'),
(11, 'nguoidung6@gmail.com', '8d99af9470d4a657fffebc88104b660ffa8a3968ea860cf1f4df8705132951c1', '2023-11-14 16:02:18', 0, '2023-11-14 15:52:18', '2023-11-14 15:52:18'),
(12, 'nguoidung6@gmail.com', '110e600290fd88a5817d6d6cc2f3c8495bb881d3b8487f1ee93603b1b0d3c1b5', '2023-11-14 16:04:32', 0, '2023-11-14 15:54:32', '2023-11-14 15:54:32'),
(13, 'nguoidung6@gmail.com', 'fcc687ca8d076689aa4a5877927b816cb3ccfd681fb666da9487dbb9d0f973a0', '2023-11-19 17:36:35', 0, '2023-11-19 17:26:35', '2023-11-19 17:26:35');

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` int(11) NOT NULL,
  `numStars` int(11) NOT NULL,
  `content` varchar(255) DEFAULT NULL,
  `user` int(11) NOT NULL,
  `post` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`id`, `numStars`, `content`, `user`, `post`, `createdAt`, `updatedAt`) VALUES
(1, 3, 'Sản phẩm good nha', 17, 3, '2023-10-06 08:54:13', '2023-10-06 08:54:13');

-- --------------------------------------------------------

--
-- Table structure for table `rolepermissions`
--

CREATE TABLE `rolepermissions` (
  `permission` int(11) NOT NULL,
  `role` int(11) NOT NULL,
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
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
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
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

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
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `avatar` varchar(255) NOT NULL,
  `coverImage` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `role` int(11) NOT NULL,
  `linkFacebook` varchar(255) DEFAULT NULL,
  `linkZalo` varchar(255) DEFAULT NULL,
  `linkInstagram` varchar(255) DEFAULT NULL,
  `phoneNumber` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `firstName`, `lastName`, `username`, `avatar`, `coverImage`, `password`, `status`, `role`, `linkFacebook`, `linkZalo`, `linkInstagram`, `phoneNumber`, `createdAt`, `updatedAt`) VALUES
(1, 'anhhuy2452003@gmail.com', 'Huy', 'Nguyễn', 'Anh Huy Nguyễn', 'avatarDefault.png', 'coverImageDefault.png', '$2a$12$Xq4zp77n9017vz3FZ55GZOR6IqM/rjojmma5TSOKAxwKwPYeN8VV2', 'Active', 2, NULL, NULL, NULL, NULL, '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(2, 'HHH@gmail.com', 'BB', 'Nguyen Van', 'BBNguyen Van', 'avatarDefault.png', 'coverImageDefault.png', '$2a$12$Xq4zp77n9017vz3FZ55GZOR6IqM/rjojmma5TSOKAxwKwPYeN8VV2', 'Active', 2, NULL, NULL, NULL, NULL, '2023-09-29 19:06:01', '2023-11-13 11:15:03'),
(3, 'hongbao2003@gmail.com', 'Bảo', 'Bùi', 'Bùi Bảo', 'avatarDefault.png', 'coverImageDefault.png', '$2a$12$wenBgQVnQ39uiiEHKy32meGP8kgOXUpAk8f2Ex12NdXm4HQOOrqra', 'Active', 2, NULL, NULL, NULL, NULL, '2023-09-24 22:03:51', '2023-10-07 21:05:56'),
(4, 'langueofdie@gmail.com', 'Nam', 'Trần', 'Trần Nam', 'avatarDefault.png', 'coverImageDefault.png', '$2a$12$Xq4zp77n9017vz3FZ55GZOR6IqM/rjojmma5TSOKAxwKwPYeN8VV2', 'Active', 2, NULL, NULL, NULL, NULL, '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(5, 'nguoidung10@gmail.com', 'Bảo', 'Võ', 'Gia Bảo', 'avatarDefault.png', 'coverImageDefault.png', '$2a$12$Xq4zp77n9017vz3FZ55GZOR6IqM/rjojmma5TSOKAxwKwPYeN8VV2', 'Active', 1, NULL, NULL, NULL, NULL, '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(6, 'nguoidung11@gmail.com', 'Cảnh', 'Mai', 'Cảnh Mai', 'avatarDefault.png', 'coverImageDefault.png', '$2a$12$Xq4zp77n9017vz3FZ55GZOR6IqM/rjojmma5TSOKAxwKwPYeN8VV2', 'Active', 1, NULL, NULL, NULL, NULL, '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(7, 'nguoidung12@gmail.com', 'Công', 'Nguyễn', 'Chí Công Nguyễn', 'avatarDefault.png', 'coverImageDefault.png', '$2a$12$Xq4zp77n9017vz3FZ55GZOR6IqM/rjojmma5TSOKAxwKwPYeN8VV2', 'Active', 1, NULL, NULL, NULL, NULL, '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(8, 'nguoidung13@gmail.com', 'Danh', 'Huỳnh', 'Thanh Danh', 'avatarDefault.png', 'coverImageDefault.png', '$2a$12$Xq4zp77n9017vz3FZ55GZOR6IqM/rjojmma5TSOKAxwKwPYeN8VV2', 'Active', 1, NULL, NULL, NULL, NULL, '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(9, 'nguoidung14@gmail.com', 'Dũng', 'Huỳnh', 'Tiến Dũng', 'avatarDefault.png', 'coverImageDefault.png', '$2a$12$Xq4zp77n9017vz3FZ55GZOR6IqM/rjojmma5TSOKAxwKwPYeN8VV2', 'Active', 1, NULL, NULL, NULL, NULL, '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(10, 'nguoidung1@gmail.com', 'Sang', 'Nguyễn', 'Sang Nguyễn', 'avatarDefault.png', 'coverImageDefault.png', '$2a$12$Xq4zp77n9017vz3FZ55GZOR6IqM/rjojmma5TSOKAxwKwPYeN8VV2', 'Active', 3, NULL, NULL, NULL, NULL, '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(11, 'nguoidung2@gmail.com', 'Đình', 'Lê', 'Đình Đình', 'avatarDefault.png', 'coverImageDefault.png', '$2a$12$Xq4zp77n9017vz3FZ55GZOR6IqM/rjojmma5TSOKAxwKwPYeN8VV2', 'Active', 1, NULL, NULL, NULL, '0909258349', '2023-09-24 22:03:51', '2023-11-19 17:23:25'),
(12, 'nguoidung3@gmail.com', 'Minh', 'Nguyễn', 'Nguyễn Minh', 'avatarDefault.png', 'coverImageDefault.png', '$2a$12$Xq4zp77n9017vz3FZ55GZOR6IqM/rjojmma5TSOKAxwKwPYeN8VV2', 'Active', 1, NULL, NULL, NULL, NULL, '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(13, 'nguoidung4@gmail.com', 'Duy', 'Trần', 'Duy Trần', 'avatarDefault.png', 'coverImageDefault.png', '$2a$12$Xq4zp77n9017vz3FZ55GZOR6IqM/rjojmma5TSOKAxwKwPYeN8VV2', 'Active', 1, NULL, NULL, NULL, NULL, '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(14, 'nguoidung5@gmail.com', 'Dương', 'Trần', 'Trần Đại Dương', 'avatarDefault.png', 'coverImageDefault.png', '$2a$12$Xq4zp77n9017vz3FZ55GZOR6IqM/rjojmma5TSOKAxwKwPYeN8VV2', 'Active', 3, NULL, NULL, NULL, NULL, '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(15, 'nguoidung6@gmail.com', 'Quân', 'Tăng', 'Quân Tăng Đặng', '1700197718667-365002622.png', '1700198791177-291609738.png', '$2a$12$Xq4zp77n9017vz3FZ55GZOR6IqM/rjojmma5TSOKAxwKwPYeN8VV2', 'Active', 1, NULL, NULL, NULL, NULL, '2023-09-24 22:03:51', '2023-11-17 12:26:31'),
(16, 'nguoidung7@gmail.com', 'Tài', 'Nhữ', 'Nhữ Tài', '1700390879093-983374499.png', '1700390904574-529441937.png', '$2a$12$Xq4zp77n9017vz3FZ55GZOR6IqM/rjojmma5TSOKAxwKwPYeN8VV2', 'Active', 1, NULL, NULL, NULL, NULL, '2023-09-24 22:03:51', '2023-11-19 17:48:24'),
(17, 'nguoidung8@gmail.com', 'Anh', 'Võ', 'Võ Mai Anh', 'avatarDefault.png', 'coverImageDefault.png', '$2a$12$Xq4zp77n9017vz3FZ55GZOR6IqM/rjojmma5TSOKAxwKwPYeN8VV2', 'Active', 1, NULL, NULL, NULL, NULL, '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(18, 'nguoidung9@gmail.com', 'Bảo', 'Nguyễn', 'Bảo Nguyễn', 'avatarDefault.png', 'coverImageDefault.png', '$2a$12$Xq4zp77n9017vz3FZ55GZOR6IqM/rjojmma5TSOKAxwKwPYeN8VV2', 'Active', 1, NULL, NULL, NULL, NULL, '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(19, 'tangquoctuan2003@gmail.com', 'Tuấn', 'Tăng', 'Tăng Quốc Tuấn', 'avatarDefault.png', 'coverImageDefault.png', '$2a$12$Xq4zp77n9017vz3FZ55GZOR6IqM/rjojmma5TSOKAxwKwPYeN8VV2', 'Active', 2, NULL, NULL, NULL, NULL, '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(20, 'tienphan09098@gmail.com', 'Tiến', 'Phan', 'Tiến Tiến', 'avatarDefault.png', 'coverImageDefault.png', '$2a$12$Xq4zp77n9017vz3FZ55GZOR6IqM/rjojmma5TSOKAxwKwPYeN8VV2', 'Active', 2, NULL, NULL, NULL, NULL, '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(21, 'tienphatng.693@gmail.com', 'Phát', 'Nguyễn', 'Phát Nguyễn', 'avatarDefault.png', 'coverImageDefault.png', '$2a$12$Xq4zp77n9017vz3FZ55GZOR6IqM/rjojmma5TSOKAxwKwPYeN8VV2', 'Active', 2, NULL, NULL, NULL, NULL, '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(24, 'nguoidung100@gmail.com', 'Bonnie', 'Green', 'Bonnie Green', 'avatarDefault.jpg', 'coverImageDefault.jpg', '$2a$12$6u4y7FuM9Qis9u3v5QLdrOaiS1RjHY8jvJedwYeBOAJsLwEjrL6JW', 'Active', 1, NULL, NULL, NULL, '0909241888', '2023-11-13 10:46:04', '2023-11-13 10:46:04');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `resetpasswordtokens`
--
ALTER TABLE `resetpasswordtokens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `notifications`
--
ALTER TABLE `notifications`
  ADD CONSTRAINT `notifications_ibfk_1` FOREIGN KEY (`userSend`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `notifications_ibfk_2` FOREIGN KEY (`userReceive`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `notifications_ibfk_3` FOREIGN KEY (`post`) REFERENCES `posts` (`id`);

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`userConfirm`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `posts_ibfk_2` FOREIGN KEY (`userPost`) REFERENCES `users` (`id`);

--
-- Constraints for table `reports`
--
ALTER TABLE `reports`
  ADD CONSTRAINT `reports_ibfk_1` FOREIGN KEY (`user`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `reports_ibfk_2` FOREIGN KEY (`post`) REFERENCES `posts` (`id`);

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
  ADD CONSTRAINT `reviews_ibfk_2` FOREIGN KEY (`post`) REFERENCES `posts` (`id`);

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
