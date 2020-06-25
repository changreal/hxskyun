package com.hxskyun.domain;

import java.util.Date;

public class CourseSign {

  private long signId;
  private long courseId;
  private long studentId;
  private String signPlace;
  private Date signTime;
  private Date endTime;
  private int duration;//签到持续时间 单位：分钟
  private int exp;
  private int ranking;
  private String signStatus;


  public long getSignId() {
    return signId;
  }

  public void setSignId(long signId) {
    this.signId = signId;
  }


  public long getCourseId() {
    return courseId;
  }

  public void setCourseId(long courseId) {
    this.courseId = courseId;
  }


  public long getStudentId() {
    return studentId;
  }

  public void setStudentId(long studentId) {
    this.studentId = studentId;
  }


  public String getSignPlace() {
    return signPlace;
  }

  public void setSignPlace(String signPlace) {
    this.signPlace = signPlace;
  }


  public int getExp() {
    return exp;
  }

  public void setExp(int exp) {
    this.exp = exp;
  }

  public int getRanking() {
    return ranking;
  }

  public void setRanking(int ranking) {
    this.ranking = ranking;
  }

  public String getSignStatus() {
    return signStatus;
  }

  public void setSignStatus(String signStatus) {
    this.signStatus = signStatus;
  }

  public Date getSignTime() {
    return signTime;
  }

  public void setSignTime(Date signTime) {
    this.signTime = signTime;
  }

  public Date getEndTime() {
    return endTime;
  }

  public void setEndTime(Date endTime) {
    this.endTime = endTime;
  }

  public int getDuration() {
    return duration;
  }

  public void setDuration(int duration) {
    this.duration = duration;
  }
}
