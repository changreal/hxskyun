package com.hxskyun.service.impl;


import com.hxskyun.domain.Role;
import com.hxskyun.domain.User;
import com.hxskyun.domain.UserRole;
import com.hxskyun.mapper.UserMapper;
import com.hxskyun.mapper.UserRoleMapper;
import com.hxskyun.service.IRoleService;
import com.hxskyun.service.IUserRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;

@Transactional
@Service
public class UserRoleServiceImpl  implements IUserRoleService {
    @Resource
    private UserRoleMapper userRoleMapper;
    @Resource
    private UserMapper userMapper;
    @Autowired
    private IRoleService roleService;

    @Override
    public List<UserRole> findByUserId(Long userid) {
        return userRoleMapper.selectByUserId(userid);
    }

    @Override
    public List<UserRole> findByUserName(String name) {
        User user = userMapper.selectByName(name);
        return userRoleMapper.selectByUserId(user.getUserId());
    }

    @Override
    public List<UserRole> findByUserTel(Long phone) {
        User user = userMapper.selectByTel(phone);
        return userRoleMapper.selectByUserId(user.getUserId());
    }

    @Override
    public List<UserRole> findByRoleName(String rolename) {
        Role role = roleService.findByRoleName(rolename);
        return (List)userRoleMapper.selectByRoleId(role.getRoleId());
    }

    @Override
    public List<UserRole> findByRoleId(Integer roleId) {
        return userRoleMapper.selectByRoleId(roleId);
    }

    @Override
    public List<User> findUserByRoleName(String rolename) {
        List<User> users = null;
        Role role = roleService.findByRoleName(rolename);
        List<UserRole> userRoles = userRoleMapper.selectByRoleId(role.getRoleId());

        for(UserRole userRole : userRoles){

            User user = userMapper.selectByPrimaryKey(userRole.getUserId());
            users.add(user);

        }
        return users;
    }

    @Override
    public List<User> findUserByRoleId(Integer id) {
        List<User> users = null;
        Role role = roleService.findById(id);
        List<UserRole> userRoles = userRoleMapper.selectByRoleId(role.getRoleId());
        for(UserRole userRole : userRoles){
            User user = userMapper.selectByPrimaryKey(userRole.getUserId());
            users.add(user);

        }

        return users;
    }

    @Override
    public List<Role> findRoleByUserName(String name) {
        List<Role> roles = null;
        User user = userMapper.selectByName(name);
        List<UserRole> userRoles = userRoleMapper.selectByUserId(user.getUserId());
        for(UserRole userRole : userRoles){
            Role role = roleService.findById(userRole.getRoleId());
            roles.add(role);
        }
        return roles;
    }

    @Override
    public List<Role> findRoleByUserId(Long userid) {
        List<Role> roles = null;
        User user = userMapper.selectByPrimaryKey(userid);
        List<UserRole> userRoles = userRoleMapper.selectByUserId(user.getUserId());
        for(UserRole userRole : userRoles){
            Role role = roleService.findById(userRole.getRoleId());
            roles.add(role);
        }
        return roles;

    }

    @Override
    public List<Role> FindRoleByUsertel(Long phone) {
        List<Role> roles = null;
        User user = userMapper.selectByTel(phone);
        List<UserRole> userRoles = userRoleMapper.selectByUserId(user.getUserId());
        for(UserRole userRole : userRoles){
            Role role = roleService.findById(userRole.getRoleId());
            roles.add(role);
        }
        return roles;
    }
}
