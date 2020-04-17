package com.fzu.hxsky.demo.mapper.provider;


import com.fzu.hxsky.demo.domain.Dict;
import org.apache.ibatis.jdbc.SQL;

public class DictSqlProvider {

    public String insertSelective(Dict record) {
        SQL sql = new SQL();
        sql.INSERT_INTO("t_dict");

        if (record.getDictId() != null) {
            sql.VALUES("dict_id", "#{dictId,jdbcType=INTEGER}");
        }

        if (record.getItemKey() != null) {
            sql.VALUES("item_key", "#{itemKey,jdbcType=VARCHAR}");
        }

        if (record.getItemValue() != null) {
            sql.VALUES("item_value", "#{itemValue,jdbcType=VARCHAR}");
        }

        if (record.getType() != null) {
            sql.VALUES("type", "#{type,jdbcType=VARCHAR}");
        }

        if (record.getSequence() != null) {
            sql.VALUES("sequence", "#{sequence,jdbcType=INTEGER}");
        }

        if (record.getIsdefault() != null) {
            sql.VALUES("isdefault", "#{isdefault,jdbcType=BIT}");
        }

        return sql.toString();
    }

    public String updateByPrimaryKeySelective(Dict record) {
        SQL sql = new SQL();
        sql.UPDATE("t_dict");

        if (record.getItemKey() != null) {
            sql.SET("item_key = #{itemKey,jdbcType=VARCHAR}");
        }

        if (record.getItemValue() != null) {
            sql.SET("item_value = #{itemValue,jdbcType=VARCHAR}");
        }

        if (record.getType() != null) {
            sql.SET("type = #{type,jdbcType=VARCHAR}");
        }

        if (record.getSequence() != null) {
            sql.SET("sequence = #{sequence,jdbcType=INTEGER}");
        }

        if (record.getIsdefault() != null) {
            sql.SET("isdefault = #{isdefault,jdbcType=BIT}");
        }

        sql.WHERE("dict_id = #{dictId,jdbcType=INTEGER}");

        return sql.toString();
    }
}
