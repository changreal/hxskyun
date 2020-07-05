package com.hxskyun.controller;

import com.hxskyun.domain.Course;
import com.hxskyun.domain.CourseSign;
import com.hxskyun.domain.CourseStudent;
import com.hxskyun.service.ICourseService;
import com.hxskyun.utils.Result;
import com.hxskyun.utils.ResultCodeEnum;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


import java.util.Date;
import java.util.List;


@Controller
@RequestMapping("/course")
public class CourseController {
    @Autowired
    private ICourseService courseService;

    @ResponseBody
    @GetMapping("/userId/{uuid}")
    public Result getALLCourseByUserID(@PathVariable Integer uuid) {
        return Result
                .success()
                .setData(courseService.getCourseByUserId(uuid))
                .setMsg("根据用户名查询成功")
                .setCode(ResultCodeEnum.OK.getCode());
    }

    @ResponseBody
    @GetMapping("/teacherId/{uuid}")
    public Result getALLCourseByTeachID(@PathVariable Integer uuid) {
        return Result
                .success()
                .setData(courseService.getCourseByTeachId(uuid))
                .setMsg("根据当前用户（老师）ID查询成功")
                .setCode(ResultCodeEnum.OK.getCode());
    }

    @ResponseBody
    @GetMapping("/courseId/{uuid}")
    public Result getCourseByCourseId(@PathVariable Integer uuid) {
        return Result
                .success()
                .setData(courseService.getCourseByCourseId(uuid))
                .setMsg("根据课程号查询课程成功")
                .setCode(ResultCodeEnum.OK.getCode());
    }

    @ResponseBody
    @GetMapping("/getAllCourse")
    public Result getCourseByCourseId() {
        int Count;
        List<Course> courseList=courseService.getAllCourse();
        Count=courseList.size();
        return Result
                .success()
                .setData(courseList).setCount(Count)
                .setMsg("查询所有课程成功")
                .setCode(ResultCodeEnum.OK.getCode());
    }

    @ResponseBody
    @GetMapping("/members/{uuid}")
    public Result getMemberByCourseId(@PathVariable Integer uuid) {
        int count = courseService.getMembersCountByCourseId(uuid);
        return Result
                .success()
                .setData(courseService.getMembersByCourseId(uuid))
                .setCount(count)
                .setMsg("根据课程号查询成员列表成功")
                .setCode(ResultCodeEnum.OK.getCode());
    }

    @ResponseBody
    @PostMapping("/courseSignByUserIdCourseId")
    public Result courseSignByUserIdCourseId(@RequestBody CourseSign courseSign) {
        return Result
                .success()
                .setData(courseService.courseSignByUserIdCourseId(courseSign))
                .setMsg("根据学生号课程号查询课程签到成功")
                .setCode(ResultCodeEnum.OK.getCode());
    }

    @ResponseBody
    @PostMapping("/joinCourse")//根据学生id、班课号，加入班课加入班课
    public Result joinCourseByUserIdCourseId(@RequestBody CourseStudent courseStudent) {
        return Result
                .success()
                .setData(courseService.insertCourseStudent(courseStudent))
                .setMsg("根据学生号课程号加入课程成功")
                .setCode(ResultCodeEnum.OK.getCode());
    }

    @ResponseBody
    @PostMapping("/exitCourse")//根据学生id、班课号，退出班课
    public Result exitCourseByUserIdCourseId(@RequestBody CourseStudent courseStudent) {
        courseService.exitCourseStudent(courseStudent);
        return Result
                .success()
                .setMsg("根据学生号课程号退出课程成功")
                .setCode(ResultCodeEnum.OK.getCode());
    }

    @ResponseBody
    @PostMapping("/deleteCourse")//根据老师id、班课号，退出班课
    public Result deleteCourseByUserIdCourseId(@RequestBody Course course) {
        courseService.deleteCourse(course);
        return Result
                .success()
                .setMsg("根据老师id删除班课课程号退出课程成功")
                .setCode(ResultCodeEnum.OK.getCode());
    }

    @ResponseBody
    @PostMapping("/joinCourseSign")//根据学生id、班课号，签到表id退出班课
    public Result joinCourseSign(@RequestBody CourseSign courseSign) {

        return Result
                .success().setData(courseService.joinCourseSign(courseSign))
                .setMsg("学生参与签到成功")
                .setCode(ResultCodeEnum.OK.getCode());
    }

    @ResponseBody
    @GetMapping("/selectOnceCourseSignResult/{uuid}")//根据学生id、班课号，签到表id退出班课
    public Result OnceCourseSignResult(@PathVariable Integer uuid) {

        return Result
                .success().setData(courseService.selectOnceCourseSignResult(uuid))
                .setMsg("学生参与签到成功")
                .setCode(ResultCodeEnum.OK.getCode());
    }


    @ResponseBody
    @PostMapping("/sendCourseSign")//老师发起签到  需要班课号 +结束时间
    public Result sendCourseSign(@RequestBody CourseSign courseSign) {

        return Result
                .success()
                .setData(courseService.sendCourseSign(courseSign))
                .setMsg("老师发起签到成功")
                .setCode(ResultCodeEnum.OK.getCode());
    }

    @ResponseBody
    @GetMapping("/getAllCourseSign/{uuid}")//老师查看该课程的所有签到
    public Result getCourseSign(@PathVariable Integer uuid) {

        List<CourseSign> courseSignList = courseService.getCourseSignByCourseId(uuid);
        return Result
                .success()
                .setData(courseSignList)
                .setMsg("老师查看该课程的所有签到情况").setCount(courseSignList.size())
                .setCode(ResultCodeEnum.OK.getCode());
    }

    @ResponseBody
    @PostMapping("/deleteCourseSign/{uuid}")//老师删除签到  需要签到编号
    public Result deleteCourseSign(@PathVariable Integer uuid) {
        courseService.deleteCourseSign(uuid);
        return Result
                .success()
                .setData(null)
                .setMsg("老师删除签到成功")
                .setCode(ResultCodeEnum.OK.getCode());
    }

    @ResponseBody
    @PostMapping("/endCourseSign/{uuid}")//老师手动结束签到  需要签到编号
    public Result endCourseSign(@PathVariable Integer uuid) {
        Date nowDate=new Date();
        CourseSign nowCourseSign=new CourseSign();
        nowCourseSign.setEndTime(nowDate);

        nowCourseSign.setSignId(uuid);

        courseService.endCourseSign(nowCourseSign);
        return Result
                .success()
                .setData(null)
                .setMsg("老师结束签到成功")
                .setCode(ResultCodeEnum.OK.getCode());
    }

    @ResponseBody
    @GetMapping("/CourseSignNumber/{uuid}")//根据签到号查看实时签到人数
    public Result updateCourse(@PathVariable Integer uuid) {

        return Result
                .success()
                .setData(courseService.CourseSignNumberBySignId(uuid))
                .setMsg("实时查看签到人数成功")
                .setCode(ResultCodeEnum.OK.getCode());
    }

    @ResponseBody
    @PostMapping("/creatCourse")//老师创建班课
    public Result creatCourse(@RequestBody Course course) {

        return Result
                .success()
                .setData(courseService.creatCourse(course))
                .setMsg("老师创建班课成功")
                .setCode(ResultCodeEnum.OK.getCode());
    }

    @ResponseBody
    @PostMapping("/updateCourse")//老师更新班课
    public Result updateCourse(@RequestBody Course course) {

        return Result
                .success()
                .setData(courseService.updateCourse(course))
                .setMsg("老师更新班课成功")
                .setCode(ResultCodeEnum.OK.getCode());
    }


}
