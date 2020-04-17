package com.fzu.hxsky.demo.domain;

public class Buttontype {
    private Integer buttonId;

    private String cnName;

    private String enName;

    public Integer getButtonId() {
        return buttonId;
    }

    public void setButtonId(Integer buttonId) {
        this.buttonId = buttonId;
    }

    public String getCnName() {
        return cnName;
    }

    public void setCnName(String cnName) {
        this.cnName = cnName == null ? null : cnName.trim();
    }

    public String getEnName() {
        return enName;
    }

    public void setEnName(String enName) {
        this.enName = enName == null ? null : enName.trim();
    }
}