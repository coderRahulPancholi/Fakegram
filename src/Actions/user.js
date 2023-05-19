import axios from "axios"




const URL = "https://fakegramapi.onrender.com"
// const URL = "http://localhost:8000"
// const URL = "https://fakegram-beckend.vercel.app"


export const loginuser =(email,password)=> async(dispatch)=>{

    try {
        dispatch({
            type:"loginrequest"
        })

       const userdata = await axios.post(`${URL}/login`,{email,password},{
        headers:{
            "Content-Type":"application/json",
           " Access-Control-Allow-Origin" :"true"
        
        },
        withCredentials:true
        
       })
       
       console.log(userdata.data)

       dispatch({
        type:"loginsuccess",
        payload:userdata.data.user
       })
        
    } catch (error) {
        console.log(error.response.status)
        if(error.response.status === 404){
            alert("No user found Please Register")
        }
        dispatch({
            type:"loginfail"
        })

        
    }
    

};
export const register =(name,username,email,password)=> async(dispatch)=>{

    try {
        dispatch({
            type:"registerrequest"
        })

       const userdata = await axios.post(`${URL}/register`,{name,username,email,password},{
        headers:{
            "Content-Type":"application/json",
           " Access-Control-Allow-Origin" :"true"
        
        },
        withCredentials:true
        
       })
       
       console.log(userdata.data.user)

       dispatch({
        type:"registersucess",
        payload:userdata.data.user
       })
        
    } catch (error) {
        dispatch({
            type:"registerfail"
        })

        
    }
    

};
export const logout =()=> async(dispatch)=>{

    try {
        dispatch({
            type:"loadingreq"
        })

       if(window.confirm("Are You Sure To Logout")){
        await axios.get(`${URL}/logout`,{
        headers:{
            "Content-Type":"application/json",
           " Access-Control-Allow-Origin" :"true"
        
        },
        withCredentials:true
        
       })
       

     await  dispatch({
        type:"loadingsucess",

       })
 window.location.pathname ="/"

    }else{
       dispatch({
            type:"loadingfail",
    
           })
    }
    } catch (error) {
        dispatch({
            type:"loadingfail"
        })

        
    }
    

};

export const loaduser =()=> async(dispatch)=>{

    try {
        dispatch({
            type:"loadrequest"
        })

       const userdata = await axios.get(`${URL}/user/data`,{
        headers:{
            "Content-Type":"application/json",
            " Access-Control-Allow-Origin" :true
        },
        withCredentials:true
        
       })
       console.log(userdata.data.user)

       dispatch({
        type:"loadsuccess",
        payload:userdata.data.user
       })
        
    } catch (error) {
        dispatch({
            type:"loadfail"
        })

        
    }
    

};
export const loadalluser =(username)=> async(dispatch)=>{

    try {
        dispatch({
            type:"loadallusersrequest"
        })

       const userdata = await axios.get(`${URL}/user/allusers/q=${username}`,{
        headers:{
            "Content-Type":"application/json"
        },
        withCredentials:true
        
       })
       console.log(userdata.data.users )
       

     

dispatch({
        type:"loadallusersuccess",
        payload: userdata.data.users
       })
        
    } catch (error) {
        dispatch({
            type:"loadalluserfail"
        })

        
    }
    

};
export const loadfollowingposts =()=> async(dispatch)=>{

    try {
        dispatch({
            type:"loadfollowingpostsrequest"
        })

       const userdata = await axios.get(`${URL}/user/following/posts`,{
        headers:{
            "Content-Type":"application/json"
        },
        withCredentials:true
        
       })
       console.log(userdata.data.letestposts )


       dispatch({
        type:"loadfollowingpostsuccess",
        payload:userdata.data.letestposts
       })
        
    } catch (error) {
        dispatch({
            type:"loadfollowingpostsfail"
        })

        
    }
    

};

export const rootuserposts =()=> async(dispatch)=>{

    try {
        dispatch({
            type:"rootuserpostsrequest"
        })

       const userdata = await axios.get(`${URL}/user/posts`,{
        headers:{
            "Content-Type":"application/json"
        },
        withCredentials:true
        
       })
       console.log(userdata.data.posts )


       dispatch({
        type:"rootuserpostssuccess",
        payload:userdata.data.posts
       })
        
    } catch (error) {
        dispatch({
            type:"rootuserpostssfail"
        })

        
    }
    

};
// export const searchuser =(userid)=> async(dispatch)=>{


//     try {
//         dispatch({
//             type:"searchuserrequest"
//         })

//        const userdata = await axios.get(`${URL}/user/spacificuser/${userid}`,{
//         headers:{
//             "Content-Type":"application/json"
//         },
//         withCredentials:true
        
//        })
//        console.log(userdata.data.user )


//        dispatch({
//         type:"searchusersucess",
//         payload:userdata.data.user
//        })
      
        
//     } catch (error) {
//         dispatch({
//             type:"searchuserfail"
//         })

        
//     }
    

// };
export const followuser =(userid)=> async(dispatch)=>{

    try {
        // dispatch({
        //     type:"searchuserrequest"
        // })

       const userdata = await fetch(`${URL}/user/follow/${userid}`,{
        method:"POST",
        credentials:"include",
        headers:{
            "Content-Type":"application/json"
        },
        
        
       })

       console.log(await userdata.json())

    //    dispatch(searchuser(userid))

    //    dispatch({
    //     type:"searchusersucess",
    //     payload:userdata.data.user
    //    })
        
    } catch (error) {
        dispatch({
            type:"searchuserfail"
        })

        
    }
    

};


export const updateprofile = (username,bio,num,dob,city,state)=>async(dispatch)=>{
    try {
        dispatch({
            type:"loadingtrue"
        })
  
        await axios.put(`${URL}/user/profile/update`,{name:username,bio,num,dob,city,state},{
            withCredentials:true,
            headers:{
                "Content-Type":"application/json"
            },
          
          
        })

        dispatch({
            type:"searchuserfail"
        })
        
    } catch (error) {
        dispatch({
            type:"laodingfalse"
        })
        console.log('server error')
    }


}


export const updateUserPhoto = (file)=>async(dispatch)=>{
    try {
        dispatch({
            type:"loadingtrue"
        })
        let formdata = new FormData()
        formdata.append("file",file,)
console.log(formdata)
         await axios.post(`${URL}/user/upload/userprofile`,formdata,{
            withCredentials:true,
            
            headers:{
                // "Content-Type":"application/json"
            },
          
          
        })

        dispatch({
            type:"searchuserfail"
        })
        
    } catch (error) {
        dispatch({
            type:"laodingfalse"
        })
        console.log('server error')
    }


}

