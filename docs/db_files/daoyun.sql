/*
 Navicat Premium Data Transfer

 Source Server         : spring.datasource.username=root
 Source Server Type    : MySQL
 Source Server Version : 50730
 Source Host           : 175.24.16.48:3306
 Source Schema         : daoyun

 Target Server Type    : MySQL
 Target Server Version : 50730
 File Encoding         : 65001

 Date: 05/07/2020 21:22:36
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for CourseSign
-- ----------------------------
DROP TABLE IF EXISTS `CourseSign`;
CREATE TABLE `CourseSign`  (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `SignId` int(11) NOT NULL,
  `studentId` int(11) NULL DEFAULT NULL,
  `CourseId` int(11) NULL DEFAULT NULL,
  `signTime` datetime(0) NULL DEFAULT NULL,
  `endTime` datetime(0) NULL DEFAULT NULL,
  `signStatus` enum('请假','缺勤','已签到') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `signDistance` double NULL DEFAULT NULL,
  `sourceLatitude` double NULL DEFAULT NULL,
  `sourceLongitude` double NULL DEFAULT NULL,
  `targetLatitude` double NULL DEFAULT NULL,
  `targetLongitude` double NULL DEFAULT NULL,
  `duration` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`Id`, `SignId`) USING BTREE,
  UNIQUE INDEX `classidstudentidsignid`(`SignId`, `studentId`, `CourseId`) USING BTREE,
  INDEX `FK_classIdsign`(`CourseId`) USING BTREE,
  INDEX `FK_studentIdsign`(`studentId`) USING BTREE,
  CONSTRAINT `FK_classIdsign` FOREIGN KEY (`CourseId`) REFERENCES `classschedule` (`ClassId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_studentIdsign` FOREIGN KEY (`studentId`) REFERENCES `user` (`UserId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 368 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of CourseSign
-- ----------------------------
INSERT INTO `CourseSign` VALUES (293, 607457207, 100000000, 10001111, '2020-07-03 16:59:03', '2020-07-03 17:07:54', '已签到', 84537.362669712, 30.364952, 113.453972, 30.584354, 114.298569, 10);
INSERT INTO `CourseSign` VALUES (294, 607457207, 123123123, 10001111, '2020-07-03 16:58:58', '2020-07-03 17:07:54', '已签到', 84537.362669712, 30.364952, 113.453972, 30.584354, 114.298569, 10);
INSERT INTO `CourseSign` VALUES (295, 607457207, 883595839, 10001111, '2020-07-03 16:58:53', '2020-07-03 17:07:54', '已签到', 84537.362669712, 30.364952, 113.453972, 30.584354, 114.298569, 10);
INSERT INTO `CourseSign` VALUES (296, 902865243, 100000000, 10001111, '2020-07-03 16:59:03', '2020-07-03 17:08:48', '已签到', 84537.362669712, 30.364952, 113.453972, 30.584354, 114.298569, 10);
INSERT INTO `CourseSign` VALUES (297, 902865243, 123123123, 10001111, '2020-07-03 16:58:58', '2020-07-03 17:08:48', '已签到', 84537.362669712, 30.364952, 113.453972, 30.584354, 114.298569, 10);
INSERT INTO `CourseSign` VALUES (298, 902865243, 883595839, 10001111, '2020-07-03 16:58:53', '2020-07-03 17:08:48', '已签到', 84537.362669712, 30.364952, 113.453972, 30.584354, 114.298569, 10);
INSERT INTO `CourseSign` VALUES (299, 916918557, 100000000, 10001111, NULL, '2020-07-03 17:23:45', '缺勤', NULL, 22.322230460245, 114.1808934593, NULL, NULL, 3);
INSERT INTO `CourseSign` VALUES (300, 916918557, 123123123, 10001111, '2020-07-03 17:23:34', '2020-07-03 17:23:45', '已签到', 0, 22.322230460245, 114.1808934593, NULL, NULL, 3);
INSERT INTO `CourseSign` VALUES (301, 916918557, 883595839, 10001111, NULL, '2020-07-03 17:23:45', '缺勤', NULL, 22.322230460245, 114.1808934593, NULL, NULL, 3);
INSERT INTO `CourseSign` VALUES (326, 306553537, 126643937, 167265506, '2020-07-04 00:00:35', '2020-07-04 00:00:43', '已签到', 0, 22.322230460245, 114.1808934593, 22.322230460245, 114.1808934593, 3);
INSERT INTO `CourseSign` VALUES (327, 727824844, 126643937, 167265506, '2020-07-04 00:01:04', '2020-07-04 00:01:16', '已签到', 0, 22.322230460245, 114.1808934593, 22.322230460245, 114.1808934593, 3);
INSERT INTO `CourseSign` VALUES (328, 300117300, 126643937, 167265506, '2020-07-04 00:10:31', '2020-07-04 00:10:43', '已签到', 0, 22.322230460245, 114.1808934593, 22.322230460245, 114.1808934593, 3);
INSERT INTO `CourseSign` VALUES (333, 607194939, 126643937, 167265506, '2020-07-04 00:36:43', '2020-07-04 00:36:49', '已签到', 0, 22.322230460245, 114.1808934593, 22.322230460245, 114.1808934593, 3);
INSERT INTO `CourseSign` VALUES (334, 170263631, 126643937, 324466366, '2020-07-04 00:39:09', '2020-07-04 00:39:19', '已签到', 0, 22.322230460245, 114.1808934593, 22.322230460245, 114.1808934593, 3);
INSERT INTO `CourseSign` VALUES (339, 802062465, 148128015, 340198713, '2020-07-04 09:23:10', '2020-07-04 09:23:33', '已签到', 0, 39.91488908, 116.40387397, 39.91488908, 116.40387397, 3);
INSERT INTO `CourseSign` VALUES (340, 616248397, 883595839, 157002116, '2020-07-04 10:22:35', '2020-07-04 10:22:42', '已签到', 0, 39.91488908, 116.40387397, 39.91488908, 116.40387397, 3);
INSERT INTO `CourseSign` VALUES (345, 877920765, 100000000, 10002222, NULL, '2020-07-04 19:11:55', '缺勤', NULL, 26.0501183, 117.98494312, NULL, NULL, 5);
INSERT INTO `CourseSign` VALUES (346, 877920765, 123123123, 10002222, NULL, '2020-07-04 19:11:55', '缺勤', NULL, 26.0501183, 117.98494312, NULL, NULL, 5);
INSERT INTO `CourseSign` VALUES (347, 877920765, 883595839, 10002222, '2020-07-04 19:11:21', '2020-07-04 19:11:55', '已签到', 1548651.5821210092, 26.0501183, 117.98494312, 39.91488908, 116.40387397, 5);
INSERT INTO `CourseSign` VALUES (348, 383971494, 100000000, 10001111, NULL, '2020-07-04 19:15:52', '缺勤', NULL, 26.0501183, 117.98494312, NULL, NULL, 3);
INSERT INTO `CourseSign` VALUES (349, 383971494, 123123123, 10001111, NULL, '2020-07-04 19:15:52', '缺勤', NULL, 26.0501183, 117.98494312, NULL, NULL, 3);
INSERT INTO `CourseSign` VALUES (350, 383971494, 883595839, 10001111, NULL, '2020-07-04 19:15:52', '缺勤', NULL, 26.0501183, 117.98494312, NULL, NULL, 3);
INSERT INTO `CourseSign` VALUES (351, 26047619, 100000000, 10002222, NULL, '2020-07-04 19:23:58', '缺勤', NULL, 26.0501183, 117.98494312, NULL, NULL, 3);
INSERT INTO `CourseSign` VALUES (352, 26047619, 123123123, 10002222, '2020-07-04 19:23:32', '2020-07-04 19:23:58', '已签到', 141860.71430631168, 26.0501183, 117.98494312, 24.90165238, 118.60036234, 3);
INSERT INTO `CourseSign` VALUES (353, 26047619, 883595839, 10002222, NULL, '2020-07-04 19:23:58', '缺勤', NULL, 26.0501183, 117.98494312, NULL, NULL, 3);
INSERT INTO `CourseSign` VALUES (355, 60695228, 126643937, 324466366, NULL, '2020-07-05 11:33:29', '缺勤', NULL, 26.0471255, 119.33022111, NULL, NULL, 3);
INSERT INTO `CourseSign` VALUES (360, 506055366, 455055128, 735783296, '2020-07-05 15:59:52', '2020-07-05 15:59:58', '已签到', 666475.6404124436, 22.322230460245, 114.1808934593, 26.0471255, 119.33022111, 3);
INSERT INTO `CourseSign` VALUES (361, 506055366, 600012466, 735783296, NULL, '2020-07-05 15:59:58', '缺勤', NULL, 22.322230460245, 114.1808934593, NULL, NULL, 3);
INSERT INTO `CourseSign` VALUES (366, 677403333, 455055128, 102004414, NULL, '2020-07-05 16:20:45', '缺勤', NULL, 22.322230460245, 114.1808934593, NULL, NULL, 3);
INSERT INTO `CourseSign` VALUES (367, 677403333, 600012466, 102004414, '2020-07-05 16:20:37', '2020-07-05 16:20:45', '已签到', 0, 22.322230460245, 114.1808934593, 22.322230460245, 114.1808934593, 3);

-- ----------------------------
-- Table structure for CourseStudent
-- ----------------------------
DROP TABLE IF EXISTS `CourseStudent`;
CREATE TABLE `CourseStudent`  (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `ClassId` int(11) NULL DEFAULT NULL,
  `studentId` int(11) NULL DEFAULT NULL,
  `studentExp` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE,
  UNIQUE INDEX `classidstudentId`(`ClassId`, `studentId`) USING BTREE,
  INDEX `FK_studentId`(`studentId`) USING BTREE,
  CONSTRAINT `FK_classId` FOREIGN KEY (`ClassId`) REFERENCES `classschedule` (`ClassId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_studentId` FOREIGN KEY (`studentId`) REFERENCES `user` (`UserId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 70 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of CourseStudent
-- ----------------------------
INSERT INTO `CourseStudent` VALUES (2, 10001111, 100000000, 2);
INSERT INTO `CourseStudent` VALUES (7, 10002222, 123123123, 1);
INSERT INTO `CourseStudent` VALUES (8, 10002222, 100000000, -2);
INSERT INTO `CourseStudent` VALUES (12, 10003333, 123123123, 0);
INSERT INTO `CourseStudent` VALUES (23, 10001111, 883595839, 2);
INSERT INTO `CourseStudent` VALUES (24, 10003333, 100000000, 0);
INSERT INTO `CourseStudent` VALUES (38, 10002222, 883595839, 1);
INSERT INTO `CourseStudent` VALUES (49, 10001111, 123123123, 5);
INSERT INTO `CourseStudent` VALUES (56, 167265506, 126643937, 8);
INSERT INTO `CourseStudent` VALUES (57, 324466366, 126643937, 1);
INSERT INTO `CourseStudent` VALUES (61, 340198713, 148128015, 2);
INSERT INTO `CourseStudent` VALUES (62, 202627763, 148128015, 0);
INSERT INTO `CourseStudent` VALUES (63, 157002116, 883595839, 2);
INSERT INTO `CourseStudent` VALUES (66, 735783296, 455055128, 2);
INSERT INTO `CourseStudent` VALUES (67, 102004414, 455055128, -1);
INSERT INTO `CourseStudent` VALUES (68, 735783296, 600012466, -1);
INSERT INTO `CourseStudent` VALUES (69, 102004414, 600012466, 2);

-- ----------------------------
-- Table structure for TokenList
-- ----------------------------
DROP TABLE IF EXISTS `TokenList`;
CREATE TABLE `TokenList`  (
  `id` int(11) NOT NULL,
  `token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `value1` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `value2` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of TokenList
-- ----------------------------
INSERT INTO `TokenList` VALUES (43670700, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoMCIsInVzZXJOYW1lIjoi5q2q5q-U5q2q5q-UIiwiZXhwIjoxNTk0NDQxMTA1LCJ1c2VySWQiOjQzNjcwNzAwLCJpYXQiOjE1OTM4MzYzMDV9.dPz4jwkziSjLFpm2bGhPE43eENDtTXAma_gUYLcOz9g', NULL, NULL);
INSERT INTO `TokenList` VALUES (100000000, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoMCIsInVzZXJOYW1lIjoi5p2o6ICA5LicIiwiZXhwIjoxNTk0NTQ3NDkzLCJ1c2VySWQiOjEwMDAwMDAwMCwiaWF0IjoxNTkzOTQyNjkzfQ.ABt5Bww1hfqPt_s4TAuFgccUu6TNw-o9W4Ben9VttO4', NULL, NULL);
INSERT INTO `TokenList` VALUES (123123123, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoMCIsInVzZXJOYW1lIjoi5byg5ZCM5a2mIiwiZXhwIjoxNTk0NTM2Mjg2LCJ1c2VySWQiOjEyMzEyMzEyMywiaWF0IjoxNTkzOTMxNDg2fQ.ORSpkaWnEPugS6VDQz5Fa5nLmz8C0Xv30mpne0Z6kiQ', NULL, NULL);
INSERT INTO `TokenList` VALUES (126643937, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoMCIsInVzZXJOYW1lIjoi5p2o5pWZ57uDIiwiZXhwIjoxNTk0NDY0ODIyLCJ1c2VySWQiOjEyNjY0MzkzNywiaWF0IjoxNTkzODYwMDIyfQ.exFeADwzCSKR457hN7qdmD_waUe6CDwhZJFh1QlPW-0', NULL, NULL);
INSERT INTO `TokenList` VALUES (141626503, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoMCIsInVzZXJOYW1lIjoiYWRtaW4iLCJleHAiOjE1OTQ1NDAwNDEsInVzZXJJZCI6MTQxNjI2NTAzLCJpYXQiOjE1OTM5MzUyNDF9.3kxcfnzy2-n2IuOhYV1WdGnD9YiSNAzOKgtm1n_6VL4', NULL, NULL);
INSERT INTO `TokenList` VALUES (147787851, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoMCIsInVzZXJOYW1lIjoi5q2q5q-U5q2q5q-UIiwiZXhwIjoxNTk0NDQwMjM5LCJ1c2VySWQiOjE0Nzc4Nzg1MSwiaWF0IjoxNTkzODM1NDM5fQ.GgM3sv7Jq-fO4fszJvfVZBMAZ1GfexSdAcGKIuwb1mM', NULL, NULL);
INSERT INTO `TokenList` VALUES (148128015, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoMCIsInVzZXJOYW1lIjoiengiLCJleHAiOjE1OTQ0NDMwMjYsInVzZXJJZCI6MTQ4MTI4MDE1LCJpYXQiOjE1OTM4MzgyMjZ9.Ln50Tnh2r3k68EbCvutlIExqe3PDjR1VzqnSdOrMOuQ', NULL, NULL);
INSERT INTO `TokenList` VALUES (285563018, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoMCIsInVzZXJOYW1lIjoi57-B6ZKw5pmoIiwiZXhwIjoxNTk0NTU2Mzc0LCJ1c2VySWQiOjI4NTU2MzAxOCwiaWF0IjoxNTkzOTUxNTc0fQ.OVMxHlJXBoAnN4Hk8IYfCTeL2VPWZUeSLbT_Gta9WnM', NULL, NULL);
INSERT INTO `TokenList` VALUES (342227444, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoMCIsInVzZXJOYW1lIjoi5p2o5pWZ57uDIiwiZXhwIjoxNTk0NDU4NjU5LCJ1c2VySWQiOjM0MjIyNzQ0NCwiaWF0IjoxNTkzODUzODU5fQ.7DBPY8In2LIEnaB8C-4LJG-rRHrOv68F3An9-4DFksY', NULL, NULL);
INSERT INTO `TokenList` VALUES (455055128, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoMCIsInVzZXJOYW1lIjoic3R1ZGVudDEiLCJleHAiOjE1OTQ1NDA3NjMsInVzZXJJZCI6NDU1MDU1MTI4LCJpYXQiOjE1OTM5MzU5NjN9.5XlBAxypc3QOl5fQoAamKiHQ7fNdc8YY9dzChSJiQ4U', NULL, NULL);
INSERT INTO `TokenList` VALUES (600012466, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoMCIsInVzZXJOYW1lIjoic3R1ZGVudDIiLCJleHAiOjE1OTQ1NDA2NzksInVzZXJJZCI6NjAwMDEyNDY2LCJpYXQiOjE1OTM5MzU4Nzl9.6e5W4FQmG6I7hyADFqpXq7OVf2omrVOUcWMTe41Q6IA', NULL, NULL);
INSERT INTO `TokenList` VALUES (669199225, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoMCIsInVzZXJOYW1lIjoidzExNjExIiwiZXhwIjoxNTk0NDY1NjUyLCJ1c2VySWQiOjY2OTE5OTIyNSwiaWF0IjoxNTkzODYwODUyfQ.yJuMOVvvkh8bxiiLiXTcfaViSmD1hmdy_s6IicvOe5w', NULL, NULL);
INSERT INTO `TokenList` VALUES (767484293, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoMCIsInVzZXJOYW1lIjoidGVhY2hlciIsImV4cCI6MTU5NDU0MDcyNCwidXNlcklkIjo3Njc0ODQyOTMsImlhdCI6MTU5MzkzNTkyNH0.w5JfCdxFkbQpvm0AJYQirhbQefgI5FXowBhcZFRliW0', NULL, NULL);
INSERT INTO `TokenList` VALUES (857301394, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoMCIsInVzZXJOYW1lIjoi5p2o5pWZ57uDIiwiZXhwIjoxNTk0NDU3MTQ4LCJ1c2VySWQiOjg1NzMwMTM5NCwiaWF0IjoxNTkzODUyMzQ4fQ.9KYc-6NMh1_PkPBqtjA1Nn4mhoxPJHFwC6yaT3q5NDU', NULL, NULL);
INSERT INTO `TokenList` VALUES (883595839, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoMCIsInVzZXJOYW1lIjoienhsIiwiZXhwIjoxNTk0NTMwNzE0LCJ1c2VySWQiOjg4MzU5NTgzOSwiaWF0IjoxNTkzOTI1OTE0fQ.LDCbAdFpr2dKc3regXUGB5_zKO-BRdjS7ES2eblfD0w', NULL, NULL);
INSERT INTO `TokenList` VALUES (924555272, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoMCIsInVzZXJOYW1lIjoiaHpxIiwiZXhwIjoxNTk0NTE5OTQ1LCJ1c2VySWQiOjkyNDU1NTI3MiwiaWF0IjoxNTkzOTE1MTQ1fQ.WCQHfFx1DedrZ1YnAJn0HsKdQ2YAXJYBsGvKeMEL9EY', NULL, NULL);
INSERT INTO `TokenList` VALUES (978102558, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoMCIsInVzZXJOYW1lIjoi5byg5ZCM5a2mMiIsImV4cCI6MTU5NDUyMzYxMiwidXNlcklkIjo5NzgxMDI1NTgsImlhdCI6MTU5MzkxODgxMn0.chjfJ5EfpEF7Ug5HTgLJlalfySpf4OWYXR9gmr-Hkzo', NULL, NULL);

-- ----------------------------
-- Table structure for buttontype
-- ----------------------------
DROP TABLE IF EXISTS `buttontype`;
CREATE TABLE `buttontype`  (
  `buttonId` int(11) NOT NULL,
  `cnName` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `enName` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`buttonId`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of buttontype
-- ----------------------------

-- ----------------------------
-- Table structure for classschedule
-- ----------------------------
DROP TABLE IF EXISTS `classschedule`;
CREATE TABLE `classschedule`  (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `ClassId` int(11) NOT NULL,
  `ClassName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `ClassType` int(11) NULL DEFAULT NULL,
  `ClassDes` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `studyRequire` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `courseSemester` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `TeacherId` int(11) NULL DEFAULT NULL,
  `School` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Department` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Major` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `EndClassStatus` enum('已结课','进行中','未开始') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '未开始',
  `SignIn` int(11) NULL DEFAULT NULL,
  `Value3` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Value4` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`Id`, `ClassId`) USING BTREE,
  INDEX `ClassId`(`ClassId`) USING BTREE,
  INDEX `fk_teacherid`(`TeacherId`) USING BTREE,
  CONSTRAINT `fk_teacherid` FOREIGN KEY (`TeacherId`) REFERENCES `user` (`UserId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 30 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of classschedule
-- ----------------------------
INSERT INTO `classschedule` VALUES (1, 10001111, '工程训练', NULL, '好好学习', '必修', '2019-2020-2', 126643937, '福州大学', '数计学院', '2019级计算机技术', '进行中', NULL, NULL, NULL);
INSERT INTO `classschedule` VALUES (2, 10002222, '智能技术', NULL, '研究生培养计划，好好做作业！！！', '必修', '2019-2020-2', 126643937, '福州大学', '数计学院', '2019计算机技术', '进行中', NULL, NULL, NULL);
INSERT INTO `classschedule` VALUES (3, 10003333, '自然辩证法', NULL, '研究生培养计划', '必修', '2019-2020-2', 126643937, '福州大学', '数计学院', '2019计算机技术', '已结课', NULL, '', '');
INSERT INTO `classschedule` VALUES (7, 534766735, '云计算与虚拟化技术', NULL, '研究生培养计划1！！！', NULL, '2019-2020-1', 126643937, '福州大学', '数计学院', '2019计算机技术1班', '已结课', NULL, NULL, NULL);
INSERT INTO `classschedule` VALUES (9, 167265506, 'ACCA', NULL, '无！', NULL, '2019-2020-2', 123123123, '福州大学', '外国语学院', '2019级会计', '进行中', NULL, NULL, NULL);
INSERT INTO `classschedule` VALUES (10, 324466366, '排水工程', NULL, '无', NULL, '2019-2020-2', 123123123, '福州大学', '土木工程学院', '2018级排水', '进行中', NULL, NULL, NULL);
INSERT INTO `classschedule` VALUES (15, 223973194, '图像处理', NULL, '写图像处理论文', NULL, '2019-2020-2', 123123123, '福州大学', '数计学院', '2019级计算机技术', '已结课', NULL, NULL, NULL);
INSERT INTO `classschedule` VALUES (20, 340198713, '软件工程', NULL, '无', NULL, '2019-2020-2', 883595839, '福州大学', '外国语学院', '2019计算机工硕', '已结课', NULL, NULL, NULL);
INSERT INTO `classschedule` VALUES (21, 202627763, '大软件工程', NULL, '无', NULL, '2019-2020-2', 883595839, '厦门大学', '土木工程学院', '201', '已结课', NULL, NULL, NULL);
INSERT INTO `classschedule` VALUES (22, 157002116, '云计算3', NULL, '无', NULL, '2020-2021-2', 148128015, '福州大学', '艺术学院', '2019', '已结课', NULL, NULL, NULL);
INSERT INTO `classschedule` VALUES (28, 735783296, '工程实践', NULL, '无', NULL, '2019-2020-2', 767484293, '福州大学', '数计学院', '2019级计算机工硕', '进行中', NULL, NULL, NULL);
INSERT INTO `classschedule` VALUES (29, 102004414, '信息安全', NULL, '无', NULL, '2019-2020-2', 767484293, '福州大学', '数计学院', '2019级计算机工硕', '进行中', NULL, NULL, NULL);

-- ----------------------------
-- Table structure for dictionarydetail
-- ----------------------------
DROP TABLE IF EXISTS `dictionarydetail`;
CREATE TABLE `dictionarydetail`  (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `ItemKey` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `ItemValue` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `IsDefault` int(11) NOT NULL,
  `SortNum` int(11) NOT NULL,
  `CreationDate` datetime(0) NULL DEFAULT NULL,
  `Creator` int(11) NULL DEFAULT NULL,
  `ModificationDate` datetime(0) NULL DEFAULT NULL,
  `Modifier` int(11) NULL DEFAULT NULL,
  `Value 1` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Value 2` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Value 3` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Value 4` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE,
  INDEX `FK_ItemKey`(`ItemKey`) USING BTREE,
  CONSTRAINT `FK_ItemKey` FOREIGN KEY (`ItemKey`) REFERENCES `dictionarytype` (`ItemKey`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 28 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of dictionarydetail
-- ----------------------------
INSERT INTO `dictionarydetail` VALUES (1, 'sex', '男', 1, 1, '2020-04-25 09:47:50', 1, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `dictionarydetail` VALUES (2, 'sex', '女', 0, 2, '2020-04-24 21:35:13', 1, '2020-04-24 21:35:37', 1, NULL, NULL, NULL, NULL);
INSERT INTO `dictionarydetail` VALUES (3, 'role', '学生', 1, 1, '2020-04-24 21:45:38', NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `dictionarydetail` VALUES (4, 'role', '教师', 0, 2, '2020-04-24 21:45:41', NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `dictionarydetail` VALUES (5, 'role', '管理员', 0, 3, '2020-04-24 21:45:47', NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `dictionarydetail` VALUES (6, 'education', '大学本科', 1, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `dictionarydetail` VALUES (7, 'education', '高中', 0, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `dictionarydetail` VALUES (8, 'education', '初中', 0, 3, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `dictionarydetail` VALUES (9, 'education', '大专', 0, 4, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `dictionarydetail` VALUES (10, 'education', '中专', 0, 5, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `dictionarydetail` VALUES (11, 'education', '研究生', 0, 6, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `dictionarydetail` VALUES (12, 'classType', '学校课程', 1, 1, '2020-04-24 21:40:36', NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `dictionarydetail` VALUES (13, 'classType', '个人课程', 0, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `dictionarydetail` VALUES (14, 'attendanceStatus', '已签到', 0, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `dictionarydetail` VALUES (15, 'attendanceStatus', '未签到', 0, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `dictionarydetail` VALUES (16, 'courseSemester', '2019-2020-1', 1, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `dictionarydetail` VALUES (17, 'courseSemester', '2019-2020-2', 0, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `dictionarydetail` VALUES (18, 'courseSemester', '2020-2021-1', 0, 3, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `dictionarydetail` VALUES (19, 'courseSemester', '2020-2021-2', 0, 4, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `dictionarydetail` VALUES (20, 'schoolList', '福州大学', 1, 1, '2020-06-30 15:52:21', NULL, '2020-06-30 15:53:17', NULL, '', '', '', '');
INSERT INTO `dictionarydetail` VALUES (21, 'schoolList', '厦门大学', 0, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `dictionarydetail` VALUES (22, 'schoolList', '清华大学', 0, 3, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `dictionarydetail` VALUES (23, 'departmentList', '数计学院', 1, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `dictionarydetail` VALUES (24, 'departmentList', '土木工程学院', 0, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `dictionarydetail` VALUES (25, 'departmentList', '外国语学院', 0, 3, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `dictionarydetail` VALUES (26, 'departmentList', '艺术学院', 0, 4, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- ----------------------------
-- Table structure for dictionarytype
-- ----------------------------
DROP TABLE IF EXISTS `dictionarytype`;
CREATE TABLE `dictionarytype`  (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `TypeName` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `ItemKey` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `CreationDate` datetime(0) NULL DEFAULT NULL,
  `Creator` int(11) NULL DEFAULT NULL,
  `ModificationDate` datetime(0) NULL DEFAULT NULL,
  `Modifier` int(11) NULL DEFAULT NULL,
  `Value 1` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Value 2` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Value 3` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Value 4` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`Id`, `ItemKey`) USING BTREE,
  INDEX `ItemKey`(`ItemKey`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of dictionarytype
-- ----------------------------
INSERT INTO `dictionarytype` VALUES (1, '性别', 'sex', '2020-04-24 21:25:49', 1, '2020-04-24 21:25:53', 1, NULL, NULL, NULL, NULL);
INSERT INTO `dictionarytype` VALUES (2, '角色', 'role', '2020-04-24 20:34:59', 1, '2020-04-24 20:35:09', 1, NULL, NULL, NULL, NULL);
INSERT INTO `dictionarytype` VALUES (3, '学历', 'education', '2020-04-24 21:26:17', 1, '2020-04-24 21:26:21', 1, NULL, NULL, NULL, NULL);
INSERT INTO `dictionarytype` VALUES (4, '班课类型', 'classType', '2020-04-24 21:27:12', 1, '2020-04-24 21:27:15', 1, NULL, NULL, NULL, NULL);
INSERT INTO `dictionarytype` VALUES (5, '签到情况', 'attendanceStatus', '2020-04-24 21:27:34', 1, '2020-04-24 21:27:37', 1, NULL, NULL, NULL, NULL);
INSERT INTO `dictionarytype` VALUES (6, '学期列表', 'courseSemester', '2020-06-30 15:47:49', 1, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `dictionarytype` VALUES (7, '学校列表', 'schoolList', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `dictionarytype` VALUES (8, '学院列表', 'departmentList', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- ----------------------------
-- Table structure for role
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role`  (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `RoleId` int(11) NULL DEFAULT NULL,
  `RoleName` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `RoleDescription` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `CreationDate` datetime(0) NULL DEFAULT NULL,
  `Creator` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `ModificationDate` datetime(0) NULL DEFAULT NULL,
  `Modificatier` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Value 1` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Value 2` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Value 3` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Value 4` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE,
  UNIQUE INDEX `RoleId`(`RoleId`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 16 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of role
-- ----------------------------
INSERT INTO `role` VALUES (1, 1, '管理员', '所有模块管理', '2020-06-27 14:48:44', '1', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `role` VALUES (2, 2, '老师', '允许班课管理', '2020-06-27 14:49:09', '1', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `role` VALUES (3, 3, '学生', '无', '2020-06-27 14:49:23', '1', NULL, NULL, NULL, NULL, NULL, NULL);

-- ----------------------------
-- Table structure for roleright
-- ----------------------------
DROP TABLE IF EXISTS `roleright`;
CREATE TABLE `roleright`  (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `RightId` int(11) NULL DEFAULT NULL,
  `RoleId` int(11) NULL DEFAULT NULL,
  `CreationDate` datetime(0) NULL DEFAULT NULL,
  `Creator` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `ModificationDate` datetime(0) NULL DEFAULT NULL,
  `Modificatier` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Value 1` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Value 2` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Value 3` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Value 4` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE,
  UNIQUE INDEX `rightroleid`(`RightId`, `RoleId`) USING BTREE,
  INDEX `FK_RoleRight_TRight`(`RightId`) USING BTREE,
  INDEX `FK_RoleRight_Role`(`RoleId`) USING BTREE,
  CONSTRAINT `FK_RoleRight_Role` FOREIGN KEY (`RoleId`) REFERENCES `role` (`RoleId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_RoleRight_TRight` FOREIGN KEY (`RightId`) REFERENCES `tright` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 45 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of roleright
-- ----------------------------
INSERT INTO `roleright` VALUES (7, 5, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `roleright` VALUES (8, 6, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `roleright` VALUES (15, 1, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `roleright` VALUES (16, 2, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `roleright` VALUES (17, 3, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `roleright` VALUES (18, 4, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `roleright` VALUES (19, 5, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `roleright` VALUES (20, 6, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- ----------------------------
-- Table structure for signauths
-- ----------------------------
DROP TABLE IF EXISTS `signauths`;
CREATE TABLE `signauths`  (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `UserId` int(11) NULL DEFAULT NULL,
  `Type` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Identifier` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Credential` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `CreationDate` datetime(0) NULL DEFAULT NULL,
  `Creator` int(11) NULL DEFAULT NULL,
  `ModificationDate` datetime(0) NULL DEFAULT NULL,
  `Modifier` int(11) NULL DEFAULT NULL,
  `Value 1` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Value 2` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Value 3` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Value 4` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE,
  INDEX `FK_Signauths_User`(`UserId`) USING BTREE,
  CONSTRAINT `FK_Signauths_User` FOREIGN KEY (`UserId`) REFERENCES `user` (`UserId`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of signauths
-- ----------------------------

-- ----------------------------
-- Table structure for tright
-- ----------------------------
DROP TABLE IF EXISTS `tright`;
CREATE TABLE `tright`  (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `PermissionId` int(11) NOT NULL,
  `PermissionName` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `PermissionDescription` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `useStatus` int(255) NULL DEFAULT NULL,
  `CreationDate` datetime(0) NULL DEFAULT NULL,
  `Creator` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `ModificationDate` datetime(0) NULL DEFAULT NULL,
  `Modificatier` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Value 2` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Value 3` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Value 4` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`Id`, `PermissionId`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tright
-- ----------------------------
INSERT INTO `tright` VALUES (1, 1, '角色管理', '管理系统角色信息', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `tright` VALUES (2, 2, '用户管理', '管理系统角色信息', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `tright` VALUES (3, 3, '菜单管理', '管理员', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `tright` VALUES (4, 4, '字典管理', '管理员', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `tright` VALUES (5, 5, '班课信息', '管理系统角色信息', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `tright` VALUES (6, 6, '组织信息', '管理系统角色信息', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `UserId` int(11) NULL DEFAULT NULL,
  `UserName` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Gender` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Phone` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Email` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Age` int(11) NULL DEFAULT NULL,
  `BirthDate` date NULL DEFAULT NULL,
  `School` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Academy` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Major` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `CreationDate` datetime(0) NULL DEFAULT NULL,
  `Creator` int(11) NULL DEFAULT NULL,
  `ModificationDate` datetime(0) NULL DEFAULT NULL,
  `Modifier` int(11) NULL DEFAULT NULL,
  `Value 4` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE,
  UNIQUE INDEX `phone`(`Phone`) USING BTREE,
  UNIQUE INDEX `Email`(`Email`) USING BTREE,
  INDEX `UserId`(`UserId`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 38 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 100000000, '杨耀东', '男', '123456', '18671395315', '597302358@qq.com', 24, '1997-08-01', '福州大学', '数计学院', '2019计算机技术', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (2, 126643937, '杨教练', '男', '123456', '13995979171', 'asdue@qq.com', 24, '1996-08-16', '福州大学', '数学与计算机学院', '计算机技术2班', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (4, 123123123, '张同学', '女', '123456', '13459140426', '123456@qq.com', 0, NULL, '福州大学', '数计学院', '数学与计算机科学学院', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (10, 883595839, 'zxl', '男', '1234567', '18856336678', '458919262@qq.com', 0, '1997-04-02', '福州大学', NULL, '环境与资源学院', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (16, 285563018, '翁钰晨', NULL, '123456', '13107922919', '418822144@qq.com', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (20, 141626503, 'admin', '男', '123456', '15900000001', 'admin@fzu.com', 24, '2020-07-05', '福州大学', NULL, '数学与计算机科学学院', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (21, 767484293, 'teacher', '男', '123456', '15900000002', 'teacher@fzu.com', 24, '2020-07-05', '福州大学', '数计学院', '数学与计算机科学学院', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (22, 455055128, 'student1', '男', '123456', '15900000003', 'student1@fzu.com', 25, '2020-07-05', '福州大学', '数计学院', '数学与计算机科学学院', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (23, 600012466, 'student2', '女', '123456', '15900000004', 'student2@fzu.com', 22, '2020-07-05', '福州大学', '数计学院', '数学与计算机科学学院', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (25, 148128015, 'zx', '男', '123456', '18856336672', '458919267@qq.com', 0, '0199-04-18', '合肥工业大学', NULL, '数计', NULL, NULL, NULL, NULL, NULL);

-- ----------------------------
-- Table structure for userrole
-- ----------------------------
DROP TABLE IF EXISTS `userrole`;
CREATE TABLE `userrole`  (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `UserId` int(11) NULL DEFAULT NULL,
  `RoleId` int(11) NULL DEFAULT NULL,
  `CreateDate` datetime(0) NULL DEFAULT NULL,
  `Creator` int(11) NULL DEFAULT NULL,
  `ModificationDate` datetime(0) NULL DEFAULT NULL,
  `Modifier` int(11) NULL DEFAULT NULL,
  `Value 1` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Value 2` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Value 3` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Value 4` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE,
  INDEX `RoleId`(`RoleId`) USING BTREE,
  INDEX `FK_UserRole_User`(`UserId`) USING BTREE,
  CONSTRAINT `FK_UserRole_Role` FOREIGN KEY (`RoleId`) REFERENCES `role` (`RoleId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_UserRole_User` FOREIGN KEY (`UserId`) REFERENCES `user` (`UserId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 22 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of userrole
-- ----------------------------
INSERT INTO `userrole` VALUES (3, 126643937, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `userrole` VALUES (4, 100000000, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `userrole` VALUES (6, 123123123, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `userrole` VALUES (7, 883595839, 3, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `userrole` VALUES (10, 285563018, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `userrole` VALUES (12, 141626503, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `userrole` VALUES (13, 767484293, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `userrole` VALUES (14, 455055128, 3, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `userrole` VALUES (15, 600012466, 3, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `userrole` VALUES (16, 148128015, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

SET FOREIGN_KEY_CHECKS = 1;
