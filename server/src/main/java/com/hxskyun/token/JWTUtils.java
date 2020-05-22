package com.hxskyun.token;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.Claim;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.hxskyun.domain.User;

import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;


public class JWTUtils {

    /**
     * 公钥
     */
    private static String SECRET = "yyd";
    public static String createToken(User userDetail) throws Exception {
        // 签发时间
        Date iatDate = new Date();

        // 过期时间，7天时间
        Calendar nowTime = Calendar.getInstance();
        nowTime.add(Calendar.HOUR, 24 * 7);
        Date expiresDate = nowTime.getTime();

        Map<String, Object> map = new HashMap<String, Object>();
        map.put("alg", "HS256");
        map.put("typ", "JWT");
        String token = JWT.create()
                .withHeader(map)
                .withClaim("userName", userDetail.getName())
                .withClaim("userId", userDetail.getUserId()) // 存入claim的userId字段是int类型，而稍后要存入jedis的是String类型，解密后处理不当可能导致null
                .withExpiresAt(expiresDate) // 设置过期的日期
                .withIssuedAt(iatDate) // 签发时间
                .withIssuer("auth0")
                .sign(Algorithm.HMAC256(SECRET)); // 加密
        return token;
    }

    /**
     * 解密
     */

    public static Map<String, Claim> verifyToken(String token) throws Exception {//验证成功就解密 这个函数相当于一个解密类
        JWTVerifier verifier = JWT.require(Algorithm.HMAC256(SECRET)).build();
        DecodedJWT jwt = null;
        try {
            jwt = verifier.verify(token);  //核实token
        } catch (Exception e) {
            throw new Exception("登录过期");
        }
        return jwt.getClaims();  //返回的是解析完的token，是一个map，里面有设定的键值对
    }
}