package com.hxskyun.service;

import com.hxskyun.domain.Course;

import java.util.List;
import java.util.Map;

public interface ICourseService {
    List<Course> getCourseByUserId(String uuid);

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
