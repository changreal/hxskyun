package com.hxskyun.config;


import com.hxskyun.config.JWTInterceptor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

/**
 * Created by fanclys on 2018/2/23 16:36:16
 * 拦截器配置
 */
@Configuration
public class WebSecurityConfig implements WebMvcConfigurer {

    @Bean
    public JWTInterceptor getJWTInterceptor(){
//        log.info("注入JwtTokenInterceptor");
        return new JWTInterceptor();//拦截器
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        InterceptorRegistration addInterceptor = registry.addInterceptor(getJWTInterceptor());
        //排除配置
        addInterceptor.excludePathPatterns("/Login/checkLogin", "/dictionary/**", "/Login/register");
        //拦截配置
        addInterceptor.addPathPatterns("/Login/hello");
    }
}