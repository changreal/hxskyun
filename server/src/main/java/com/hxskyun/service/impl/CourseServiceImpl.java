package com.hxskyun.service.impl;


import com.hxskyun.domain.Course;
import com.hxskyun.domain.CourseSign;
import com.hxskyun.domain.CourseStudent;
import com.hxskyun.exception.FriendException;
import com.hxskyun.mapper.CourseMapper;
import com.hxskyun.service.ICourseService;

import com.hxskyun.utils.RandomUtil;
import com.hxskyun.utils.ResultCodeEnum;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class CourseServiceImpl implements ICourseService {

    @Autowired
    private CourseMapper courseMapper;

    @Override
    public List<Course> getCourseByUserId(Integer uuid) {
        List<Course> courseList = courseMapper.getCourseByUserId(uuid);
        for (Course course : courseList) {
            course.setTeacherName(courseMapper.getTeacherNameByTeacherId((int) course.getTeachId()));
        }
        return courseList;
    }

    @Override
    public Course getCourseByCourseId(Integer uuid) {
        Course course = new Course();
        List<Course> courseList = courseMapper.getCourseByCourseId(uuid);
        for (Course c : courseList
        ) {
            course = c;
            course.setTeacherName(courseMapper.getTeacherNameByTeacherId((int) c.getTeachId()));
        }
        return course;
    }

    @Override
    public List<CourseStudent> getMembersByCourseId(Integer uuid) {
        List<CourseStudent> courseStudentList = courseMapper.getMembersByCourseId(uuid);
        for (CourseStudent c : courseStudentList
        ) {
            c.setStudentName(courseMapper.getStudentNameByUserId((int) c.getStudentId()));
            c.setRanking(courseMapper.getRankByCourseIdUserId(c.getCourseId(), c.getStudentId()));
        }
        return courseStudentList;
    }

    @Override
    public int getMembersCountByCourseId(Integer uuid) {
        int countByCourseId = courseMapper.getMembersCountByCourseId(uuid);
        return countByCourseId;
    }

    @Override
    public List<CourseSign> courseSignByUserIdCourseId(CourseSign courseSign) {
        List<CourseSign> courseSignList = courseMapper.courseSignByUserIdCourseId(courseSign);
        for (CourseSign c : courseSignList) {
            c.setExp(courseMapper.getCourseExpByCourseIdUserId(courseSign));
            c.setRanking(courseMapper.getRankByCourseIdUserId(courseSign.getCourseId(), courseSign.getStudentId()));
        }
        return courseSignList;
    }

    @Override
    public CourseStudent insertCourseStudent(CourseStudent courseStudent) {
        try {
            courseMapper.insertCourseStudent(courseStudent);
        } catch (Exception e) {
            throw new FriendException("已加入该班课", ResultCodeEnum.BAD_REQUEST.getCode());
        }

        return courseMapper.getCourseByUserIdCourseId(courseStudent);
    }

    @Override
    public void exitCourseStudent(CourseStudent courseStudent) {
        try {
            courseMapper.exitCourseStudent(courseStudent);
        } catch (Exception e) {
            throw new FriendException("已退出该班课", ResultCodeEnum.BAD_REQUEST.getCode());
        }
    }


    @Override
    public void joinCourseSign(CourseSign courseSign) {
        try {
            courseSign.setSignTime(new Date());
            CourseSign courseSign1=courseMapper.getEndTimeBySignIdUserId(courseSign);

            if (courseSign.getSignTime().getTime() - courseSign1.getEndTime().getTime() <= 0) {
                courseSign.setSignStatus("已签到");
            } else {
                courseSign.setSignStatus("缺勤");
            }

            courseMapper.joinCourseSign(courseSign);
        } catch (Exception e) {
            throw new FriendException("1", ResultCodeEnum.BAD_REQUEST.getCode());
        }

    }

    @Override
    public CourseSign sendCourseSign(CourseSign courseSign) {
        Date now =new Date();
        courseSign.setEndTime(new Date(now.getTime()+60000*courseSign.getDuration()));//发起签到时间加上持续时间
        courseSign.setSignId(RandomUtil.getRandom(9));
        try {
            List<CourseStudent> courseStudentList = courseMapper.getMembersByCourseId((int) courseSign.getCourseId());
            for (CourseStudent courseStudent : courseStudentList) {
                CourseSign courseSign1=courseSign;
                courseSign1.setSignId(courseSign.getSignId());
                courseSign1.setCourseId(courseSign.getCourseId());
                courseSign1.setStudentId(courseStudent.getStudentId());
                courseSign1.setEndTime(courseSign.getEndTime());
                courseSign1.setSignStatus("缺勤");
                courseMapper.sendCourseSign(courseSign1);

            }
        } catch (Exception e) {
            throw new FriendException("1", ResultCodeEnum.BAD_REQUEST.getCode());
        }
        return courseSign;
    }


//    @Override
//    public int getCourseCount(PaperPage paperPage) {
//        if (paperPage.getCourseName().equals("")) {
//            paperPage.setCourseName(null);
//        }
//        return courseDao.getCourseCount(paperPage);
//    }
//
//    @Override
//    public int updateCourse(Course course) {
//        return courseDao.updateCourse(course);
//    }
//
//    @Override
//    public int addCourse(Course course) {
//        return courseDao.addCourse(course);
//    }
}
