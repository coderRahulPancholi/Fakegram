import axios from "axios";
import {   loaduser, rootuserposts } from "./user";

const URL = "https://fakegramapi.onrender.com";
// const URL = "http://localhost:8000";
// const URL = "https://fakegram-beckend.vercel.app";


export const navi = (navigate,userid)=>{
  navigate(`/user/${userid}`)

}

export const createnewpost = (caption) => async (dispatch) => {
  try {
    // dispatch({
    //   type: "likerequest",
    // });
    const create = await fetch(`${URL}/user/createpost`, {
      method: "POST",
      credentials: "include",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        caption
      }),
    });

    // dispatch({
    //   type: "likesuccess",
    // });
    // dispatch(loadfollowingposts());
    const created = await create.json()
    console.log(created);
  } catch (error) {
    console.log(error);
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
