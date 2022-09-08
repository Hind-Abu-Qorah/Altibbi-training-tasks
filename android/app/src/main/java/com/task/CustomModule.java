package com.task;

import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.google.gson.Gson;
import com.task.newarchitecture.modules.ApiInterface;
import com.task.newarchitecture.modules.ApiInterfaceA;
import com.task.newarchitecture.modules.CurrentUS;
import com.task.newarchitecture.modules.CurrentUsInterface;
import com.task.newarchitecture.modules.Question;
import com.task.newarchitecture.modules.responseA;
import com.task.newarchitecture.response;

import java.util.Collections;
import java.util.List;

import retrofit2.Call;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class CustomModule extends ReactContextBaseJavaModule {
    List<Question> questions = Collections.emptyList();

    public CustomModule(ReactApplicationContext context) {
        super(context);
    }

    @NonNull
    @Override
    public String getName() {
        return "CustomModule";
    }

    @ReactMethod
    public void converterFun(String url, int page, String keyword, com.facebook.react.bridge.Callback callback) {
        Retrofit retrofit = new Retrofit.Builder().baseUrl(url).addConverterFactory(GsonConverterFactory.create()).build();
        ApiInterface apiInterface = retrofit.create(ApiInterface.class);
        int Page = page;
        if (keyword.matches("")) {
            Log.e("String", "converterFun: String");
        }
        Call<response> call = apiInterface.getData(Page, 10, keyword);
        call.enqueue(new retrofit2.Callback<response>() {
            @Override
            public void onResponse(Call<response> call, Response<response> response) {
                Gson gson = new Gson();
                String json = gson.toJson(response.body());
                callback.invoke(json);
            }

            @Override
            public void onFailure(Call<response> call, Throwable t) {
                Log.e("TAG", "onFailure: " + t.getMessage());
            }
        });

    }

    @ReactMethod
    public void convertorFunA(String url, int question_id, com.facebook.react.bridge.Callback callback) {
        Retrofit retrofit = new Retrofit.Builder().baseUrl(url).addConverterFactory(GsonConverterFactory.create()).build();
        ApiInterfaceA apiInterfaceA = retrofit.create(ApiInterfaceA.class);
        Call<responseA> call = apiInterfaceA.getData(question_id);
        call.enqueue(new retrofit2.Callback<responseA>() {

            @Override
            public void onResponse(Call<responseA> call, Response<responseA> response) {
                Gson gson = new Gson();
                String json = gson.toJson(response.body());
                callback.invoke(json);
            }

            @Override
            public void onFailure(Call<responseA> call, Throwable t) {
                Log.e("TAG", "onFailure: " + t.getMessage());

            }
        });
    }

    @ReactMethod
    public void getCurrentUs(String url, com.facebook.react.bridge.Callback callback) {
        Retrofit retrofit = new Retrofit.Builder().baseUrl(url).addConverterFactory(GsonConverterFactory.create()).build();
        CurrentUsInterface currentUsInterface = retrofit.create(CurrentUsInterface.class);
        Call<List<CurrentUS>> call = currentUsInterface.getCurrentUs();
        call.enqueue(new retrofit2.Callback<List<CurrentUS>>() {
            @Override
            public void onResponse(Call<List<CurrentUS>> call, Response<List<CurrentUS>> response) {
                Gson gson = new Gson();
                String json = gson.toJson(response.body());
                callback.invoke(json);
            }

            @Override
            public void onFailure(Call<List<CurrentUS>> call, Throwable t) {
                Log.e("TAG", "onFailure: " + t.getMessage());
            }
        });
    }
}


