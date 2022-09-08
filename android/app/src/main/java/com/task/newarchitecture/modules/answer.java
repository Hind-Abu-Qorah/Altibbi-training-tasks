package com.task.newarchitecture.modules;

import com.google.gson.annotations.SerializedName;

public class answer {
    @SerializedName("answer_id")
    private int answer_id;

    @SerializedName("answer_body")
    private String answer_body;

    @SerializedName("date_added")

    private String date_added;

    public String getAnswer_body() {
        return answer_body;
    }

    public void setAnswer_body(String answer_body) {
        this.answer_body = answer_body;
    }

    public com.task.newarchitecture.modules.location getLocation() {
        return location;
    }

    public void setLocation(com.task.newarchitecture.modules.location location) {
        this.location = location;
    }

    location location;

    public int getAnswer_id() {
        return answer_id;
    }

    public void setAnswer_id(int answer_id) {
        this.answer_id = answer_id;
    }

    public String getDate_added() {
        return date_added;
    }

    public void setDate_added(String date_added) {
        this.date_added = date_added;
    }
}
