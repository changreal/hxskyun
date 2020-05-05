/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 80019
Source Host           : localhost:3306
Source Database       : daoyun

Target Server Type    : MYSQL
Target Server Version : 80019
File Encoding         : 65001

Date: 2020-05-05 10:48:38
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for buttontype
-- ----------------------------
DROP TABLE IF EXISTS `buttontype`;
CREATE TABLE `buttontype` (
  `buttonId` int NOT NULL,
  `cnName` varchar(64) DEFAULT NULL,
  `enName` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`buttonId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of buttontype
-- ----------------------------

-- ----------------------------
-- Table structure for classschedule
-- ----------------------------
DROP TABLE IF EXISTS `classschedule`;
CREATE TABLE `classschedule` (
  `Id` int NOT NULL,
  `ClassName` varchar(255) DEFAULT NULL,
  `ClassId` int NOT NULL,
  `ClassType` int DEFAULT NULL,
  `SignIn` int DEFAULT NULL,
  `SignDistance` double DEFAULT NULL,
  `Message` varchar(255) DEFAULT NULL,
  `EXP` int DEFAULT NULL,
  `School` varchar(255) DEFAULT NULL,
  `Department` varchar(255) DEFAULT NULL,
  `Major` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`,`ClassId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of classschedule
-- ----------------------------

-- ----------------------------
-- Table structure for dictionarydetail
-- ----------------------------
DROP TABLE IF EXISTS `dictionarydetail`;
CREATE TABLE `dictionarydetail` (
  `Id` int NOT NULL AUTO_INCREMENT,
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
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of dictionarydetail
-- ----------------------------
INSERT INTO `dictionarydetail` VALUES ('1', 'sex', '男', '1', '1', '2020-04-25 09:47:50', '1', null, null, null, null, null, null);
INSERT INTO `dictionarydetail` VALUES ('2', 'sex', '女', '0', '2', '2020-04-24 21:35:13', '1', '2020-04-24 21:35:37', '1', null, null, null, null);
INSERT INTO `dictionarydetail` VALUES ('3', 'role', '学生', '1', '1', '2020-04-24 21:45:38', null, null, null, null, null, null, null);
INSERT INTO `dictionarydetail` VALUES ('4', 'role', '教师', '0', '2', '2020-04-24 21:45:41', null, null, null, null, null, null, null);
INSERT INTO `dictionarydetail` VALUES ('5', 'role', '管理员', '0', '3', '2020-04-24 21:45:47', null, null, null, null, null, null, null);
INSERT INTO `dictionarydetail` VALUES ('6', 'education', '大学本科', '1', '1', null, null, null, null, null, null, null, null);
INSERT INTO `dictionarydetail` VALUES ('7', 'education', '高中', '0', '2', null, null, null, null, null, null, null, null);
INSERT INTO `dictionarydetail` VALUES ('8', 'education', '初中', '0', '3', null, null, null, null, null, null, null, null);
INSERT INTO `dictionarydetail` VALUES ('9', 'education', '大专', '0', '4', null, null, null, null, null, null, null, null);
INSERT INTO `dictionarydetail` VALUES ('10', 'education', '中专', '0', '5', null, null, null, null, null, null, null, null);
INSERT INTO `dictionarydetail` VALUES ('11', 'education', '研究生', '0', '6', null, null, null, null, null, null, null, null);
INSERT INTO `dictionarydetail` VALUES ('12', 'classType', '学校课程', '1', '1', '2020-04-24 21:40:36', null, null, null, null, null, null, null);
INSERT INTO `dictionarydetail` VALUES ('13', 'classType', '个人课程', '0', '2', null, null, null, null, null, null, null, null);
INSERT INTO `dictionarydetail` VALUES ('14', 'attendanceStatus', '已签到', '0', '1', null, null, null, null, null, null, null, null);
INSERT INTO `dictionarydetail` VALUES ('15', 'attendanceStatus', '未签到', '0', '2', null, null, null, null, null, null, null, null);
INSERT INTO `dictionarydetail` VALUES ('28', 'tessex', '测试-男', '1', '1', '2020-04-25 02:56:10', '2', null, null, null, null, null, null);

-- ----------------------------
-- Table structure for dictionarytype
-- ----------------------------
DROP TABLE IF EXISTS `dictionarytype`;
CREATE TABLE `dictionarytype` (
  `Id` int NOT NULL AUTO_INCREMENT,
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
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of dictionarytype
-- ----------------------------
INSERT INTO `dictionarytype` VALUES ('1', '性别', 'sex', '2020-04-24 21:25:49', '1', '2020-04-24 21:25:53', '1', null, null, null, null);
INSERT INTO `dictionarytype` VALUES ('2', '角色', 'role', '2020-04-24 20:34:59', '1', '2020-04-24 20:35:09', '1', null, null, null, null);
INSERT INTO `dictionarytype` VALUES ('3', '学历', 'education', '2020-04-24 21:26:17', '1', '2020-04-24 21:26:21', '1', null, null, null, null);
INSERT INTO `dictionarytype` VALUES ('4', '班课类型', 'classType', '2020-04-24 21:27:12', '1', '2020-04-24 21:27:15', '1', null, null, null, null);
INSERT INTO `dictionarytype` VALUES ('5', '签到情况', 'attendanceStatus', '2020-04-24 21:27:34', '1', '2020-04-24 21:27:37', '1', null, null, null, null);
INSERT INTO `dictionarytype` VALUES ('17', '测试-性别', 'tessex', '2020-04-25 02:55:27', '2', null, null, null, null, null, null);

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
-- Records of role
-- ----------------------------

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
-- Records of roleright
-- ----------------------------

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
-- Records of signauths
-- ----------------------------

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
-- Records of tright
-- ----------------------------

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
-- Records of user
-- ----------------------------

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

-- ----------------------------
-- Records of userrole
-- ----------------------------
