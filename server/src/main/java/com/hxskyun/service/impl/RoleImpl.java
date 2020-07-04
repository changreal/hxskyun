package com.hxskyun.service.impl;

import com.hxskyun.domain.Right;
import com.hxskyun.domain.Role;
import com.hxskyun.exception.FriendException;
import com.hxskyun.mapper.RoleMapper;
import com.hxskyun.service.IRoleService;
import com.hxskyun.utils.ResultCodeEnum;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;


@Transactional
@Service
public class RoleImpl implements IRoleService {
    @Resource
    private RoleMapper roleMapper;

    @Override
    public List<Role> findAll() {

        List<Role> roleList = roleMapper.selectAll();
        for (Role r : roleList) {
            r.setRightList(roleMapper.selectRightListByRoleId(r.getRoleId()));
        }
        return roleList;
    }

    @Override
    public Role findByRoleName(String name) {
        return roleMapper.selectByRoleName(name);
    }

    @Override
    public Role findById(Integer id) {
        return roleMapper.selectByPrimaryKey(id);
    }


    @Override
    public void deleteRole(String name) {
        Role role = roleMapper.selectByRoleName(name);
        roleMapper.deleteByPrimaryKey(role.getRoleId());
    }

    @Override
    public void deleteRoleByRoleId(Integer roleId) {
        roleMapper.deleteRoleRightByRoleId(roleId);
        roleMapper.deleteByPrimaryKey(roleId);
    }

    @Override
    public void insertRole(Role role) {
        if (role.getRoleId() == null) {
            throw new FriendException("请输入想插入的RoleId", ResultCodeEnum.BAD_REQUEST.getCode());
        }
        if (role.getRoleName() == null) {
            throw new FriendException("请输入想插入的RoleName", ResultCodeEnum.BAD_REQUEST.getCode());

        }
        if (role.getRoleDescription() == null) {
            role.setRoleDescription("无");
        }
        try {
            roleMapper.insert(role);
        } catch (Exception e) {
            throw new FriendException("roleId已存在", ResultCodeEnum.BAD_REQUEST.getCode());
        }


    }

    @Override
    public void updateRole(Role role) {
        if (role.getRoleId() == null) {
            throw new FriendException("更新的角色id不能为空", ResultCodeEnum.BAD_REQUEST.getCode());
        }
        Role role1 = roleMapper.selectByPrimaryKey(role.getRoleId());
        if (role.getRoleName() != null)//更新名字
        {
            role1.setRoleName(role.getRoleName());
        }
        if (role.getRoleDescription() != null) {//更新描述
            role1.setRoleDescription(role.getRoleDescription());
        }
        if (role.getRightList() != null) {//更新权限表 不传时不更新
            List<String> rightList = role.getRightList();
            if (rightList.size() != 0) {//若传空权限表则表示删除所有权限
                roleMapper.deleteRoleRightByRoleId(role.getRoleId());
                roleMapper.insertorupdateRoleRight(rightList, role.getRoleId());
            } else {
                roleMapper.deleteRoleRightByRoleId(role.getRoleId());
            }

        }
        roleMapper.updateByPrimaryKey(role1);

    }

    @Override
    public Right selectRight(Integer uuid) {
        Right right = roleMapper.selectRightById(uuid);
        if (right == null) {
            throw new FriendException("该权限id不存在", ResultCodeEnum.BAD_REQUEST.getCode());
        }
        return right;
    }

    @Override
    public void updateRight(Right right) {
        if (right.getPermissionId() == null) {
            throw new FriendException("更新的id不能为空", ResultCodeEnum.BAD_REQUEST.getCode());
        }
        Right rightOld = selectRight(right.getPermissionId());
        if (right.getPermissionName() != null) {//更新权限名字
            rightOld.setPermissionName(right.getPermissionName());
        }
        if (right.getPermissionDescription() != null) {//更新权限描述
            rightOld.setPermissionDescription(right.getPermissionDescription());
        }
        if (right.getUseStatus() != null) {//更新权限状态
            rightOld.setUseStatus(right.getUseStatus());
        }

        roleMapper.updateRight(rightOld);

    }


    @Override
    public Role selectRoleById(Integer uuid) {
        Role role = roleMapper.selectRoleById(uuid);
        if (role == null) {
            throw new FriendException("该角色id不存在", ResultCodeEnum.BAD_REQUEST.getCode());
        }
        role.setRightList(roleMapper.selectRightListByRoleId(uuid));
        return role;
    }
}
