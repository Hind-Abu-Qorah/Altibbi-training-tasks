package com.task.newarchitecture.modules;

import com.google.gson.annotations.SerializedName;

public class member {
    @SerializedName("member_age")
    private String member_age;

    @SerializedName("member_gender")
    private String member_gender;

    @SerializedName("gender")
    private String gender;

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }


    public String getMember_age() {
        return member_age;
    }

    public void setMember_age(String member_age) {
        this.member_age = member_age;
    }

    public String getMember_gender() {
        return member_gender;
    }

    public void setMember_gender(String member_gender) {
        this.member_gender = member_gender;
    }
}
