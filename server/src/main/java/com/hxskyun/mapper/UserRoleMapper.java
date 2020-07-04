package com.hxskyun.mapper;

import com.hxskyun.domain.Role;
import com.hxskyun.domain.UserRole;
import org.apache.ibatis.annotations.*;
import org.apache.ibatis.type.JdbcType;

import java.util.List;

@Mapper
public interface UserRoleMapper {



    int insertOrUpdate(UserRole record);//更新

    int insert(UserRole record);//新增



    UserRole selectUserroleByUserId(Long id);//roleId

    Integer selectRoleIdByUserId(Long id);




}
