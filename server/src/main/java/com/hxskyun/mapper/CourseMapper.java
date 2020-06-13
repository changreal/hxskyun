package com.hxskyun.mapper;

import com.hxskyun.domain.Course;
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

    List<Course> getCourseByUserId(String uuid);
}