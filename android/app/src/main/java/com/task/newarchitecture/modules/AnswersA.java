package com.task.newarchitecture.modules;

import com.google.gson.annotations.SerializedName;

public class AnswersA {
    @SerializedName("addedDate")
    private String addedDate;

    @SerializedName("answerBody")
    private String answerBody;

    @SerializedName("answerId")
    private int answerId;

    @SerializedName("thanksCount")
    private int thanksCount;

    @SerializedName("agreeCount")
    private String agreeCount;

    public DoctorA getDoctor() {
        return doctor;
    }

    public void setDoctor(DoctorA doctor) {
        this.doctor = doctor;
    }

    @SerializedName("doctor")
    DoctorA doctor;


    public String getAddedDate() {
        return addedDate;
    }

    public void setAddedDate(String addedDate) {
        this.addedDate = addedDate;
    }

    public String getAnswerBody() {
        return answerBody;
    }

    public void setAnswerBody(String answerBody) {
        this.answerBody = answerBody;
    }

    public int getAnswerId() {
        return answerId;
    }

    public void setAnswerId(int answerId) {
        this.answerId = answerId;
    }

    public int getThanksCount() {
        return thanksCount;
    }

    public void setThanksCount(int thanksCount) {
        this.thanksCount = thanksCount;
    }

    public String getAgreeCount() {
        return agreeCount;
    }

    public void setAgreeCount(String agreeCount) {
        this.agreeCount = agreeCount;
    }

    public Boolean getThanks() {
        return isThanks;
    }

    public void setThanks(Boolean thanks) {
        isThanks = thanks;
    }

    public Boolean getAgreed() {
        return isAgreed;
    }

    public void setAgreed(Boolean agreed) {
        isAgreed = agreed;
    }

    @SerializedName("isThanks")
    private Boolean isThanks;

    @SerializedName("isAgreed")
    private Boolean isAgreed;
}
