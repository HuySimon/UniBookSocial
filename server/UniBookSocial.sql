-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th9 25, 2023 lúc 05:27 AM
-- Phiên bản máy phục vụ: 10.4.28-MariaDB
-- Phiên bản PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `unibooksocial`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `accounts`
--

CREATE TABLE `accounts` (
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `role` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `accounts`
--

INSERT INTO `accounts` (`email`, `password`, `status`, `role`, `createdAt`, `updatedAt`) VALUES
('anhhuy2452003@gmail.com', '123456', 'Tạm khóa', 1, '2023-09-25 09:42:18', '2023-09-25 09:42:18'),
('hongbao2003@gmail.com', '123456', 'Tạm xóa', 1, '2023-09-25 09:42:18', '2023-09-25 09:42:18'),
('langueofdie@gmail.com', '123456', 'Bình thường', 1, '2023-09-25 09:42:18', '2023-09-25 09:42:18'),
('nguoidung10@gmail.com', '123456', 'Tạm khóa', 1, '2023-09-25 09:42:18', '2023-09-25 09:42:18'),
('nguoidung11@gmail.com', '123456', 'Tạm khóa', 1, '2023-09-25 09:42:18', '2023-09-25 09:42:18'),
('nguoidung12@gmail.com', '123456', 'Tạm xóa', 1, '2023-09-25 09:42:18', '2023-09-25 09:42:18'),
('nguoidung13@gmail.com', '123456', 'Tạm khóa', 1, '2023-09-25 09:42:18', '2023-09-25 09:42:18'),
('nguoidung14@gmail.com', '123456', 'Bình thường', 1, '2023-09-25 09:42:18', '2023-09-25 09:42:18'),
('nguoidung1@gmail.com', '123456', 'Tạm khóa', 1, '2023-09-25 09:42:18', '2023-09-25 09:42:18'),
('nguoidung2@gmail.com', '123456', 'Bình thường', 1, '2023-09-25 09:42:18', '2023-09-25 09:42:18'),
('nguoidung3@gmail.com', '123456', 'Tạm khóa', 1, '2023-09-25 09:42:18', '2023-09-25 09:42:18'),
('nguoidung4@gmail.com', '123456', 'Tạm xóa', 1, '2023-09-25 09:42:18', '2023-09-25 09:42:18'),
('nguoidung5@gmail.com', '123456', 'Tạm khóa', 1, '2023-09-25 09:42:18', '2023-09-25 09:42:18'),
('nguoidung6@gmail.com', '123456', 'Tạm xóa', 1, '2023-09-25 09:42:18', '2023-09-25 09:42:18'),
('nguoidung7@gmail.com', '123456', 'Tạm khóa', 1, '2023-09-25 09:42:18', '2023-09-25 09:42:18'),
('nguoidung8@gmail.com', '123456', 'Bình thường', 1, '2023-09-25 09:42:18', '2023-09-25 09:42:18'),
('nguoidung9@gmail.com', '123456', 'Bình thường', 1, '2023-09-25 09:42:18', '2023-09-25 09:42:18'),
('tangquoctuan2003@gmail.com', '123456', 'Bình thường', 1, '2023-09-25 09:42:18', '2023-09-25 09:42:18'),
('tienphan09098@gmail.com', '123456', 'Tạm xóa', 1, '2023-09-25 09:42:18', '2023-09-25 09:42:18'),
('tienphatng.693@gmail.com', '123456', 'Bình thường', 1, '2023-09-25 09:42:18', '2023-09-25 09:42:18');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `contacts`
--

CREATE TABLE `contacts` (
  `id` int(11) NOT NULL,
  `content` varchar(255) NOT NULL,
  `typeContact` varchar(255) NOT NULL,
  `user` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `contacts`
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
-- Cấu trúc bảng cho bảng `notifications`
--

CREATE TABLE `notifications` (
  `id` int(11) NOT NULL,
  `isSeen` tinyint(1) NOT NULL,
  `typeNoti` varchar(255) NOT NULL,
  `content` text DEFAULT NULL,
  `userSend` varchar(255) NOT NULL,
  `userReceive` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `notifications`
--

INSERT INTO `notifications` (`id`, `isSeen`, `typeNoti`, `content`, `userSend`, `userReceive`, `createdAt`, `updatedAt`) VALUES
(3, 1, 'Xác nhận', NULL, 'hongbao2003@gmail.com', 'tangquoctuan2003@gmail.com', '2023-09-25 10:07:53', '2023-09-25 10:07:53'),
(4, 0, 'Vi phạm', 'Vi phạm tiêu chuẩn cộng đồng', 'tienphan09098@gmail.com', 'tangquoctuan2003@gmail.com', '2023-09-25 10:07:53', '2023-09-25 10:07:53'),
(5, 1, 'Hủy xác nhận', NULL, 'langueofdie@gmail.com', 'nguoidung2@gmail.com', '2023-09-25 10:07:53', '2023-09-25 10:07:53'),
(6, 0, 'Xác nhận', NULL, 'hongbao2003@gmail.com', 'anhhuy2452003@gmail.com', '2023-09-25 10:07:53', '2023-09-25 10:07:53'),
(7, 1, 'Hủy xác nhận', NULL, 'langueofdie@gmail.com', 'nguoidung7@gmail.com', '2023-09-25 10:07:53', '2023-09-25 10:07:53'),
(8, 0, 'Xácnhận', NULL, 'tienphan09098@gmail.com', 'tienphatng.693@gmail.com', '2023-09-25 10:07:53', '2023-09-25 10:07:53'),
(9, 1, 'Hủy xácnhận', NULL, 'langueofdie@gmail.com', 'nguoidung5@gmail.com', '2023-09-25 10:07:53', '2023-09-25 10:07:53'),
(10, 1, 'Xácnhận', NULL, 'tienphan09098@gmail.com', 'tienphatng.693@gmail.com', '2023-09-25 10:07:53', '2023-09-25 10:07:53'),
(11, 0, 'Vi phạm', 'Vi phạm tiêu chuẩn cộng đồng', 'hongbao2003@gmail.com', 'nguoidung14@gmail.com', '2023-09-25 10:07:53', '2023-09-25 10:07:53'),
(12, 1, 'Xácnhận', NULL, 'hongbao2003@gmail.com', 'nguoidung8@gmail.com', '2023-09-25 10:07:53', '2023-09-25 10:07:53');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `permissions`
--

CREATE TABLE `permissions` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `posts`
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
  `userConfirm` varchar(255) DEFAULT NULL,
  `userPost` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `posts`
--

INSERT INTO `posts` (`id`, `title`, `price`, `mainImage`, `description`, `status`, `isNew`, `isGeneralSubject`, `userConfirm`, `userPost`, `createdAt`, `updatedAt`) VALUES
(1, 'Kinh tế chính trị', 15000, './public/picture/mainImage.png', 'Tài liệu tham khảo', 'Chưa xác nhận', 1, 0, 'nguoidung1@gmail.com', 'hongbao2003@gmail.com', '2023-09-25 02:02:24', '2023-09-25 02:02:24'),
(2, 'Chủ nghĩa xã hội khoa học', 30000, './public/picture/mainImage.png', 'Tài liệu tham khảo', 'Chưa xác nhận', 1, 0, 'tienphan09098@gmail.com', 'nguoidung10@gmail.com', '2023-09-25 02:02:24', '2023-09-25 02:02:24'),
(3, 'Kỹ thuật lập trình', 20000, './public/picture/mainImage.png', 'Tài liệu tham khảo', 'Đã xác nhận', 1, 1, 'nguoidung7@gmail.com', 'nguoidung3@gmail.com', '2023-09-25 02:02:24', '2023-09-25 02:02:24'),
(4, 'GDQP và AN I', 10000, './public/picture/mainImage.png', 'Tài liệu học tập', 'Chưa xác nhận', 1, 0, 'nguoidung8@gmail.com', 'tangquoctuan2003@gmail.com', '2023-09-25 02:02:24', '2023-09-25 02:02:24'),
(5, 'Triết học Mac-Lenin', 25000, './public/picture/mainImage.png', 'Tài liệu tham khảo', 'Đã giao', 0, 0, 'nguoidung9@gmail.com', 'nguoidung12@gmail.com', '2023-09-25 02:02:24', '2023-09-25 02:02:24'),
(6, 'Kinh tế vĩ mô', 20000, './public/picture/mainImage.png', 'Tài liệu tham khảo', 'Chưa xác nhận', 1, 1, 'nguoidung14@gmail.com', 'tienphatng.693@gmail.com', '2023-09-25 02:02:24', '2023-09-25 02:02:24'),
(7, 'Tiếng Việt thực hành', 15000, './public/picture/mainImage.png', 'Tài liệu tham khảo', 'Chưa xác nhận', 0, 1, 'nguoidung6@gmail.com', 'nguoidung9@gmail.com', '2023-09-25 02:02:24', '2023-09-25 02:02:24'),
(8, 'Tư tưởng Hồ Chí Minh', 15000, './public/picture/mainImage.png', 'Tài liệu tham khảo', 'Chưa xác nhận', 0, 0, 'tangquoctuan2003@gmail.com', 'nguoidung3@gmail.com', '2023-09-25 02:02:24', '2023-09-25 02:02:24'),
(9, 'Kinh tế lượng', 15000, './public/picture/mainImage.png', 'Tài liệu tham khảo', 'Đã xác nhận', 0, 1, 'nguoidung8@gmail.com', 'nguoidung5@gmail.com', '2023-09-25 02:02:24', '2023-09-25 02:02:24'),
(10, 'Lịch sử Đảng cộng sản Việt Nam', 35000, './public/picture/mainImage.png', 'Tài liệu tham khảo', 'Đã giao', 1, 0, 'langueofdie@gmail.com', 'nguoidung12@gmail.com', '2023-09-25 02:02:24', '2023-09-25 02:02:24');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `reports`
--

CREATE TABLE `reports` (
  `user` varchar(255) NOT NULL,
  `post` int(11) NOT NULL,
  `content` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `reports`
--

INSERT INTO `reports` (`user`, `post`, `content`, `createdAt`, `updatedAt`) VALUES
('hongbao2003@gmail.com', 5, 'Sách bị rách', '2023-09-25 02:16:18', '2023-09-25 02:16:18'),
('nguoidung10@gmail.com', 5, 'Tài liệu giả', '2023-09-25 02:18:40', '2023-09-25 02:18:40'),
('nguoidung2@gmail.com', 9, 'Tài liệu giao không đúng với ảnh', '2023-09-25 02:19:13', '2023-09-25 02:19:13'),
('nguoidung3@gmail.com', 7, 'Tài liệu mất trang', '2023-09-25 02:20:52', '2023-09-25 02:20:52'),
('nguoidung8@gmail.com', 2, 'Tài liệu hỏng bìa với mấy trang', '2023-09-25 02:21:08', '2023-09-25 02:21:08');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `reviews`
--

CREATE TABLE `reviews` (
  `id` int(11) NOT NULL,
  `numStars` int(11) NOT NULL,
  `content` varchar(255) DEFAULT NULL,
  `user` varchar(255) NOT NULL,
  `post` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `reviews`
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
-- Cấu trúc bảng cho bảng `rolepermissions`
--

CREATE TABLE `rolepermissions` (
  `permission` int(11) NOT NULL,
  `role` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `roles`
--

INSERT INTO `roles` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Khách hàng', '2023-09-25 04:34:15', '2023-09-25 04:34:15');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `sequelizemeta`
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
('20230923124357-create-role-permission.js');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `email` varchar(255) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `avatar` varchar(255) NOT NULL,
  `coverImage` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`email`, `firstName`, `lastName`, `username`, `avatar`, `coverImage`, `createdAt`, `updatedAt`) VALUES
('anhhuy2452003@gmail.com', 'Huy', 'Nguyễn', 'Anh Huy Nguyễn', './public/picture/avatar.png', './public/picture/coverimage.png', '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
('hongbao2003@gmail.com', 'Bảo', 'Bùi', 'Bùi Bảo', './public/picture/avatar.png', './public/picture/coverimage.png', '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
('langueofdie@gmail.com', 'Nam', 'Trần', 'Trần Nam', './public/picture/avatar.png', './public/picture/coverimage.png', '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
('nguoidung10@gmail.com', 'Bảo', 'Võ', 'Gia Bảo', './public/picture/avatar.png', './public/picture/coverimage.png', '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
('nguoidung11@gmail.com', 'Cảnh', 'Mai', 'Cảnh Mai', './public/picture/avatar.png', './public/picture/coverimage.png', '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
('nguoidung12@gmail.com', 'Công', 'Nguyễn', 'Chí Công Nguyễn', './public/picture/avatar.png', './public/picture/coverimage.png', '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
('nguoidung13@gmail.com', 'Danh', 'Huỳnh', 'Thanh Danh', './public/picture/avatar.png', './public/picture/coverimage.png', '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
('nguoidung14@gmail.com', 'Dũng', 'Huỳnh', 'Tiến Dũng', './public/picture/avatar.png', './public/picture/coverimage.png', '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
('nguoidung1@gmail.com', 'Sang', 'Nguyễn', 'Sang Nguyễn', './public/picture/avatar.png', './public/picture/coverimage.png', '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
('nguoidung2@gmail.com', 'Đình', 'Lê', 'Đình Đình', './public/picture/avatar.png', './public/picture/coverimage.png', '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
('nguoidung3@gmail.com', 'Minh', 'Nguyễn', 'Nguyễn Minh', './public/picture/avatar.png', './public/picture/coverimage.png', '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
('nguoidung4@gmail.com', 'Duy', 'Trần', 'Duy Trần', './public/picture/avatar.png', './public/picture/coverimage.png', '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
('nguoidung5@gmail.com', 'Dương', 'Trần', 'Trần Đại Dương', './public/picture/avatar.png', './public/picture/coverimage.png', '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
('nguoidung6@gmail.com', 'Quân', 'Tăng', 'Quân Tăng Đặng', './public/picture/avatar.png', './public/picture/coverimage.png', '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
('nguoidung7@gmail.com', 'Tài', 'Nhữ', 'Nhữ Tài', './public/picture/avatar.png', './public/picture/coverimage.png', '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
('nguoidung8@gmail.com', 'Anh', 'Võ', 'Võ Mai Anh', './public/picture/avatar.png', './public/picture/coverimage.png', '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
('nguoidung9@gmail.com', 'Bảo', 'Nguyễn', 'Bảo Nguyễn', './public/picture/avatar.png', './public/picture/coverimage.png', '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
('tangquoctuan2003@gmail.com', 'Tuấn', 'Tăng', 'Tăng Quốc Tuấn', './public/picture/avatar.png', './public/picture/coverimage.png', '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
('tienphan09098@gmail.com', 'Tiến', 'Phan', 'Tiến Tiến', './public/picture/avatar.png', './public/picture/coverimage.png', '2023-09-24 22:03:51', '2023-09-24 22:03:51'),
('tienphatng.693@gmail.com', 'Phát', 'Nguyễn', 'Phát Nguyễn', './public/picture/avatar.png', './public/picture/coverimage.png', '2023-09-24 22:03:51', '2023-09-24 22:03:51');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`email`),
  ADD KEY `role` (`role`);

--
-- Chỉ mục cho bảng `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user` (`user`);

--
-- Chỉ mục cho bảng `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userSend` (`userSend`),
  ADD KEY `userReceive` (`userReceive`);

--
-- Chỉ mục cho bảng `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userConfirm` (`userConfirm`),
  ADD KEY `userPost` (`userPost`);

--
-- Chỉ mục cho bảng `reports`
--
ALTER TABLE `reports`
  ADD PRIMARY KEY (`user`,`post`),
  ADD KEY `post` (`post`);

--
-- Chỉ mục cho bảng `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user` (`user`),
  ADD KEY `post` (`post`);

--
-- Chỉ mục cho bảng `rolepermissions`
--
ALTER TABLE `rolepermissions`
  ADD PRIMARY KEY (`permission`,`role`),
  ADD KEY `role` (`role`);

--
-- Chỉ mục cho bảng `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`email`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT cho bảng `notifications`
--
ALTER TABLE `notifications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT cho bảng `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT cho bảng `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT cho bảng `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `accounts`
--
ALTER TABLE `accounts`
  ADD CONSTRAINT `accounts_ibfk_1` FOREIGN KEY (`email`) REFERENCES `users` (`email`),
  ADD CONSTRAINT `accounts_ibfk_2` FOREIGN KEY (`role`) REFERENCES `roles` (`id`);

--
-- Các ràng buộc cho bảng `contacts`
--
ALTER TABLE `contacts`
  ADD CONSTRAINT `contacts_ibfk_1` FOREIGN KEY (`user`) REFERENCES `users` (`email`);

--
-- Các ràng buộc cho bảng `notifications`
--
ALTER TABLE `notifications`
  ADD CONSTRAINT `notifications_ibfk_1` FOREIGN KEY (`userSend`) REFERENCES `users` (`email`),
  ADD CONSTRAINT `notifications_ibfk_2` FOREIGN KEY (`userReceive`) REFERENCES `users` (`email`);

--
-- Các ràng buộc cho bảng `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`userConfirm`) REFERENCES `users` (`email`),
  ADD CONSTRAINT `posts_ibfk_2` FOREIGN KEY (`userPost`) REFERENCES `users` (`email`);

--
-- Các ràng buộc cho bảng `reports`
--
ALTER TABLE `reports`
  ADD CONSTRAINT `reports_ibfk_1` FOREIGN KEY (`user`) REFERENCES `users` (`email`),
  ADD CONSTRAINT `reports_ibfk_2` FOREIGN KEY (`post`) REFERENCES `posts` (`id`);

--
-- Các ràng buộc cho bảng `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`user`) REFERENCES `users` (`email`),
  ADD CONSTRAINT `reviews_ibfk_2` FOREIGN KEY (`post`) REFERENCES `posts` (`id`);

--
-- Các ràng buộc cho bảng `rolepermissions`
--
ALTER TABLE `rolepermissions`
  ADD CONSTRAINT `rolepermissions_ibfk_1` FOREIGN KEY (`permission`) REFERENCES `permissions` (`id`),
  ADD CONSTRAINT `rolepermissions_ibfk_2` FOREIGN KEY (`role`) REFERENCES `roles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
