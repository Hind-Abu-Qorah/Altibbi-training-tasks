package com.task.newarchitecture.modules;

import com.google.gson.annotations.SerializedName;

import java.util.Collections;
import java.util.List;

public class QuestionA {

    @SerializedName("questionBody")
    private String questionBody;

    @SerializedName("title")
    private String title;

    @SerializedName("age")
    private String age;

    @SerializedName("gender")
    private String gender;

    @SerializedName("dateAdded")
    private String dateAdded;

    @SerializedName("questionSubCategoryName")
    private String questionSubCategoryName;

    public List<AnswersA> getAnswers() {
        return answers;
    }

    public void setAnswers(List<AnswersA> answers) {
        this.answers = answers;
    }

    @SerializedName("answers")
    List<AnswersA> answers = Collections.emptyList();

    public String getQuestionBody() {
        return questionBody;
    }

    public void setQuestionBody(String questionBody) {
        this.questionBody = questionBody;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getDateAdded() {
        return dateAdded;
    }

    public void setDateAdded(String dateAdded) {
        this.dateAdded = dateAdded;
    }

    public String getQuestionSubCategoryName() {
        return questionSubCategoryName;
    }

    public void setQuestionSubCategoryName(String questionSubCategoryName) {
        this.questionSubCategoryName = questionSubCategoryName;
    }

    public int getNumOfAnswer() {
        return numOfAnswer;
    }

    public void setNumOfAnswer(int numOfAnswer) {
        this.numOfAnswer = numOfAnswer;
    }

    @SerializedName("numOfAnswer")
    private int numOfAnswer;


}
