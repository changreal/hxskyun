package com.hxskyun.service.impl;

import com.hxskyun.config.AccountValidatorUtil;

import com.hxskyun.domain.User;
import com.hxskyun.exception.FriendException;
import com.hxskyun.mapper.UserMapper;
import com.hxskyun.service.*;
import com.hxskyun.utils.RandomUtil;
import com.hxskyun.utils.Result;
import com.hxskyun.utils.ResultCodeEnum;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;
import java.util.Set;
import java.util.UUID;


@Transactional
@Service
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

    @Autowired
    private AccountValidatorUtil accountValidatorUtil;



    @Override
    public User checkUser(User loginUser) {


        if(loginUser.getPhone().isEmpty()&&loginUser.getEmail().isEmpty())
        {
            throw new FriendException("登陆手机号或者邮箱不能为空",ResultCodeEnum.LoginError.getCode());
        }
        if(loginUser.getPassword() == null || loginUser.getPassword().equals(""))
        {
            throw new FriendException("密码不能为空",ResultCodeEnum.LoginError.getCode());
        }

        User userDetail = userMapper.checkUser(loginUser);
        if(userDetail == null)
        {
            throw new FriendException("用户名或密码错误",ResultCodeEnum.LoginError.getCode());
        }
        return userDetail;
    }

    @Override
    public User userRegister(User userRegister) {
        if(userRegister.getPhone().isEmpty()&&userRegister.getEmail().isEmpty())
        {
            throw new FriendException("注册手机号或者邮箱不能为空",ResultCodeEnum.RegisterError.getCode());
        }
        if(userRegister.getName() == null || userRegister.getName().equals(""))
        {
            throw new FriendException("注册用户名不能为空",ResultCodeEnum.RegisterError.getCode());
        }
        if(userRegister.getPassword() == null || userRegister.getPassword().equals(""))
        {
            throw new FriendException("密码不能为空",ResultCodeEnum.RegisterError.getCode());
        }
        if(!accountValidatorUtil.isMobile(userRegister.getPhone())){

            throw new FriendException("手机号码不合规范",ResultCodeEnum.RegisterError.getCode());
        }
        if(!accountValidatorUtil.isEmail(userRegister.getEmail())){

            throw new FriendException("邮箱不合规范",ResultCodeEnum.RegisterError.getCode());
        }

        userRegister.setUserId(RandomUtil.getRandom(9));//生成10位的userID识别

        try{
            userMapper.userRegister(userRegister);
        }catch (Exception e){

            throw new FriendException("账号或邮箱已存在",ResultCodeEnum.RegisterAlreadyExist.getCode());
        }

        return userRegister;
    }

//    @Override
//    public List<User> findAll() {
//        return userMapper.selectAll();
//    }
//
//    @Override
//    public User findById(Long id) {
//
//        return userMapper.selectByPrimaryKey(id);
//    }
//
//    @Override
//    public User findByName(String name) {
//
//        return userMapper.selectByName(name);
//    }
//
//    @Override
//    public User findByTel(String phone) {
//
//        return userMapper.selectByTel(phone);
//    }
//
//    @Override
//    public User findByPassportId(String id) {
//        Passport passport = passportService.findByTel(id);
//        User  user = this.findById(passport.getUserId());
//        return user;
//    }
//
//    @Override
//    public User findByToken(String token) {
//        Passport passport = passportService.findByToken(token);
//        User user = this.findById(passport.getUserId());
//        return user;
//    }
//
//    @Transactional
//    @Override
//    public void saveUser(User user) {
//        user = passwordHelper.encryptPassword(user);
//        userMapper.insert(user);
//    }
//
//    @Transactional
//    @Override
//    public void deleteUserByUserId(String id) {
//        userMapper.deleteByPrimaryKey(id);
//    }
//
//    @Override
//    public void deleteUserByTel(String phone) {
//
//    }
//
//    @Transactional
//    @Override
//    public void deleteUserByName(String name) {
//        userMapper.deleteByName(name);
//    }
//
//    @Override
//    public String GetPasswordByUserName(String name) {
//       Passport passport =  passportService.findByUserName(name);
//        return passport.getPassword();
//    }
//
//    @Override
//    public String GetPasswordByTel(String phone) {
//        return null;
//    }
//
//
//    @Override
//    public Set<String> queryRoles(String username) {
//        Set<String> roleName = null;
//        List<Role> roles = userRoleService.findRoleByUserName(username);
//        for (Role role: roles
//             ) {
//            roleName.add(role.getRoleName());
//        }
//        return roleName;
//    }
//
//    @Override
//    public Set<String> queryPermissions(String username) {
//        Set<String> permissionName = null;
//        List<Role> roles = userRoleService.findRoleByUserName(username);
//        for (Role role :roles
//             ) {
//            List<Permission> permissions = rolePermissionService.findRolePermissionByRoleId(role.getRoleId());
//            for (Permission permission: permissions
//                 ) {
//                permissionName.add(permission.getName());
//            }
//        }
//        return permissionName;
//    }

}
