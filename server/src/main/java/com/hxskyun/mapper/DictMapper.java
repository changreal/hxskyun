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
     * 插入type
     *
     * @param record
     * @return
     */
    int insertDictDetail(Dict record);

    /**
     * 插入detail
     *
     * @param record
     * @return
     */
    int insertDictType(Dict record);


    /**
     * 删除
     *
     * @param record
     * @return
     */
    int deleteByPrimaryKey(Dict record);

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
