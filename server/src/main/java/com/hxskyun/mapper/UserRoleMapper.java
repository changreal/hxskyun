package com.hxskyun.mapper;

import com.hxskyun.domain.UserRole;
import org.apache.ibatis.annotations.*;
import org.apache.ibatis.type.JdbcType;

import java.util.List;

@Mapper
public interface UserRoleMapper {

    int deleteByPrimaryKey(Integer id);

    int insertOrUpdate(UserRole record);//更新

    int insert(UserRole record);//新增

    int insertSelective(UserRole record);

    UserRole selectUserroleByUserId(Long id);//roleId

    Integer selectRoleIdByUserId(Long id);

    int updateByPrimaryKeySelective(UserRole record);

    int updateByPrimaryKey(UserRole record);

    List<UserRole> selectByUserId(Long userid);

    List<UserRole> selectByRoleId(Integer roleId);
}
