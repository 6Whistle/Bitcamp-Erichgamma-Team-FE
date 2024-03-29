import { createSlice } from "@reduxjs/toolkit";
import articleSlice from "../articles/article.slice";

interface IUser{
    id: number,
    username: string,
    password: string,
    name: string,
    phone: string,
    job: string,
    height: number,
    weight: number
}

const initialState:IUser = {
    id: 0,
    username: "no username",
    password: "no password",
    name: "no name",
    phone: "no phone",
    job: "no job",
    height: 0,
    weight: 0
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

    }
})

export const {} = userSlice.actions
export const getUser = (state:any) => state.user
export default userSlice.reducer