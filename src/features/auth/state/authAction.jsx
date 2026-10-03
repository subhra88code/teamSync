import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../config/axios.Instance";

export let logInEmployee = createAsyncThunk('/auth/login' ,async (Credentials,thunkApi)=>{
 try {
    let res = await axiosInstance.post('/auth/login' , Credentials)
    console.log(res);
    
    return res.data.data
 } catch (error) {
    return thunkApi.rejectWithValue(error)
 }
})

export let currentLoggedinEmployeee = createAsyncThunk('/auth/me', async (_,thunkApi)=>{
   try {
    let res = await axiosInstance.get('/auth/me')
    console.log(res);
    
    return res.data.user
 } catch (error) {
    return thunkApi.rejectWithValue(error)
 }
})