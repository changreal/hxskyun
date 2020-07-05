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


    List<Course> getCourseByTeachId(Integer uuid);
    /**
     * 根据用户Id查找所选课程
     */
    String getTeacherNameByTeacherId(Integer uuid);

    List<Course> getCourseByCourseId(Integer uuid);

    Course getCourseById(Integer uuid);

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

    List<CourseSign> getEndTimeBySignIdUserId(CourseSign courseSign);

    void deleteCourse(Course course);

    List<CourseStudent> getAllCourseStudent();

    void updateCourseStudent(CourseStudent courseStudent);

    List<CourseSign> getCourseSignFinshed(CourseSign courseSign);

    List<CourseSign> getCourseSignUnFinshed(CourseSign courseSign);

    void deleteCourseSign(Integer uuid);

    void creatCourse(Course course);


    void updateCourse(Course course1);


    List<CourseSign> getCourseSignByCourseId(Integer uuid);

    List<CourseSign> getCourseSignBySignId(Integer signId);

    CourseSign getCourseSignByCourseSign(CourseSign courseSign);

    void endCourseSignBySignId(CourseSign courseSign);

    List<CourseSign> selectOnceCourseSignResult(Integer uuid);

    String getStudentNameById(long studentId);

    List<Course> getAllCourse();
}