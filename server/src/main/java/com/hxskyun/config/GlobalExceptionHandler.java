package com.hxskyun.config;

import com.hxskyun.exception.FriendException;
import com.hxskyun.utils.Result;
import com.hxskyun.utils.ResultCodeEnum;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;


@ControllerAdvice
@ResponseBody
public class GlobalExceptionHandler {
    /**
     * 全局异常处理
     *
     * @param e
     * @return
     */

    @ExceptionHandler({Exception.class})
    public Object handlerException(Exception e) {
        FriendException friendException = new FriendException();
        if (e instanceof FriendException) {
            friendException.setCode(((FriendException) e).getCode());
            friendException.setMsg(((FriendException) e).getMsg());
        }
        System.out.println(e);
        return Result.success(false).setCode(friendException.getCode()).setMsg(friendException.getMsg());

    }
}