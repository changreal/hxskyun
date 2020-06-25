package com.hxskyun.controller;


import com.hxskyun.service.IUserRoleService;
import com.hxskyun.service.IUserService;
import com.hxskyun.token.JWTUtils;
import com.hxskyun.token.JedisUtils;
import com.hxskyun.token.TokenUtils;
import com.hxskyun.utils.Result;
import com.hxskyun.domain.*;

import com.hxskyun.utils.ResultCodeEnum;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/Login")
public class LoginController {
    @Autowired
    private IUserService IuserService;

    @Autowired
    private IUserRoleService IUserRoleService ;
    @Autowired
    private TokenUtils tokenUtils;

    @ResponseBody
    @PostMapping("/checkLogin")//登陆
    public Result checkLogin(@RequestBody User loginUser) {
        String token;
        User userDetail = IuserService.checkUser(loginUser);
        UserRole userRole= IUserRoleService.selectUserroleByUserId(userDetail.getUserId());
        try {
            token = JWTUtils.createToken(userDetail);
          //  JedisUtils.setToken(String.valueOf(userDetail.getUserId()), token, 7);
            tokenUtils.setToken(String.valueOf(userDetail.getUserId()), token, 7);
        } catch (Exception e) {
            return Result.failure(ResultCodeEnum.LoginError);
        }
        return Result.success().setCode(ResultCodeEnum.Login.getCode()).setMsg("登陆成功").setData(token).addExtra("userRole",userRole);
    }

    @ResponseBody
    @PostMapping("/register")//注册
    public Result register(@RequestBody User userRegister) {
        User replyUser;
        replyUser = IuserService.userRegister(userRegister);

        return Result.success().setCode(ResultCodeEnum.Login.getCode()).setMsg("注册成功").setData(replyUser);
    }


    @ResponseBody
    @PostMapping("/hello")
    public Result hello() {
        String str = "如果你看到这条消息，说明token验证成功了~";
        try {
        } catch (Exception e) {

        }
        return Result.success().setCode(ResultCodeEnum.OK.getCode()).setMsg("测试成功").setData(str);

    }


}
