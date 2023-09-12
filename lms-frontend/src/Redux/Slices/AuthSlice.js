import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {toast} from "react-hot-toast"

import axiosInastace from "../../helpers/axiosInstance.js"

const initialState={
    isLoggedIn:localStorage.getItem("isLoggeIn") || false,
    data:localStorage.getItem("data")||"",
    role:localStorage.getItem("role")||""
}
export  const createAccount=createAsyncThunk("/auth/signup",async (data)=>{
    try{
        const response=axiosInastace.post("/createuser",data)
        toast.promise(res,{
            loading:"Wait,your account is creating.",
            success:(data)=>{
                return data?.data?.message;
            },
            error:"Account can't be created."
        })
        return (await res).data
    }catch{
        toast.error(error?.response?.data?.message)
    }
                                                                    })
const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{

    }

})

export default authSlice.reducer
// export const {}=authSlice.actions