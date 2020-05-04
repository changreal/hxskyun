package com.hxskyun.service.impl;

import com.hxskyun.domain.Permission;
import com.hxskyun.domain.Role;
import com.hxskyun.domain.RolePermission;
import com.hxskyun.mapper.RolePermissionMapper;
import com.hxskyun.service.IPermissionService;
import com.hxskyun.service.IRolePermissionService;
import com.hxskyun.service.IRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;


@Transactional
@Service
public class RolePermissionServiceImpl  implements IRolePermissionService {

    @Autowired
    private IPermissionService permissionService;

    @Autowired
    private IRoleService roleService;

    @Resource
    private RolePermissionMapper rolePermissionMapper;




    @Override
    public List<RolePermission> findAll() {
        return rolePermissionMapper.selectALl();
    }

    @Override
    public  List<RolePermission> findByRoleId(Integer id) {
        return rolePermissionMapper.selectByRoleId(id);
    }

    @Override
    public  List<RolePermission> findByPermissionId(Integer id) {
        return rolePermissionMapper.selectByPermissionId(id);
    }

    @Override
    public  List<RolePermission> findByRoleName(String name) {
        Role role = roleService.findByRoleName(name);
        return this.findByRoleId(role.getRoleId());
    }

    @Override
    public  List<RolePermission> findByPermissionName(String name) {
        Permission permission = permissionService.findByName(name);
        return this.findByPermissionId(permission.getPermissionId());
    }

    @Override
    public List<Permission>  findRolePermissionByRoleName(String name) {
        Role role = roleService.findByRoleName(name);
        List<Permission> permissions = null;
        List<RolePermission> rolePermissions = this.findByRoleId(role.getRoleId());
        for (RolePermission rolePermission: rolePermissions
             ) {
            Permission permission = permissionService.findById(rolePermission.getPermissionId());
            permissions.add(permission);
        }

        return permissions;
    }

    @Override
    public List<Permission>  findRolePermissionByRoleId(Integer id) {
        List<Permission> permissions = null;
        List<RolePermission> rolePermissions = this.findByRoleId(id);
        for (RolePermission rolePermission: rolePermissions
        ) {
            Integer permissionId = rolePermission.getPermissionId();
            Permission permission = permissionService.findById(permissionId);
            permissions.add(permission);
        }

        return permissions;

    }

    @Override
    public List<Role> findPermissionRoleByPermissionId(Integer id) {
        List<Role> roles = null;
        List<RolePermission> rolePermissions = this.findByPermissionId(id);
        for (RolePermission rolePermission: rolePermissions
        ) {
            Role role = roleService.findById(rolePermission.getRoleId());
           roles.add(role);
        }
        return roles;
    }
}
