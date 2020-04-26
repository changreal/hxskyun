package com.hxskyun.controller;


import com.hxskyun.domain.Dict;
import com.hxskyun.service.IDictService;

import com.hxskyun.utils.Result;
import com.hxskyun.utils.ResultCodeEnum;
import org.apache.ibatis.annotations.Results;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/dictionary")
public class DictController {
    @Autowired
    private IDictService dictService;


    @PostMapping("/type")
    public Result insertDictType(@RequestBody Dict record){
        dictService.insertDictType(record);
        return Result.success();
    }

    @PostMapping("/detail")
    public Result insertDictDetail(@RequestBody Dict record){
        dictService.insertDictDetail(record);
        return Result.success();
    }

    @DeleteMapping("/{Id}")
    public Result delete(@PathVariable Integer Id){
        dictService.deleteByPrimaryKey(Id);
        return Result.success("删除成功");
    }

}
