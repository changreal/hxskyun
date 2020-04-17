package com.fzu.hxsky.demo.mapper.provider;


import com.fzu.hxsky.demo.domain.Role;
import org.apache.ibatis.jdbc.SQL;

public class RoleSqlProvider {

    public String insertSelective(Role record) {
        SQL sql = new SQL();
        sql.INSERT_INTO("t_role");

        if (record.getRoleId() != null) {
            sql.VALUES("role_id", "#{roleId,jdbcType=INTEGER}");
        }

        if (record.getRoleName() != null) {
            sql.VALUES("role_name", "#{roleName,jdbcType=VARCHAR}");
        }

        if (record.getCreationdate() != null) {
            sql.VALUES("CreationDate", "#{creationdate,jdbcType=TIMESTAMP}");
        }

        if (record.getCreator() != null) {
            sql.VALUES("Creator", "#{creator,jdbcType=VARCHAR}");
        }

        if (record.getModifier() != null) {
            sql.VALUES("Modifier", "#{modifier,jdbcType=VARCHAR}");
        }

        if (record.getModificationdate() != null) {
            sql.VALUES("ModificationDate", "#{modificationdate,jdbcType=TIMESTAMP}");
        }

        return sql.toString();
    }

    public String updateByPrimaryKeySelective(Role record) {
        SQL sql = new SQL();
        sql.UPDATE("t_role");

        if (record.getRoleName() != null) {
            sql.SET("role_name = #{roleName,jdbcType=VARCHAR}");
        }

        if (record.getCreationdate() != null) {
            sql.SET("CreationDate = #{creationdate,jdbcType=TIMESTAMP}");
        }

        if (record.getCreator() != null) {
            sql.SET("Creator = #{creator,jdbcType=VARCHAR}");
        }

        if (record.getModifier() != null) {
            sql.SET("Modifier = #{modifier,jdbcType=VARCHAR}");
        }

        if (record.getModificationdate() != null) {
            sql.SET("ModificationDate = #{modificationdate,jdbcType=TIMESTAMP}");
        }

        sql.WHERE("role_id = #{roleId,jdbcType=INTEGER}");

        return sql.toString();
    }
}
