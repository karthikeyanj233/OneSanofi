import { createSlice } from "@reduxjs/toolkit";
 export const signupSlice=createSlice({
    name:"signup",
    initialState:{value:
       { 
        email:"",
        password:"",
    }},
    reducers:{
        signupn:(state,action)=>{
            state.value=action.payload;
        },
        logout:(state)=>{
            state.value={
                email:"",
                password:""
            };
        }
    },
 });
 export const {signupn,logout}=signupSlice.actions;
 export const selectsignup=(state)=>state.value.signup;
 export default signupSlice.reducer;