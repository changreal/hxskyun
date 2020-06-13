package com.hxskyun.controller;

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
    @PostMapping("/{uuid}")
    public Result getALLCourseByUserID(@PathVariable String uuid){
    return Result
            .success()
            .setData(courseService.getCourseByUserId(uuid))
            .setMsg("根据用户名查询成功")
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
