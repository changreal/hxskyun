package com.hxskyun.config;

import com.hxskyun.exception.FriendException;
import com.hxskyun.utils.Result;
import com.hxskyun.utils.ResultCodeEnum;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;


@ControllerAdvice
public class GlobalExceptionHandler {
    /**
     * 全局异常处理
     *
     * @param e
     * @return
     */
    @ResponseBody
    @ExceptionHandler(FriendException.class)
    public Result handlerException(FriendException e) {
        return  Result.success(false).setCode(e.getCode()).setMsg(e.getMessage());

    }
}