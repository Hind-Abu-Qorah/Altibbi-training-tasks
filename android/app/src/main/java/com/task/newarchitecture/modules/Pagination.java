package com.task.newarchitecture.modules;

import com.google.gson.annotations.SerializedName;

public class Pagination {
    @SerializedName("totalCount")
    private float totalCount;
    @SerializedName("pagesCount")

    private float pagesCount;
    @SerializedName("currentPage")

    private float currentPage;


    public float getTotalCount() {
        return totalCount;
    }

    public float getPagesCount() {
        return pagesCount;
    }

    public float getCurrentPage() {
        return currentPage;
    }


    public void setTotalCount(float totalCount) {
        this.totalCount = totalCount;
    }

    public void setPagesCount(float pagesCount) {
        this.pagesCount = pagesCount;
    }

    public void setCurrentPage(float currentPage) {
        this.currentPage = currentPage;
    }
}
