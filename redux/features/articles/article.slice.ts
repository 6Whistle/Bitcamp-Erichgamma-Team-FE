import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./article.init";
import { getAllArticles } from "./article.service";
import { getAllArticlesAPI } from "./article.api";

const articleThunks = [getAllArticles]

const status = {
    pending: "pending",
    fulfilled: "fulfilled",
    rejected: "rejected"
}

const handlePending = (state:any) => {
    
}
const handleFulfilled = (state:any, payload:any) => {
    console.log("================= concolusion ===================")
    console.log(payload)
}
const handleRejected = (state:any) => {
    
}

export const articleSlice = createSlice({
    name: "article",
    initialState,
    reducers: {
    },
    extraReducers: builder => {
        const {pending, rejected} = status
        builder
        .addCase(getAllArticles.fulfilled, handleFulfilled)
    }
})

export const {} = articleSlice.actions
export const getArticle = (state:any) => state.article
export default articleSlice.reducer