import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast"

import axiosInstance from "../../helpers/axiosInstance";
const initialState={
    courseData:[]
}
export const getAllCourses=createAsyncThunk("/course/allcourses",
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
        builder.addCase(getAllCourses.fulfilled,(state,action)=>{
            if (action.payload) {
                console.log(action.payload);
                state.courseData=[...action.payload]
            }
        })
    }
})
export const createNewCourse=createAsyncThunk("/course/create",
  async  (data)=>{
   try {
    
    const formData=new FormData()
    formData.append("data",data.title)
    formData.append("category",data.category)
    formData.append("createdBy",data.createdBy)
    formData.append("description",data.description)
    formData.append("thumbnail",data.thumbnail)
    const response=axiosInstance.post("/courses",formData)
    
    toast.promise(response,{
     loading:"Data is sending...",
     success:"Successfully done.",
     error:"Operation failed."
    })
    return (await response).data
 }
    catch (error) {
     toast.error(error?.response?.message)
                     }
                  }
)
export default CourseSlice.reducer;