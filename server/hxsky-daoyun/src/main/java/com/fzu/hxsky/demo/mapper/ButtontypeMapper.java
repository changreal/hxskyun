package com.fzu.hxsky.demo.mapper;


import com.fzu.hxsky.demo.domain.Buttontype;
import com.fzu.hxsky.demo.mapper.provider.ButtontypeSqlProvider;
import org.apache.ibatis.annotations.*;
import org.apache.ibatis.type.JdbcType;

public interface ButtontypeMapper {
    @Delete({
        "delete from t_buttontype",
        "where button_id = #{buttonId,jdbcType=INTEGER}"
    })
    int deleteByPrimaryKey(Integer buttonId);

    @Insert({
        "insert into t_buttontype (button_id, CN_name, ",
        "EN_name)",
        "values (#{buttonId,jdbcType=INTEGER}, #{cnName,jdbcType=VARCHAR}, ",
        "#{enName,jdbcType=VARCHAR})"
    })
    int insert(Buttontype record);

    @InsertProvider(type= ButtontypeSqlProvider.class, method="insertSelective")
    int insertSelective(Buttontype record);

    @Select({
        "select",
        "button_id, CN_name, EN_name",
        "from t_buttontype",
        "where button_id = #{buttonId,jdbcType=INTEGER}"
    })
    @Results({
        @Result(column="button_id", property="buttonId", jdbcType=JdbcType.INTEGER, id=true),
        @Result(column="CN_name", property="cnName", jdbcType=JdbcType.VARCHAR),
        @Result(column="EN_name", property="enName", jdbcType=JdbcType.VARCHAR)
    })
    Buttontype selectByPrimaryKey(Integer buttonId);

    @UpdateProvider(type=ButtontypeSqlProvider.class, method="updateByPrimaryKeySelective")
    int updateByPrimaryKeySelective(Buttontype record);

    @Update({
        "update t_buttontype",
        "set CN_name = #{cnName,jdbcType=VARCHAR},",
          "EN_name = #{enName,jdbcType=VARCHAR}",
        "where button_id = #{buttonId,jdbcType=INTEGER}"
    })
    int updateByPrimaryKey(Buttontype record);
}
