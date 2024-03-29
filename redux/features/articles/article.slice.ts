import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./article.init";
import { getArticles } from "./article.service";

const articleThunks = [getArticles]

const status = {
    pending: "pending",
    fulfilled: "fulfilled",
    rejected: "rejected"
}

const handlePending = (state:any) => {
    
}
const handleFulfilled = (state:any) => {
    
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
        .addCase("", handleFulfilled)
    }
})

export const {} = articleSlice.actions
export const getArticle = (state:any) => state.article
export default articleSlice.reducer