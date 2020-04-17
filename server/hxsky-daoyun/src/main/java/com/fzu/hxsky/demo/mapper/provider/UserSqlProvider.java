package com.fzu.hxsky.demo.mapper.provider;


import com.fzu.hxsky.demo.domain.User;
import org.apache.ibatis.jdbc.SQL;

public class UserSqlProvider {

    public String insertSelective(User record) {
        SQL sql = new SQL();
        sql.INSERT_INTO("t_user");

        if (record.getUserId() != null) {
            sql.VALUES("user_id", "#{userId,jdbcType=BIGINT}");
        }

        if (record.getNickname() != null) {
            sql.VALUES("nickname", "#{nickname,jdbcType=VARCHAR}");
        }

        if (record.getName() != null) {
            sql.VALUES("name", "#{name,jdbcType=VARCHAR}");
        }

        if (record.getSex() != null) {
            sql.VALUES("sex", "#{sex,jdbcType=CHAR}");
        }

        if (record.getEmail() != null) {
            sql.VALUES("email", "#{email,jdbcType=VARCHAR}");
        }

        if (record.getTel() != null) {
            sql.VALUES("tel", "#{tel,jdbcType=BIGINT}");
        }

        if (record.getSchool() != null) {
            sql.VALUES("school", "#{school,jdbcType=VARCHAR}");
        }

        if (record.getClasses() != null) {
            sql.VALUES("classes", "#{classes,jdbcType=VARCHAR}");
        }

        if (record.getSchoolNumber() != null) {
            sql.VALUES("school_number", "#{schoolNumber,jdbcType=VARCHAR}");
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

    public String updateByPrimaryKeySelective(User record) {
        SQL sql = new SQL();
        sql.UPDATE("t_user");

        if (record.getNickname() != null) {
            sql.SET("nickname = #{nickname,jdbcType=VARCHAR}");
        }

        if (record.getName() != null) {
            sql.SET("name = #{name,jdbcType=VARCHAR}");
        }

        if (record.getSex() != null) {
            sql.SET("sex = #{sex,jdbcType=CHAR}");
        }

        if (record.getEmail() != null) {
            sql.SET("email = #{email,jdbcType=VARCHAR}");
        }

        if (record.getTel() != null) {
            sql.SET("tel = #{tel,jdbcType=BIGINT}");
        }

        if (record.getSchool() != null) {
            sql.SET("school = #{school,jdbcType=VARCHAR}");
        }

        if (record.getClasses() != null) {
            sql.SET("classes = #{classes,jdbcType=VARCHAR}");
        }

        if (record.getSchoolNumber() != null) {
            sql.SET("school_number = #{schoolNumber,jdbcType=VARCHAR}");
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

        sql.WHERE("user_id = #{userId,jdbcType=BIGINT}");

        return sql.toString();
    }
}
