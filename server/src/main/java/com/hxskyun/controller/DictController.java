package com.hxskyun.controller;


import com.hxskyun.domain.Dict;
import com.hxskyun.service.IDictService;

import com.hxskyun.utils.Result;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("/dictionary")
public class DictController {
    @Autowired
    private IDictService dictService;


    @PostMapping("/type")
    public Result insertDictType(@RequestBody Dict record) {
        dictService.insertDictType(record);
        return Result.success().setData(record.getDictId()).setMsg("插入数据字典类型表成功");
    }

    @PostMapping("/detail")
    public Result insertDictDetail(@RequestBody Dict record) {
        dictService.insertDictDetail(record);
        return Result.success().setData(record.getDictId()).setMsg("插入数据字典详细表成功");
    }

    @DeleteMapping("/detail/{Id}")
    public Result deleteDetail(@PathVariable Integer Id) {
        dictService.deleteDetailByPrimaryKey(Id);
        return Result.success().setMsg("删除成功");
    }

    @DeleteMapping("/type/{Id}")
    public Result deleteType(@PathVariable Integer Id) {
        dictService.deleteTypeByPrimaryKey(Id);
        return Result.success().setMsg("删除成功");
    }

    @PutMapping("/detail/{Id}")
    public Result updateDetail(@RequestBody Dict record, @PathVariable Integer Id) {
        record.setDictId(Id);
        dictService.updateDetailByPrimaryKey(record);
        return Result.success().setMsg("更新详细表成功");
    }

    @PutMapping("/type/{Id}")
    public Result updateType(@RequestBody Dict record, @PathVariable Integer Id) {
        record.setDictId(Id);
        dictService.updateTypeByPrimaryKey(record);
        return Result.success().setMsg("更新类型表成功");
    }

    @GetMapping("/detail/{Id}")
    public Result selectDetail(@PathVariable Integer Id) {
        return Result.success().setMsg("根据id查询详细表成功").setData(dictService.selectDetailByPrimaryKey(Id));
    }

    @GetMapping("/type/{Id}")
    public Result selectType(@PathVariable Integer Id) {
        return Result.success().setMsg("根据id查询类型表成功").setData(dictService.selectTypeByPrimaryKey(Id));
    }

    @GetMapping("/allType")
    public Result selectAllType() {

        return Result.success().setMsg("查询所有类型表成功").setData(dictService.selectAllType());
    }

    @GetMapping("/allDetail")
    public Result selectAllDetail(){
        return Result.success().setMsg("查询所有详细表成功").setData(dictService.selectAllDetail());
    }

    @GetMapping("/List/{name}")
    public Result selectItemkeyList(@PathVariable String name){

        return Result.success().setMsg("查询"+name+"详细列表成功").setData(dictService.selectItemkeyByName(name));
    }

}
