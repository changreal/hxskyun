package com.hxskyun.service;


import com.hxskyun.domain.Dict;

import java.util.List;


public interface IDictService {

     int insertDictType(Dict record);

     int insertDictDetail(Dict record);


    /**
     * 删除详细表
     *
     * @param dictId
     * @return
     */
    int deleteDetailByPrimaryKey(Integer dictId);

    /**
     * 删除类型表
     *
     * @param dictId
     * @return
     */
    int deleteTypeByPrimaryKey(Integer dictId);

    /**
     * 更新详细表
     *
     * @param record
     * @return
     */
    int updateDetailByPrimaryKey(Dict record);

    /**
     * 更新类型表
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
     * 查询类型表
     *
     * @param dictId
     * @return
     */
    Dict selectTypeByPrimaryKey(Integer dictId);

    /**
     * 查询所有类型表
     *
     *
     * @return
     */
    List<Dict> selectAllType();

    /**
     * 查询所有详细表
     *
     *
     * @return
     */
    List<Dict> selectAllDetail();

    List<Dict> selectItemkeyByName(String name);
}
