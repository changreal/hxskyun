package com.fzu.hxsky.demo.service;


import com.fzu.hxsky.demo.domain.Permission;
import com.fzu.hxsky.demo.domain.Role;
import com.fzu.hxsky.demo.domain.RolePermission;

import java.util.List;

public interface IRolePermissionService {

    public List<RolePermission> findAll();

    public List<RolePermission> findByRoleId(Integer id);

    public List<RolePermission> findByPermissionId(Integer id);

    public List<RolePermission> findByRoleName(String name);

    public List<RolePermission> findByPermissionName(String name);

    public List<Permission> findRolePermissionByRoleName(String name);

    public List<Permission> findRolePermissionByRoleId(Integer id);

    public List<Role> findPermissionRoleByPermissionId(Integer id);
}
