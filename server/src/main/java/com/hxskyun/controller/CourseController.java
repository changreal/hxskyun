package com.hxskyun.controller;

import com.hxskyun.domain.CourseSign;
import com.hxskyun.domain.CourseStudent;
import com.hxskyun.service.ICourseService;
import com.hxskyun.utils.Result;
import com.hxskyun.utils.ResultCodeEnum;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@Controller
@RequestMapping("/course")
public class CourseController {
    @Autowired
    private ICourseService courseService;

    @ResponseBody
    @GetMapping("/userId/{uuid}")
    public Result getALLCourseByUserID(@PathVariable Integer uuid){
    return Result
            .success()
            .setData(courseService.getCourseByUserId(uuid))
            .setMsg("根据用户名查询成功")
            .setCode(ResultCodeEnum.OK.getCode());
    }

    @ResponseBody
    @GetMapping("/courseId/{uuid}")
    public Result getCourseByCourseId(@PathVariable Integer uuid){
        return Result
                .success()
                .setData(courseService.getCourseByCourseId(uuid))
                .setMsg("根据课程号查询课程成功")
                .setCode(ResultCodeEnum.OK.getCode());
    }

    @ResponseBody
    @GetMapping("/members/{uuid}")
    public Result getMemberByCourseId(@PathVariable Integer uuid){
        int count=courseService.getMembersCountByCourseId(uuid);
        return Result
                .success()
                .setData(courseService.getMembersByCourseId(uuid))
                .setCount(count)
                .setMsg("根据课程号查询成员列表成功")
                .setCode(ResultCodeEnum.OK.getCode());
    }

    @ResponseBody
    @PostMapping("/courseSignByUserIdCourseId")
    public Result courseSignByUserIdCourseId(@RequestBody CourseSign courseSign){
        return Result
                .success()
                .setData(courseService.courseSignByUserIdCourseId(courseSign))
                .setMsg("根据学生号课程号查询课程签到成功")
                .setCode(ResultCodeEnum.OK.getCode());
    }

    @ResponseBody
    @PostMapping("/joinCourse")//根据学生id、班课号，加入班课加入班课
    public Result joinCourseByUserIdCourseId(@RequestBody CourseStudent courseStudent){
        return Result
                .success()
                .setData(courseService.insertCourseStudent(courseStudent))
                .setMsg("根据学生号课程号加入课程成功")
                .setCode(ResultCodeEnum.OK.getCode());
    }

    @ResponseBody
    @DeleteMapping("/exitCourse")//根据学生id、班课号，退出班课
    public Result exitCourseByUserIdCourseId(@RequestBody CourseStudent courseStudent){
        courseService.exitCourseStudent(courseStudent);
        return Result
                .success()
                .setMsg("根据学生号课程号退出课程成功")
                .setCode(ResultCodeEnum.OK.getCode());
    }

    @ResponseBody
    @PostMapping("/joinCourseSign")//根据学生id、班课号，签到表id退出班课
    public Result joinCourseSign(@RequestBody CourseSign courseSign){
        courseService.joinCourseSign(courseSign);
        return Result
                .success()
                .setMsg("学生参与签到成功")
                .setCode(ResultCodeEnum.OK.getCode());
    }

    @ResponseBody
    @PostMapping("/sendCourseSign")//老师发起签到  需要班课号 +结束时间
    public Result sendCourseSign(@RequestBody CourseSign courseSign){

        return Result
                .success()
                .setData(courseService.sendCourseSign(courseSign))
                .setMsg("老师发起签到成功")
                .setCode(ResultCodeEnum.OK.getCode());
    }
//    @ResponseBody
//    @PostMapping("/getCourseCount")
//    public ServerResponse getCourseCount(@RequestBody PaperPage paperPage){
//        int courseCount= courseService.getCourseCount(paperPage);
//        return new ServerResponse(0, courseCount,"返回课程数量成功");
//    }
//
//    @ResponseBody
//    @PostMapping("/updateCourseJson")
//    public ServerResponse updateCourseJson(@RequestBody Course course) {
//        courseService.updateCourse(course);
//        return new ServerResponse(0,"修改成功");
//    }
//
//    @ResponseBody
//    @PostMapping("/addCourseJson")
//    public ServerResponse addCourseJson(@RequestBody Course course) {
//        courseService.addCourse(course);
//        return new ServerResponse(0,"新增成功");
//    }
}
