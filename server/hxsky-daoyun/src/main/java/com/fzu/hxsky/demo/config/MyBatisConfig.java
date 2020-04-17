package com.fzu.hxsky.demo.config;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Configuration;



/*
* 用于配置mybatis自动扫描所有的dao接口
* */
@Configuration
@MapperScan(basePackages = "fz.cs.daoyun.mapper")
public class MyBatisConfig {

}
