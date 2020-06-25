package com.hxskyun.exception;

public class FriendException extends RuntimeException {
    private String code;//自定义错误代码

    private String msg;

    public FriendException(String msg, String code) {
        super(msg);
        this.code = code;
        this.msg = msg;
    }

    public FriendException() {

    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }
}
