package com.hxskyun.controller;

import com.hxskyun.domain.*;


import com.hxskyun.service.IRoleService;
import com.hxskyun.utils.Result;
import com.hxskyun.utils.ResultCodeEnum;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@Controller
@RequestMapping("/Role")
public class RoleController {
    @Autowired
    IRoleService roleService;

    @ResponseBody
    @GetMapping("/getAllRole")
    public Result GetAllRole() {
        List<Role> roleList = roleService.findAll();
        int Count = roleList.size();
        return Result.success().setData(roleList).setCount(Count).setCode(ResultCodeEnum.OK.getCode()).setMsg("查询所有角色表信息成功");
    }

    @ResponseBody//角色新增
    @PostMapping("/insertRole")
    public Result insertRole(@RequestBody  Role role) {
        roleService.insertRole(role);
        return Result.success().setData(null).setCode(ResultCodeEnum.OK.getCode()).setMsg("角色新增成功");
    }

    @ResponseBody//角色更新
    @PostMapping("/updateRole")
    public Result updateRole(@RequestBody  Role role) {
        roleService.updateRole(role);
        return Result.success().setData(null).setCode(ResultCodeEnum.OK.getCode()).setMsg("角色更新成功");
    }


    @ResponseBody//角色删除
    @PostMapping("/deleteRole/{uuid}")
    public Result deleteRole(@PathVariable  Integer uuid) {
        roleService.deleteRoleByRoleId(uuid);
        return Result.success().setData(null).setCode(ResultCodeEnum.OK.getCode()).setMsg("角色删除成功");
    }

    @ResponseBody
    @GetMapping("/selectRoleById/{uuid}")
    public Result selectRoleById(@PathVariable Integer uuid) {

        return Result.success().setData(roleService.selectRoleById(uuid)).setCode(ResultCodeEnum.OK.getCode()).setMsg("查询单个用户信息成功");
    }

    @ResponseBody
    @GetMapping("/selectRight/{uuid}")
    public Result selectRight(@PathVariable Integer uuid) {

        return Result.success().setData(roleService.selectRight(uuid)).setCode(ResultCodeEnum.OK.getCode()).setMsg("查询角色信息成功");
    }


    @ResponseBody
    @PostMapping("/updateRight")
    public Result selectRight(@RequestBody Right right) {
        roleService.updateRight(right);
        return Result.success().setData(null).setCode(ResultCodeEnum.OK.getCode()).setMsg("更新角色信息成功");
    }


}
