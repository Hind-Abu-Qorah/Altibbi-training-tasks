package com.task.newarchitecture;

import com.google.gson.annotations.SerializedName;
import com.task.newarchitecture.modules.Data;

public class response {
    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    @SerializedName("code")
    private int code;
    @SerializedName("data")
    Data data;


    public Data getData() {
        return data;
    }


    public void setData(Data data) {
        this.data = data;
    }
}