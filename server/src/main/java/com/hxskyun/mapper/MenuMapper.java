package com.hxskyun.mapper;



import com.hxskyun.domain.Dict;
import com.hxskyun.domain.Menu;
import org.apache.ibatis.annotations.*;
import org.apache.ibatis.type.JdbcType;

@Mapper
public interface MenuMapper {


    /**
     * 插入
     *
     * @param record
     * @return
     */
    int insert(Menu record);

    /**
     * 选择性插入
     *
     * @param record
     * @return
     */
    int insertSelective(Menu record);


    /**
     * 删除
     *
     * @param menuId
     * @return
     */
    int deleteByPrimaryKey(Integer menuId);

    /**
     * 更新
     *
     * @param record
     * @return
     */
    int updateByPrimaryKey(Menu record);

    /**
     * 选择性更新
     *
     * @param record
     * @return
     */
    int updateByPrimaryKeySelective(Menu record);

    /**
     * 查询
     *
     * @param menuId
     * @return
     */
    Menu selectByPrimaryKey(Integer menuId);


}
