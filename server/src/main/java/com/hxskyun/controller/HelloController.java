package com.hxskyun.controller;


import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/hello")
@SpringBootApplication
public class HelloController {

    @GetMapping("hello")
    @ResponseBody
    public String hello(){
        return "hello";
    }
}
