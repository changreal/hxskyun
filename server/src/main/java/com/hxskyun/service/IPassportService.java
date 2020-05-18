package com.hxskyun.service;

import com.hxskyun.domain.Passport;
import com.hxskyun.domain.User;

import java.util.List;

public interface IPassportService {
    public List<Passport> findAll();

    public Passport FindByID(Long id);

    public Passport findByUserId(Long id);

    public Passport findByUserName(String name);

    public Passport findByTel(Long phone);

    public void addPassport(Passport passport , User user);

    public void deletePassportByUserName(String name);

    public void deletePassportByUserId(Long id);

    public void deletePassportByTel(Long phone);

    Passport findByToken(String token);

    public String getSalt(String userName);
}
