import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast"

import axiosInstance from "../../helpers/axiosInstance";
const initialState={
    courses:[]
}
export const allCourses=createAsyncThunk("/course/allcourses",
    async ()=>{
        try{
            const response=axiosInstance.get("/course/get")
            toast.promise(response,{
            loading:"Loading course data",
            success:"Course Data loaded successfully.",
            error:"Error in fetching the Course Data."
            })
            return (await response).data.course
        }catch(error){
            toast.error(error?.response?.data?.message)
        }
    }
)
const CourseSlice=createSlice({
    name:"courses",
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{

    }
})
export default CourseSlice.reducer;