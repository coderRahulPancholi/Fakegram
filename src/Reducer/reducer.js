import { createReducer } from "@reduxjs/toolkit"

const initialState = {

 
}
export const costomreducer = createReducer(initialState,{

    loadingtrue:(state)=>{
        state.loading=true        
    },
    loadingfalse:(state)=>{
        state.loading=false  ;
    },
  
    loginrequest:(state,action)=>{
        state.loginloading=true        
    },
    loginsuccess:(state,action)=>{
        state.loginloading=false  ;
        state.user = action.payload ;  
        state.isauthed=true;   
    },
    loginfail:(state,action)=>{
        state.loginloading=false  
        state.errormessage=action.payload
              
    },


    loadrequest:(state,action)=>{
        state.loading=true        
    },
    loadsuccess:(state,action)=>{
        state.loading=false  ;
        state.user = action.payload ;  
        state.isauthed=true;   
    },
    loadfail:(state,action)=>{
        state.loading=false        
    },


    loadallusersrequest:(state,action)=>{
        state.loading=true        
    },
    loadallusersuccess:(state,action)=>{
        state.loading=false  ;
        state.allusers = action.payload ;  
        
    },
    loadalluserfail:(state,action)=>{
        state.loading=false        
    },

    
    loadfollowingpostsrequest:(state,action)=>{
        state.loading=true        
    },
    loadfollowingpostsuccess:(state,action)=>{
        state.loading=false  ;
        state.followingposts = action.payload ;  
        
    },
    loadfollowingpostsfail:(state,action)=>{
        state.loading=false        
    },



    rootuserpostsrequest:(state,action)=>{
        state.loading=true        
    },
    rootuserpostssuccess:(state,action)=>{
        state.loading=false  ;
        state.userposts = action.payload ;  
        
    },
    rootuserpostssfail:(state,action)=>{
        state.loading=false        
    },




    searchuserrequest:(state,action)=>{
        state.loading=true        
    },
    searchusersucess:(state,action)=>{
        state.loading=false  ;
        state.searcheduser = action.payload ;  
        
    },
    searchuserfail:(state,action)=>{
        state.loading=false        
    },

    registerrequest:(state,action)=>{
        state.loading=true        
    },
    registersucess:(state,action)=>{
        state.loading=false  ;
        state.user = action.payload ; 
        state.isauthed=true;     
        
    },
    registerfail:(state,action)=>{
        state.loading=false        
    },

    postcreatereq:(state,action)=>{
        state.loading=true
    },
    postcreatesucess:(state,action)=>{
        state.loading=false;
        state.message=action.payload
    },
    postcreatefail:(state,action)=>{
        state.loading=false
    },
    loadingreq:(state,action)=>{
        state.loading=true
    },
    loadingsucess:(state,action)=>{
        state.loading=false;
  
    },
    loadingfail:(state,action)=>{
        state.loading=false
    }

})

