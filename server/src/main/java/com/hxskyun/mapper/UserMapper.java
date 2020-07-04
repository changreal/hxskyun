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

    int updateUser(User user);



    User selectByPrimaryKey(Long userId);





    List<User> selectAll();


}
