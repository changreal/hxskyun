package com.hxskyun.exception;

public class FriendException extends RuntimeException {
    private String code;//自定义错误代码


    public FriendException(String msg,String code) {
        super(msg);
        this.code=code;

    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }
}
