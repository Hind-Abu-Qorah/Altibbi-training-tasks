package com.task.newarchitecture.modules;

import com.task.newarchitecture.response;

import retrofit2.Call;
import retrofit2.http.GET;
import retrofit2.http.Query;

public interface ApiInterfaceA {
    @GET("question/view")
    public Call<responseA> getData(@Query("question_id") int question_id);
}
