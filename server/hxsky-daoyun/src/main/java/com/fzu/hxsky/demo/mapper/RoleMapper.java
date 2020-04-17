package com.fzu.hxsky.demo.mapper;


import com.fzu.hxsky.demo.domain.Role;
import com.fzu.hxsky.demo.mapper.provider.RoleSqlProvider;
import org.apache.ibatis.annotations.*;
import org.apache.ibatis.type.JdbcType;

import java.util.List;

public interface RoleMapper {
    @Delete({
        "delete from t_role",
        "where role_id = #{roleId,jdbcType=INTEGER}"
    })
    int deleteByPrimaryKey(Integer roleId);

    @Insert({
        "insert into t_role (role_id, role_name, ",
        "CreationDate, Creator, ",
        "Modifier, ModificationDate)",
        "values (#{roleId,jdbcType=INTEGER}, #{roleName,jdbcType=VARCHAR}, ",
        "#{creationdate,jdbcType=TIMESTAMP}, #{creator,jdbcType=VARCHAR}, ",
        "#{modifier,jdbcType=VARCHAR}, #{modificationdate,jdbcType=TIMESTAMP})"
    })
    int insert(Role record);

    @InsertProvider(type= RoleSqlProvider.class, method="insertSelective")
    int insertSelective(Role record);

    @Select({
        "select",
        "role_id, role_name, CreationDate, Creator, Modifier, ModificationDate",
        "from t_role",
        "where role_id = #{roleId,jdbcType=INTEGER}"
    })
    @Results({
        @Result(column="role_id", property="roleId", jdbcType=JdbcType.INTEGER, id=true),
        @Result(column="role_name", property="roleName", jdbcType=JdbcType.VARCHAR),
        @Result(column="CreationDate", property="creationdate", jdbcType=JdbcType.TIMESTAMP),
        @Result(column="Creator", property="creator", jdbcType=JdbcType.VARCHAR),
        @Result(column="Modifier", property="modifier", jdbcType=JdbcType.VARCHAR),
        @Result(column="ModificationDate", property="modificationdate", jdbcType=JdbcType.TIMESTAMP)
    })
    Role selectByPrimaryKey(Integer roleId);

    @UpdateProvider(type=RoleSqlProvider.class, method="updateByPrimaryKeySelective")
    int updateByPrimaryKeySelective(Role record);

    @Update({
        "update t_role",
        "set role_name = #{roleName,jdbcType=VARCHAR},",
          "CreationDate = #{creationdate,jdbcType=TIMESTAMP},",
          "Creator = #{creator,jdbcType=VARCHAR},",
          "Modifier = #{modifier,jdbcType=VARCHAR},",
          "ModificationDate = #{modificationdate,jdbcType=TIMESTAMP}",
        "where role_id = #{roleId,jdbcType=INTEGER}"
    })
    int updateByPrimaryKey(Role record);

    @Select({
            "select",
            "role_id, role_name, CreationDate, Creator, Modifier, ModificationDate",
            "from t_role"
    })
    @Results({
            @Result(column="role_id", property="roleId", jdbcType=JdbcType.INTEGER, id=true),
            @Result(column="role_name", property="roleName", jdbcType=JdbcType.VARCHAR),
            @Result(column="CreationDate", property="creationdate", jdbcType=JdbcType.TIMESTAMP),
            @Result(column="Creator", property="creator", jdbcType=JdbcType.VARCHAR),
            @Result(column="Modifier", property="modifier", jdbcType=JdbcType.VARCHAR),
            @Result(column="ModificationDate", property="modificationdate", jdbcType=JdbcType.TIMESTAMP)
    })
    List<Role> selectAll();

    @Select({
            "select",
            "role_id, role_name, CreationDate, Creator, Modifier, ModificationDate",
            "from t_role",
            "where role_name = #{name,jdbcType=VARCHAR}"
    })
    @Results({
            @Result(column="role_id", property="roleId", jdbcType=JdbcType.INTEGER, id=true),
            @Result(column="role_name", property="roleName", jdbcType=JdbcType.VARCHAR),
            @Result(column="CreationDate", property="creationdate", jdbcType=JdbcType.TIMESTAMP),
            @Result(column="Creator", property="creator", jdbcType=JdbcType.VARCHAR),
            @Result(column="Modifier", property="modifier", jdbcType=JdbcType.VARCHAR),
            @Result(column="ModificationDate", property="modificationdate", jdbcType=JdbcType.TIMESTAMP)
    })
    Role selectByRoleName(String name);
}
