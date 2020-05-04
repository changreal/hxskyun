package com.hxskyun.controller;


import com.hxskyun.domain.Buttontype;
import com.hxskyun.domain.ServerResponse;
import org.apache.ibatis.annotations.Delete;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/Button")
@RestController
public class ButtontypeController {

    @PostMapping
    public ServerResponse insert(@RequestBody Buttontype record){

        return new ServerResponse(0, null,"插入成功");
    }

    @DeleteMapping("/{uuid}")
    public ServerResponse delete(@PathVariable String uuid){
        return new ServerResponse(0, null,"删除成功");
    }

    @PutMapping("/{uuid}")
    public ServerResponse update(@PathVariable String uuid,@RequestBody Buttontype record){
        return new ServerResponse(0, null,"更新成功");
    }

    @GetMapping("/{uuid}")
    public ServerResponse getCorpusByUuid(@PathVariable String uuid) {

        return new ServerResponse(0, null, "根据uuid查询成功");
    }

}
