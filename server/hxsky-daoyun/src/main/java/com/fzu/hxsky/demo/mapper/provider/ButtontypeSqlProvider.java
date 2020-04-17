package com.fzu.hxsky.demo.mapper.provider;


import com.fzu.hxsky.demo.domain.Buttontype;
import org.apache.ibatis.jdbc.SQL;

public class ButtontypeSqlProvider {

    public String insertSelective(Buttontype record) {
        SQL sql = new SQL();
        sql.INSERT_INTO("t_buttontype");

        if (record.getButtonId() != null) {
            sql.VALUES("button_id", "#{buttonId,jdbcType=INTEGER}");
        }

        if (record.getCnName() != null) {
            sql.VALUES("CN_name", "#{cnName,jdbcType=VARCHAR}");
        }

        if (record.getEnName() != null) {
            sql.VALUES("EN_name", "#{enName,jdbcType=VARCHAR}");
        }

        return sql.toString();
    }

    public String updateByPrimaryKeySelective(Buttontype record) {
        SQL sql = new SQL();
        sql.UPDATE("t_buttontype");

        if (record.getCnName() != null) {
            sql.SET("CN_name = #{cnName,jdbcType=VARCHAR}");
        }

        if (record.getEnName() != null) {
            sql.SET("EN_name = #{enName,jdbcType=VARCHAR}");
        }

        sql.WHERE("button_id = #{buttonId,jdbcType=INTEGER}");

        return sql.toString();
    }
}
