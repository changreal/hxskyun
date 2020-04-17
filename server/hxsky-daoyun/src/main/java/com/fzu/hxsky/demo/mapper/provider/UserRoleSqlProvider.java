package com.fzu.hxsky.demo.mapper.provider;


import com.fzu.hxsky.demo.domain.UserRole;
import org.apache.ibatis.jdbc.SQL;

public class UserRoleSqlProvider {

    public String insertSelective(UserRole record) {
        SQL sql = new SQL();
        sql.INSERT_INTO("t_user_role");

        if (record.getId() != null) {
            sql.VALUES("ID", "#{id,jdbcType=INTEGER}");
        }

        if (record.getRoleId() != null) {
            sql.VALUES("role_id", "#{roleId,jdbcType=INTEGER}");
        }

        if (record.getUserId() != null) {
            sql.VALUES("user_id", "#{userId,jdbcType=BIGINT}");
        }

        return sql.toString();
    }

    public String updateByPrimaryKeySelective(UserRole record) {
        SQL sql = new SQL();
        sql.UPDATE("t_user_role");

        if (record.getRoleId() != null) {
            sql.SET("role_id = #{roleId,jdbcType=INTEGER}");
        }

        if (record.getUserId() != null) {
            sql.SET("user_id = #{userId,jdbcType=BIGINT}");
        }

        sql.WHERE("ID = #{id,jdbcType=INTEGER}");

        return sql.toString();
    }
}
