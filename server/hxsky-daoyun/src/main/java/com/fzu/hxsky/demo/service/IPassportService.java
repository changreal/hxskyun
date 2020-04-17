package com.fzu.hxsky.demo.service;


import com.fzu.hxsky.demo.domain.Passport;
import com.fzu.hxsky.demo.domain.User;

import java.util.List;

public interface IPassportService {
    public List<Passport> findAll();

    public Passport FindByID(Long id);

    public Passport findByUserId(Long id);

    public Passport findByUserName(String name);

    public Passport findByTel(Long tel);

    public void addPassport(Passport passport , User user);

    public void deletePassportByUserName(String name);

    public void deletePassportByUserId(Long id);

    public void deletePassportByTel(Long tel);

    Passport findByToken(String token);

    public String getSalt(String userName);
}
