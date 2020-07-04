/*
Navicat MySQL Data Transfer

Source Server         : 腾讯云
Source Server Version : 50730
Source Host           : 175.24.16.48:3306
Source Database       : daoyun

Target Server Type    : MYSQL
Target Server Version : 50730
File Encoding         : 65001

Date: 2020-07-04 17:52:06
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for buttontype
-- ----------------------------
DROP TABLE IF EXISTS `buttontype`;
CREATE TABLE `buttontype` (
  `buttonId` int(11) NOT NULL,
  `cnName` varchar(64) DEFAULT NULL,
  `enName` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`buttonId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of buttontype
-- ----------------------------

-- ----------------------------
-- Table structure for classschedule
-- ----------------------------
DROP TABLE IF EXISTS `classschedule`;
CREATE TABLE `classschedule` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `ClassId` int(11) NOT NULL,
  `ClassName` varchar(255) DEFAULT NULL,
  `ClassType` int(11) DEFAULT NULL,
  `ClassDes` varchar(255) DEFAULT NULL,
  `studyRequire` varchar(255) DEFAULT NULL,
  `courseSemester` varchar(255) DEFAULT NULL,
  `TeacherId` int(11) DEFAULT NULL,
  `School` varchar(255) DEFAULT NULL,
  `Department` varchar(255) DEFAULT NULL,
  `Major` varchar(255) DEFAULT NULL,
  `EndClassStatus` enum('已结课','进行中','未开始') DEFAULT '未开始',
  `SignIn` int(11) DEFAULT NULL,
  `Value3` varchar(255) DEFAULT NULL,
  `Value4` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`,`ClassId`),
  KEY `ClassId` (`ClassId`),
  KEY `fk_teacherid` (`TeacherId`),
  CONSTRAINT `fk_teacherid` FOREIGN KEY (`TeacherId`) REFERENCES `user` (`UserId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of classschedule
-- ----------------------------
INSERT INTO `classschedule` VALUES ('1', '10001111', '工程训练', null, '好好学习', '必修', '2019-2020-2', '126643937', '福州大学', '数计学院', '2019级计算机技术', '进行中', null, null, null);
INSERT INTO `classschedule` VALUES ('2', '10002222', '智能技术', null, '研究生培养计划，好好做作业！！！', '必修', '2019-2020-2', '126643937', '福州大学', '数计学院', '2019计算机技术', '进行中', null, null, null);
INSERT INTO `classschedule` VALUES ('3', '10003333', '自然辩证法', null, '研究生培养计划', '必修', '2019-2020-2', '126643937', '福州大学', '数计学院', '2019计算机技术', '已结课', null, '', '');
INSERT INTO `classschedule` VALUES ('7', '534766735', '云计算与虚拟化技术', null, '研究生培养计划1！！！', null, '2019-2020-1', '126643937', '福州大学', '数计学院', '2019计算机技术1班', '已结课', null, null, null);
INSERT INTO `classschedule` VALUES ('9', '167265506', 'ACCA', null, '无！', null, '2019-2020-2', '123123123', '福州大学', '外国语学院', '2019级会计', '进行中', null, null, null);
INSERT INTO `classschedule` VALUES ('10', '324466366', '排水工程', null, '无', null, '2019-2020-2', '123123123', '福州大学', '土木工程学院', '2018级排水', '进行中', null, null, null);
INSERT INTO `classschedule` VALUES ('15', '223973194', '图像处理', null, '写图像处理论文', null, '2019-2020-2', '123123123', '福州大学', '数计学院', '2019级计算机技术', '进行中', null, null, null);
INSERT INTO `classschedule` VALUES ('20', '340198713', '软件工程', null, '无', null, '2019-2020-2', '883595839', '福州大学', '外国语学院', '2019计算机工硕', '已结课', null, null, null);
INSERT INTO `classschedule` VALUES ('21', '202627763', '大软件工程', null, '无', null, '2019-2020-2', '883595839', '厦门大学', '土木工程学院', '201', '已结课', null, null, null);
INSERT INTO `classschedule` VALUES ('22', '157002116', '云计算3', null, '无', null, '2020-2021-2', '148128015', '福州大学', '艺术学院', '2019', '已结课', null, null, null);
INSERT INTO `classschedule` VALUES ('23', '529627143', '云云', null, '无', null, '2019-2020-2', '148128015', '厦门大学', '外国语学院', '2019级', '进行中', null, null, null);

-- ----------------------------
-- Table structure for CourseSign
-- ----------------------------
DROP TABLE IF EXISTS `CourseSign`;
CREATE TABLE `CourseSign` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `SignId` int(11) NOT NULL,
  `studentId` int(11) DEFAULT NULL,
  `CourseId` int(11) DEFAULT NULL,
  `signTime` datetime DEFAULT NULL,
  `endTime` datetime DEFAULT NULL,
  `signStatus` enum('请假','缺勤','已签到') DEFAULT NULL,
  `signDistance` double DEFAULT NULL,
  `sourceLatitude` double DEFAULT NULL,
  `sourceLongitude` double DEFAULT NULL,
  `targetLatitude` double DEFAULT NULL,
  `targetLongitude` double DEFAULT NULL,
  `duration` int(11) DEFAULT NULL,
  PRIMARY KEY (`Id`,`SignId`),
  UNIQUE KEY `classidstudentidsignid` (`SignId`,`studentId`,`CourseId`) USING BTREE,
  KEY `FK_classIdsign` (`CourseId`),
  KEY `FK_studentIdsign` (`studentId`),
  CONSTRAINT `FK_classIdsign` FOREIGN KEY (`CourseId`) REFERENCES `classschedule` (`ClassId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_studentIdsign` FOREIGN KEY (`studentId`) REFERENCES `user` (`UserId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=341 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of CourseSign
-- ----------------------------
INSERT INTO `CourseSign` VALUES ('293', '607457207', '100000000', '10001111', '2020-07-03 16:59:03', '2020-07-03 17:07:54', '已签到', '84537.362669712', '30.364952', '113.453972', '30.584354', '114.298569', '10');
INSERT INTO `CourseSign` VALUES ('294', '607457207', '123123123', '10001111', '2020-07-03 16:58:58', '2020-07-03 17:07:54', '已签到', '84537.362669712', '30.364952', '113.453972', '30.584354', '114.298569', '10');
INSERT INTO `CourseSign` VALUES ('295', '607457207', '883595839', '10001111', '2020-07-03 16:58:53', '2020-07-03 17:07:54', '已签到', '84537.362669712', '30.364952', '113.453972', '30.584354', '114.298569', '10');
INSERT INTO `CourseSign` VALUES ('296', '902865243', '100000000', '10001111', '2020-07-03 16:59:03', '2020-07-03 17:08:48', '已签到', '84537.362669712', '30.364952', '113.453972', '30.584354', '114.298569', '10');
INSERT INTO `CourseSign` VALUES ('297', '902865243', '123123123', '10001111', '2020-07-03 16:58:58', '2020-07-03 17:08:48', '已签到', '84537.362669712', '30.364952', '113.453972', '30.584354', '114.298569', '10');
INSERT INTO `CourseSign` VALUES ('298', '902865243', '883595839', '10001111', '2020-07-03 16:58:53', '2020-07-03 17:08:48', '已签到', '84537.362669712', '30.364952', '113.453972', '30.584354', '114.298569', '10');
INSERT INTO `CourseSign` VALUES ('299', '916918557', '100000000', '10001111', null, '2020-07-03 17:23:45', '缺勤', null, '22.322230460245', '114.1808934593', null, null, '3');
INSERT INTO `CourseSign` VALUES ('300', '916918557', '123123123', '10001111', '2020-07-03 17:23:34', '2020-07-03 17:23:45', '已签到', '0', '22.322230460245', '114.1808934593', null, null, '3');
INSERT INTO `CourseSign` VALUES ('301', '916918557', '883595839', '10001111', null, '2020-07-03 17:23:45', '缺勤', null, '22.322230460245', '114.1808934593', null, null, '3');
INSERT INTO `CourseSign` VALUES ('326', '306553537', '126643937', '167265506', '2020-07-04 00:00:35', '2020-07-04 00:00:43', '已签到', '0', '22.322230460245', '114.1808934593', '22.322230460245', '114.1808934593', '3');
INSERT INTO `CourseSign` VALUES ('327', '727824844', '126643937', '167265506', '2020-07-04 00:01:04', '2020-07-04 00:01:16', '已签到', '0', '22.322230460245', '114.1808934593', '22.322230460245', '114.1808934593', '3');
INSERT INTO `CourseSign` VALUES ('328', '300117300', '126643937', '167265506', '2020-07-04 00:10:31', '2020-07-04 00:10:43', '已签到', '0', '22.322230460245', '114.1808934593', '22.322230460245', '114.1808934593', '3');
INSERT INTO `CourseSign` VALUES ('333', '607194939', '126643937', '167265506', '2020-07-04 00:36:43', '2020-07-04 00:36:49', '已签到', '0', '22.322230460245', '114.1808934593', '22.322230460245', '114.1808934593', '3');
INSERT INTO `CourseSign` VALUES ('334', '170263631', '126643937', '324466366', '2020-07-04 00:39:09', '2020-07-04 00:39:19', '已签到', '0', '22.322230460245', '114.1808934593', '22.322230460245', '114.1808934593', '3');
INSERT INTO `CourseSign` VALUES ('339', '802062465', '148128015', '340198713', '2020-07-04 09:23:10', '2020-07-04 09:23:33', '已签到', '0', '39.91488908', '116.40387397', '39.91488908', '116.40387397', '3');
INSERT INTO `CourseSign` VALUES ('340', '616248397', '883595839', '157002116', '2020-07-04 10:22:35', '2020-07-04 10:22:42', '已签到', '0', '39.91488908', '116.40387397', '39.91488908', '116.40387397', '3');

-- ----------------------------
-- Table structure for CourseStudent
-- ----------------------------
DROP TABLE IF EXISTS `CourseStudent`;
CREATE TABLE `CourseStudent` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `ClassId` int(11) DEFAULT NULL,
  `studentId` int(11) DEFAULT NULL,
  `studentExp` int(11) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `classidstudentId` (`ClassId`,`studentId`) USING BTREE,
  KEY `FK_studentId` (`studentId`),
  CONSTRAINT `FK_classId` FOREIGN KEY (`ClassId`) REFERENCES `classschedule` (`ClassId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_studentId` FOREIGN KEY (`studentId`) REFERENCES `user` (`UserId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of CourseStudent
-- ----------------------------
INSERT INTO `CourseStudent` VALUES ('2', '10001111', '100000000', '3');
INSERT INTO `CourseStudent` VALUES ('7', '10002222', '123123123', '0');
INSERT INTO `CourseStudent` VALUES ('8', '10002222', '100000000', '0');
INSERT INTO `CourseStudent` VALUES ('12', '10003333', '123123123', '0');
INSERT INTO `CourseStudent` VALUES ('23', '10001111', '883595839', '3');
INSERT INTO `CourseStudent` VALUES ('24', '10003333', '100000000', '0');
INSERT INTO `CourseStudent` VALUES ('38', '10002222', '883595839', '0');
INSERT INTO `CourseStudent` VALUES ('49', '10001111', '123123123', '6');
INSERT INTO `CourseStudent` VALUES ('56', '167265506', '126643937', '8');
INSERT INTO `CourseStudent` VALUES ('57', '324466366', '126643937', '2');
INSERT INTO `CourseStudent` VALUES ('61', '340198713', '148128015', '2');
INSERT INTO `CourseStudent` VALUES ('62', '202627763', '148128015', '0');
INSERT INTO `CourseStudent` VALUES ('63', '157002116', '883595839', '2');

-- ----------------------------
-- Table structure for dictionarydetail
-- ----------------------------
DROP TABLE IF EXISTS `dictionarydetail`;
CREATE TABLE `dictionarydetail` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `ItemKey` varchar(20) NOT NULL,
  `ItemValue` varchar(20) NOT NULL,
  `IsDefault` int(11) NOT NULL,
  `SortNum` int(11) NOT NULL,
  `CreationDate` datetime DEFAULT NULL,
  `Creator` int(11) DEFAULT NULL,
  `ModificationDate` datetime DEFAULT NULL,
  `Modifier` int(11) DEFAULT NULL,
  `Value 1` varchar(255) DEFAULT NULL,
  `Value 2` varchar(255) DEFAULT NULL,
  `Value 3` varchar(255) DEFAULT NULL,
  `Value 4` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `FK_ItemKey` (`ItemKey`),
  CONSTRAINT `FK_ItemKey` FOREIGN KEY (`ItemKey`) REFERENCES `dictionarytype` (`ItemKey`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4;

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
INSERT INTO `dictionarydetail` VALUES ('16', 'courseSemester', '2019-2020-1', '1', '1', null, null, null, null, null, null, null, null);
INSERT INTO `dictionarydetail` VALUES ('17', 'courseSemester', '2019-2020-2', '0', '2', null, null, null, null, null, null, null, null);
INSERT INTO `dictionarydetail` VALUES ('18', 'courseSemester', '2020-2021-1', '0', '3', null, null, null, null, null, null, null, null);
INSERT INTO `dictionarydetail` VALUES ('19', 'courseSemester', '2020-2021-2', '0', '4', null, null, null, null, null, null, null, null);
INSERT INTO `dictionarydetail` VALUES ('20', 'schoolList', '福州大学', '1', '1', '2020-06-30 15:52:21', null, '2020-06-30 15:53:17', null, '', '', '', '');
INSERT INTO `dictionarydetail` VALUES ('21', 'schoolList', '厦门大学', '0', '2', null, null, null, null, null, null, null, null);
INSERT INTO `dictionarydetail` VALUES ('22', 'schoolList', '清华大学', '0', '3', null, null, null, null, null, null, null, null);
INSERT INTO `dictionarydetail` VALUES ('23', 'departmentList', '数计学院', '1', '1', null, null, null, null, null, null, null, null);
INSERT INTO `dictionarydetail` VALUES ('24', 'departmentList', '土木工程学院', '0', '2', null, null, null, null, null, null, null, null);
INSERT INTO `dictionarydetail` VALUES ('25', 'departmentList', '外国语学院', '0', '3', null, null, null, null, null, null, null, null);
INSERT INTO `dictionarydetail` VALUES ('26', 'departmentList', '艺术学院', '0', '4', null, null, null, null, null, null, null, null);

-- ----------------------------
-- Table structure for dictionarytype
-- ----------------------------
DROP TABLE IF EXISTS `dictionarytype`;
CREATE TABLE `dictionarytype` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `TypeName` varchar(20) NOT NULL,
  `ItemKey` varchar(20) NOT NULL,
  `CreationDate` datetime DEFAULT NULL,
  `Creator` int(11) DEFAULT NULL,
  `ModificationDate` datetime DEFAULT NULL,
  `Modifier` int(11) DEFAULT NULL,
  `Value 1` varchar(255) DEFAULT NULL,
  `Value 2` varchar(255) DEFAULT NULL,
  `Value 3` varchar(255) DEFAULT NULL,
  `Value 4` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`,`ItemKey`),
  KEY `ItemKey` (`ItemKey`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of dictionarytype
-- ----------------------------
INSERT INTO `dictionarytype` VALUES ('1', '性别', 'sex', '2020-04-24 21:25:49', '1', '2020-04-24 21:25:53', '1', null, null, null, null);
INSERT INTO `dictionarytype` VALUES ('2', '角色', 'role', '2020-04-24 20:34:59', '1', '2020-04-24 20:35:09', '1', null, null, null, null);
INSERT INTO `dictionarytype` VALUES ('3', '学历', 'education', '2020-04-24 21:26:17', '1', '2020-04-24 21:26:21', '1', null, null, null, null);
INSERT INTO `dictionarytype` VALUES ('4', '班课类型', 'classType', '2020-04-24 21:27:12', '1', '2020-04-24 21:27:15', '1', null, null, null, null);
INSERT INTO `dictionarytype` VALUES ('5', '签到情况', 'attendanceStatus', '2020-04-24 21:27:34', '1', '2020-04-24 21:27:37', '1', null, null, null, null);
INSERT INTO `dictionarytype` VALUES ('6', '学期列表', 'courseSemester', '2020-06-30 15:47:49', '1', null, null, null, null, null, null);
INSERT INTO `dictionarytype` VALUES ('7', '学校列表', 'schoolList', null, null, null, null, null, null, null, null);
INSERT INTO `dictionarytype` VALUES ('8', '学院列表', 'departmentList', null, null, null, null, null, null, null, null);

-- ----------------------------
-- Table structure for role
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `RoleId` int(11) DEFAULT NULL,
  `RoleName` varchar(20) DEFAULT NULL,
  `RoleDescription` varchar(20) DEFAULT NULL,
  `CreationDate` datetime DEFAULT NULL,
  `Creator` varchar(20) DEFAULT NULL,
  `ModificationDate` datetime DEFAULT NULL,
  `Modificatier` varchar(20) DEFAULT NULL,
  `Value 1` varchar(255) DEFAULT NULL,
  `Value 2` varchar(255) DEFAULT NULL,
  `Value 3` varchar(255) DEFAULT NULL,
  `Value 4` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `RoleId` (`RoleId`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of role
-- ----------------------------
INSERT INTO `role` VALUES ('1', '1', '管理员', '所有模块管理', '2020-06-27 14:48:44', '1', null, null, null, null, null, null);
INSERT INTO `role` VALUES ('2', '2', '老师', '允许班课管理', '2020-06-27 14:49:09', '1', null, null, null, null, null, null);
INSERT INTO `role` VALUES ('3', '3', '学生', '无', '2020-06-27 14:49:23', '1', null, null, null, null, null, null);
INSERT INTO `role` VALUES ('15', '4', '测试人员更新', '测试模块管理', null, null, null, null, null, null, null, null);

-- ----------------------------
-- Table structure for roleright
-- ----------------------------
DROP TABLE IF EXISTS `roleright`;
CREATE TABLE `roleright` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `RightId` int(11) DEFAULT NULL,
  `RoleId` int(11) DEFAULT NULL,
  `CreationDate` datetime DEFAULT NULL,
  `Creator` varchar(20) DEFAULT NULL,
  `ModificationDate` datetime DEFAULT NULL,
  `Modificatier` varchar(20) DEFAULT NULL,
  `Value 1` varchar(255) DEFAULT NULL,
  `Value 2` varchar(255) DEFAULT NULL,
  `Value 3` varchar(255) DEFAULT NULL,
  `Value 4` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `rightroleid` (`RightId`,`RoleId`) USING BTREE,
  KEY `FK_RoleRight_TRight` (`RightId`) USING BTREE,
  KEY `FK_RoleRight_Role` (`RoleId`) USING BTREE,
  CONSTRAINT `FK_RoleRight_Role` FOREIGN KEY (`RoleId`) REFERENCES `role` (`RoleId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_RoleRight_TRight` FOREIGN KEY (`RightId`) REFERENCES `tright` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of roleright
-- ----------------------------
INSERT INTO `roleright` VALUES ('7', '5', '2', null, null, null, null, null, null, null, null);
INSERT INTO `roleright` VALUES ('8', '6', '2', null, null, null, null, null, null, null, null);
INSERT INTO `roleright` VALUES ('15', '1', '1', null, null, null, null, null, null, null, null);
INSERT INTO `roleright` VALUES ('16', '2', '1', null, null, null, null, null, null, null, null);
INSERT INTO `roleright` VALUES ('17', '3', '1', null, null, null, null, null, null, null, null);
INSERT INTO `roleright` VALUES ('18', '4', '1', null, null, null, null, null, null, null, null);
INSERT INTO `roleright` VALUES ('19', '5', '1', null, null, null, null, null, null, null, null);
INSERT INTO `roleright` VALUES ('20', '6', '1', null, null, null, null, null, null, null, null);
INSERT INTO `roleright` VALUES ('39', '1', '4', null, null, null, null, null, null, null, null);
INSERT INTO `roleright` VALUES ('40', '2', '4', null, null, null, null, null, null, null, null);
INSERT INTO `roleright` VALUES ('41', '3', '4', null, null, null, null, null, null, null, null);
INSERT INTO `roleright` VALUES ('42', '4', '4', null, null, null, null, null, null, null, null);
INSERT INTO `roleright` VALUES ('43', '5', '4', null, null, null, null, null, null, null, null);
INSERT INTO `roleright` VALUES ('44', '6', '4', null, null, null, null, null, null, null, null);

-- ----------------------------
-- Table structure for signauths
-- ----------------------------
DROP TABLE IF EXISTS `signauths`;
CREATE TABLE `signauths` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `UserId` int(11) DEFAULT NULL,
  `Type` varchar(20) DEFAULT NULL,
  `Identifier` varchar(10) DEFAULT NULL,
  `Credential` varchar(25) DEFAULT NULL,
  `CreationDate` datetime DEFAULT NULL,
  `Creator` int(11) DEFAULT NULL,
  `ModificationDate` datetime DEFAULT NULL,
  `Modifier` int(11) DEFAULT NULL,
  `Value 1` varchar(255) DEFAULT NULL,
  `Value 2` varchar(255) DEFAULT NULL,
  `Value 3` varchar(255) DEFAULT NULL,
  `Value 4` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `FK_Signauths_User` (`UserId`),
  CONSTRAINT `FK_Signauths_User` FOREIGN KEY (`UserId`) REFERENCES `user` (`UserId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of signauths
-- ----------------------------

-- ----------------------------
-- Table structure for TokenList
-- ----------------------------
DROP TABLE IF EXISTS `TokenList`;
CREATE TABLE `TokenList` (
  `id` int(11) NOT NULL,
  `token` varchar(255) DEFAULT NULL,
  `value1` varchar(255) DEFAULT NULL,
  `value2` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of TokenList
-- ----------------------------
INSERT INTO `TokenList` VALUES ('43670700', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoMCIsInVzZXJOYW1lIjoi5q2q5q-U5q2q5q-UIiwiZXhwIjoxNTk0NDQxMTA1LCJ1c2VySWQiOjQzNjcwNzAwLCJpYXQiOjE1OTM4MzYzMDV9.dPz4jwkziSjLFpm2bGhPE43eENDtTXAma_gUYLcOz9g', null, null);
INSERT INTO `TokenList` VALUES ('100000000', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoMCIsInVzZXJOYW1lIjoi5p2o6ICA5LicIiwiZXhwIjoxNTk0NDYwNjgyLCJ1c2VySWQiOjEwMDAwMDAwMCwiaWF0IjoxNTkzODU1ODgyfQ.rXWHMFj9zqFb-eVmmrKOHi3NeTtHVQnDy3j1NC4nOdI', null, null);
INSERT INTO `TokenList` VALUES ('123123123', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoMCIsInVzZXJOYW1lIjoi5bygcnVpIiwiZXhwIjoxNTk0NDQyOTU0LCJ1c2VySWQiOjEyMzEyMzEyMywiaWF0IjoxNTkzODM4MTU0fQ.LlH38Y9n6gPAWK5Wiah_XANrhzeGPSSGuhRc0nksqag', null, null);
INSERT INTO `TokenList` VALUES ('126643937', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoMCIsInVzZXJOYW1lIjoi5p2o5pWZ57uDIiwiZXhwIjoxNTk0NDQyODg0LCJ1c2VySWQiOjEyNjY0MzkzNywiaWF0IjoxNTkzODM4MDg0fQ.GXF5x478EWvCXI8yhX7Qr6-M_BjFZ3p3Ilq_hpjGXWQ', null, null);
INSERT INTO `TokenList` VALUES ('141626503', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoMCIsInVzZXJOYW1lIjoiYWRtaW4iLCJleHAiOjE1OTQ0NDMwMDIsInVzZXJJZCI6MTQxNjI2NTAzLCJpYXQiOjE1OTM4MzgyMDJ9.O9a5-o5ewzTUKSCDxIak24zrSBHqpVX5lZK7MFcuarQ', null, null);
INSERT INTO `TokenList` VALUES ('147787851', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoMCIsInVzZXJOYW1lIjoi5q2q5q-U5q2q5q-UIiwiZXhwIjoxNTk0NDQwMjM5LCJ1c2VySWQiOjE0Nzc4Nzg1MSwiaWF0IjoxNTkzODM1NDM5fQ.GgM3sv7Jq-fO4fszJvfVZBMAZ1GfexSdAcGKIuwb1mM', null, null);
INSERT INTO `TokenList` VALUES ('148128015', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoMCIsInVzZXJOYW1lIjoiengiLCJleHAiOjE1OTQ0NDMwMjYsInVzZXJJZCI6MTQ4MTI4MDE1LCJpYXQiOjE1OTM4MzgyMjZ9.Ln50Tnh2r3k68EbCvutlIExqe3PDjR1VzqnSdOrMOuQ', null, null);
INSERT INTO `TokenList` VALUES ('285563018', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoMCIsInVzZXJOYW1lIjoi57-B6ZKw5pmoIiwiZXhwIjoxNTk0NDQyOTY2LCJ1c2VySWQiOjI4NTU2MzAxOCwiaWF0IjoxNTkzODM4MTY2fQ.ZWwc-ZT0Og-wRAsSFN3V5d_yVpHcjuXaJfdF63TkA2M', null, null);
INSERT INTO `TokenList` VALUES ('342227444', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoMCIsInVzZXJOYW1lIjoi5p2o5pWZ57uDIiwiZXhwIjoxNTk0NDU4NjU5LCJ1c2VySWQiOjM0MjIyNzQ0NCwiaWF0IjoxNTkzODUzODU5fQ.7DBPY8In2LIEnaB8C-4LJG-rRHrOv68F3An9-4DFksY', null, null);
INSERT INTO `TokenList` VALUES ('455055128', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoMCIsInVzZXJOYW1lIjoic3R1ZGVudDEiLCJleHAiOjE1OTQ0NDMwMTcsInVzZXJJZCI6NDU1MDU1MTI4LCJpYXQiOjE1OTM4MzgyMTd9.Gs-KfTiXPuEKAKnDgNZIzPL6cpyvW--LeIlP45r0S8E', null, null);
INSERT INTO `TokenList` VALUES ('767484293', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoMCIsInVzZXJOYW1lIjoidGVhY2hlciIsImV4cCI6MTU5NDQ0MzAxMywidXNlcklkIjo3Njc0ODQyOTMsImlhdCI6MTU5MzgzODIxM30.Oc9ZsY4Uo1xY7GrDTxk18Uuz57pe0m7RHMPga7LG1Yk', null, null);
INSERT INTO `TokenList` VALUES ('857301394', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoMCIsInVzZXJOYW1lIjoi5p2o5pWZ57uDIiwiZXhwIjoxNTk0NDU3MTQ4LCJ1c2VySWQiOjg1NzMwMTM5NCwiaWF0IjoxNTkzODUyMzQ4fQ.9KYc-6NMh1_PkPBqtjA1Nn4mhoxPJHFwC6yaT3q5NDU', null, null);
INSERT INTO `TokenList` VALUES ('883595839', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoMCIsInVzZXJOYW1lIjoienhsbCIsImV4cCI6MTU5NDQ2MDI4OCwidXNlcklkIjo4ODM1OTU4MzksImlhdCI6MTU5Mzg1NTQ4OH0.MXnzJytifNr52apT6y4cDqoVRplnB_PljDDS19Ftr7w', null, null);

-- ----------------------------
-- Table structure for tright
-- ----------------------------
DROP TABLE IF EXISTS `tright`;
CREATE TABLE `tright` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `PermissionId` int(11) NOT NULL,
  `PermissionName` varchar(20) DEFAULT NULL,
  `PermissionDescription` varchar(20) DEFAULT NULL,
  `useStatus` int(255) DEFAULT NULL,
  `CreationDate` datetime DEFAULT NULL,
  `Creator` varchar(20) DEFAULT NULL,
  `ModificationDate` datetime DEFAULT NULL,
  `Modificatier` varchar(20) DEFAULT NULL,
  `Value 2` varchar(255) DEFAULT NULL,
  `Value 3` varchar(255) DEFAULT NULL,
  `Value 4` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`,`PermissionId`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of tright
-- ----------------------------
INSERT INTO `tright` VALUES ('1', '1', '角色管理', '管理系统角色信息', '1', null, null, null, null, null, null, null);
INSERT INTO `tright` VALUES ('2', '2', '用户管理', '管理员', '1', null, null, null, null, null, null, null);
INSERT INTO `tright` VALUES ('3', '3', '菜单管理', '管理员', '1', null, null, null, null, null, null, null);
INSERT INTO `tright` VALUES ('4', '4', '字典管理', '管理员', '1', null, null, null, null, null, null, null);
INSERT INTO `tright` VALUES ('5', '5', '参数管理', '管理员、老师', '1', null, null, null, null, null, null, null);
INSERT INTO `tright` VALUES ('6', '6', '组织管理', '管理员、老师', '1', null, null, null, null, null, null, null);

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `UserId` int(11) DEFAULT NULL,
  `UserName` varchar(20) DEFAULT NULL,
  `Gender` varchar(10) DEFAULT NULL,
  `Password` varchar(255) DEFAULT NULL,
  `Phone` varchar(20) DEFAULT NULL,
  `Email` varchar(20) DEFAULT NULL,
  `Age` int(11) DEFAULT NULL,
  `BirthDate` date DEFAULT NULL,
  `School` varchar(255) DEFAULT NULL,
  `Academy` varchar(255) DEFAULT NULL,
  `Major` varchar(255) DEFAULT NULL,
  `CreationDate` datetime DEFAULT NULL,
  `Creator` int(11) DEFAULT NULL,
  `ModificationDate` datetime DEFAULT NULL,
  `Modifier` int(11) DEFAULT NULL,
  `Value 4` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `phone` (`Phone`),
  UNIQUE KEY `Email` (`Email`) USING BTREE,
  KEY `UserId` (`UserId`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '100000000', '杨耀东', '男', '123456', '18671395315', '597302358@qq.com', '24', '1997-08-01', '福州大学', '数计学院', '2019计算机技术', null, null, null, null, null);
INSERT INTO `user` VALUES ('2', '126643937', '杨教练', '男', '123456', '13995979171', 'asdue@qq.com', '24', '1996-08-16', '福州大学', '数学与计算机学院', '计算机技术2班', null, null, null, null, null);
INSERT INTO `user` VALUES ('4', '123123123', '张rui', '女', '123456', '13459140426', '123456@qq.com', '0', null, '福州大学', '数计学院', '数计', null, null, null, null, null);
INSERT INTO `user` VALUES ('10', '883595839', 'zxl', '女', '1234567', '18856336678', '458919262@qq.com', '0', '1997-04-02', '福州大学', null, '机械工程及自动化学院', null, null, null, null, null);
INSERT INTO `user` VALUES ('16', '285563018', '翁钰晨', null, '123456', '13107922919', '418822144@qq.com', '0', null, null, null, null, null, null, null, null, null);
INSERT INTO `user` VALUES ('20', '141626503', 'admin', '男', '123456', '15900000001', 'admin@fzu.com', '24', null, null, null, null, null, null, null, null, null);
INSERT INTO `user` VALUES ('21', '767484293', 'teacher', '男', '123456', '15900000002', 'teacher@fzu.com', '24', null, null, null, null, null, null, null, null, null);
INSERT INTO `user` VALUES ('22', '455055128', 'student1', '男', '123456', '15900000003', 'student1@fzu.com', '25', null, null, null, null, null, null, null, null, null);
INSERT INTO `user` VALUES ('23', '600012466', 'student2', '女', '123456', '15900000004', 'student2@fzu.com', '22', null, null, null, null, null, null, null, null, null);
INSERT INTO `user` VALUES ('25', '148128015', 'zx', '男', '123456', '18856336672', '458919267@qq.com', '0', '0199-04-18', '合肥工业大学', null, '数计', null, null, null, null, null);
INSERT INTO `user` VALUES ('33', '705948009', '歪比歪比', null, '123456', '18944443333', 'wwwww@fzu.com', null, null, null, null, null, null, null, null, null, null);

-- ----------------------------
-- Table structure for userrole
-- ----------------------------
DROP TABLE IF EXISTS `userrole`;
CREATE TABLE `userrole` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `UserId` int(11) DEFAULT NULL,
  `RoleId` int(11) DEFAULT NULL,
  `CreateDate` datetime DEFAULT NULL,
  `Creator` int(11) DEFAULT NULL,
  `ModificationDate` datetime DEFAULT NULL,
  `Modifier` int(11) DEFAULT NULL,
  `Value 1` varchar(255) DEFAULT NULL,
  `Value 2` varchar(255) DEFAULT NULL,
  `Value 3` varchar(255) DEFAULT NULL,
  `Value 4` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `RoleId` (`RoleId`),
  KEY `FK_UserRole_User` (`UserId`),
  CONSTRAINT `FK_UserRole_Role` FOREIGN KEY (`RoleId`) REFERENCES `role` (`RoleId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_UserRole_User` FOREIGN KEY (`UserId`) REFERENCES `user` (`UserId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of userrole
-- ----------------------------
INSERT INTO `userrole` VALUES ('3', '126643937', '2', null, null, null, null, null, null, null, null);
INSERT INTO `userrole` VALUES ('4', '100000000', '2', null, null, null, null, null, null, null, null);
INSERT INTO `userrole` VALUES ('6', '123123123', '1', null, null, null, null, null, null, null, null);
INSERT INTO `userrole` VALUES ('7', '883595839', '2', null, null, null, null, null, null, null, null);
INSERT INTO `userrole` VALUES ('10', '285563018', '1', null, null, null, null, null, null, null, null);
INSERT INTO `userrole` VALUES ('12', '141626503', '1', null, null, null, null, null, null, null, null);
INSERT INTO `userrole` VALUES ('13', '767484293', '2', null, null, null, null, null, null, null, null);
INSERT INTO `userrole` VALUES ('14', '455055128', '3', null, null, null, null, null, null, null, null);
INSERT INTO `userrole` VALUES ('15', '600012466', '3', null, null, null, null, null, null, null, null);
INSERT INTO `userrole` VALUES ('16', '148128015', '2', null, null, null, null, null, null, null, null);
INSERT INTO `userrole` VALUES ('18', '705948009', '3', null, null, null, null, null, null, null, null);
