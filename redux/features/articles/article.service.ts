import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllArticlesAPI } from "./article.api";

export const fetchAllArticles:any = createAsyncThunk('articles/fetchAllArticles', async (page:number, {rejectWithValue}) => {
    const {message, articles}:any = await fetchAllArticlesAPI(page);
    return articles
})