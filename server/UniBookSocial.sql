-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 03, 2023 at 11:05 AM
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
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `email` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `role` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`email`, `password`, `status`, `role`, `createdAt`, `updatedAt`) VALUES
('anhhuy2452003@gmail.com', '$2a$12$Xq4zp77n9017vz3FZ55GZOR6IqM/rjojmma5TSOKAxwKwPYeN8VV2', 'Locked', 1, '2023-09-25 09:42:18', '2023-09-25 09:42:18'),
('HHH@gmail.com', '$2a$12$Xq4zp77n9017vz3FZ55GZOR6IqM/rjojmma5TSOKAxwKwPYeN8VV2', 'working', 1, '2023-09-29 19:06:01', '2023-09-29 19:06:01'),
('hongbao2003@gmail.com', '$2a$12$Xq4zp77n9017vz3FZ55GZOR6IqM/rjojmma5TSOKAxwKwPYeN8VV2', 'Deactivated', 1, '2023-09-25 09:42:18', '2023-09-25 09:42:18'),
('langueofdie@gmail.com', '$2a$12$Xq4zp77n9017vz3FZ55GZOR6IqM/rjojmma5TSOKAxwKwPYeN8VV2', 'Active', 3, '2023-09-25 09:42:18', '2023-09-25 09:42:18'),
('nguoidung10@gmail.com', '$2a$12$Xq4zp77n9017vz3FZ55GZOR6IqM/rjojmma5TSOKAxwKwPYeN8VV2', 'Locked', 1, '2023-09-25 09:42:18', '2023-09-25 09:42:18'),
('nguoidung11@gmail.com', '$2a$12$Xq4zp77n9017vz3FZ55GZOR6IqM/rjojmma5TSOKAxwKwPYeN8VV2', 'Locked', 1, '2023-09-25 09:42:18', '2023-09-25 09:42:18'),
('nguoidung12@gmail.com', '$2a$12$Xq4zp77n9017vz3FZ55GZOR6IqM/rjojmma5TSOKAxwKwPYeN8VV2', 'Deactivated', 1, '2023-09-25 09:42:18', '2023-09-25 09:42:18'),
('nguoidung13@gmail.com', '$2a$12$Xq4zp77n9017vz3FZ55GZOR6IqM/rjojmma5TSOKAxwKwPYeN8VV2', 'Locked', 1, '2023-09-25 09:42:18', '2023-09-25 09:42:18'),
('nguoidung14@gmail.com', '$2a$12$Xq4zp77n9017vz3FZ55GZOR6IqM/rjojmma5TSOKAxwKwPYeN8VV2', 'Active', 1, '2023-09-25 09:42:18', '2023-09-25 09:42:18'),
('nguoidung1@gmail.com', '$2a$12$Xq4zp77n9017vz3FZ55GZOR6IqM/rjojmma5TSOKAxwKwPYeN8VV2', 'Locked', 1, '2023-09-25 09:42:18', '2023-09-25 09:42:18'),
('nguoidung2@gmail.com', '$2a$12$Xq4zp77n9017vz3FZ55GZOR6IqM/rjojmma5TSOKAxwKwPYeN8VV2', 'Active', 1, '2023-09-25 09:42:18', '2023-09-25 09:42:18'),
('nguoidung3@gmail.com', '$2a$12$Xq4zp77n9017vz3FZ55GZOR6IqM/rjojmma5TSOKAxwKwPYeN8VV2', 'Locked', 1, '2023-09-25 09:42:18', '2023-09-25 09:42:18'),
('nguoidung4@gmail.com', '$2a$12$Xq4zp77n9017vz3FZ55GZOR6IqM/rjojmma5TSOKAxwKwPYeN8VV2', 'Deactivated', 1, '2023-09-25 09:42:18', '2023-09-25 09:42:18'),
('nguoidung5@gmail.com', '$2a$12$Xq4zp77n9017vz3FZ55GZOR6IqM/rjojmma5TSOKAxwKwPYeN8VV2', 'Locked', 1, '2023-09-25 09:42:18', '2023-09-25 09:42:18'),
('nguoidung6@gmail.com', '$2a$12$Xq4zp77n9017vz3FZ55GZOR6IqM/rjojmma5TSOKAxwKwPYeN8VV2', 'Deactivated', 1, '2023-09-25 09:42:18', '2023-09-25 09:42:18'),
('nguoidung7@gmail.com', '$2a$12$Xq4zp77n9017vz3FZ55GZOR6IqM/rjojmma5TSOKAxwKwPYeN8VV2', 'Locked', 1, '2023-09-25 09:42:18', '2023-09-25 09:42:18'),
('nguoidung8@gmail.com', '$2a$12$Xq4zp77n9017vz3FZ55GZOR6IqM/rjojmma5TSOKAxwKwPYeN8VV2', 'Active', 1, '2023-09-25 09:42:18', '2023-09-25 09:42:18'),
('nguoidung9@gmail.com', '$2a$12$Xq4zp77n9017vz3FZ55GZOR6IqM/rjojmma5TSOKAxwKwPYeN8VV2', 'Active', 1, '2023-09-25 09:42:18', '2023-09-25 09:42:18'),
('tangquoctuan2003@gmail.com', '$2a$12$Xq4zp77n9017vz3FZ55GZOR6IqM/rjojmma5TSOKAxwKwPYeN8VV2', 'Active', 1, '2023-09-25 09:42:18', '2023-09-25 09:42:18'),
('tienphan09098@gmail.com', '$2a$12$Xq4zp77n9017vz3FZ55GZOR6IqM/rjojmma5TSOKAxwKwPYeN8VV2', 'Deactivated', 1, '2023-09-25 09:42:18', '2023-09-25 09:42:18'),
('tienphatng.693@gmail.com', '$2a$12$Xq4zp77n9017vz3FZ55GZOR6IqM/rjojmma5TSOKAxwKwPYeN8VV2', 'Active', 2, '2023-09-25 09:42:18', '2023-09-25 09:42:18');

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `id` int NOT NULL,
  `content` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `typeContact` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `user` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`id`, `content`, `typeContact`, `user`, `createdAt`, `updatedAt`) VALUES
