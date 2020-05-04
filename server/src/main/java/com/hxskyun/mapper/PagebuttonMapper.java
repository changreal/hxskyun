package com.hxskyun.mapper;


import com.hxskyun.domain.Menu;
import com.hxskyun.domain.Pagebutton;
import org.apache.ibatis.annotations.*;
import org.apache.ibatis.type.JdbcType;

@Mapper
public interface PagebuttonMapper {


    /**
     * 插入
     *
     * @param record
     * @return
     */
    int insert(Pagebutton record);

    /**
     * 选择性插入
     *
     * @param record
     * @return
     */
    int insertSelective(Pagebutton record);


    /**
     * 删除
     *
     * @param pagebuttonId
     * @return
     */
    int deleteByPrimaryKey(Integer pagebuttonId);

    /**
     * 更新
     *
     * @param record
     * @return
     */
    int updateByPrimaryKey(Pagebutton record);

    /**
     * 选择性更新
     *
     * @param record
     * @return
     */
    int updateByPrimaryKeySelective(Pagebutton record);

    /**
     * 查询
     *
     * @param pagebuttonId
     * @return
     */
    Pagebutton selectByPrimaryKey(Integer pagebuttonId);


}
