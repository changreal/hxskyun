package com.hxskyun.mapper;


import com.hxskyun.domain.*;
import org.apache.ibatis.annotations.*;
import org.apache.ibatis.type.JdbcType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Map;

@Mapper
public interface DictMapper {

    /**
     * 插入
     *
     * @param record
     * @return
     */
    int insert(Dict record);



    /**
     * 删除
     *
     * @param dictId
     * @return
     */
    int deleteByPrimaryKey(Integer dictId);

    /**
     * 更新
     *
     * @param record
     * @return
     */
    int updateByPrimaryKey(Dict record);



    /**
     * 查询
     *
     * @param dictId
     * @return
     */
    Dict selectByPrimaryKey(Integer dictId);

}
