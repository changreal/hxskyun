package com.fzu.hxsky.demo.mapper.provider;


import com.fzu.hxsky.demo.domain.RolePermission;
import org.apache.ibatis.jdbc.SQL;

public class RolePermissionSqlProvider {

    public String insertSelective(RolePermission record) {
        SQL sql = new SQL();
        sql.INSERT_INTO("t_role_permission");

        if (record.getId() != null) {
            sql.VALUES("ID", "#{id,jdbcType=INTEGER}");
        }

        if (record.getRoleId() != null) {
            sql.VALUES("role_id", "#{roleId,jdbcType=INTEGER}");
        }

        if (record.getPermissionId() != null) {
            sql.VALUES("permission_id", "#{permissionId,jdbcType=INTEGER}");
        }

        return sql.toString();
    }

    public String updateByPrimaryKeySelective(RolePermission record) {
        SQL sql = new SQL();
        sql.UPDATE("t_role_permission");

        if (record.getRoleId() != null) {
            sql.SET("role_id = #{roleId,jdbcType=INTEGER}");
        }

        if (record.getPermissionId() != null) {
            sql.SET("permission_id = #{permissionId,jdbcType=INTEGER}");
        }

        sql.WHERE("ID = #{id,jdbcType=INTEGER}");

        return sql.toString();
    }
}
