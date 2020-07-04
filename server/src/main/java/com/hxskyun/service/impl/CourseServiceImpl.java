package com.hxskyun.service.impl;


import com.hxskyun.domain.Course;
import com.hxskyun.domain.CourseSign;
import com.hxskyun.domain.CourseStudent;
import com.hxskyun.exception.FriendException;
import com.hxskyun.mapper.CourseMapper;
import com.hxskyun.service.ICourseService;

import com.hxskyun.utils.RandomUtil;
import com.hxskyun.utils.ResultCodeEnum;

import org.gavaghan.geodesy.Ellipsoid;
import org.gavaghan.geodesy.GlobalCoordinates;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.awt.*;
import java.sql.Timestamp;
import java.util.Date;

import java.util.List;


import static com.test.gps.CaculateDistanceTest.getDistanceMeter;

@Service
public class CourseServiceImpl implements ICourseService {

    @Autowired
    private CourseMapper courseMapper;


    @Override
    public List<Course> getCourseByUserId(Integer uuid) {
        List<Course> courseList = courseMapper.getCourseByUserId(uuid);
        for (Course course : courseList) {
            course.setTeacherName(courseMapper.getTeacherNameByTeacherId(course.getTeachId()));
        }
        return courseList;
    }

    @Override
    public List<Course> getCourseByTeachId(Integer uuid) {
        List<Course> courseList = courseMapper.getCourseByTeachId(uuid);
        for (Course course : courseList) {
            course.setTeacherName(courseMapper.getTeacherNameByTeacherId(course.getTeachId()));
        }

        return courseList;
    }

    @Override
    public Course getCourseByCourseId(Integer uuid) {
        Course course = new Course();
        List<Course> courseList = courseMapper.getCourseByCourseId(uuid);
        if (courseList == null || courseList.size() == 0) {
            throw new FriendException("课程号为空，重新输入课程号", ResultCodeEnum.BAD_REQUEST.getCode());
        }
        for (Course c : courseList
        ) {
            course = c;
            course.setTeacherName(courseMapper.getTeacherNameByTeacherId(c.getTeachId()));
        }
        return course;
    }

