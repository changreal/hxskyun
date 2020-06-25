package com.hxskyun.domain;


public class CourseStudent {

  private long id;
  private long courseId;//课程id
  private long studentId;//用户id
  private long studentExp;


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

}
