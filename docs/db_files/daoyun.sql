/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 80019
Source Host           : localhost:3306
Source Database       : daoyun

Target Server Type    : MYSQL
Target Server Version : 80019
File Encoding         : 65001

Date: 2020-03-27 23:18:00
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for dictionarydetail
-- ----------------------------
DROP TABLE IF EXISTS `dictionarydetail`;
CREATE TABLE `dictionarydetail` (
  `Id` int NOT NULL,
  `ItemKey` varchar(20) NOT NULL,
  `ItemValue` varchar(20) NOT NULL,
  `IsDefault` int NOT NULL,
  `SortNum` int NOT NULL,
  `CreationDate` datetime DEFAULT NULL,
  `Creator` int DEFAULT NULL,
  `ModificationDate` datetime DEFAULT NULL,
  `Modifier` int DEFAULT NULL,
  `Value 1` varchar(255) DEFAULT NULL,
  `Value 2` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Value 3` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Value 4` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `FK_ItemKey` (`ItemKey`),
  CONSTRAINT `FK_ItemKey` FOREIGN KEY (`ItemKey`) REFERENCES `dictionarytype` (`ItemKey`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for dictionarytype
-- ----------------------------
DROP TABLE IF EXISTS `dictionarytype`;
CREATE TABLE `dictionarytype` (
  `Id` int NOT NULL,
  `Name` varchar(20) NOT NULL,
  `ItemKey` varchar(20) NOT NULL,
  `CreationDate` datetime DEFAULT NULL,
  `Creator` int DEFAULT NULL,
  `ModificationDate` datetime DEFAULT NULL,
  `Modifier` int DEFAULT NULL,
  `Value 1` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Value 2` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Value 3` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Value 4` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`Id`,`ItemKey`),
  KEY `ItemKey` (`ItemKey`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for role
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `CreationDate` datetime DEFAULT NULL,
  `Creator` varchar(20) DEFAULT NULL,
  `ModificationDate` datetime DEFAULT NULL,
  `Modificatier` varchar(20) DEFAULT NULL,
  `RoleName` varchar(20) DEFAULT NULL,
  `RoleId` int DEFAULT NULL,
  `RoleDescription` varchar(20) DEFAULT NULL,
  `Value 1` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Value 2` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Value 3` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Value 4` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `RoleId` (`RoleId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for roleright
-- ----------------------------
DROP TABLE IF EXISTS `roleright`;
CREATE TABLE `roleright` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `CreationDate` datetime DEFAULT NULL,
  `Creator` varchar(20) DEFAULT NULL,
  `ModificationDate` datetime DEFAULT NULL,
  `Modificatier` varchar(20) DEFAULT NULL,
  `RightId` int DEFAULT NULL,
  `RoleId` int DEFAULT NULL,
  `Value 1` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Value 2` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Value 3` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Value 4` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `FK_RoleRight_TRight` (`RightId`) USING BTREE,
  KEY `FK_RoleRight_Role` (`RoleId`) USING BTREE,
  CONSTRAINT `FK_RoleRight_Role` FOREIGN KEY (`RoleId`) REFERENCES `role` (`RoleId`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_RoleRight_TRight` FOREIGN KEY (`RightId`) REFERENCES `tright` (`Id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for signauths
-- ----------------------------
DROP TABLE IF EXISTS `signauths`;
CREATE TABLE `signauths` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `UserId` int DEFAULT NULL,
  `Type` varchar(20) DEFAULT NULL,
  `Identifier` varchar(10) DEFAULT NULL,
  `Credential` varchar(25) DEFAULT NULL,
  `CreationDate` datetime DEFAULT NULL,
  `Creator` int DEFAULT NULL,
  `ModificationDate` datetime DEFAULT NULL,
  `Modifier` int DEFAULT NULL,
  `Value 1` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Value 2` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Value 3` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Value 4` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `FK_Signauths_User` (`UserId`),
  CONSTRAINT `FK_Signauths_User` FOREIGN KEY (`UserId`) REFERENCES `user` (`UserId`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for tright
-- ----------------------------
DROP TABLE IF EXISTS `tright`;
CREATE TABLE `tright` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `CreationDate` datetime DEFAULT NULL,
  `Creator` varchar(20) DEFAULT NULL,
  `ModificationDate` datetime DEFAULT NULL,
  `Modificatier` varchar(20) DEFAULT NULL,
  `PermissionId` int DEFAULT NULL,
  `PermissionName` varchar(20) DEFAULT NULL,
  `PermissionDescription` varchar(20) DEFAULT NULL,
  `Value 1` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Value 2` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Value 3` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Value 4` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `UserId` int DEFAULT NULL,
  `UserName` varchar(20) DEFAULT NULL,
  `Gender` varchar(10) DEFAULT NULL,
  `Phone` varchar(20) DEFAULT NULL,
  `Email` varchar(20) DEFAULT NULL,
  `Age` int DEFAULT NULL,
  `BirthDate` datetime DEFAULT NULL,
  `Status` varchar(10) DEFAULT NULL,
  `CreationDate` datetime DEFAULT NULL,
  `Creator` int DEFAULT NULL,
  `ModificationDate` datetime DEFAULT NULL,
  `Modifier` int DEFAULT NULL,
  `Value 1` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Value 2` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Value 3` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Value 4` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `UserId` (`UserId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for userrole
-- ----------------------------
DROP TABLE IF EXISTS `userrole`;
CREATE TABLE `userrole` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `UserId` int DEFAULT NULL,
  `RoleId` int DEFAULT NULL,
  `CreateDate` datetime DEFAULT NULL,
  `Creator` int DEFAULT NULL,
  `ModificationDate` datetime DEFAULT NULL,
  `Modifier` int DEFAULT NULL,
  `Value 1` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Value 2` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Value 3` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Value 4` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `RoleId` (`RoleId`),
  KEY `FK_UserRole_User` (`UserId`),
  CONSTRAINT `FK_UserRole_Role` FOREIGN KEY (`RoleId`) REFERENCES `role` (`RoleId`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_UserRole_User` FOREIGN KEY (`UserId`) REFERENCES `user` (`UserId`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
