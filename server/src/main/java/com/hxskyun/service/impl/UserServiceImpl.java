package com.hxskyun.service.impl;

import com.hxskyun.config.AccountValidatorUtil;


import com.hxskyun.domain.User;
import com.hxskyun.domain.UserRole;
import com.hxskyun.exception.FriendException;
import com.hxskyun.mapper.UserMapper;
import com.hxskyun.mapper.UserRoleMapper;
import com.hxskyun.service.*;
import com.hxskyun.utils.RandomUtil;
import com.hxskyun.utils.ResultCodeEnum;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;



@Transactional
@Service
public class UserServiceImpl implements IUserService {
    @Resource
    private UserMapper userMapper;

    @Autowired
    private UserRoleMapper userRoleMapper;

    @Autowired
    private AccountValidatorUtil accountValidatorUtil;


    @Override
    public User checkUser(User loginUser) {

//        loginUser.setPassword(AESencode(loginUser.getPassword(),getKey()));//密码加密 验证
        if (loginUser.getPhone() == null && loginUser.getEmail() == null && loginUser.getUserId() == null) {
            throw new FriendException("登陆手机号、用户Id或者邮箱不能为空", ResultCodeEnum.LoginError.getCode());
        }
        if (loginUser.getPassword() == null || loginUser.getPassword().equals("")) {
            throw new FriendException("密码不能为空", ResultCodeEnum.LoginError.getCode());
        }

        User userDetail = userMapper.checkUser(loginUser);

        if (userDetail == null) {
            throw new FriendException("用户名或密码错误", ResultCodeEnum.LoginError.getCode());
        }

        return userDetail;
    }

    @Override
    public User userRegister(User userRegister) {
        if (userRegister.getPhone().isEmpty() && userRegister.getEmail().isEmpty()) {
            throw new FriendException("注册手机号或者邮箱不能为空", ResultCodeEnum.RegisterError.getCode());
        }
        if (userRegister.getName() == null || userRegister.getName().equals("")) {
            throw new FriendException("注册用户名不能为空", ResultCodeEnum.RegisterError.getCode());
        }
        if (userRegister.getPassword() == null || userRegister.getPassword().equals("")) {
            throw new FriendException("密码不能为空", ResultCodeEnum.RegisterError.getCode());
        }
        if (!accountValidatorUtil.isMobile(userRegister.getPhone())) {

            throw new FriendException("手机号码不合规范", ResultCodeEnum.RegisterError.getCode());
        }
        if (!accountValidatorUtil.isEmail(userRegister.getEmail())) {

            throw new FriendException("邮箱不合规范", ResultCodeEnum.RegisterError.getCode());
        }

        userRegister.setUserId(RandomUtil.getRandom(9));//生成10位的userID识别
        userRegister.setPassword(userRegister.getPassword());//密码加密
        try {
            userMapper.userRegister(userRegister);
        } catch (Exception e) {

            throw new FriendException("账号或邮箱已存在", ResultCodeEnum.RegisterAlreadyExist.getCode());
        }

        return userRegister;
    }


    @Override
    public List<User> findAll() {
        List<User> userList = userMapper.selectAll();
        for (User u : userList) {
            if (userRoleMapper.selectRoleIdByUserId(u.getUserId()) == null) {

                UserRole userRole = new UserRole();
                userRole.setRoleId(3);
                userRole.setUserId(u.getUserId());
                userRoleMapper.insert(userRole);//如果用户角色表中为找到该用户的角色，则默认分配3 ：学生
                u.setRoleId(3);

            } else {
                u.setRoleId(userRoleMapper.selectRoleIdByUserId(u.getUserId()));

            }

        }
        return userList;
    }

    @Override
    public List<User> initUserRoleAll() {
        List<User> userList = userMapper.selectAll();
        for (User u : userList) {
            if (userRoleMapper.selectRoleIdByUserId(u.getUserId()) == null) {

                UserRole userRole = new UserRole();
                userRole.setRoleId(3);
                userRole.setUserId(u.getUserId());
                userRoleMapper.insert(userRole);//如果用户角色表中为找到该用户的角色，则默认分配3 ：学生
                u.setRoleId(3);

            } else {
                u.setRoleId(userRoleMapper.selectRoleIdByUserId(u.getUserId()));

            }

        }
        return userList;
    }

    @Override
    public void deleteUserByUserId(Long id) {
        userMapper.deleteByPrimaryKey(id);
    }

    @Override
    public User updateUser(User user) {
        if (user.getUserId() == null || user.getUserId().equals(0l)) {
            throw new FriendException("用户Id不能为空", ResultCodeEnum.BAD_REQUEST.getCode());
        }
        User user1 = userMapper.selectByPrimaryKey(user.getUserId());

        if (user.getName() != null) {
            user1.setName(user.getName());//修改名字
        }

        if (user.getPhone() != null) {
            user1.setPhone(user.getPhone());//修改电话
        }

        if (user.getEmail() != null) {
            user1.setEmail(user.getEmail());//修改邮箱
        }

        if (user.getSex() != null) {
            user1.setSex(user.getSex());//修改性别
        }

        if (user.getPassword() != null) {
            user1.setPassword(user.getPassword());//修改密码 密码加密
        }

        if (user.getAge() != 0) {
            user1.setAge(user.getAge());//修改年龄
        }

        if (user.getSchool() != null) {
            user1.setSchool(user.getSchool());//修改学校
        }

        if (user.getAcademy() != null) {
            user1.setAcademy(user.getAcademy());//修改学校院
        }
        if (user.getMajor() != null) {
            user1.setMajor(user.getMajor());//修改专业
        }
        if (user.getBirthDate() != null) {//修改生日
            user1.setBirthDate(user.getBirthDate());
        }

        if (user.getRoleId() != 0) {//修改用户角色
            UserRole userRole = new UserRole();
            userRole.setUserId(user.getUserId());
            userRole.setRoleId(user.getRoleId());
            if (userRoleMapper.selectRoleIdByUserId(user1.getUserId()) == null) {
                userRoleMapper.insert(userRole);
            } else {
                userRoleMapper.insertOrUpdate(userRole);
            }
            user1.setRoleId(user.getRoleId());
        } else {
            if (userRoleMapper.selectRoleIdByUserId(user1.getUserId()) == null) {
                user1.setRoleId(3);//若未给用户分配用户角色，则默认是3
            } else {
                user1.setRoleId(userRoleMapper.selectRoleIdByUserId(user1.getUserId()));
            }
        }

        try {
            userMapper.updateUser(user1);
        } catch (Exception e) {
            throw new FriendException("手机号已注册，或者邮箱已注册", ResultCodeEnum.PARAM_ERROR.getCode());
        }
        user1.setPassword(user1.getPassword());//密码解密

        return user1;

    }

    @Override
    public User selectUserById(Long uuid) {
        User user = new User();

        if (uuid != null) {
            user = userMapper.selectByPrimaryKey(uuid);
            user.setRoleId(userRoleMapper.selectRoleIdByUserId(uuid));
            user.setPassword(user.getPassword());//密码解密
        } else {
            throw new FriendException("查询id不能为空", ResultCodeEnum.BAD_REQUEST.getCode());
        }
        return user;
    }



}
