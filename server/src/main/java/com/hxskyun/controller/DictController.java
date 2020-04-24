package com.hxskyun.controller;


import com.hxskyun.domain.Dict;
import com.hxskyun.service.IDictService;

import com.hxskyun.utils.Result;
import com.hxskyun.utils.ResultCodeEnum;
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


    @PostMapping
    public Result insert(@RequestBody Dict record){
        dictService.insert(record);
        return Result.success();
    }

}
