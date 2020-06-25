package com.hxskyun.controller;

import com.hxskyun.domain.*;
import com.hxskyun.domain.ServerResponse;
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
    @DeleteMapping("/deleteUser/{uuid}")
    public Result deleteUserByUuid(@PathVariable Long uuid) {
        IUserService.deleteUserByUserId(uuid);
        return Result.success().setCode(ResultCodeEnum.OK.getCode()).setMsg("根据用户Id删除用户成功");
    }

    @ResponseBody
    @PutMapping("/updateUser")
    public Result updateUser(@RequestBody User user) {

        return Result.success().setData(IUserService.updateUser(user)).setCode(ResultCodeEnum.OK.getCode()).setMsg("更新用户信息成功");
    }

    @PostMapping
    public ServerResponse insert(@RequestBody User record) {
        return new ServerResponse(0, null, "插入成功");
    }

    @PostMapping("/select")
    public ServerResponse insertSelective(@RequestBody User record) {
        return new ServerResponse(0, null, "选择插入成功");
    }

    @DeleteMapping("/{uuid}")
    public ServerResponse delete(@PathVariable String uuid) {
        return new ServerResponse(0, null, "删除成功");
    }

    @PutMapping("/{uuid}")
    public ServerResponse update(@PathVariable String uuid, @RequestBody User record) {
        return new ServerResponse(0, null, "更新成功");
    }

    @PutMapping("/select/{uuid}")
    public ServerResponse updateSelective(@PathVariable String uuid, @RequestBody User record) {
        return new ServerResponse(0, null, "选择更新成功");
    }

    @GetMapping("/{uuid}")
    public ServerResponse getCorpusByUuid(@PathVariable String uuid) {
        return new ServerResponse(0, null, "根据uuid查询成功");
    }
}
