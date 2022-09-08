package com.task.newarchitecture.modules;

import com.task.newarchitecture.response;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.GET;

public interface CurrentUsInterface {
    @GET("us/current.json")
    public Call<List<CurrentUS>> getCurrentUs();
}
