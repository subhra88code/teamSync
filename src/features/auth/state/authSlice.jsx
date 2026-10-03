import { createSlice } from "@reduxjs/toolkit";
import { currentLoggedinEmployeee, logInEmployee } from "./authAction";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        employee: null,
        isLoading: false,
    },
    reducers: {
        addEmployee: (state,action)=>{
            state.employee = action.payload;
            state.isLoading =false;
        },
        removeEmployee: (state,action)=>{
            state.employee = null;
            state.isLoading = false;
        }
    },
    extraReducers:(builder)=>{
            builder
            .addCase(logInEmployee.pending , (state)=>{
                state.isLoading = true;
            })
            .addCase(logInEmployee.fulfilled , (state,action)=>{
                state.isLoading = false;
                state.employee = action.payload;
            })
            .addCase(logInEmployee.rejected , (state)=>{
                state.isLoading = false;
            })
            .addCase(currentLoggedinEmployeee.pending , (state)=>{
                state.isLoading = true;
            })
            .addCase(currentLoggedinEmployeee.fulfilled , (state,action)=>{
                state.isLoading = false;
                state.employee = action.payload;
            })
            .addCase(currentLoggedinEmployeee.rejected , (state)=>{
                state.isLoading = false;
            })
    }

})

export let {addEmployee , removeEmployee} = authSlice.actions;

export default authSlice.reducer