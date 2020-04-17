package com.fzu.hxsky.demo.mapper.provider;


import com.fzu.hxsky.demo.domain.Menu;
import org.apache.ibatis.jdbc.SQL;

public class MenuSqlProvider {

    public String insertSelective(Menu record) {
        SQL sql = new SQL();
        sql.INSERT_INTO("t_menu");

        if (record.getMenuId() != null) {
            sql.VALUES("menu_id", "#{menuId,jdbcType=INTEGER}");
        }

        if (record.getMenuName() != null) {
            sql.VALUES("menu_name", "#{menuName,jdbcType=VARCHAR}");
        }

        if (record.getMenuIcon() != null) {
            sql.VALUES("menu_icon", "#{menuIcon,jdbcType=VARCHAR}");
        }

        if (record.getMenuLink() != null) {
            sql.VALUES("menu_link", "#{menuLink,jdbcType=VARCHAR}");
        }

        if (record.getMenuSort() != null) {
            sql.VALUES("menu_sort", "#{menuSort,jdbcType=INTEGER}");
        }

        if (record.getIsshow() != null) {
            sql.VALUES("isShow", "#{isshow,jdbcType=BIT}");
        }

        if (record.getIspage() != null) {
            sql.VALUES("isPage", "#{ispage,jdbcType=BIT}");
        }

        if (record.getParentMenuId() != null) {
            sql.VALUES("parent_menu_id", "#{parentMenuId,jdbcType=INTEGER}");
        }

        return sql.toString();
    }

    public String updateByPrimaryKeySelective(Menu record) {
        SQL sql = new SQL();
        sql.UPDATE("t_menu");

        if (record.getMenuName() != null) {
            sql.SET("menu_name = #{menuName,jdbcType=VARCHAR}");
        }

        if (record.getMenuIcon() != null) {
            sql.SET("menu_icon = #{menuIcon,jdbcType=VARCHAR}");
        }

        if (record.getMenuLink() != null) {
            sql.SET("menu_link = #{menuLink,jdbcType=VARCHAR}");
        }

        if (record.getMenuSort() != null) {
            sql.SET("menu_sort = #{menuSort,jdbcType=INTEGER}");
        }

        if (record.getIsshow() != null) {
            sql.SET("isShow = #{isshow,jdbcType=BIT}");
        }

        if (record.getIspage() != null) {
            sql.SET("isPage = #{ispage,jdbcType=BIT}");
        }

        if (record.getParentMenuId() != null) {
            sql.SET("parent_menu_id = #{parentMenuId,jdbcType=INTEGER}");
        }

        sql.WHERE("menu_id = #{menuId,jdbcType=INTEGER}");

        return sql.toString();
    }
}
