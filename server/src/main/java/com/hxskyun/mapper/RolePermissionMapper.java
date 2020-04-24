package com.hxskyun.mapper;


import com.hxskyun.domain.RolePermission;
import org.apache.ibatis.annotations.*;
import org.apache.ibatis.type.JdbcType;

import java.util.List;

@Mapper
public interface RolePermissionMapper {

    int deleteByPrimaryKey(Integer id);


    int insert(RolePermission record);

    int insertSelective(RolePermission record);


    RolePermission selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(RolePermission record);

    int updateByPrimaryKey(RolePermission record);

    List<RolePermission> selectALl();

    List<RolePermission> selectByRoleId(Integer id);

    List<RolePermission> selectByPermissionId(Integer id);
}
