package com.hxskyun.mapper;


import com.hxskyun.domain.Permission;
import org.apache.ibatis.annotations.*;
import org.apache.ibatis.type.JdbcType;

import java.util.List;

@Mapper
public interface PermissionMapper {


    int deleteByPrimaryKey(Integer permissionId);

    int insert(Permission record);


    int insertSelective(Permission record);


    Permission selectByPrimaryKey(Integer permissionId);

    int updateByPrimaryKeySelective(Permission record);

    int updateByPrimaryKey(Permission record);



    List<Permission> selectAll();


    Permission selectByName(String name);



    Permission selectByType(String type);


    void deleteByName(String name);
}
