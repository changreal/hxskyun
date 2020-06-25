package com.hxskyun.mapper;


import com.hxskyun.domain.Role;
import org.apache.ibatis.annotations.*;
import org.apache.ibatis.type.JdbcType;

import java.util.List;

@Mapper
public interface RoleMapper {
    /**
     * 根据主键删除
     *
     * @param roleId
     * @return
     */

    int deleteByPrimaryKey(Integer roleId);
    /**
     * 插入
     *
     * @param record
     * @return
     */

    int insert(Role record);
    /**
     * 插入
     *
     * @param record
     * @return
     */

    int insertSelective(Role record);
    /**
     * 根据主键查询
     *
     * @param roleId
     * @return
     */

    Role selectRoleByPrimaryKey(Integer roleId);
    /**
     * 根据Selective更新
     *
     * @param record
     * @return
     */

    int updateByPrimaryKeySelective(Role record);
    /**
     * 根据主键更新
     *
     * @param record
     * @return
     */


    int updateByPrimaryKey(Role record);
    /**
     * 查询所有
     *
     * @return
     */

    List<Role> selectAll();
    /**
     * 根据角色名查询
     *
     * @return
     */

    Role selectByRoleName(String name);

    Role selectByPrimaryKey(Integer id);
}
