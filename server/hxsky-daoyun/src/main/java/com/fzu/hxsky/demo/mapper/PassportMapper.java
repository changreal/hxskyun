package com.fzu.hxsky.demo.mapper;


import com.fzu.hxsky.demo.domain.Passport;
import com.fzu.hxsky.demo.mapper.provider.PassportSqlProvider;
import org.apache.ibatis.annotations.*;
import org.apache.ibatis.type.JdbcType;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface PassportMapper {
    @Delete({
        "delete from t_passport",
        "where passport_id = #{passportId,jdbcType=BIGINT}"
    })
    int deleteByPrimaryKey(Long passportId);



    @Insert({
        "insert into t_passport (passport_id, user_id, ",
        "token, password, salt ",
        "login_time)",
        "values (#{passportId,jdbcType=BIGINT}, #{userId,jdbcType=BIGINT}, ",
        "#{token,jdbcType=VARCHAR}, #{password,jdbcType=VARCHAR}, #{salt,jdbcType=VARCHAR}, ",
        "#{loginTime,jdbcType=TIMESTAMP})"
    })
    int insert(Passport record);

    @InsertProvider(type= PassportSqlProvider.class, method="insertSelective")
    int insertSelective(Passport record);

    @Select({
        "select",
        "passport_id, user_id, token, password, salt, login_time",
        "from t_passport",
        "where passport_id = #{passportId,jdbcType=BIGINT}"
    })
    @Results({
        @Result(column="passport_id", property="passportId", jdbcType=JdbcType.BIGINT, id=true),
        @Result(column="user_id", property="userId", jdbcType=JdbcType.BIGINT),
        @Result(column="token", property="token", jdbcType=JdbcType.VARCHAR),
        @Result(column="password", property="password", jdbcType=JdbcType.VARCHAR),
        @Result(column="login_time", property="loginTime", jdbcType=JdbcType.TIMESTAMP),
        @Result(column="salt", property="salt", jdbcType=JdbcType.VARCHAR),
    })
    Passport selectByPrimaryKey(Long passportId);

    @UpdateProvider(type=PassportSqlProvider.class, method="updateByPrimaryKeySelective")
    int updateByPrimaryKeySelective(Passport record);

    @Update({
        "update t_passport",
        "set user_id = #{userId,jdbcType=BIGINT},",
          "token = #{token,jdbcType=VARCHAR},",
          "password = #{password,jdbcType=VARCHAR},",
           "salt = #{salt,jdbcType=VARCHAR},",
          "login_time = #{loginTime,jdbcType=TIMESTAMP}",
        "where passport_id = #{passportId,jdbcType=BIGINT}"
    })
    int updateByPrimaryKey(Passport record);


    @Select({
            "select",
            "passport_id, user_id, token, password, salt, login_time",
            "from t_passport"

    })
    @Results({
            @Result(column="passport_id", property="passportId", jdbcType=JdbcType.BIGINT, id=true),
            @Result(column="user_id", property="userId", jdbcType=JdbcType.BIGINT),
            @Result(column="token", property="token", jdbcType=JdbcType.VARCHAR),
            @Result(column="password", property="password", jdbcType=JdbcType.VARCHAR),
            @Result(column="login_time", property="loginTime", jdbcType=JdbcType.TIMESTAMP),
            @Result(column="salt", property="salt", jdbcType=JdbcType.VARCHAR),
    })
    List<Passport> selectAll();


    @Select({
            "select",
            "passport_id, user_id, token, password, salt, login_time",
            "from t_passport",
            "where user_id = #{id,jdbcType=BIGINT}"
    })
    @Results({
            @Result(column="passport_id", property="passportId", jdbcType=JdbcType.BIGINT, id=true),
            @Result(column="user_id", property="userId", jdbcType=JdbcType.BIGINT),
            @Result(column="token", property="token", jdbcType=JdbcType.VARCHAR),
            @Result(column="password", property="password", jdbcType=JdbcType.VARCHAR),
            @Result(column="login_time", property="loginTime", jdbcType=JdbcType.TIMESTAMP),
            @Result(column="salt", property="salt", jdbcType=JdbcType.VARCHAR),
    })
    Passport selectByUserId(Long id);


    @Delete({
            "delete from t_passport",
            "where user_id = #{userId,jdbcType=BIGINT}"
    })
    void deleteByUserId(Long userId);



    @Select({
            "select",
            "passport_id, user_id, token, password, salt, login_time",
            "from t_passport",
            "where token = #{token,jdbcType=VARCHAR}"
    })
    @Results({
            @Result(column="passport_id", property="passportId", jdbcType=JdbcType.BIGINT, id=true),
            @Result(column="user_id", property="userId", jdbcType=JdbcType.BIGINT),
            @Result(column="token", property="token", jdbcType=JdbcType.VARCHAR),
            @Result(column="password", property="password", jdbcType=JdbcType.VARCHAR),
            @Result(column="login_time", property="loginTime", jdbcType=JdbcType.TIMESTAMP),
            @Result(column="salt", property="salt", jdbcType=JdbcType.VARCHAR),
    })
    Passport selectByToken(String token);


    @Select({
            "select",
            " salt",
            "from t_passport",
            "where user_id = #{id,jdbcType=VARCHAR}"
    })
    @Results({
            @Result(column="passport_id", property="passportId", jdbcType=JdbcType.BIGINT, id=true),
            @Result(column="user_id", property="userId", jdbcType=JdbcType.BIGINT),
            @Result(column="token", property="token", jdbcType=JdbcType.VARCHAR),
            @Result(column="password", property="password", jdbcType=JdbcType.VARCHAR),
            @Result(column="login_time", property="loginTime", jdbcType=JdbcType.TIMESTAMP),
            @Result(column="salt", property="salt", jdbcType=JdbcType.VARCHAR),
    })
    String selectSalt(Long  id);
}
