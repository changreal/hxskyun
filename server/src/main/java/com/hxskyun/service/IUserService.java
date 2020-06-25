package com.hxskyun.service;

import com.hxskyun.domain.User;

import java.util.List;
import java.util.Set;

public interface IUserService  {

    User checkUser(User loginUser);//登陆验证

    User userRegister(User user);//用户注册


     List<User> findAll();

     void deleteUserByUserId(Long id);

     User updateUser(User user);

//    public User findById(Long id);
//
//    public User findByName(String name);
//
//    public User findByTel(String phone);
//
//    public User findByPassportId(String id);
//
//    public User findByToken(String token);
//
//    public void saveUser(User user);
//

//
//    public void deleteUserByTel(String phone);
//
//    public void deleteUserByName(String name);
//
//    public String GetPasswordByUserName(String name);
//
//    public String GetPasswordByTel(String phone);
//
//    Set<String> queryRoles(String username);
//
//    Set<String> queryPermissions(String username);

}
