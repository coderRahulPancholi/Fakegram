import axios from "axios";
import {   loaduser, rootuserposts } from "./user";
import { Global_Url } from "../url";


// const URL = "https://fakegramapi.onrender.com";
const URL = Global_Url
// const URL = "https://fakegram-beckend.vercel.app";




export const createnewpost = (caption, file,navigate) => async (dispatch) => {
  try {
    navigate("/")
    dispatch({
      type: "creatingpost",
    });
    const formdata = new FormData()
    formdata.append("file" ,file )
    formdata.append("caption",caption)
    const create = await axios.post(`${URL}/user/createpost`,formdata , {
      withCredentials:true,
      headers: {
      "Content-Type":'multipart/form-data'
      },
 
   

      
    });

    dispatch({
      type: "postcreated",
    });
    // dispatch(loadfollowingposts());
    const created = await create.data.post._id
    console.log(created);
    // navigate(`/post/${created}`)
  } catch (error) {
    console.log(error);
    
    dispatch({
      type:"postcreatefail"
    })
  }
};

export const likepost = (postid) => async (dispatch) => {
  try {
    // dispatch({
    //   type: "likerequest",
    // });
    const likeresult = await fetch(`${URL}/user/like/${postid}`, {
      method: "POST",
      credentials: "include",

      headers: {
        "Content-Type": "application/json",
      },
    });

    // dispatch({
    //   type: "likesuccess",
    // });
    // dispatch(loadfollowingposts());
    const likeres = await likeresult.json()
    console.log(likeres);
  } catch (error) {
    console.log(error);
  }
};


export const deletepost = (postid) => async (dispatch) => {
  try {
    //     dispatch({
    //     type:"likerequest"
    //   })
   
    if(window.confirm("Are you sure")){

    
    const dltresult = await axios.delete(`${URL}/user/delete/post/${postid}`, {
      headers: {
        "Content-Type": "application/json",
        " Access-Control-Allow-Origin": "true",
      },
      withCredentials: true,
    });

    //    dispatch({
    //        type:"likesuccess"
    //     })
    dispatch(rootuserposts());
    dispatch(loaduser());
    console.log(dltresult);}
  } catch (error) {
    console.log(error);
  }
};

export const commentonpost = (postid,comment) => async (dispatch) => {
  try {
        dispatch({
        type:"commentrequest"
      })
      await fetch(`${URL}/user/comment/${postid}`,{
        method: "POST",
        credentials: "include",
  
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          comment
        }),
      });
  
      dispatch({
        type:"commentsuccess"
      })

  
  } catch (error) {
    console.log(error);
    
    dispatch({
      type:"commentfail"
    })
  }
};
