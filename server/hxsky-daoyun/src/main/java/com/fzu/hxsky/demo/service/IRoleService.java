package com.fzu.hxsky.demo.service;


import com.fzu.hxsky.demo.domain.Role;

import java.util.List;

public interface IRoleService  {

    public List<Role> findAll();

    public  Role findByRoleName(String name);

    public Role findById(Integer id);

    public void saveRole(Role role);

    public void deleteRole(String name);
}
