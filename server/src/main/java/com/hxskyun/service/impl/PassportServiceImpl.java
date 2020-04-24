package com.hxskyun.service.impl;


import com.hxskyun.domain.Passport;
import com.hxskyun.domain.User;
import com.hxskyun.mapper.PassportMapper;
import com.hxskyun.mapper.UserMapper;
import com.hxskyun.service.IPassportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;


@Transactional
@Service
public class PassportServiceImpl  implements IPassportService  {
    @Resource
    private UserMapper userMapper;

    @Resource
    private PassportMapper passportMapper;

    @Autowired
    private PasswordHelper passwordHelper;


    @Override
    public List<Passport> findAll() {
        return passportMapper.selectAll();
    }

    @Override
    public Passport FindByID(Long id) {
        return passportMapper.selectByPrimaryKey((Long) id);
    }

    @Override
    public Passport findByUserId(Long id) {
         return passportMapper.selectByUserId((Long) id);

    }

    @Override
    public Passport findByUserName(String name) {
        User user = userMapper.selectByName(name);

        return passportMapper.selectByUserId(user.getUserId());
    }

    @Override
    public Passport findByTel(Long tel) {
        User user = userMapper.selectByTel(tel);

        return passportMapper.selectByUserId(user.getUserId());
    }

    @Override
    public void addPassport(Passport passport, User user ) {

        passwordHelper.encryptPassword(user);
        passportMapper.insert(passport);
    }

    @Override
    public void deletePassportByUserName(String name) {
            User user = userMapper.selectByName(name);
            passportMapper.deleteByUserId(user.getUserId());
    }

    @Override
    public void deletePassportByUserId(Long id) {
        passportMapper.deleteByUserId(id);

    }

    @Override
    public void deletePassportByTel(Long tel) {
        User user = userMapper.selectByTel(tel);
        passportMapper.deleteByUserId(user.getUserId());
    }

    @Override
    public Passport findByToken(String token) {
        return passportMapper.selectByToken(token);
    }

    @Override
    public String getSalt(String username) {

        return passportMapper.selectSalt( this.findByUserName(username).getUserId());
    }
}
