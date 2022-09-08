package com.task.newarchitecture.modules;

import com.google.gson.annotations.SerializedName;

public class DataA {
    @SerializedName("question")
    QuestionA question;

    public QuestionA getQuestion() {

        return question;
    }

    public void setQuestion(QuestionA question) {
        this.question = question;
    }
}
