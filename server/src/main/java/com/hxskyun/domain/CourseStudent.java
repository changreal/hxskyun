package com.hxskyun.domain;


public class CourseStudent {

  private long id;
  private long courseId;//课程id
  private long studentId;//用户id
  private String studentName;//用户姓名
  private long studentExp;
  private Integer ranking;//排名
  private Integer SignedNumbers;
  private Integer UnSignedNumbers;


  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
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


  public long getStudentExp() {
    return studentExp;
  }

  public void setStudentExp(long studentExp) {
    this.studentExp = studentExp;
  }

  public String getStudentName() {
    return studentName;
  }

  public void setStudentName(String studentName) {
    this.studentName = studentName;
  }

  public Integer getRanking() {
    return ranking;
  }

  public void setRanking(Integer ranking) {
    this.ranking = ranking;
  }

  public Integer getSignedNumbers() {
    return SignedNumbers;
  }

  public void setSignedNumbers(Integer signedNumbers) {
    SignedNumbers = signedNumbers;
  }

  public Integer getUnSignedNumbers() {
    return UnSignedNumbers;
  }

  public void setUnSignedNumbers(Integer unSignedNumbers) {
    UnSignedNumbers = unSignedNumbers;
  }
}
