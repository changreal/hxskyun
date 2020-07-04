package com.hxskyun.mapper;


import com.hxskyun.domain.Right;
import com.hxskyun.domain.Role;
import org.apache.ibatis.annotations.*;
import org.apache.ibatis.annotations.Param;
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



    List<String> selectRightListByRoleId(Integer roleId);

    Role selectRoleById(Integer uuid);

    /**
     * 插入
     *
     * @param record
     * @return
     */

    int insert(Role record);


    Role selectRoleByPrimaryKey(Integer roleId);

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

    Role selectByPrimaryKey(Integer roleId);


    void insertorupdateRoleRight(@Param("rightList") List<String> rightList, @Param("roleId") Integer roleId);

    void deleteRoleRightByRoleId(Integer roleId);

    Right selectRightById(Integer uuid);

    void updateRight(Right rightOld);
}
