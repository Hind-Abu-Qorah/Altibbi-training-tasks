package com.task.newarchitecture.modules;

import com.google.gson.annotations.SerializedName;

public class responseA {
    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    @SerializedName("code")
    private int code;
    @SerializedName("data")
    DataA data;

    public DataA getData() {
        return data;
    }

    public void setData(DataA data) {
        this.data = data;
    }
}
