package com.hxskyun.domain;

import java.sql.Timestamp;
import java.util.Date;

public class CourseSign {

    private long signId;
    private long courseId;
    private long studentId;
    private String studentName;
    private String signPlace;
    private Date signTime;
    private Date endTime;
    private Long endTimestamp;
    private Long nowTimeStamp;
    private int duration;//签到持续时间 单位：分钟
    private int exp;//签到2分，缺勤-1分，
    private int ranking;
    private String signStatus;
    private Integer signedNumbers;
    private Integer unSignedNumbers;
    private Double signDistance;
    private Double sourceLatitude;//老师发起的签到位置
    private Double sourceLongitude;
    private Double targetLatitude;//学生签到的位置
    private Double targetLongitude;

    public CourseSign() {
    }


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

    public Integer getSignedNumbers() {
        return signedNumbers;
    }

    public void setSignedNumbers(Integer signedNumbers) {
        this.signedNumbers = signedNumbers;
    }

    public Integer getUnSignedNumbers() {
        return unSignedNumbers;
    }

    public void setUnSignedNumbers(Integer unSignedNumbers) {
        this.unSignedNumbers = unSignedNumbers;
    }

    public Double getSignDistance() {
        return signDistance;
    }

    public void setSignDistance(Double signDistance) {
        this.signDistance = signDistance;
    }

    public Double getSourceLatitude() {
        return sourceLatitude;
    }

    public void setSourceLatitude(Double sourceLatitude) {
        this.sourceLatitude = sourceLatitude;
    }

    public Double getSourceLongitude() {
        return sourceLongitude;
    }

    public void setSourceLongitude(Double sourceLongitude) {
        this.sourceLongitude = sourceLongitude;
    }

    public Double getTargetLatitude() {
        return targetLatitude;
    }

    public void setTargetLatitude(Double targetLatitude) {
        this.targetLatitude = targetLatitude;
    }

    public Double getTargetLongitude() {
        return targetLongitude;
    }

    public void setTargetLongitude(Double targetLongitude) {
        this.targetLongitude = targetLongitude;
    }


    public Long getEndTimestamp() {
        return endTimestamp;
    }

    public void setEndTimestamp(Long endTimestamp) {
        this.endTimestamp = endTimestamp;
    }

    public Long getNowTimeStamp() {
        return nowTimeStamp;
    }

    public void setNowTimeStamp(Long nowTimeStamp) {
        this.nowTimeStamp = nowTimeStamp;
    }

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }
}
