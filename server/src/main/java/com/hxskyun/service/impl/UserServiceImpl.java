package com.hxskyun.service.impl;

import com.hxskyun.domain.Passport;
import com.hxskyun.domain.Permission;
import com.hxskyun.domain.Role;
import com.hxskyun.domain.User;
import com.hxskyun.exception.FriendException;
import com.hxskyun.mapper.UserMapper;
import com.hxskyun.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;
import java.util.Set;


@Service("UserService")
public class UserServiceImpl implements IUserService {
    @Resource
    private UserMapper userMapper;

    @Autowired
    private IRoleService roleService;

    @Autowired
    private IPassportService passportService;

    @Autowired
    private IPermissionService permissionService;

    @Autowired
    private IUserRoleService userRoleService;

    @Autowired
    private IRolePermissionService rolePermissionService;

    @Autowired
    private PasswordHelper passwordHelper;



    @Override
    public User checkUser(User loginUser) {


        if(loginUser.getName() == null || loginUser.getName().equals(""))
        {
            throw new FriendException("用户名不能为空");
        }
        if(loginUser.getPassword() == null || loginUser.getPassword().equals(""))
        {
            throw new FriendException("密码不能为空");
        }

        User userDetail = userMapper.checkUser(loginUser);
        if(userDetail == null)
        {
            throw new FriendException("用户名或密码错误");
        }
        return userDetail;
    }

    @Override
    public List<User> findAll() {
        return userMapper.selectAll();
    }

    @Override
    public User findById(Long id) {

        return userMapper.selectByPrimaryKey(id);
    }

    @Override
    public User findByName(String name) {

        return userMapper.selectByName(name);
    }

    @Override
    public User findByTel(Long phone) {

        return userMapper.selectByTel(phone);
    }

    @Override
    public User findByPassportId(Long id) {
        Passport passport = passportService.findByTel(id);
        User  user = this.findById(passport.getUserId());
        return user;
    }

    @Override
    public User findByToken(String token) {
        Passport passport = passportService.findByToken(token);
        User user = this.findById(passport.getUserId());
        return user;
    }

    @Transactional
    @Override
    public void saveUser(User user) {
        user = passwordHelper.encryptPassword(user);
        userMapper.insert(user);
    }

    @Transactional
    @Override
    public void deleteUserByUserId(Long id) {
        userMapper.deleteByPrimaryKey(id);
    }

    @Transactional
    @Override
    public void deleteUserByTel(Long phone) {
        userMapper.deleteByTel(phone);
    }

    @Transactional
    @Override
    public void deleteUserByName(String name) {
        userMapper.deleteByName(name);
    }

    @Override
    public String GetPasswordByUserName(String name) {
       Passport passport =  passportService.findByUserName(name);
        return passport.getPassword();
    }

    @Override
    public String GetPasswordByTel(Long phone) {
        Passport passport = passportService.findByTel(phone);
        return passport.getPassword();
    }

    @Override
    public Set<String> queryRoles(String username) {
        Set<String> roleName = null;
        List<Role> roles = userRoleService.findRoleByUserName(username);
        for (Role role: roles
             ) {
            roleName.add(role.getRoleName());
        }
        return roleName;
    }

    @Override
    public Set<String> queryPermissions(String username) {
        Set<String> permissionName = null;
        List<Role> roles = userRoleService.findRoleByUserName(username);
        for (Role role :roles
             ) {
            List<Permission> permissions = rolePermissionService.findRolePermissionByRoleId(role.getRoleId());
            for (Permission permission: permissions
                 ) {
                permissionName.add(permission.getName());
            }
        }
        return permissionName;
    }

}
