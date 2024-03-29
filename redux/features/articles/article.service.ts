import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllArticlesAPI } from "./article.api";

export const getAllArticles:any = createAsyncThunk('articles/getAllArticles', async (page:number, {rejectWithValue}) => {
    const {message, articles}:any = await getAllArticlesAPI(1);
    return articles
})