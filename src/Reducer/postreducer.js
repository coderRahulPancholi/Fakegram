import { createReducer } from "@reduxjs/toolkit"

const initialState = {

 
}
export const postreducer = createReducer(initialState,{

    likerequest:(state,action)=>{
        state.likeloading=true        
    },
  likesuccess:(state,action)=>{
        state.likeloading=false  ;
    },
    likefail:(state,action)=>{
        state.likeloading=false  
              
    },

    commentrequest:(state,action)=>{
        state.commentloading=true        
    },
  commentsuccess:(state,action)=>{
        state.commentloading=false  ;
    },
    commentfail:(state,action)=>{
        state.commentloading=false  
              
    },
    creatingpost:(state,action)=>{
        state.createpostloading=true        
    },
  postcreated:(state,action)=>{
        state.createpostloading=false  
        state.alertsuccess=true
    },
    postcreatefail:(state,action)=>{
        state.createpostloading=false  
              
    },





})