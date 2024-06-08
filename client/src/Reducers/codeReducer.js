import {createReducer} from "@reduxjs/toolkit"

const state = {
    saveMessage:null,
    error:null,
    loading:null,
    codeDetails:null
}

export const codeReducer = createReducer(state,(builder)=>{
    builder.addCase('Code_Save_Request',(state)=>{
        state.loading=true;
    })
    .addCase('Code_Save_Success',(state,action)=>{
        state.loading=false;
        state.saveMessage=action.payload;
        state.error=false
    })
    .addCase('Code_Save_Failure',(state,action)=>{
        state.loading=false;
        state.saveMessage=action.payload;
        state.error=true;
    })
    .addCase('Get_Code_Request',(state)=>{
        state.loading=true;
    })
    .addCase('Get_Code_Success',(state,action)=>{
        state.loading=false;
        state.error=false;
        state.codeDetails=action.payload
    })
    .addCase('Get_Code_Failure',(state)=>{
        state.loading=false;
        state.error=true
    })
    .addCase('CLEAR_ERRORS',(state)=>{
        state.error=null;
        state.saveMessage=null
    })
})