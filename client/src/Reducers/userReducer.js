import {createReducer} from "@reduxjs/toolkit";


const state = {
    user:{},
    isAuthenticated:null,
    loading:null,
    message:null
    
}

export const userReducer = createReducer(state,(builder)=>{
    builder.addCase('Login_Request',(state)=>{
        state.loading=true;
    })
    .addCase('Login_Success',(state,action)=>{
        state.loading=false;
        state.user = action.payload.user;
        state.message=action.payload.message;
        state.isAuthenticated=true;

    })
    .addCase('Login_Failure',(state,action)=>{
        state.loading=false;
        state.error=action.payload;
        state.isAuthenticated=false
    })
    .addCase('Register_Request',(state)=>{
        state.loading=true;
    })
    .addCase('Register_Success',(state,action)=>{
        state.loading=false;
        state.message=action.payload.message;
        state.isAuthenticated=true
    })
    .addCase('Register_Failure',(state,action)=>{
        state.loading=false;
        state.error=action.payload;
        state.isAuthenticated=false
    })
    .addCase('CLEAR_ERRORS',(state)=>{
        state.error=null
    })
})