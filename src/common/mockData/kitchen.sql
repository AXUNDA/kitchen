-- MySQL dump 10.13  Distrib 8.0.36, for macos14 (x86_64)
--
-- Host: localhost    Database: kitchen
-- ------------------------------------------------------
-- Server version	8.3.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `MenuItems`
--

DROP TABLE IF EXISTS `MenuItems`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `MenuItems` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `UserId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `UserId` (`UserId`),
  CONSTRAINT `menuitems_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `Users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `MenuItems`
--

LOCK TABLES `MenuItems` WRITE;
/*!40000 ALTER TABLE `MenuItems` DISABLE KEYS */;
INSERT INTO `MenuItems` VALUES ('0149e377-6c44-4f19-86a9-d2628bac2d5a','Porridge Beans','A comforting dish of slow-cooked beans, enhanced with the rich flavor of black tiger shrimp.','₦2,700.00','2024-06-26 07:34:46','2024-06-26 07:34:46','e97f0966-a7ab-49b1-b76d-518d68e4b482'),('1ce7504a-5c0d-4eb8-9f35-9504d52b48cb','Chicken & Chips','Crispy fried chicken served with golden, crunchy fries, a perfect combination for a quick meal.','₦2,000.00','2024-06-26 07:39:52','2024-06-26 07:39:52','f291a059-46cd-4a39-a5ab-bbd76ba0a0e6'),('201be740-aab1-4b42-ac9a-1f9f00df555e','Salad','A refreshing mix of fresh greens, vegetables, and a light dressing for a healthy meal option.','₦1,560.00','2024-06-26 07:41:49','2024-06-26 07:41:49','39d36307-c508-42f5-af9f-aca4cbe2e176'),('2eea1e50-edd0-4b5f-8763-30e3c45eab3e','Egusi Soup','A traditional Nigerian soup made with ground melon seeds, enriched with assorted meats and spices.','₦7,000.00','2024-06-26 07:26:04','2024-06-26 07:26:04','13124ff2-da74-4425-b32c-2960b73cc6f3'),('31a4203d-d82a-4b69-9771-fa0d1bda11de','Rice & Stew','A classic dish featuring steamed rice served with a savory, slow-cooked beef stew.','₦12,000.00','2024-06-26 07:25:05','2024-06-26 07:25:05','13124ff2-da74-4425-b32c-2960b73cc6f3'),('65a68d79-170d-4e01-ab7b-d17ddef2cfd4','Jollof Rice','A West African favorite, this dish features rice cooked in a rich blend of tomatoes, peppers, and spices.','₦2,000.00','2024-06-26 07:37:22','2024-06-26 07:37:22','2f39a758-2735-4646-9c83-e80419a3a517'),('8c262cfa-e08a-491b-83bb-8ffdc8ea999c','Okro Soup','A hearty soup made with fresh okra and tender chicken wings, seasoned to perfection.','₦5,000.00','2024-06-26 07:34:27','2024-06-26 07:34:27','e97f0966-a7ab-49b1-b76d-518d68e4b482'),('a5ad6668-4a54-4efe-b2be-352bc0adc340','Meat Pie','A flaky pastry filled with seasoned minced meat and vegetables, baked to golden perfection.','₦2,960.00','2024-06-26 07:54:30','2024-06-26 07:54:30','39d36307-c508-42f5-af9f-aca4cbe2e176'),('c77ea108-ff84-4439-8d81-bed621e064a6','Burgers','Juicy beef patties layered with fresh toppings and a special sauce, all nestled in a soft bun.','₦5,300.00','2024-06-26 07:40:06','2024-06-26 07:40:06','f291a059-46cd-4a39-a5ab-bbd76ba0a0e6'),('ffebc750-0ff9-4319-8f32-da879acb3141','Spaghetti with Sauce','A delicious serving of spaghetti topped with a hearty tomato-based sauce, perfect for a satisfying meal.','₦2,500.00','2024-06-26 07:36:34','2024-06-26 07:36:34','2f39a758-2735-4646-9c83-e80419a3a517');
/*!40000 ALTER TABLE `MenuItems` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Users` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `email` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `isVendor` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `phone` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `email_2` (`email`),
  UNIQUE KEY `email_3` (`email`),
  UNIQUE KEY `email_4` (`email`),
  UNIQUE KEY `email_5` (`email`),
  UNIQUE KEY `email_6` (`email`),
  UNIQUE KEY `email_7` (`email`),
  UNIQUE KEY `email_8` (`email`),
  UNIQUE KEY `email_9` (`email`),
  UNIQUE KEY `email_10` (`email`),
  UNIQUE KEY `email_11` (`email`),
  UNIQUE KEY `email_12` (`email`),
  UNIQUE KEY `email_13` (`email`),
  UNIQUE KEY `email_14` (`email`),
  UNIQUE KEY `email_15` (`email`),
  UNIQUE KEY `email_16` (`email`),
  UNIQUE KEY `email_17` (`email`),
  UNIQUE KEY `email_18` (`email`),
  UNIQUE KEY `email_19` (`email`),
  UNIQUE KEY `email_20` (`email`),
  UNIQUE KEY `email_21` (`email`),
  UNIQUE KEY `email_22` (`email`),
  UNIQUE KEY `email_23` (`email`),
  UNIQUE KEY `email_24` (`email`),
  UNIQUE KEY `email_25` (`email`),
  UNIQUE KEY `email_26` (`email`),
  UNIQUE KEY `email_27` (`email`),
  UNIQUE KEY `email_28` (`email`),
  UNIQUE KEY `email_29` (`email`),
  UNIQUE KEY `email_30` (`email`),
  UNIQUE KEY `email_31` (`email`),
  UNIQUE KEY `email_32` (`email`),
  UNIQUE KEY `email_33` (`email`),
  UNIQUE KEY `email_34` (`email`),
  UNIQUE KEY `email_35` (`email`),
  UNIQUE KEY `email_36` (`email`),
  UNIQUE KEY `email_37` (`email`),
  UNIQUE KEY `email_38` (`email`),
  UNIQUE KEY `email_39` (`email`),
  UNIQUE KEY `email_40` (`email`),
  UNIQUE KEY `email_41` (`email`),
  UNIQUE KEY `email_42` (`email`),
  UNIQUE KEY `email_43` (`email`),
  UNIQUE KEY `email_44` (`email`),
  UNIQUE KEY `email_45` (`email`),
  UNIQUE KEY `email_46` (`email`),
  UNIQUE KEY `email_47` (`email`),
  UNIQUE KEY `email_48` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES ('13124ff2-da74-4425-b32c-2960b73cc6f3','cnwosu@instagram.com','Chinwe Nwosu','12 Ikoyi Crescent, Ikoyi, Lagos','$argon2id$v=19$m=65536,t=3,p=4$13za/rErP+EWWF+72Kplqw$RmVJhGlP8GRfz4zbvq322ghQAHfwVhEDH1ccTuA5ywk',1,'2024-06-26 06:50:12','2024-06-26 06:50:12','+234 701 234 5678'),('2f39a758-2735-4646-9c83-e80419a3a517','badeyemi@imgur.com','Bolanle Adeyemi','78 Allen Avenue, Ikeja, Lagos','$argon2id$v=19$m=65536,t=3,p=4$oNTuN01jLZ0sg9Q7e/aQXw$4E4NoIHgZHkSHTmQAIkIRt3O/Q2mJBm0G/kViUqanOA',1,'2024-06-26 06:50:59','2024-06-26 06:50:59','+234 703 456 7890'),('39d36307-c508-42f5-af9f-aca4cbe2e176','falabi@eventbrite.com','Funmilayo Alabi','5 Herbert Macaulay Way, Yaba, Lagos','$argon2id$v=19$m=65536,t=3,p=4$wm13MpJjRUOzCxb3qFkjYg$fmRM9FqBL79EXYd1pO82Mdod9D6nw8VZXXdEJI3ilYI',1,'2024-06-26 06:51:40','2024-06-26 06:51:40','+234 705 678 9012'),('ab4851f3-ff8d-4c9a-9cd0-f346cf4792fc','axundah@outlook.com','charles emmanuel','22 okoro street','$argon2id$v=19$m=65536,t=3,p=4$Yo3EfimmsqoAtaTB8BlwPA$0/5froCSHAbSYGtQ/ZI2QHuujd4lSR3eZz43yopTYQY',0,'2024-06-26 06:13:42','2024-06-26 06:13:42',''),('e97f0966-a7ab-49b1-b76d-518d68e4b482','kadebayo@nifty.com','Kehinde Adebayo','45 Adeola Odeku Street, Victoria Island, Lagos','$argon2id$v=19$m=65536,t=3,p=4$Fr0HwvKymOtJx9eglvUirQ$ZcIvSiqD1ep/9xS+ZWA2DIilg2Woe9fpapA/xd9loXU',1,'2024-06-26 06:50:47','2024-06-26 06:50:47','+234 702 345 6789'),('f291a059-46cd-4a39-a5ab-bbd76ba0a0e6','nokonkwo@about.me','Ngozi Okonkwo','23 Lekki-Epe Expressway, Lekki, Lagos','$argon2id$v=19$m=65536,t=3,p=4$fBEljSgsWa3VsUyBwtnJog$u8jaiiA90AxzKtTkzarIoOgve+0DyaHOFeXHpE5c6do',1,'2024-06-26 06:51:24','2024-06-26 06:51:24','+234 704 567 8901');
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-26  9:02:51
