package com.hxskyun.token;

import redis.clients.jedis.Jedis;

public class JedisUtils {

    private static Jedis jedis;

    //初始化
    private static void init() {
        jedis = new Jedis("175.24.16.48", 6379);
    }

    //在redis中设置键值对存储
    public static void setToken(String id, String token, int day) {
        int second = day * 60 * 60 * 24;
        JedisUtils.init();
        if (jedis.get(id) != null) {
            jedis.del(id);
        }
        jedis.set(id, token); //根据id存储token
        jedis.expire(id, second);  //设置token持续时间
    }

    public static String getToken(String id) {
        JedisUtils.init();
        String token = jedis.get(String.valueOf(id));  //获取token
        return token;
    }

    public static void deleteToken(String id) {
        JedisUtils.init();
        if (jedis.get(id) != null) {
        jedis.del(String.valueOf(id));}
    }
}