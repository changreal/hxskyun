package com.hxskyun.service.impl;

import com.hxskyun.domain.Permission;
import com.hxskyun.mapper.PermissionMapper;
import com.hxskyun.service.IPermissionService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;


@Transactional
@Service
public class PermissionServiceImpl implements IPermissionService {

    @Resource
    private PermissionMapper permissionMapper;

    @Override
    public List<Permission> findAll() {
        return permissionMapper.selectAll();
    }

    @Override
    public Permission findById(Integer id) {
        return permissionMapper.selectByPrimaryKey(id);
    }

    @Override
    public Permission findByName(String name) {
        return permissionMapper.selectByName(name);
    }

    @Override
    public void AddPermission(Permission permission) {
        permissionMapper.insert(permission);
    }

    @Override
    public void deletePermission(Integer id) {
            permissionMapper.deleteByPrimaryKey(id);
    }

    @Override
    public void deletePermissionByName(String name) {
        permissionMapper.deleteByName(name);
    }
}
