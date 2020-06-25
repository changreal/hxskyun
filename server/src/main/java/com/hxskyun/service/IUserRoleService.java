package com.hxskyun.service;

import com.hxskyun.domain.Role;
import com.hxskyun.domain.User;
import com.hxskyun.domain.UserRole;

import java.util.List;

public interface IUserRoleService {

    public UserRole selectUserroleByUserId(Long userid);//根据UserID查找用户角色

    public List<UserRole> findByUserName(String name);

    public List<UserRole> findByUserPhone(String phone);

    public List<UserRole> findByRoleName(String rolename);

    public List<UserRole> findByRoleId(Integer roleId);


    public List<User> findUserByRoleName(String rolename);

    public List<User> findUserByRoleId(Integer id);

    public List<Role> findRoleByUserName(String name);

    public List<Role> findRoleByUserId(Long userid);

    public List<Role> FindRoleByUserPhone(String phone);
}
