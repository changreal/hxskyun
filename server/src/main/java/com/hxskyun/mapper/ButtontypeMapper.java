package com.hxskyun.mapper;


import com.hxskyun.domain.*;
import org.apache.ibatis.annotations.*;
import org.apache.ibatis.type.JdbcType;

import java.util.List;
@Mapper
public interface ButtontypeMapper {

    /**
     * 插入
     *
     * @param record
     * @return
     */
    int insert(Buttontype record);

    /**
     * 删除
     *
     * @param buttonId
     * @return
     */
    int deleteByPrimaryKey(Integer buttonId);

    /**
     * 更新
     *
     * @param record
     * @return
     */
    int updateByPrimaryKey(Buttontype record);

    /**
     * 查询
     *
     * @param buttonId
     * @return
     */
     Buttontype selectByPrimaryKey(Integer buttonId);



}
