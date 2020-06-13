package com.hxskyun.mapper;


import com.hxskyun.domain.User;
import org.apache.ibatis.annotations.*;
import org.apache.ibatis.type.JdbcType;
import org.springframework.stereotype.Component;

import java.util.List;


@Component
@Mapper
public interface UserMapper {

    User checkUser(User loginUser);//登陆

    int userRegister(User userRegister);//注册

    int deleteByPrimaryKey(Long userId);

    int insert(User record);

    int insertSelective(User record);

    User selectByPrimaryKey(Long userId);

    int updateByPrimaryKeySelective(User record);

    int updateByPrimaryKey(User record);

    User selectByName(String name);

    User selectByTel(String phone);

    List<User> selectAll();

    User selectByToken(String token);

    void deleteByTel(String phone);

    void deleteByName(String name);
}
