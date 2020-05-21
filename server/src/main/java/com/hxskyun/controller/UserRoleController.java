package com.hxskyun.controller;

import com.hxskyun.domain.ServerResponse;
import com.hxskyun.domain.*;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/UserRole")
public class UserRoleController {

    @PostMapping
    public ServerResponse insert(@RequestBody UserRole record) {
        return new ServerResponse(0, null, "插入成功");
    }

    @PostMapping("/select")
    public ServerResponse insertSelective(@RequestBody UserRole record) {
        return new ServerResponse(0, null, "选择插入成功");
    }

    @DeleteMapping("/{uuid}")
    public ServerResponse delete(@PathVariable String uuid) {
        return new ServerResponse(0, null, "删除成功");
    }

    @PutMapping("/{uuid}")
    public ServerResponse update(@PathVariable String uuid, @RequestBody UserRole record) {
        return new ServerResponse(0, null, "更新成功");
    }

    @PutMapping("/select/{uuid}")
    public ServerResponse updateSelective(@PathVariable String uuid, @RequestBody UserRole record) {
        return new ServerResponse(0, null, "选择更新成功");
    }

    @GetMapping("/{uuid}")
    public ServerResponse getCorpusByUuid(@PathVariable String uuid) {
        return new ServerResponse(0, null, "根据uuid查询成功");
    }
}