package com.hxskyun.utils;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.JsonNode;
import com.hxskyun.domain.User;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class UserDeserializer extends JsonDeserializer<User> {
    @Override
    public User deserialize(JsonParser jsonParser, DeserializationContext deserializationContext) throws IOException, JsonProcessingException {

        JsonNode node = jsonParser.getCodec().readTree(jsonParser);
        User user = new User();
        if (node.get("birthDate") != null) {

            SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
            try {
                Date date = format.parse(node.get("birthDate").asText());
                java.sql.Date birthDate=new java.sql.Date(date.getTime());
                user.setBirthDate(birthDate);
            } catch (ParseException e) {
                e.printStackTrace();
            }
        }
        if (node.get("userId") != null) {
            user.setUserId(node.get("userId").asLong());
        }
        if (node.get("name") != null) {
            user.setName(node.get("name").asText());
        }

        if (node.get("sex") != null) {
            user.setSex(node.get("sex").asText());
        }

        if (node.get("phone") != null) {
            user.setPhone(node.get("phone").asText());
        }

        if (node.get("email") != null) {
            user.setEmail(node.get("email").asText());
        }

        if (node.get("age") != null) {
            user.setAge(node.get("age").asInt());
        }
        if (node.get("roleId") != null) {
            user.setRoleId(node.get("roleId").asInt());
        }

        if (node.get("school") != null) {
            user.setSchool(node.get("school").asText());
        }
        if (node.get("academy") != null) {
            user.setAcademy(node.get("academy").asText());
        }
        if (node.get("major") != null) {
            user.setMajor(node.get("major").asText());
        }

        if (node.get("password") != null) {
            user.setPassword(node.get("password").asText());
        }



        return user;
    }
}