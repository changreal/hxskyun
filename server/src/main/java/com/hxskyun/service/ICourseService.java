package com.hxskyun.service;

import com.hxskyun.domain.Course;
import com.hxskyun.domain.CourseSign;
import com.hxskyun.domain.CourseStudent;

import java.util.List;
import java.util.Map;

public interface ICourseService {
    List<Course> getCourseByUserId(Integer uuid);

    Course getCourseByCourseId(Integer uuid);

    List<CourseStudent> getMembersByCourseId(Integer uuid);

    int getMembersCountByCourseId(Integer uuid);

    List<CourseSign> courseSignByUserIdCourseId(CourseSign courseSign);

    CourseStudent insertCourseStudent(CourseStudent courseStudent);

    void exitCourseStudent(CourseStudent courseStudent);

    void joinCourseSign(CourseSign courseSign);

    CourseSign sendCourseSign(CourseSign courseSign);


//    int getCourseCount(PaperPage paperPage);
////
////    int deletePaperBatchById(List<Long> paperIdList);
////
//    int addCourse(Course course);
////
////    int deletePaperById(long id);
////
//    int updateCourse(Course course);
////
//    Paper queryById(long id);
//
//    List<Paper> queryAllPaper();
}
