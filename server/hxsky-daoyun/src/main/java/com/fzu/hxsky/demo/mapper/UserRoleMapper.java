package com.fzu.hxsky.demo.mapper;


import com.fzu.hxsky.demo.domain.UserRole;
import com.fzu.hxsky.demo.mapper.provider.UserRoleSqlProvider;
import org.apache.ibatis.annotations.*;
import org.apache.ibatis.type.JdbcType;

import java.util.List;

public interface UserRoleMapper {
    @Delete({
        "delete from t_user_role",
        "where ID = #{id,jdbcType=INTEGER}"
    })
    int deleteByPrimaryKey(Integer id);

    @Insert({
        "insert into t_user_role (ID, role_id, ",
        "user_id)",
        "values (#{id,jdbcType=INTEGER}, #{roleId,jdbcType=INTEGER}, ",
        "#{userId,jdbcType=BIGINT})"
    })
    int insert(UserRole record);

    @InsertProvider(type= UserRoleSqlProvider.class, method="insertSelective")
    int insertSelective(UserRole record);

    @Select({
        "select",
        "ID, role_id, user_id",
        "from t_user_role",
        "where ID = #{id,jdbcType=INTEGER}"
    })
    @Results({
        @Result(column="ID", property="id", jdbcType=JdbcType.INTEGER, id=true),
        @Result(column="role_id", property="roleId", jdbcType=JdbcType.INTEGER),
        @Result(column="user_id", property="userId", jdbcType=JdbcType.BIGINT)
    })
    UserRole selectByPrimaryKey(Integer id);

    @UpdateProvider(type=UserRoleSqlProvider.class, method="updateByPrimaryKeySelective")
    int updateByPrimaryKeySelective(UserRole record);

    @Update({
        "update t_user_role",
        "set role_id = #{roleId,jdbcType=INTEGER},",
          "user_id = #{userId,jdbcType=BIGINT}",
        "where ID = #{id,jdbcType=INTEGER}"
    })
    int updateByPrimaryKey(UserRole record);


    @Select({
            "select",
            "ID, role_id, user_id",
            "from t_user_role",
            "where user_id = #{userid,jdbcType=BIGINT}"
    })
    @Results({
            @Result(column="ID", property="id", jdbcType=JdbcType.INTEGER, id=true),
            @Result(column="role_id", property="roleId", jdbcType=JdbcType.INTEGER),
            @Result(column="user_id", property="userId", jdbcType=JdbcType.BIGINT)
    })
    List<UserRole> selectByUserId(Long userid);


    @Select({
            "select",
            "ID, role_id, user_id",
            "from t_user_role",
            "where role_id = #{roleId,jdbcType=INTEGER}"
    })
    @Results({
            @Result(column="ID", property="id", jdbcType=JdbcType.INTEGER, id=true),
            @Result(column="role_id", property="roleId", jdbcType=JdbcType.INTEGER),
            @Result(column="user_id", property="userId", jdbcType=JdbcType.BIGINT)
    })
    List<UserRole> selectByRoleId(Integer roleId);
}
