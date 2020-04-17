package com.fzu.hxsky.demo.mapper;


import com.fzu.hxsky.demo.domain.Dict;
import com.fzu.hxsky.demo.mapper.provider.DictSqlProvider;
import org.apache.ibatis.annotations.*;
import org.apache.ibatis.type.JdbcType;

public interface DictMapper {
    @Delete({
        "delete from t_dict",
        "where dict_id = #{dictId,jdbcType=INTEGER}"
    })
    int deleteByPrimaryKey(Integer dictId);

    @Insert({
        "insert into t_dict (dict_id, item_key, ",
        "item_value, type, ",
        "sequence, isdefault)",
        "values (#{dictId,jdbcType=INTEGER}, #{itemKey,jdbcType=VARCHAR}, ",
        "#{itemValue,jdbcType=VARCHAR}, #{type,jdbcType=VARCHAR}, ",
        "#{sequence,jdbcType=INTEGER}, #{isdefault,jdbcType=BIT})"
    })
    int insert(Dict record);

    @InsertProvider(type= DictSqlProvider.class, method="insertSelective")
    int insertSelective(Dict record);

    @Select({
        "select",
        "dict_id, item_key, item_value, type, sequence, isdefault",
        "from t_dict",
        "where dict_id = #{dictId,jdbcType=INTEGER}"
    })
    @Results({
        @Result(column="dict_id", property="dictId", jdbcType=JdbcType.INTEGER, id=true),
        @Result(column="item_key", property="itemKey", jdbcType=JdbcType.VARCHAR),
        @Result(column="item_value", property="itemValue", jdbcType=JdbcType.VARCHAR),
        @Result(column="type", property="type", jdbcType=JdbcType.VARCHAR),
        @Result(column="sequence", property="sequence", jdbcType=JdbcType.INTEGER),
        @Result(column="isdefault", property="isdefault", jdbcType=JdbcType.BIT)
    })
    Dict selectByPrimaryKey(Integer dictId);

    @UpdateProvider(type=DictSqlProvider.class, method="updateByPrimaryKeySelective")
    int updateByPrimaryKeySelective(Dict record);

    @Update({
        "update t_dict",
        "set item_key = #{itemKey,jdbcType=VARCHAR},",
          "item_value = #{itemValue,jdbcType=VARCHAR},",
          "type = #{type,jdbcType=VARCHAR},",
          "sequence = #{sequence,jdbcType=INTEGER},",
          "isdefault = #{isdefault,jdbcType=BIT}",
        "where dict_id = #{dictId,jdbcType=INTEGER}"
    })
    int updateByPrimaryKey(Dict record);
}
