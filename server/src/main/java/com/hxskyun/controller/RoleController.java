package com.hxskyun.controller;

import com.hxskyun.domain.*;
import com.hxskyun.domain.ServerResponse;
import com.hxskyun.mapper.RoleMapper;
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
    RoleMapper roleMapper;

    @ResponseBody
    @GetMapping("/getAllRole")
    public Result GetAllRole()

    {
        List<Role> roleList=roleMapper.selectAll();
        int Count=roleList.size();
        return Result.success().setData(roleList).setCount(Count).setCode(ResultCodeEnum.OK.getCode()).setMsg("查询所有角色表信息成功");
    }

    @ResponseBody
    @PostMapping
    public ServerResponse insert(@RequestBody Role record) {
        return new ServerResponse(0, null, "插入成功");
    }

    @PostMapping("/select")
    public ServerResponse insertSelective(@RequestBody Role record) {
        return new ServerResponse(0, null, "选择插入成功");
    }

    @DeleteMapping("/{uuid}")
    public ServerResponse delete(@PathVariable String uuid) {
        return new ServerResponse(0, null, "删除成功");
    }

    @PutMapping("/{uuid}")
    public ServerResponse update(@PathVariable String uuid, @RequestBody Role record) {
        return new ServerResponse(0, null, "更新成功");
    }

    @PutMapping("/select/{uuid}")
    public ServerResponse updateSelective(@PathVariable String uuid, @RequestBody Role record) {
        return new ServerResponse(0, null, "选择更新成功");
    }

    @GetMapping("/{uuid}")
    public ServerResponse getCorpusByUuid(@PathVariable String uuid) {
        return new ServerResponse(0, null, "根据uuid查询成功");
    }
}
