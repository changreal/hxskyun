package com.hxskyun.mapper;


import com.hxskyun.domain.*;
import com.hxskyun.domain.Dict;
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
     * 删除详细表
     *
     * @param DictId
     * @return
     */
    int deleteDetailByPrimaryKey(Integer DictId);

    /**
     * 删除类型表和对于详细表
     *
     * @param DictId
     * @return
     */
    int deleteTypeByPrimaryKey(Integer DictId);

    /**
     * 更新详细表
     *
     * @param record
     * @return
     */
    int updateDetailByPrimaryKey(Dict record);

    /**
     * 更新类型表同时更新其对于的详细表
     *
     * @param record
     * @return
     */
    int updateTypeByPrimaryKey(Dict record);



    /**
     * 查询详细表
     *
     * @param dictId
     * @return
     */
    Dict selectDetailByPrimaryKey(Integer dictId);

    /**
     * 查询
     *
     * @param dictId
     * @return
     */
    Dict selectTypeByPrimaryKey(Integer dictId);


    List<Dict> selectAlltype();

    List<Dict> selectAlldetail();

    List<Dict> selectItemkeytByName(String name);
}
