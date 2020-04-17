package com.fzu.hxsky.demo.mapper;


import com.fzu.hxsky.demo.domain.RolePermission;
import com.fzu.hxsky.demo.mapper.provider.RolePermissionSqlProvider;
import org.apache.ibatis.annotations.*;
import org.apache.ibatis.type.JdbcType;

import java.util.List;

public interface RolePermissionMapper {
    @Delete({
        "delete from t_role_permission",
        "where ID = #{id,jdbcType=INTEGER}"
    })
    int deleteByPrimaryKey(Integer id);

    @Insert({
        "insert into t_role_permission (ID, role_id, ",
        "permission_id)",
        "values (#{id,jdbcType=INTEGER}, #{roleId,jdbcType=INTEGER}, ",
        "#{permissionId,jdbcType=INTEGER})"
    })
    int insert(RolePermission record);

    @InsertProvider(type= RolePermissionSqlProvider.class, method="insertSelective")
    int insertSelective(RolePermission record);

    @Select({
        "select",
        "ID, role_id, permission_id",
        "from t_role_permission",
        "where ID = #{id,jdbcType=INTEGER}"
    })
    @Results({
        @Result(column="ID", property="id", jdbcType=JdbcType.INTEGER, id=true),
        @Result(column="role_id", property="roleId", jdbcType=JdbcType.INTEGER),
        @Result(column="permission_id", property="permissionId", jdbcType=JdbcType.INTEGER)
    })
    RolePermission selectByPrimaryKey(Integer id);

    @UpdateProvider(type=RolePermissionSqlProvider.class, method="updateByPrimaryKeySelective")
    int updateByPrimaryKeySelective(RolePermission record);

    @Update({
        "update t_role_permission",
        "set role_id = #{roleId,jdbcType=INTEGER},",
          "permission_id = #{permissionId,jdbcType=INTEGER}",
        "where ID = #{id,jdbcType=INTEGER}"
    })
    int updateByPrimaryKey(RolePermission record);




    @Select({
            "select",
            "ID, role_id, permission_id",
            "from t_role_permission"
    })
    @Results({
            @Result(column="ID", property="id", jdbcType=JdbcType.INTEGER, id=true),
            @Result(column="role_id", property="roleId", jdbcType=JdbcType.INTEGER),
            @Result(column="permission_id", property="permissionId", jdbcType=JdbcType.INTEGER)
    })
    List<RolePermission> selectALl();



    @Select({
            "select",
            "ID, role_id, permission_id",
            "from t_role_permission",
            "where role_id = #{id,jdbcType=INTEGER}"
    })
    @Results({
            @Result(column="ID", property="id", jdbcType=JdbcType.INTEGER, id=true),
            @Result(column="role_id", property="roleId", jdbcType=JdbcType.INTEGER),
            @Result(column="permission_id", property="permissionId", jdbcType=JdbcType.INTEGER)
    })
    List<RolePermission> selectByRoleId(Integer id);


    @Select({
            "select",
            "ID, role_id, permission_id",
            "from t_role_permission",
            "where permission_id = #{id,jdbcType=INTEGER}"
    })
    @Results({
            @Result(column="ID", property="id", jdbcType=JdbcType.INTEGER, id=true),
            @Result(column="role_id", property="roleId", jdbcType=JdbcType.INTEGER),
            @Result(column="permission_id", property="permissionId", jdbcType=JdbcType.INTEGER)
    })
    List<RolePermission> selectByPermissionId(Integer id);
}
