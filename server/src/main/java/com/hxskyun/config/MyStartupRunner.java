package com.hxskyun.config;

import com.hxskyun.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;



@Component
public class MyStartupRunner implements CommandLineRunner {

    @Autowired
    IUserService IUserService;

    /**
     * 预加载数据
     *
     * @param args
     */
    @Override
    public void run(String... args) {
        System.out.println("=====begin=====");
        IUserService.initUserRoleAll();//对未分配用户角色id的所有用户默认分配roleId 3学生
        System.out.println("=====finish=====");
    }
}
