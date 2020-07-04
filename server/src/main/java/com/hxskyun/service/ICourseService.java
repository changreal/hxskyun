package com.hxskyun.service;

import com.hxskyun.domain.Course;
import com.hxskyun.domain.CourseSign;
import com.hxskyun.domain.CourseStudent;

import java.util.List;
import java.util.Map;

public interface ICourseService {
    List<Course> getCourseByUserId(Integer uuid);

    List<Course> getCourseByTeachId(Integer uuid);

    Course getCourseByCourseId(Integer uuid);

    List<CourseStudent> getMembersByCourseId(Integer uuid);

    int getMembersCountByCourseId(Integer uuid);

    List<CourseSign> courseSignByUserIdCourseId(CourseSign courseSign);

    CourseStudent insertCourseStudent(CourseStudent courseStudent);

    void exitCourseStudent(CourseStudent courseStudent);

    CourseSign joinCourseSign(CourseSign courseSign);

    CourseSign sendCourseSign(CourseSign courseSign);

    void deleteCourse(Course course);

    void expInit();

    void deleteCourseSign(Integer uuid);

    Course creatCourse(Course course);

    Course updateCourse(Course course);

    List<CourseSign> getCourseSignByCourseId(Integer uuid);

    List<CourseSign> CourseSignNumberBySignId(Integer signId);

    void endCourseSign(CourseSign courseSign);

    List<CourseSign> selectOnceCourseSignResult(Integer uuid);



}
