package com.hxskyun.token;

import com.hxskyun.mapper.CourseMapper;
import com.hxskyun.mapper.TokenUtilsMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TokenUtils {

    @Autowired
    private  TokenUtilsMapper tokenUtilsMapper;

    public  void setToken(String id, String token, int day) {
        if (tokenUtilsMapper.gettoken(id) != null) {
            tokenUtilsMapper.deletetoken(id);
        }
        tokenUtilsMapper.settoken(id, token);
    }

    public  String getToken(String id) {
        return tokenUtilsMapper.gettoken(id);
    }

}
