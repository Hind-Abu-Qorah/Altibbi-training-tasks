package com.task.newarchitecture.modules;

import com.google.gson.annotations.SerializedName;

public class Question {
    @SerializedName("question_id")
    private int question_id;

    @SerializedName("body")
    private String body;

    @SerializedName("date_added")
    private String date_added;

    @SerializedName("member")
    member member;

    @SerializedName("answer")
    answer answer;

    @SerializedName("subCategory")
    subCategory subCategory;

    public void setBody(String body) {
        this.body = body;
    }

    public com.task.newarchitecture.modules.subCategory getSubCategory() {
        return subCategory;
    }

    public void setSubCategory(com.task.newarchitecture.modules.subCategory subCategory) {
        this.subCategory = subCategory;
    }

    public com.task.newarchitecture.modules.member getMember() {
        return member;
    }

    public void setMember(com.task.newarchitecture.modules.member member) {
        this.member = member;
    }

    public com.task.newarchitecture.modules.answer getAnswer() {
        return answer;
    }

    public void setAnswer(com.task.newarchitecture.modules.answer answer) {
        this.answer = answer;
    }

    public int getAnswers_count() {
        return answers_count;
    }

    public void setAnswers_count(int answers_count) {
        this.answers_count = answers_count;
    }

    private int answers_count;

    public String getDate_added() {
        return date_added;
    }

    public void setDate_added(String date_added) {
        this.date_added = date_added;
    }

    public int getQuestion_id() {
        return question_id;
    }

    public void setQuestion_id(int question_id) {
        this.question_id = question_id;
    }

    public String getBody() {
        return body;
    }

    public void setBody() {
        this.body = body;
    }
}
