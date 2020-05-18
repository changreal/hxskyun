package com.hxskyun.service;

import com.hxskyun.domain.User;

import java.util.List;
import java.util.Set;

public interface IUserService  {

    User checkUser(User loginUser);

    public List<User> findAll();

    public User findById(Long id);

    public User findByName(String name);

    public User findByTel(Long phone);

    public User findByPassportId(Long id);

    public User findByToken(String token);

    public void saveUser(User user);

    public void deleteUserByUserId(Long id);

    public void deleteUserByTel(Long phone);

    public void deleteUserByName(String name);

    public String GetPasswordByUserName(String name);

    public String GetPasswordByTel(Long phone);

    Set<String> queryRoles(String username);

    Set<String> queryPermissions(String username);

}
