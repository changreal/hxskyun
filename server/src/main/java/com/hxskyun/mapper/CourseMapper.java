package com.hxskyun.mapper;

import com.hxskyun.domain.Course;
import com.hxskyun.domain.CourseSign;
import com.hxskyun.domain.CourseStudent;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CourseMapper {

//    int getCourseCount(PaperPage paperPage);
//
//    int deleteCourseBatchById(List<Long> courseIdList);
//
//    int addCourse(Course course);
//
//    int deleteCourseById(long id);
//
//    int updateCourse(Course course);
//
//    Course queryById(long id);
//
//    List<Course> queryAllCourse();

    /**
     * 根据用户Id查找所选课程
     */
    List<Course> getCourseByUserId(Integer uuid);

    /**
     * 根据用户Id查找所选课程
     */
    String getTeacherNameByTeacherId(Integer uuid);

    List<Course> getCourseByCourseId(Integer uuid);

    List<CourseStudent> getMembersByCourseId(Integer uuid);

    String getStudentNameByUserId(Integer uuid);

    int getMembersCountByCourseId(Integer uuid);

    List<CourseSign> courseSignByUserIdCourseId(CourseSign courseSign);

    int getCourseExpByCourseIdUserId(CourseSign courseSign);

    int getRankByCourseIdUserId(long courseId, long studentId);

    void insertCourseStudent(CourseStudent courseStudent);

    CourseStudent getCourseByUserIdCourseId(CourseStudent courseStudent);

    void exitCourseStudent(CourseStudent courseStudent);

    void joinCourseSign(CourseSign courseSign);

    void sendCourseSign(CourseSign courseSign);

    CourseSign getEndTimeBySignIdUserId(CourseSign courseSign);
}