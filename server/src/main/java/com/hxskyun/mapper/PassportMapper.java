package com.hxskyun.mapper;


import com.hxskyun.domain.Passport;
import org.apache.ibatis.annotations.*;
import org.apache.ibatis.type.JdbcType;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
@Mapper
public interface PassportMapper {



    int deleteByPrimaryKey(Long passportId);

    int insert(Passport record);

    int insertSelective(Passport record);

    Passport selectByPrimaryKey(Long passportId);

    int updateByPrimaryKeySelective(Passport record);

    int updateByPrimaryKey(Passport record);

    List<Passport> selectAll();

    Passport selectByUserId(Long id);

    void deleteByUserId(Long userId);

    Passport selectByToken(String token);

    String selectSalt(Long  id);
}
