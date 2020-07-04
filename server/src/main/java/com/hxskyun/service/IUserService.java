package com.hxskyun.service;

import com.hxskyun.domain.Role;
import com.hxskyun.domain.User;

import java.util.List;


public interface IUserService  {

    User checkUser(User loginUser);//登陆验证

    User userRegister(User user);//用户注册


     List<User> findAll();

    List<User> initUserRoleAll();
     void deleteUserByUserId(Long id);

     User updateUser(User user);

    User selectUserById(Long uuid);



}
