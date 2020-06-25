package com.hxskyun.mapper;


import org.apache.ibatis.annotations.Mapper;

import java.util.Map;

@Mapper
public interface TokenUtilsMapper {
    void settoken(String id,String token);

  String gettoken(String id);

    void deletetoken(String id);
}
