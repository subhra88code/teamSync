import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../config/axios.Instance";

export let logInEmployee = createAsyncThunk('/auth/login' ,async (Credentials,thunkApi)=>{
 try {
    let res = await axiosInstance.post('/auth/login' , Credentials)
    console.log(res);
    
    return res.data
 } catch (error) {
    return thunkApi.rejectWithValue(error)
 }
})