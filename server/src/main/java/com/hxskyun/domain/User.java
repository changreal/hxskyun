package com.hxskyun.domain;

import java.util.Date;


public class User {


    private Long userId;

    private String nickname;

    private String name;

    private String sex;

    private String email;

    private int age;

    private Long phone;

    private String school;

    private String classes;

    private String schoolNumber;

    private Date birthDate;

    private Date creationdate;

    private String creator;

    private String modifier;

    private Date modificationdate;

    private String password;

    private String salt;


    @Override
    public String toString() {
        return "User{" +
                "userId=" + userId +
                ", nickname='" + nickname + '\'' +
                ", name='" + name + '\'' +
                ", sex='" + sex + '\'' +
                ", email='" + email + '\'' +
                ", age=" + age +
                ", phone=" + phone +
                ", birthDate=" + birthDate +
                ", school='" + school + '\'' +
                ", classes='" + classes + '\'' +
                ", schoolNumber='" + schoolNumber + '\'' +
                ", creationdate=" + creationdate +
                ", creator='" + creator + '\'' +
                ", modifier='" + modifier + '\'' +
                ", modificationdate=" + modificationdate +
                ", password='" + password + '\'' +
                ", salt='" + salt + '\'' +
                '}';
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getSalt() {
        return salt;
    }

    public void setSalt(String salt) {
        this.salt = salt;
    }
    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname == null ? null : nickname.trim();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex == null ? null : sex.trim();
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email == null ? null : email.trim();
    }

    public Long getTel() {
        return phone;
    }

    public void setTel(Long phone) {
        this.phone = phone;
    }

    public String getSchool() {
        return school;
    }

    public void setSchool(String school) {
        this.school = school == null ? null : school.trim();
    }

    public String getClasses() {
        return classes;
    }

    public void setClasses(String classes) {
        this.classes = classes == null ? null : classes.trim();
    }

    public String getSchoolNumber() {
        return schoolNumber;
    }

    public void setSchoolNumber(String schoolNumber) {
        this.schoolNumber = schoolNumber == null ? null : schoolNumber.trim();
    }

    public Date getCreationdate() {
        return creationdate;
    }

    public void setCreationdate(Date creationdate) {
        this.creationdate = creationdate;
    }

    public String getCreator() {
        return creator;
    }

    public void setCreator(String creator) {
        this.creator = creator == null ? null : creator.trim();
    }

    public String getModifier() {
        return modifier;
    }

    public void setModifier(String modifier) {
        this.modifier = modifier == null ? null : modifier.trim();
    }

    public Date getModificationdate() {
        return modificationdate;
    }

    public void setModificationdate(Date modificationdate) {
        this.modificationdate = modificationdate;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public Date getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(Date birthDate) {
        this.birthDate = birthDate;
    }
}
