package com.task.newarchitecture.modules;

import com.google.gson.annotations.SerializedName;

public class location {
    @SerializedName("member_id")
    private int member_id;

    @SerializedName("name")
    private String name;

    @SerializedName("avatar")
    private String avatar;

    @SerializedName("gender")
    private String gender;


    public int getMember_id() {
        return member_id;
    }

    public void setMember_id(int member_id) {
        this.member_id = member_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }


}
