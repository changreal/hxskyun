package com.hxskyun.service;

import com.hxskyun.domain.Permission;
import com.hxskyun.domain.Role;
import com.hxskyun.domain.RolePermission;

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
