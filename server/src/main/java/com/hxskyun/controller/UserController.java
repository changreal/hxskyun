package com.hxskyun.controller;

import com.hxskyun.domain.*;

import com.hxskyun.service.IUserService;
import com.hxskyun.utils.Result;
import com.hxskyun.utils.ResultCodeEnum;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/User")
public class UserController {
    @Autowired
    IUserService IUserService;


    @ResponseBody
    @GetMapping("/getAllUser")
    public Result getAllUser() {
        List<User> userList = IUserService.findAll();
        int Count = userList.size();
        return Result.success().setData(userList).setCode(ResultCodeEnum.OK.getCode()).setCount(Count).setMsg("查询所有用户表成功");
    }

    @ResponseBody
    @PostMapping("/deleteUser/{uuid}")
    public Result deleteUserByUuid(@PathVariable Long uuid) {
        IUserService.deleteUserByUserId(uuid);
        return Result.success().setCode(ResultCodeEnum.OK.getCode()).setMsg("根据用户Id删除用户成功");
    }

    @ResponseBody
    @PostMapping("/updateUser")
    public Result updateUser(@RequestBody User user) {

        return Result.success().setData(IUserService.updateUser(user)).setCode(ResultCodeEnum.OK.getCode()).setMsg("更新用户信息成功");
    }

    @ResponseBody
    @GetMapping("/selectUserById/{uuid}")
    public Result selectUserById(@PathVariable Long uuid) {

        return Result.success().setData(IUserService.selectUserById(uuid)).setCode(ResultCodeEnum.OK.getCode()).setMsg("查询单个用户信息成功");
    }

}
