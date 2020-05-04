package com.hxskyun.service.impl;

import com.hxskyun.domain.Dict;
import com.hxskyun.mapper.DictMapper;
import com.hxskyun.service.IDictService;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.Date;
import java.util.List;
import java.util.Map;


@Service
@Transactional
public class DictServiceImpl implements IDictService {

    @Resource
    private DictMapper dictMapper;

    @Override
    public int insertDictType(Dict record) {
        record.setCreationDate(new Date());
        int i=0;
        dictMapper.insertDictType(record);
        i=record.getDictId();
        return i;
    }

    @Override
    public int insertDictDetail(Dict record) {
        record.setCreationDate(new Date());
        int i = 0;
        dictMapper.insertDictDetail(record);
        i = record.getDictId();
        return i;
    }

    @Override
    public int deleteByPrimaryKey(Integer dictId) {
        dictMapper.selectByPrimaryKey(dictId);
        return 0;
    }

    @Override
    public int updateByPrimaryKey(Dict record) {
        return 0;
    }


    @Override
    public Dict selectByPrimaryKey(Integer dictId) {
        return null;
    }


}
