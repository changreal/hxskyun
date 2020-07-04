package com.hxskyun.service;

import com.hxskyun.domain.Role;
import com.hxskyun.domain.User;
import com.hxskyun.domain.UserRole;

import java.util.List;

public interface IUserRoleService {

    public UserRole selectUserroleByUserId(Long userid);//根据UserID查找用户角色


}
