package com.fzu.hxsky.demo.mapper.provider;


import com.fzu.hxsky.demo.domain.Permission;
import org.apache.ibatis.jdbc.SQL;

public class PermissionSqlProvider {

    public String insertSelective(Permission record) {
        SQL sql = new SQL();
        sql.INSERT_INTO("t_permission");

        if (record.getPermissionId() != null) {
            sql.VALUES("permission_id", "#{permissionId,jdbcType=INTEGER}");
        }

        if (record.getType() != null) {
            sql.VALUES("type", "#{type,jdbcType=VARCHAR}");
        }

        if (record.getName() != null) {
            sql.VALUES("name", "#{name,jdbcType=VARCHAR}");
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

    public String updateByPrimaryKeySelective(Permission record) {
        SQL sql = new SQL();
        sql.UPDATE("t_permission");

        if (record.getType() != null) {
            sql.SET("type = #{type,jdbcType=VARCHAR}");
        }

        if (record.getName() != null) {
            sql.SET("name = #{name,jdbcType=VARCHAR}");
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

        sql.WHERE("permission_id = #{permissionId,jdbcType=INTEGER}");

        return sql.toString();
    }
}
