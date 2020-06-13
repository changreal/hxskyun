package com.hxskyun.service.impl;


import com.hxskyun.domain.Course;
import com.hxskyun.mapper.CourseMapper;
import com.hxskyun.service.ICourseService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class CourseServiceImpl implements ICourseService {

    @Autowired
    private CourseMapper courseMapper;

    @Override
    public List<Course> getCourseByUserId(String uuid) {
        List<Course> courseList = courseMapper.getCourseByUserId(uuid);
        return courseList;
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
