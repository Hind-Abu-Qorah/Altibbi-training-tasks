package com.task.newarchitecture.modules;

import com.google.gson.annotations.SerializedName;

import java.security.PrivateKey;

public class DoctorA {


    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getSpecialty() {
        return specialty;
    }

    public void setSpecialty(String specialty) {
        this.specialty = specialty;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getArabicName() {
        return arabicName;
    }

    public void setArabicName(String arabicName) {
        this.arabicName = arabicName;
    }

    @SerializedName("imageUrl")
    private String imageUrl;

    @SerializedName("specialty")
    private String specialty;

    @SerializedName("country")
    private String country;

    @SerializedName("arabicName")
    private String arabicName;

    @SerializedName("locationId")
    private int locationId;

}
