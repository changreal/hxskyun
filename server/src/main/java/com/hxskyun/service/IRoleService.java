package com.hxskyun.service;

import com.hxskyun.domain.Role;

import java.util.List;

public interface IRoleService  {

    public List<Role> findAll();

    public  Role findByRoleName(String name);

    public Role findById(Integer id);

    public void saveRole(Role role);

    public void deleteRole(String name);
}
