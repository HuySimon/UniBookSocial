-- phpMyAdmin SQL Dump

-- version 5.2.0

-- https://www.phpmyadmin.net/

--

-- Host: localhost:3306
-- Generation Time: Oct 05, 2023 at 11:22 AM
-- Server version: 8.0.30

-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";

START TRANSACTION;

SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */

;

/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */

;

/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */

;

/*!40101 SET NAMES utf8mb4 */

;

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
  `typeNoti` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `content` text COLLATE utf8mb4_general_ci,
  `userSend` int NOT NULL,
  `userReceive` int NOT NULL,
  `post` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
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
  `userConfirm` int DEFAULT NULL,
  `userPost` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `title`, `price`, `mainImage`, `description`, `status`, `isNew`, `isGeneralSubject`, `userConfirm`, `userPost`, `createdAt`, `updatedAt`) VALUES
(1, 'Kinh tế chính trị', 15000, 'mainImage.png', 'Tài liệu tham khảo', 'Unconfirm', 1, 0, NULL, 5, '2023-09-25 02:02:24', '2023-09-25 02:02:24'),
(2, 'Chủ nghĩa xã hội khoa học', 30000, 'mainImage.png', 'Tài liệu tham khảo', 'Unconfirm', 1, 0, NULL, 5, '2023-09-25 02:02:24', '2023-09-25 02:02:24'),
(3, 'Kỹ thuật lập trình', 20000, 'mainImage.png', 'Tài liệu tham khảo', 'Unconfirm', 1, 1, NULL, 6, '2023-09-25 02:02:24', '2023-09-25 02:02:24'),
(4, 'GDQP và AN I', 10000, 'mainImage.png', 'Tài liệu học tập', 'Unconfirm', 1, 0, NULL, 7, '2023-09-25 02:02:24', '2023-09-25 02:02:24'),
(5, 'Triết học Mac-Lenin', 25000, 'mainImage.png', 'Tài liệu tham khảo', 'Unconfirm', 0, 0, NULL, 7, '2023-09-25 02:02:24', '2023-09-25 02:02:24'),
(6, 'Kinh tế vĩ mô', 20000, 'mainImage.png', 'Tài liệu tham khảo', 'Unconfirm', 1, 1, NULL, 8, '2023-09-25 02:02:24', '2023-09-25 02:02:24'),
(8, 'Tư tưởng Hồ Chí Minh', 15000, 'mainImage.png', 'Tài liệu tham khảo', 'Unconfirm', 0, 0, NULL, 9, '2023-09-25 02:02:24', '2023-09-25 02:02:24'),
(9, 'Kinh tế lượng', 15000, 'mainImage.png', 'Tài liệu tham khảo', 'Unconfirm', 0, 1, NULL, 10, '2023-09-25 02:02:24', '2023-09-25 02:02:24'),
(10, 'Lịch sử Đảng cộng sản Việt Nam', 35000, 'mainImage.png', 'Tài liệu tham khảo', 'Unconfirm', 1, 0, NULL, 11, '2023-09-25 02:02:24', '2023-09-25 02:02:24');

-- --------------------------------------------------------

--
-- Table structure for table `reports`
--

CREATE TABLE `reports` (
  `user` int NOT NULL,
  `post` int NOT NULL,
  `content` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` int NOT NULL,
  `numStars` int NOT NULL,
  `content` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `user` int NOT NULL,
  `post` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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

CREATE TABLE
    `users` (
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
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

--

-- Dumping data for table `users`

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
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

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
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

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

ALTER TABLE `notifications`
ADD
    CONSTRAINT `notifications_ibfk_1` FOREIGN KEY (`userSend`) REFERENCES `users` (`id`),
ADD
    CONSTRAINT `notifications_ibfk_2` FOREIGN KEY (`userReceive`) REFERENCES `users` (`id`),
ADD
    CONSTRAINT `notifications_ibfk_3` FOREIGN KEY (`post`) REFERENCES `posts` (`id`);

--

-- Constraints for table `posts`

--

ALTER TABLE `posts`
ADD
    CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`userConfirm`) REFERENCES `users` (`id`),
ADD
    CONSTRAINT `posts_ibfk_2` FOREIGN KEY (`userPost`) REFERENCES `users` (`id`);

--

-- Constraints for table `reports`

--

ALTER TABLE `reports`
ADD
    CONSTRAINT `reports_ibfk_1` FOREIGN KEY (`user`) REFERENCES `users` (`id`),
ADD
    CONSTRAINT `reports_ibfk_2` FOREIGN KEY (`post`) REFERENCES `posts` (`id`);

--

-- Constraints for table `reviews`

--

ALTER TABLE `reviews`
ADD
    CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`user`) REFERENCES `users` (`id`),
ADD
    CONSTRAINT `reviews_ibfk_2` FOREIGN KEY (`post`) REFERENCES `posts` (`id`);

--

-- Constraints for table `rolepermissions`

--

ALTER TABLE `rolepermissions`
ADD
    CONSTRAINT `rolepermissions_ibfk_1` FOREIGN KEY (`permission`) REFERENCES `permissions` (`id`),
ADD
    CONSTRAINT `rolepermissions_ibfk_2` FOREIGN KEY (`role`) REFERENCES `roles` (`id`);

--

-- Constraints for table `users`

--

ALTER TABLE `users`
ADD
    CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role`) REFERENCES `roles` (`id`);

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */

;

/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */

;

/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */

;