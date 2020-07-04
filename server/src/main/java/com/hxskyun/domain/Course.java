package com.hxskyun.domain;


public class Course {

  private Long courseId;
  private String courseName;
  private Long courseHour;
  private Integer teachId;
  private String teacherName;
  private String classType;
  private String classDes;
  private String studyRequire;
  private String courseSemester;
  private String startTime;
  private String coursePlace;
  private String school;
  private String department;
  private String major;
  private String endClassStatus;

  public Long getCourseId() {
    return courseId;
  }

  public void setCourseId(Long courseId) {
    this.courseId = courseId;
  }


  public String getCourseName() {
    return courseName;
  }

  public void setCourseName(String courseName) {
    this.courseName = courseName;
  }


  public Long getCourseHour() {
    return courseHour;
  }

  public void setCourseHour(Long courseHour) {
    this.courseHour = courseHour;
  }


  public Integer getTeachId() {
    return teachId;
  }

  public void setTeachId(Integer teachId) {
    this.teachId = teachId;
  }



  public String getStartTime() {
    return startTime;
  }

  public void setStartTime(String startTime) {
    this.startTime = startTime;
  }

  public String getCoursePlace() {
    return coursePlace;
  }

  public void setCoursePlace(String coursePlace) {
    this.coursePlace = coursePlace;
  }




  public String getSchool() {
    return school;
  }

  public void setSchool(String school) {
    this.school = school;
  }

  public String getDepartment() {
    return department;
  }

  public void setDepartment(String department) {
    this.department = department;
  }

  public String getMajor() {
    return major;
  }

  public void setMajor(String major) {
    this.major = major;
  }

  public String getTeacherName() {
    return teacherName;
  }

  public void setTeacherName(String teacherName) {
    this.teacherName = teacherName;
  }

  public String getClassType() {
    return classType;
  }

  public void setClassType(String classType) {
    this.classType = classType;
  }

  public String getClassDes() {
    return classDes;
  }

  public void setClassDes(String classDes) {
    this.classDes = classDes;
  }

  public String getStudyRequire() {
    return studyRequire;
  }

  public void setStudyRequire(String studyRequire) {
    this.studyRequire = studyRequire;
  }

  public String getCourseSemester() {
    return courseSemester;
  }

  public void setCourseSemester(String courseSemester) {
    this.courseSemester = courseSemester;
  }

  public String getEndClassStatus() {
    return endClassStatus;
  }

  public void setEndClassStatus(String endClassStatus) {
    this.endClassStatus = endClassStatus;
  }
}
