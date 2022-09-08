package com.task.newarchitecture.modules;

import com.task.newarchitecture.response;

import retrofit2.Call;
import retrofit2.http.GET;
import retrofit2.http.Query;

public interface ApiInterface {
    @GET("question/latest")
    public Call<response> getData( @Query("page") int page,@Query("per-page") int perPage,@Query("keyword") String keyword );
}