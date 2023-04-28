import { createReducer } from "@reduxjs/toolkit"

const initialState = {

 
}
export const postreducer = createReducer(initialState,{

    likerequest:(state,action)=>{
        state.loading=true        
    },
  likesuccess:(state,action)=>{
        state.loading=false  ;
    },
    likefail:(state,action)=>{
        state.loading=false  
              
    },


})