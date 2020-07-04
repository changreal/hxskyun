package com.hxskyun.service;

import com.hxskyun.domain.Right;
import com.hxskyun.domain.Role;

import java.util.List;

public interface IRoleService  {

    public List<Role> findAll();

    public  Role findByRoleName(String name);

    public Role findById(Integer id);

    Role selectRoleById(Integer uuid);

    public void deleteRole(String name);

     void deleteRoleByRoleId(Integer roleId);

    public void  insertRole(Role role);


    void updateRole(Role role);

    Right selectRight(Integer uuid);

    void updateRight(Right right);
}
