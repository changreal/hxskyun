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
public class UserRoleServiceImpl implements IUserRoleService {
    @Resource
    private UserRoleMapper userRoleMapper;
    @Resource
    private UserMapper userMapper;
    @Autowired
    private IRoleService roleService;


    @Override
    public UserRole selectUserroleByUserId(Long userid) {

        return userRoleMapper.selectUserroleByUserId(userid);
    }


}