(1, '0909990001', 'Zalo', 'nguoidung1@gmail.com', '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(2, 'https://www.facebook.com/profile.php?id=0001', 'Facebook', 'nguoidung1@gmail.com', '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(3, '0909990002', 'Zalo', 'nguoidung2@gmail.com', '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(4, 'https://www.facebook.com/profile.php?id=0002', 'Facebook', 'nguoidung2@gmail.com', '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(5, '0909990003', 'Zalo', 'nguoidung3@gmail.com', '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(6, 'https://www.facebook.com/profile.php?id=0003', 'Facebook', 'nguoidung3@gmail.com', '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(7, '0909990004', 'Zalo', 'nguoidung4@gmail.com', '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(8, 'https://www.facebook.com/profile.php?id=0004', 'Facebook', 'nguoidung4@gmail.com', '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(9, '0909990005', 'Zalo', 'nguoidung5@gmail.com', '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(10, 'https://www.facebook.com/profile.php?id=0005', 'Facebook', 'nguoidung5@gmail.com', '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(11, '0909990006', 'Zalo', 'nguoidung6@gmail.com', '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(12, 'https://www.facebook.com/profile.php?id=0006', 'Facebook', 'nguoidung6@gmail.com', '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(13, '0909990007', 'Zalo', 'nguoidung7@gmail.com', '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(14, 'https://www.facebook.com/profile.php?id=0007', 'Facebook', 'nguoidung7@gmail.com', '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(15, '0909990008', 'Zalo', 'nguoidung8@gmail.com', '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(16, 'https://www.facebook.com/profile.php?id=0008', 'Facebook', 'nguoidung8@gmail.com', '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(17, '0909990009', 'Zalo', 'nguoidung9@gmail.com', '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(18, 'https://www.facebook.com/profile.php?id=0010', 'Facebook', 'nguoidung10@gmail.com', '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(19, 'https://www.facebook.com/profile.php?id=0011', 'Facebook', 'nguoidung11@gmail.com', '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(20, 'https://www.facebook.com/profile.php?id=0012', 'Facebook', 'nguoidung12@gmail.com', '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(21, 'https://www.facebook.com/profile.php?id=0013', 'Facebook', 'nguoidung13@gmail.com', '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(22, 'https://www.facebook.com/profile.php?id=0014', 'Facebook', 'nguoidung14@gmail.com', '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(23, '0909991001', 'Zalo', 'hongbao2003@gmail.com', '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(24, 'https://www.facebook.com/profile.php?id=100010578827488', 'Facebook', 'hongbao2003@gmail.com', '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(25, '0909991002', 'Zalo', 'tangquoctuan2003@gmail.com', '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(26, 'https://www.facebook.com/tikjuti.3723', 'Facebook', 'tangquoctuan2003@gmail.com', '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(27, '0909991003', 'Zalo', 'tienphatng.693@gmail.com', '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(28, 'https://www.facebook.com/jack.willam2003', 'Facebook', 'tienphatng.693@gmail.com', '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(29, '0909991004', 'Zalo', 'anhhuy2452003@gmail.com', '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(30, 'https://www.facebook.com/lehuyanh.2405', 'Facebook', 'anhhuy2452003@gmail.com', '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(31, '0909991005', 'Zalo', 'tienphan09098@gmail.com', '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(32, 'https://www.facebook.com/profile.php?id=100009295230748', 'Facebook', 'tienphan09098@gmail.com', '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(33, '0909991006', 'Zalo', 'langueofdie@gmail.com', '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(34, 'https://www.facebook.com/profile.php?id=100027954192211', 'Facebook', 'langueofdie@gmail.com', '2023-09-24 22:03:51', '2023-09-24 22:03:51');

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE `notifications` (
  `id` int NOT NULL,
  `isSeen` tinyint(1) NOT NULL,
  `typeNoti` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `content` text COLLATE utf8mb4_general_ci,
  `userSend` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `userReceive` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `post` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` int NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
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
  `id` int NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `price` float NOT NULL,
  `mainImage` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `description` text COLLATE utf8mb4_general_ci,
  `status` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `isNew` tinyint(1) NOT NULL,
  `isGeneralSubject` tinyint(1) NOT NULL,
  `userConfirm` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `userPost` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `title`, `price`, `mainImage`, `description`, `status`, `isNew`, `isGeneralSubject`, `userConfirm`, `userPost`, `createdAt`, `updatedAt`) VALUES
(1, 'Kinh tế chính trị', 15000, 'mainImage.png', 'Tài liệu tham khảo', 'Unconfirm', 1, 0, NULL, 'hongbao2003@gmail.com', '2023-09-25 02:02:24', '2023-09-25 02:02:24'),
(2, 'Chủ nghĩa xã hội khoa học', 30000, 'mainImage.png', 'Tài liệu tham khảo', 'Unconfirm', 1, 0, NULL, 'nguoidung10@gmail.com', '2023-09-25 02:02:24', '2023-09-25 02:02:24'),
(3, 'Kỹ thuật lập trình', 20000, 'mainImage.png', 'Tài liệu tham khảo', 'Unconfirm', 1, 1, NULL, 'nguoidung3@gmail.com', '2023-09-25 02:02:24', '2023-09-25 02:02:24'),
(4, 'GDQP và AN I', 10000, 'mainImage.png', 'Tài liệu học tập', 'Unconfirm', 1, 0, NULL, 'tangquoctuan2003@gmail.com', '2023-09-25 02:02:24', '2023-09-25 02:02:24'),
(5, 'Triết học Mac-Lenin', 25000, 'mainImage.png', 'Tài liệu tham khảo', 'Unconfirm', 0, 0, NULL, 'nguoidung12@gmail.com', '2023-09-25 02:02:24', '2023-09-25 02:02:24'),
(6, 'Kinh tế vĩ mô', 20000, 'mainImage.png', 'Tài liệu tham khảo', 'Unconfirm', 1, 1, NULL, 'tienphatng.693@gmail.com', '2023-09-25 02:02:24', '2023-09-25 02:02:24'),
(7, 'Tiếng Việt thực hành', 15000, 'mainImage.png', 'Tài liệu tham khảo', 'Unconfirm', 0, 1, NULL, 'nguoidung9@gmail.com', '2023-09-25 02:02:24', '2023-09-25 02:02:24'),
(8, 'Tư tưởng Hồ Chí Minh', 15000, 'mainImage.png', 'Tài liệu tham khảo', 'Unconfirm', 0, 0, NULL, 'nguoidung3@gmail.com', '2023-09-25 02:02:24', '2023-09-25 02:02:24'),
(9, 'Kinh tế lượng', 15000, 'mainImage.png', 'Tài liệu tham khảo', 'Unconfirm', 0, 1, NULL, 'nguoidung5@gmail.com', '2023-09-25 02:02:24', '2023-09-25 02:02:24'),
(10, 'Lịch sử Đảng cộng sản Việt Nam', 35000, 'mainImage.png', 'Tài liệu tham khảo', 'Unconfirm', 1, 0, NULL, 'nguoidung12@gmail.com', '2023-09-25 02:02:24', '2023-09-25 02:02:24');

-- --------------------------------------------------------

--
-- Table structure for table `reports`
--

CREATE TABLE `reports` (
  `user` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `post` int NOT NULL,
  `content` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `reports`
--

INSERT INTO `reports` (`user`, `post`, `content`, `createdAt`, `updatedAt`) VALUES
('hongbao2003@gmail.com', 5, 'Sách bị rách', '2023-09-25 02:16:18', '2023-09-25 02:16:18'),
('nguoidung10@gmail.com', 5, 'Tài liệu giả', '2023-09-25 02:18:40', '2023-09-25 02:18:40'),
('nguoidung2@gmail.com', 9, 'Tài liệu giao không đúng với ảnh', '2023-09-25 02:19:13', '2023-09-25 02:19:13'),
('nguoidung3@gmail.com', 7, 'Tài liệu mất trang', '2023-09-25 02:20:52', '2023-09-25 02:20:52'),
('nguoidung8@gmail.com', 2, 'Tài liệu hỏng bìa với mấy trang', '2023-09-25 02:21:08', '2023-09-25 02:21:08');

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` int NOT NULL,
  `numStars` int NOT NULL,
  `content` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `user` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `post` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`id`, `numStars`, `content`, `user`, `post`, `createdAt`, `updatedAt`) VALUES
(17, 3, 'Mấy cái note trong sách chữ hơi khó đọc', 'hongbao2003@gmail.com', 1, '2023-09-25 10:26:26', '2023-09-25 10:26:26'),
(18, 4, 'Tài liệu còn khá mới :>', 'anhhuy2452003@gmail.com', 5, '2023-09-25 10:26:26', '2023-09-25 10:26:26'),
(19, 1, 'Mua xong biết ngoài kia bán sách mới giá 30000 như post này :)', 'tienphan09098@gmail.com', 2, '2023-09-25 10:26:26', '2023-09-25 10:26:26'),
(20, 4, 'Còn tốt', 'tangquoctuan2003@gmail.com', 2, '2023-09-25 10:26:26', '2023-09-25 10:26:26'),
(21, 4, 'Note hơi khó đọc thật', 'tienphatng.693@gmail.com', 1, '2023-09-25 10:26:26', '2023-09-25 10:26:26'),
(22, 2, 'Tài liệu note tùm lum quá mà còn khó đọc nữa', 'hongbao2003@gmail.com', 9, '2023-09-25 10:26:26', '2023-09-25 10:26:26'),
(23, 5, 'Nhờ cuốn này mà tui đã nhớ cách nói tiếng việt :3', 'langueofdie@gmail.com', 7, '2023-09-25 10:26:26', '2023-09-25 10:26:26'),
(24, 3, 'Tài liệu bị rách nhưng vẫn còn sử dụng được', 'nguoidung2@gmail.com', 5, '2023-09-25 10:26:26', '2023-09-25 10:26:26'),
(25, 5, 'Phù hợp với giá tiền', 'nguoidung14@gmail.com', 7, '2023-09-25 10:26:26', '2023-09-25 10:26:26'),
(26, 3, 'Hơi tả tơi nhưng vẫn dùng được', 'nguoidung5@gmail.com', 9, '2023-09-25 10:26:26', '2023-09-25 10:26:26'),
(27, 2, 'Tài liệu gần rách đã vậy note còn khó đọc', 'tienphan09098@gmail.com', 8, '2023-09-25 10:26:26', '2023-09-25 10:26:26'),
(28, 4, 'Tài liệu còn tốt', 'hongbao2003@gmail.com', 10, '2023-09-25 10:26:26', '2023-09-25 10:26:26'),
(29, 3, 'Tạm được', 'nguoidung7@gmail.com', 8, '2023-09-25 10:26:26', '2023-09-25 10:26:26'),
(30, 3, 'Giá hơi cao với sách pass', 'nguoidung5@gmail.com', 10, '2023-09-25 10:26:26', '2023-09-25 10:26:26'),
(31, 5, 'Phù hợp với túi tiền', 'hongbao2003@gmail.com', 4, '2023-09-25 10:26:26', '2023-09-25 10:26:26'),
(32, 4, 'Giá ngon :>', 'tangquoctuan2003@gmail.com', 4, '2023-09-25 10:26:26', '2023-09-25 10:26:26');

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
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
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
  `name` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20230923090340-create-user.js'),
('20230923090658-create-contact.js'),
('20230923091137-create-role.js'),
('20230923091237-create-account.js'),
('20230923092743-create-notification.js'),
('20230923095425-create-post.js'),
('20230923115216-create-review.js'),
('20230923115953-create-report.js'),
('20230923124254-create-permission.js'),
('20230923124357-create-role-permission.js'),
('20231001112916-AddCollumnNofication.js'),
('20231003105650-AddCollumnUsers.js');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `email` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `firstName` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `lastName` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `avatar` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `coverImage` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `linkFacebook` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `phoneNumber` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `linkZalo` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `linkInstagram` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`email`, `firstName`, `lastName`, `username`, `avatar`, `coverImage`, `createdAt`, `updatedAt`, `linkFacebook`, `phoneNumber`, `linkZalo`, `linkInstagram`) VALUES
('anhhuy2452003@gmail.com', 'Huy', 'Nguyễn', 'Anh Huy Nguyễn', 'avatarDefault.png', 'coverImageDefault.png', '2023-09-24 22:03:51', '2023-09-24 22:03:51', NULL, NULL, NULL, NULL),
('HHH@gmail.com', 'BB', 'Nguyen Van', 'BBNguyen Van', 'avatarDefault.png', 'coverImageDefault.png', '2023-09-29 19:06:01', '2023-09-29 19:06:01', NULL, NULL, NULL, NULL),
('hongbao2003@gmail.com', 'Bảo', 'Bùi', 'Bùi Bảo', 'avatarDefault.png', 'coverImageDefault.png', '2023-09-24 22:03:51', '2023-09-24 22:03:51', NULL, NULL, NULL, NULL),
('langueofdie@gmail.com', 'Nam', 'Trần', 'Trần Nam', 'avatarDefault.png', 'coverImageDefault.png', '2023-09-24 22:03:51', '2023-09-24 22:03:51', NULL, NULL, NULL, NULL),
('nguoidung10@gmail.com', 'Bảo', 'Võ', 'Gia Bảo', 'avatarDefault.png', 'coverImageDefault.png', '2023-09-24 22:03:51', '2023-09-24 22:03:51', NULL, NULL, NULL, NULL),
('nguoidung11@gmail.com', 'Cảnh', 'Mai', 'Cảnh Mai', 'avatarDefault.png', 'coverImageDefault.png', '2023-09-24 22:03:51', '2023-09-24 22:03:51', NULL, NULL, NULL, NULL),
('nguoidung12@gmail.com', 'Công', 'Nguyễn', 'Chí Công Nguyễn', 'avatarDefault.png', 'coverImageDefault.png', '2023-09-24 22:03:51', '2023-09-24 22:03:51', NULL, NULL, NULL, NULL),
('nguoidung13@gmail.com', 'Danh', 'Huỳnh', 'Thanh Danh', 'avatarDefault.png', 'coverImageDefault.png', '2023-09-24 22:03:51', '2023-09-24 22:03:51', NULL, NULL, NULL, NULL),
('nguoidung14@gmail.com', 'Dũng', 'Huỳnh', 'Tiến Dũng', 'avatarDefault.png', 'coverImageDefault.png', '2023-09-24 22:03:51', '2023-09-24 22:03:51', NULL, NULL, NULL, NULL),
('nguoidung1@gmail.com', 'Sang', 'Nguyễn', 'Sang Nguyễn', 'avatarDefault.png', 'coverImageDefault.png', '2023-09-24 22:03:51', '2023-09-24 22:03:51', NULL, NULL, NULL, NULL),
('nguoidung2@gmail.com', 'Đình', 'Lê', 'Đình Đình', 'avatarDefault.png', 'coverImageDefault.png', '2023-09-24 22:03:51', '2023-09-24 22:03:51', NULL, NULL, NULL, NULL),
('nguoidung3@gmail.com', 'Minh', 'Nguyễn', 'Nguyễn Minh', 'avatarDefault.png', 'coverImageDefault.png', '2023-09-24 22:03:51', '2023-09-24 22:03:51', NULL, NULL, NULL, NULL),
('nguoidung4@gmail.com', 'Duy', 'Trần', 'Duy Trần', 'avatarDefault.png', 'coverImageDefault.png', '2023-09-24 22:03:51', '2023-09-24 22:03:51', NULL, NULL, NULL, NULL),
('nguoidung5@gmail.com', 'Dương', 'Trần', 'Trần Đại Dương', 'avatarDefault.png', 'coverImageDefault.png', '2023-09-24 22:03:51', '2023-09-24 22:03:51', NULL, NULL, NULL, NULL),
('nguoidung6@gmail.com', 'Quân', 'Tăng', 'Quân Tăng Đặng', 'avatarDefault.png', 'coverImageDefault.png', '2023-09-24 22:03:51', '2023-09-24 22:03:51', NULL, NULL, NULL, NULL),
('nguoidung7@gmail.com', 'Tài', 'Nhữ', 'Nhữ Tài', 'avatarDefault.png', 'coverImageDefault.png', '2023-09-24 22:03:51', '2023-09-24 22:03:51', NULL, NULL, NULL, NULL),
('nguoidung8@gmail.com', 'Anh', 'Võ', 'Võ Mai Anh', 'avatarDefault.png', 'coverImageDefault.png', '2023-09-24 22:03:51', '2023-09-24 22:03:51', NULL, NULL, NULL, NULL),
('nguoidung9@gmail.com', 'Bảo', 'Nguyễn', 'Bảo Nguyễn', 'avatarDefault.png', 'coverImageDefault.png', '2023-09-24 22:03:51', '2023-09-24 22:03:51', NULL, NULL, NULL, NULL),
('tangquoctuan2003@gmail.com', 'Tuấn', 'Tăng', 'Tăng Quốc Tuấn', 'avatarDefault.png', 'coverImageDefault.png', '2023-09-24 22:03:51', '2023-09-24 22:03:51', NULL, NULL, NULL, NULL),
('tienphan09098@gmail.com', 'Tiến', 'Phan', 'Tiến Tiến', 'avatarDefault.png', 'coverImageDefault.png', '2023-09-24 22:03:51', '2023-09-24 22:03:51', NULL, NULL, NULL, NULL),
('tienphatng.693@gmail.com', 'Phát', 'Nguyễn', 'Phát Nguyễn', 'avatarDefault.png', 'coverImageDefault.png', '2023-09-24 22:03:51', '2023-09-24 22:03:51', NULL, NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`email`),
  ADD KEY `role` (`role`);

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user` (`user`);

--
-- Indexes for table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userSend` (`userSend`),
  ADD KEY `userReceive` (`userReceive`),
  ADD KEY `Notifications_post_foreign_idx` (`post`);

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
  ADD PRIMARY KEY (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `accounts`
--
ALTER TABLE `accounts`
  ADD CONSTRAINT `accounts_ibfk_1` FOREIGN KEY (`email`) REFERENCES `users` (`email`),
  ADD CONSTRAINT `accounts_ibfk_2` FOREIGN KEY (`role`) REFERENCES `roles` (`id`);

--
-- Constraints for table `contacts`
--
ALTER TABLE `contacts`
  ADD CONSTRAINT `contacts_ibfk_1` FOREIGN KEY (`user`) REFERENCES `users` (`email`);

--
-- Constraints for table `notifications`
--
ALTER TABLE `notifications`
  ADD CONSTRAINT `notifications_ibfk_1` FOREIGN KEY (`userSend`) REFERENCES `users` (`email`),
  ADD CONSTRAINT `notifications_ibfk_2` FOREIGN KEY (`userReceive`) REFERENCES `users` (`email`),
  ADD CONSTRAINT `Notifications_post_foreign_idx` FOREIGN KEY (`post`) REFERENCES `posts` (`id`);

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`userConfirm`) REFERENCES `users` (`email`),
  ADD CONSTRAINT `posts_ibfk_2` FOREIGN KEY (`userPost`) REFERENCES `users` (`email`);

--
-- Constraints for table `reports`
--
ALTER TABLE `reports`
  ADD CONSTRAINT `reports_ibfk_1` FOREIGN KEY (`user`) REFERENCES `users` (`email`),
  ADD CONSTRAINT `reports_ibfk_2` FOREIGN KEY (`post`) REFERENCES `posts` (`id`);

--
-- Constraints for table `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`user`) REFERENCES `users` (`email`),
  ADD CONSTRAINT `reviews_ibfk_2` FOREIGN KEY (`post`) REFERENCES `posts` (`id`);

--
-- Constraints for table `rolepermissions`
--
ALTER TABLE `rolepermissions`
  ADD CONSTRAINT `rolepermissions_ibfk_1` FOREIGN KEY (`permission`) REFERENCES `permissions` (`id`),
  ADD CONSTRAINT `rolepermissions_ibfk_2` FOREIGN KEY (`role`) REFERENCES `roles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
