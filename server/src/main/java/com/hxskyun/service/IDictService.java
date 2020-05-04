package com.hxskyun.service;


import com.hxskyun.domain.Dict;



public interface IDictService {

    public int insertDictType(Dict record);

    public int insertDictDetail(Dict record);
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
