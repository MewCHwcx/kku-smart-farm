-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: special_topic
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+07:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `auto`
--

DROP TABLE IF EXISTS `auto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auto` (
  `id_auto` int NOT NULL AUTO_INCREMENT,
  `set_date` varchar(10) NOT NULL,
  `set_time` time NOT NULL,
  `set_time_wrk` int NOT NULL,
  PRIMARY KEY (`id_auto`,`set_date`),
  UNIQUE KEY `set_date_UNIQUE` (`set_date`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auto`
--

LOCK TABLES `auto` WRITE;
/*!40000 ALTER TABLE `auto` DISABLE KEYS */;
INSERT INTO `auto` VALUES (7,'อังคาร','10:00:00',60),(8,'พุธ','10:50:00',60),(10,'พฤหัส','10:55:00',50),(11,'ศุกร์','10:55:00',50);
/*!40000 ALTER TABLE `auto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `manual`
--

DROP TABLE IF EXISTS `manual`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `manual` (
  `id_relay_select` int NOT NULL,
  `id_status_select` int DEFAULT NULL,
  `detail_status` int DEFAULT NULL,
  PRIMARY KEY (`id_relay_select`),
  UNIQUE KEY `id_relay_select_UNIQUE` (`id_relay_select`),
  KEY `id_relay_select_idx` (`id_relay_select`),
  KEY `id_status_select_idx` (`id_status_select`),
  CONSTRAINT `id_relay_select` FOREIGN KEY (`id_relay_select`) REFERENCES `relay` (`id_relay`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `id_status_select` FOREIGN KEY (`id_status_select`) REFERENCES `status` (`id_status`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `manual`
--

LOCK TABLES `manual` WRITE;
/*!40000 ALTER TABLE `manual` DISABLE KEYS */;
INSERT INTO `manual` VALUES (1,1,0),(2,1,0),(3,2,1),(4,1,0);
/*!40000 ALTER TABLE `manual` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `module`
--

DROP TABLE IF EXISTS `module`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `module` (
  `id_module` int NOT NULL AUTO_INCREMENT,
  `temperature` int DEFAULT NULL,
  `humidity` int DEFAULT NULL,
  `soil_moisture` int DEFAULT NULL,
  `date_module` date DEFAULT NULL,
  `time_module` time DEFAULT NULL,
  PRIMARY KEY (`id_module`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `module`
--

LOCK TABLES `module` WRITE;
/*!40000 ALTER TABLE `module` DISABLE KEYS */;
INSERT INTO `module` VALUES (1,30,50,60,'2022-03-14','13:14:00'),(2,50,60,70,'2022-03-14','13:15:00'),(21,35,52,50,'2022-04-17','00:48:31'),(22,35,52,50,'2022-04-17','00:49:11'),(23,38,52,50,'2022-04-17','00:52:38'),(24,38,52,50,'2022-04-17','00:52:40'),(25,40,52,50,'2022-04-17','00:55:52'),(26,45,52,50,'2022-04-17','00:56:18'),(27,46,52,50,'2022-04-17','00:57:19'),(28,46,52,50,'2022-04-17','01:00:45'),(29,48,52,50,'2022-04-17','01:01:01'),(30,48,52,50,'2022-04-17','01:01:21'),(31,50,52,50,'2022-04-17','01:01:50');
/*!40000 ALTER TABLE `module` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `relay`
--

DROP TABLE IF EXISTS `relay`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `relay` (
  `id_relay` int NOT NULL AUTO_INCREMENT,
  `name_relay` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id_relay`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `relay`
--

LOCK TABLES `relay` WRITE;
/*!40000 ALTER TABLE `relay` DISABLE KEYS */;
INSERT INTO `relay` VALUES (1,'relay 1'),(2,'relay 2'),(3,'relay 3'),(4,'relay 4');
/*!40000 ALTER TABLE `relay` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `set_relay`
--

DROP TABLE IF EXISTS `set_relay`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `set_relay` (
  `id_relay_set` int NOT NULL,
  `id_status_sel` int NOT NULL,
  `n_status` int NOT NULL,
  PRIMARY KEY (`id_relay_set`),
  UNIQUE KEY `id_relay_set_UNIQUE` (`id_relay_set`),
  KEY `id_relay_set_idx` (`id_relay_set`),
  KEY `id_status_select_idx` (`id_status_sel`),
  CONSTRAINT `id_relay_set` FOREIGN KEY (`id_relay_set`) REFERENCES `relay` (`id_relay`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `id_status_sel` FOREIGN KEY (`id_status_sel`) REFERENCES `status` (`id_status`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `set_relay`
--

LOCK TABLES `set_relay` WRITE;
/*!40000 ALTER TABLE `set_relay` DISABLE KEYS */;
INSERT INTO `set_relay` VALUES (1,1,0),(2,1,0),(3,1,0),(4,1,0);
/*!40000 ALTER TABLE `set_relay` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `setting_hu`
--

DROP TABLE IF EXISTS `setting_hu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `setting_hu` (
  `id_hu` int NOT NULL AUTO_INCREMENT,
  `timer_hu` int DEFAULT NULL,
  `id_relay_hu` int DEFAULT NULL,
  `id_status_hu` int DEFAULT NULL,
  PRIMARY KEY (`id_hu`),
  KEY `id_relay_hu_idx` (`id_relay_hu`),
  KEY `id_status_hu_idx` (`id_status_hu`),
  CONSTRAINT `id_relay_hu` FOREIGN KEY (`id_relay_hu`) REFERENCES `relay` (`id_relay`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `id_status_hu` FOREIGN KEY (`id_status_hu`) REFERENCES `status` (`id_status`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `setting_hu`
--

LOCK TABLES `setting_hu` WRITE;
/*!40000 ALTER TABLE `setting_hu` DISABLE KEYS */;
INSERT INTO `setting_hu` VALUES (1,60,1,2);
/*!40000 ALTER TABLE `setting_hu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `setting_soil`
--

DROP TABLE IF EXISTS `setting_soil`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `setting_soil` (
  `id_soil` int NOT NULL AUTO_INCREMENT,
  `timer_soil` int DEFAULT NULL,
  `id_relay_soil` int DEFAULT NULL,
  `id_status_soil` int DEFAULT NULL,
  PRIMARY KEY (`id_soil`),
  KEY `id_relay_soil_idx` (`id_relay_soil`),
  KEY `id_status_soil_idx` (`id_status_soil`),
  CONSTRAINT `id_relay_soil` FOREIGN KEY (`id_relay_soil`) REFERENCES `relay` (`id_relay`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `id_status_soil` FOREIGN KEY (`id_status_soil`) REFERENCES `status` (`id_status`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `setting_soil`
--

LOCK TABLES `setting_soil` WRITE;
/*!40000 ALTER TABLE `setting_soil` DISABLE KEYS */;
/*!40000 ALTER TABLE `setting_soil` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `setting_temp`
--

DROP TABLE IF EXISTS `setting_temp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `setting_temp` (
  `id_temp` int NOT NULL AUTO_INCREMENT,
  `timer_temp` int DEFAULT NULL,
  `id_relay_temp` int DEFAULT NULL,
  `id_status_temp` int DEFAULT NULL,
  PRIMARY KEY (`id_temp`),
  KEY `id_relay_temp_idx` (`id_relay_temp`),
  KEY `id_status_temp_idx` (`id_status_temp`),
  CONSTRAINT `id_relay_temp` FOREIGN KEY (`id_relay_temp`) REFERENCES `relay` (`id_relay`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `id_status_temp` FOREIGN KEY (`id_status_temp`) REFERENCES `status` (`id_status`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `setting_temp`
--

LOCK TABLES `setting_temp` WRITE;
/*!40000 ALTER TABLE `setting_temp` DISABLE KEYS */;
/*!40000 ALTER TABLE `setting_temp` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `status`
--

DROP TABLE IF EXISTS `status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `status` (
  `id_status` int NOT NULL AUTO_INCREMENT,
  `status` int DEFAULT NULL,
  PRIMARY KEY (`id_status`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `status`
--

LOCK TABLES `status` WRITE;
/*!40000 ALTER TABLE `status` DISABLE KEYS */;
INSERT INTO `status` VALUES (1,0),(2,1);
/*!40000 ALTER TABLE `status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wifi`
--

DROP TABLE IF EXISTS `wifi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wifi` (
  `id_wifi` int NOT NULL AUTO_INCREMENT,
  `name_wifi` varchar(20) DEFAULT NULL,
  `password_wifi` varchar(20) DEFAULT NULL,
  `num_board` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id_wifi`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wifi`
--

LOCK TABLES `wifi` WRITE;
/*!40000 ALTER TABLE `wifi` DISABLE KEYS */;
INSERT INTO `wifi` VALUES (1,'aaaa','123456','10.02030.1');
/*!40000 ALTER TABLE `wifi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'special_topic'
--

--
-- Dumping routines for database 'special_topic'
--
/*!50003 DROP PROCEDURE IF EXISTS `auto_add_all` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `auto_add_all`(setDate varchar(10), setTime time(6), setTimeWrk int)
BEGIN
	IF setDate NOT IN (select a.set_date from auto a) THEN INSERT INTO auto VALUES (null, setDate,  setTime, setTimeWrk);
	end if;
    if setDate IN (select a.set_date from auto a) THEN UPDATE auto a SET a.set_date = setDate, a.set_time = setTime, a.set_time_wrk = setTimeWrk where a.set_date = setDate ;
    end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-17  1:21:50
