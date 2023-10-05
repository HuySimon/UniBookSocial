-- Active: 1680850809935@@127.0.0.1@3306@unibooksocial
-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 05, 2023 at 10:35 AM
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
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `firstName` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `lastName` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `avatar` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `coverImage` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `role` int NOT NULL,
  `linkFacebook` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `linkZalo` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `linkInstagram` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `phoneNumber` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `firstName`, `lastName`, `username`, `avatar`, `coverImage`, `password`, `status`, `role`, `linkFacebook`, `linkZalo`, `linkInstagram`, `phoneNumber`, `createdAt`, `updatedAt`) VALUES
(1, 'anhhuy2452003@gmail.com', 'Huy', 'Nguyễn', 'Anh Huy Nguyễn', 'avatarDefault.png', 'coverImageDefault.png', '$2a$12$Xq4zp77n9017vz3FZ55GZOR6IqM/rjojmma5TSOKAxwKwPYeN8VV2', 'Active', 1, NULL, NULL, NULL, NULL, '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(2, 'HHH@gmail.com', 'BB', 'Nguyen Van', 'BBNguyen Van', 'avatarDefault.png', 'coverImageDefault.png', '$2a$12$Xq4zp77n9017vz3FZ55GZOR6IqM/rjojmma5TSOKAxwKwPYeN8VV2', 'Active', 1, NULL, NULL, NULL, NULL, '2023-09-29 19:06:01', '2023-09-29 19:06:01'),
(3, 'hongbao2003@gmail.com', 'Bảo', 'Bùi', 'Bùi Bảo', 'avatarDefault.png', 'coverImageDefault.png', '$2a$12$Xq4zp77n9017vz3FZ55GZOR6IqM/rjojmma5TSOKAxwKwPYeN8VV2', 'Active', 1, NULL, NULL, NULL, NULL, '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(4, 'langueofdie@gmail.com', 'Nam', 'Trần', 'Trần Nam', 'avatarDefault.png', 'coverImageDefault.png', '$2a$12$Xq4zp77n9017vz3FZ55GZOR6IqM/rjojmma5TSOKAxwKwPYeN8VV2', 'Active', 1, NULL, NULL, NULL, NULL, '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(5, 'nguoidung10@gmail.com', 'Bảo', 'Võ', 'Gia Bảo', 'avatarDefault.png', 'coverImageDefault.png', '$2a$12$Xq4zp77n9017vz3FZ55GZOR6IqM/rjojmma5TSOKAxwKwPYeN8VV2', 'Active', 1, NULL, NULL, NULL, NULL, '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(6, 'nguoidung11@gmail.com', 'Cảnh', 'Mai', 'Cảnh Mai', 'avatarDefault.png', 'coverImageDefault.png', '$2a$12$Xq4zp77n9017vz3FZ55GZOR6IqM/rjojmma5TSOKAxwKwPYeN8VV2', 'Active', 1, NULL, NULL, NULL, NULL, '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(7, 'nguoidung12@gmail.com', 'Công', 'Nguyễn', 'Chí Công Nguyễn', 'avatarDefault.png', 'coverImageDefault.png', '$2a$12$Xq4zp77n9017vz3FZ55GZOR6IqM/rjojmma5TSOKAxwKwPYeN8VV2', 'Active', 1, NULL, NULL, NULL, NULL, '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(8, 'nguoidung13@gmail.com', 'Danh', 'Huỳnh', 'Thanh Danh', 'avatarDefault.png', 'coverImageDefault.png', '$2a$12$Xq4zp77n9017vz3FZ55GZOR6IqM/rjojmma5TSOKAxwKwPYeN8VV2', 'Active', 1, NULL, NULL, NULL, NULL, '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(9, 'nguoidung14@gmail.com', 'Dũng', 'Huỳnh', 'Tiến Dũng', 'avatarDefault.png', 'coverImageDefault.png', '$2a$12$Xq4zp77n9017vz3FZ55GZOR6IqM/rjojmma5TSOKAxwKwPYeN8VV2', 'Active', 1, NULL, NULL, NULL, NULL, '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(10, 'nguoidung1@gmail.com', 'Sang', 'Nguyễn', 'Sang Nguyễn', 'avatarDefault.png', 'coverImageDefault.png', '$2a$12$Xq4zp77n9017vz3FZ55GZOR6IqM/rjojmma5TSOKAxwKwPYeN8VV2', 'Active', 1, NULL, NULL, NULL, NULL, '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(11, 'nguoidung2@gmail.com', 'Đình', 'Lê', 'Đình Đình', 'avatarDefault.png', 'coverImageDefault.png', '$2a$12$Xq4zp77n9017vz3FZ55GZOR6IqM/rjojmma5TSOKAxwKwPYeN8VV2', 'Active', 1, NULL, NULL, NULL, NULL, '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(12, 'nguoidung3@gmail.com', 'Minh', 'Nguyễn', 'Nguyễn Minh', 'avatarDefault.png', 'coverImageDefault.png', '$2a$12$Xq4zp77n9017vz3FZ55GZOR6IqM/rjojmma5TSOKAxwKwPYeN8VV2', 'Active', 1, NULL, NULL, NULL, NULL, '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(13, 'nguoidung4@gmail.com', 'Duy', 'Trần', 'Duy Trần', 'avatarDefault.png', 'coverImageDefault.png', '$2a$12$Xq4zp77n9017vz3FZ55GZOR6IqM/rjojmma5TSOKAxwKwPYeN8VV2', 'Active', 1, NULL, NULL, NULL, NULL, '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(14, 'nguoidung5@gmail.com', 'Dương', 'Trần', 'Trần Đại Dương', 'avatarDefault.png', 'coverImageDefault.png', '$2a$12$Xq4zp77n9017vz3FZ55GZOR6IqM/rjojmma5TSOKAxwKwPYeN8VV2', 'Active', 1, NULL, NULL, NULL, NULL, '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(15, 'nguoidung6@gmail.com', 'Quân', 'Tăng', 'Quân Tăng Đặng', 'avatarDefault.png', 'coverImageDefault.png', '$2a$12$Xq4zp77n9017vz3FZ55GZOR6IqM/rjojmma5TSOKAxwKwPYeN8VV2', 'Active', 1, NULL, NULL, NULL, NULL, '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(16, 'nguoidung7@gmail.com', 'Tài', 'Nhữ', 'Nhữ Tài', 'avatarDefault.png', 'coverImageDefault.png', '$2a$12$Xq4zp77n9017vz3FZ55GZOR6IqM/rjojmma5TSOKAxwKwPYeN8VV2', 'Active', 1, NULL, NULL, NULL, NULL, '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(17, 'nguoidung8@gmail.com', 'Anh', 'Võ', 'Võ Mai Anh', 'avatarDefault.png', 'coverImageDefault.png', '$2a$12$Xq4zp77n9017vz3FZ55GZOR6IqM/rjojmma5TSOKAxwKwPYeN8VV2', 'Active', 1, NULL, NULL, NULL, NULL, '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(18, 'nguoidung9@gmail.com', 'Bảo', 'Nguyễn', 'Bảo Nguyễn', 'avatarDefault.png', 'coverImageDefault.png', '$2a$12$Xq4zp77n9017vz3FZ55GZOR6IqM/rjojmma5TSOKAxwKwPYeN8VV2', 'Active', 1, NULL, NULL, NULL, NULL, '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(19, 'tangquoctuan2003@gmail.com', 'Tuấn', 'Tăng', 'Tăng Quốc Tuấn', 'avatarDefault.png', 'coverImageDefault.png', '$2a$12$Xq4zp77n9017vz3FZ55GZOR6IqM/rjojmma5TSOKAxwKwPYeN8VV2', 'Active', 1, NULL, NULL, NULL, NULL, '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(20, 'tienphan09098@gmail.com', 'Tiến', 'Phan', 'Tiến Tiến', 'avatarDefault.png', 'coverImageDefault.png', '$2a$12$Xq4zp77n9017vz3FZ55GZOR6IqM/rjojmma5TSOKAxwKwPYeN8VV2', 'Active', 1, NULL, NULL, NULL, NULL, '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
(21, 'tienphatng.693@gmail.com', 'Phát', 'Nguyễn', 'Phát Nguyễn', 'avatarDefault.png', 'coverImageDefault.png', '$2a$12$Xq4zp77n9017vz3FZ55GZOR6IqM/rjojmma5TSOKAxwKwPYeN8VV2', 'Active', 1, NULL, NULL, NULL, NULL, '2023-09-24 22:03:51', '2023-09-24 22:03:51');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `role` (`role`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role`) REFERENCES `roles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