    @Override
    public List<CourseStudent> getMembersByCourseId(Integer uuid) {
        List<CourseStudent> courseStudentList = courseMapper.getMembersByCourseId(uuid);
        for (CourseStudent c : courseStudentList
        ) {
            CourseSign courseSign = new CourseSign();
            courseSign.setStudentId(c.getStudentId());
            courseSign.setCourseId(c.getCourseId());
            c.setStudentName(courseMapper.getStudentNameByUserId((int) c.getStudentId()));
            c.setRanking(courseMapper.getRankByCourseIdUserId(c.getCourseId(), c.getStudentId()));
            c.setSignedNumbers(courseMapper.getCourseSignFinshed(courseSign).size());
            c.setUnSignedNumbers(courseMapper.getCourseSignUnFinshed(courseSign).size());
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
    public CourseSign joinCourseSign(CourseSign courseSign) {
        int flag = 0;//签到时间判断标志；
        courseSign.setSignTime(new Date());
        List<CourseSign> courseSignList = courseMapper.getEndTimeBySignIdUserId(courseSign);
        if (courseSignList == null) {
            throw new FriendException("该学生未加入该班课，参加签到失败", ResultCodeEnum.BAD_REQUEST.getCode());
        }
//        CourseSign courseSign1 = new CourseSign();
        for (CourseSign courseSign1 : courseSignList) {
            if (courseSign.getSignTime().getTime() - courseSign1.getEndTime().getTime() <= 0) {
                flag = 1;
                courseSign.setSignStatus("已签到");
                if (courseSign.getTargetLatitude() == null || courseSign.getTargetLatitude() == null) {
                    throw new FriendException("学生签到经纬度不能为空", ResultCodeEnum.BAD_REQUEST.getCode());

                }
                GlobalCoordinates source = new GlobalCoordinates(courseSign1.getSourceLatitude(), courseSign1.getSourceLongitude());//老师经纬度
                GlobalCoordinates target = new GlobalCoordinates(courseSign.getTargetLatitude(), courseSign.getTargetLongitude());//学生经纬度
                double meter1 = getDistanceMeter(source, target, Ellipsoid.Sphere);
                courseSign.setSignDistance(meter1);
                courseSign.setSignId(courseSign1.getSignId());
                try {
                    courseMapper.joinCourseSign(courseSign);
                    expInit();//计算经验
                } catch (Exception e) {
                    throw new FriendException("1", ResultCodeEnum.BAD_REQUEST.getCode());
                }
            }

        }
        if (flag == 0) {
            throw new FriendException("签到时间已过，签到失败", ResultCodeEnum.BAD_REQUEST.getCode());
        }


        return courseMapper.getCourseSignByCourseSign(courseSign);

    }

    @Override
    public CourseSign sendCourseSign(CourseSign courseSign) {
        Date now = new Date();
        courseSign.setEndTime(new Date(now.getTime() + 60000 * courseSign.getDuration()));//发起签到时间加上持续时间
        courseSign.setSignId(RandomUtil.getRandom(9));
        try {
            List<CourseStudent> courseStudentList = courseMapper.getMembersByCourseId((int) courseSign.getCourseId());
            if (courseStudentList.size() == 0 || courseStudentList == null) {
                throw new FriendException("没有开设该课程号的课程，发起签到失败", ResultCodeEnum.BAD_REQUEST.getCode());
            }
            for (CourseStudent courseStudent : courseStudentList) {
                CourseSign courseSign1 = courseSign;
                courseSign1.setSignId(courseSign.getSignId());
                courseSign1.setCourseId(courseSign.getCourseId());
                courseSign1.setStudentId(courseStudent.getStudentId());
                courseSign1.setEndTime(courseSign.getEndTime());
                courseSign1.setSignStatus("缺勤");
                courseSign1.setDuration(courseSign.getDuration());
                if (courseSign.getSourceLatitude() == null || courseSign.getSourceLongitude() == null) {
                    throw new FriendException("老师发起的签到经纬度不能为空", ResultCodeEnum.BAD_REQUEST.getCode());
                }
                courseSign1.setSourceLatitude(courseSign.getSourceLatitude());//老师签到经纬度
                courseSign1.setSourceLongitude(courseSign.getSourceLongitude());

                courseMapper.sendCourseSign(courseSign1);

            }
        } catch (Exception e) {
            throw new FriendException("没有开设该课程号的课程，发起签到失败", ResultCodeEnum.BAD_REQUEST.getCode());
        }
        return courseSign;
    }

    @Override
    public void deleteCourse(Course course) {
        try {
            if (course.getTeachId() == null) {
                throw new Exception();
            }
            if (course.getCourseId() == null) {
                throw new Exception();
            }
            courseMapper.deleteCourse(course);
        } catch (Exception e) {
            throw new FriendException("检查老师id和课程号是否存在", ResultCodeEnum.BAD_REQUEST.getCode());
        }
    }

    @Override
    public void expInit() {
        List<CourseStudent> courseStudentList = courseMapper.getAllCourseStudent();
        for (CourseStudent courseStudent : courseStudentList
        ) {
            int exp = 0;
            CourseSign courseSign = new CourseSign();
            courseSign.setCourseId(courseStudent.getCourseId());
            courseSign.setStudentId(courseStudent.getStudentId());
            List<CourseSign> courseSignListFinshed = courseMapper.getCourseSignFinshed(courseSign);
            List<CourseSign> courseSignListUnFinshed = courseMapper.getCourseSignUnFinshed(courseSign);
            exp = courseSignListFinshed.size() * 2 + courseSignListUnFinshed.size() * (-1);
            courseStudent.setStudentExp(exp);
            courseMapper.updateCourseStudent(courseStudent);
        }

    }

    @Override
    public void deleteCourseSign(Integer uuid) {
        courseMapper.deleteCourseSign(uuid);
        expInit();
    }

    @Override
    public Course creatCourse(Course course) {
        if (course.getTeachId() == null) {//老师id
            throw new FriendException("老师ID不能为空", ResultCodeEnum.BAD_REQUEST.getCode());
        }
        if (course.getCourseSemester() == null) {//学期
            throw new FriendException("学期不能为空", ResultCodeEnum.BAD_REQUEST.getCode());
        }
        if (course.getMajor() == null) {//班级名字（专业）
            throw new FriendException("班名不能为空", ResultCodeEnum.BAD_REQUEST.getCode());
        }
        if (course.getCourseName() == null) {//课程名字
            throw new FriendException("课程名不能为空", ResultCodeEnum.BAD_REQUEST.getCode());
        }

        if (course.getEndClassStatus().contains("进行")) {//开课状态
            course.setEndClassStatus("进行中");
        } else {
            course.setEndClassStatus("未开始");
        }

        if (course.getClassDes() == null) {//学习要求
            course.setClassDes("无");
        }
        if (course.getSchool() == null) {//学校
            course.setSchool("无");
        }
        if (course.getDepartment() == null) {//学院
            course.setDepartment("无");
        }
        course.setCourseId(RandomUtil.getRandom(9));

        try {
            courseMapper.creatCourse(course);
        } catch (Exception e) {
            throw new FriendException("创建参数有误", ResultCodeEnum.BAD_REQUEST.getCode());
        }

        return course;
    }

    @Override
    public Course updateCourse(Course course) {
        if (course.getCourseId() == null) {//班课id
            throw new FriendException("班课ID不能为空", ResultCodeEnum.BAD_REQUEST.getCode());
        }
        Course course1 = courseMapper.getCourseById(course.getCourseId().intValue());
        if (course.getCourseName() != null) {//课程名字
            course1.setCourseName(course.getCourseName());
        }
        if (course.getClassDes() != null) {//学习要求
            course1.setClassDes(course.getClassDes());
        }
        if (course.getCourseSemester() != null) {//学期
            course1.setCourseSemester(course.getCourseSemester());
        }
        if (course.getSchool() != null) {//学校
            course1.setSchool(course.getSchool());
        }
        if (course.getDepartment() != null) {//学院
            course1.setDepartment(course.getDepartment());
        }
        if (course.getMajor() != null) {//班级
            course1.setMajor(course.getMajor());
        }
        if (course.getEndClassStatus().contains("进行")) {//开课状态
            course1.setEndClassStatus("进行中");
        } else if (course.getEndClassStatus().contains("未开始")) {
            course1.setEndClassStatus("未开始");
        } else if (course.getEndClassStatus().contains("结课")) {
            course1.setEndClassStatus("已结课");
        }
        try {
            courseMapper.updateCourse(course1);
        } catch (Exception e) {
            throw new FriendException("更新参数有误", ResultCodeEnum.BAD_REQUEST.getCode());
        }


        return course1;
    }

    @Override
    public List<CourseSign> getCourseSignByCourseId(Integer uuid) {

        return courseMapper.getCourseSignByCourseId(uuid);
    }

    @Override
    public List<CourseSign> CourseSignNumberBySignId(Integer signId) {
        List<CourseSign> courseSignList = courseMapper.getCourseSignBySignId(signId);
        for (CourseSign c : courseSignList) {
            Date now = new Date();
            c.setEndTimestamp(c.getEndTime().getTime());
            c.setNowTimeStamp(now.getTime());
        }
        return courseSignList;
    }

    @Override
    public void endCourseSign(CourseSign courseSign) {
        courseMapper.endCourseSignBySignId(courseSign);
    }

    @Override
    public List<CourseSign> selectOnceCourseSignResult(Integer uuid) {
        List<CourseSign> courseSignList = courseMapper.selectOnceCourseSignResult(uuid);
        for (CourseSign courseSign : courseSignList) {
            courseSign.setStudentName(courseMapper.getStudentNameById(courseSign.getStudentId()));
        }

        return courseSignList;
    }



}
