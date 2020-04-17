package com.fzu.hxsky.demo.mapper.provider;


import com.fzu.hxsky.demo.domain.Passport;
import org.apache.ibatis.jdbc.SQL;

public class PassportSqlProvider {

    public String insertSelective(Passport record) {
        SQL sql = new SQL();
        sql.INSERT_INTO("t_passport");

        if (record.getPassportId() != null) {
            sql.VALUES("passport_id", "#{passportId,jdbcType=BIGINT}");
        }

        if (record.getUserId() != null) {
            sql.VALUES("user_id", "#{userId,jdbcType=BIGINT}");
        }

        if (record.getToken() != null) {
            sql.VALUES("token", "#{token,jdbcType=VARCHAR}");
        }

        if (record.getPassword() != null) {
            sql.VALUES("password", "#{password,jdbcType=VARCHAR}");
        }

        if (record.getLoginTime() != null) {
            sql.VALUES("login_time", "#{loginTime,jdbcType=TIMESTAMP}");
        }

        return sql.toString();
    }

    public String updateByPrimaryKeySelective(Passport record) {
        SQL sql = new SQL();
        sql.UPDATE("t_passport");

        if (record.getUserId() != null) {
            sql.SET("user_id = #{userId,jdbcType=BIGINT}");
        }

        if (record.getToken() != null) {
            sql.SET("token = #{token,jdbcType=VARCHAR}");
        }

        if (record.getPassword() != null) {
            sql.SET("password = #{password,jdbcType=VARCHAR}");
        }

        if (record.getLoginTime() != null) {
            sql.SET("login_time = #{loginTime,jdbcType=TIMESTAMP}");
        }

        sql.WHERE("passport_id = #{passportId,jdbcType=BIGINT}");

        return sql.toString();
    }
}
