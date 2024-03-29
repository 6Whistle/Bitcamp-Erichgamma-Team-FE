import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllArticlesAPI } from "./article.api";
export const getArticles:any = createAsyncThunk('articles/getAllArticles', async (page:number, {rejectWithValue}) => {
    try {
        const { allArticles }:any = getAllArticlesAPI(page)
        return allArticles
    } catch (error) {
        console.log("getArticles error : " + error)
        return rejectWithValue(error);
    }
})