package com.task.newarchitecture.modules;

import com.google.gson.annotations.SerializedName;

public class CurrentUS {
    @SerializedName("date")
    private int date;

    @SerializedName("states")
    private int states;

    @SerializedName("positive")
    private int positive;

    @SerializedName("negative")
    private int negative;

    @SerializedName("pending")
    private int pending;

    @SerializedName("death")
    private int death;

    @SerializedName("hospitalizedCurrently")
    private int hospitalizedCurrently;

    @SerializedName("hospitalizedCumulative")
    private int hospitalizedCumulative;

    @SerializedName("inIcuCurrently")
    private int inIcuCurrently;

    @SerializedName("inIcuCumulative")
    private int inIcuCumulative;

    @SerializedName("onVentilatorCurrently")
    private int onVentilatorCurrently;

    public int getDate() {
        return date;
    }

    public void setDate(int date) {
        this.date = date;
    }

    public int getStates() {
        return states;
    }

    public void setStates(int states) {
        this.states = states;
    }

    public int getPositive() {
        return positive;
    }

    public void setPositive(int positive) {
        this.positive = positive;
    }

    public int getNegative() {
        return negative;
    }

    public void setNegative(int negative) {
        this.negative = negative;
    }

    public int getPending() {
        return pending;
    }

    public void setPending(int pending) {
        this.pending = pending;
    }

    public int getDeath() {
        return death;
    }

    public void setDeath(int death) {
        this.death = death;
    }

    public int getHospitalizedCurrently() {
        return hospitalizedCurrently;
    }

    public void setHospitalizedCurrently(int hospitalizedCurrently) {
        this.hospitalizedCurrently = hospitalizedCurrently;
    }

    public int getHospitalizedCumulative() {
        return hospitalizedCumulative;
    }

    public void setHospitalizedCumulative(int hospitalizedCumulative) {
        this.hospitalizedCumulative = hospitalizedCumulative;
    }

    public int getInIcuCurrently() {
        return inIcuCurrently;
    }

    public void setInIcuCurrently(int inIcuCurrently) {
        this.inIcuCurrently = inIcuCurrently;
    }

    public int getInIcuCumulative() {
        return inIcuCumulative;
    }

    public void setInIcuCumulative(int inIcuCumulative) {
        this.inIcuCumulative = inIcuCumulative;
    }

    public int getOnVentilatorCurrently() {
        return onVentilatorCurrently;
    }

    public void setOnVentilatorCurrently(int onVentilatorCurrently) {
        this.onVentilatorCurrently = onVentilatorCurrently;
    }

    public int getTotalTestResults() {
        return totalTestResults;
    }

    public void setTotalTestResults(int totalTestResults) {
        this.totalTestResults = totalTestResults;
    }

    public int getDeathIncrease() {
        return deathIncrease;
    }

    public void setDeathIncrease(int deathIncrease) {
        this.deathIncrease = deathIncrease;
    }

    public int getHospitalizedIncrease() {
        return hospitalizedIncrease;
    }

    public void setHospitalizedIncrease(int hospitalizedIncrease) {
        this.hospitalizedIncrease = hospitalizedIncrease;
    }

    public int getNegativeIncrease() {
        return negativeIncrease;
    }

    public void setNegativeIncrease(int negativeIncrease) {
        this.negativeIncrease = negativeIncrease;
    }

    public int getPositiveIncrease() {
        return positiveIncrease;
    }

    public void setPositiveIncrease(int positiveIncrease) {
        this.positiveIncrease = positiveIncrease;
    }

    public int getTotalTestResultsIncrease() {
        return totalTestResultsIncrease;
    }

    public void setTotalTestResultsIncrease(int totalTestResultsIncrease) {
        this.totalTestResultsIncrease = totalTestResultsIncrease;
    }

    @SerializedName("totalTestResults")
    private int totalTestResults;

    @SerializedName("deathIncrease")
    private int deathIncrease;

    @SerializedName("hospitalizedIncrease")
    private int hospitalizedIncrease;

    @SerializedName("negativeIncrease")
    private int negativeIncrease;

    @SerializedName("positiveIncrease")
    private int positiveIncrease;

    @SerializedName("totalTestResultsIncrease")
    private int totalTestResultsIncrease;


}
