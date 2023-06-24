import React, { useEffect, useState } from "react";
import UserPageWrapper from "./userpagecss";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { followuser } from "../../Actions/user";
import axios from "axios";

import { TextareaAutosize } from "@mui/material";

import Card from "../../Commponents/Postcard/Card";
import Loading from "../../Commponents/Loader/Loading";
import { BiArrowBack } from "react-icons/bi";
import { Global_Url } from "../../url";

function UserPage() {
  const dispatch = useDispatch();

  const { userid } = useParams();
  const { user,loading } = useSelector((s) => s.mainreducer);
  const [searchuser, setSearchuser] = useState(undefined);
 


  const userdata = async () => {
    // await dispatch(loaduser())
    dispatch({
      type:"loadingtrue"
     })
    const userdata = await axios.get(
      `${Global_Url}/user/spacificuser/${userid}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    console.log(userdata.data.user);
   await setSearchuser(userdata.data.user);

    if(user?userdata.data.user.followers.some((e) => e._id === user._id):false ){
      setIsfollowed(true)
    }else{
      setIsfollowed(false)
    }
    dispatch({
      type:"loadingfalse"
     })
  };

  useEffect(() => {

    userdata();

    // console.log(isfollowed);
    // eslint-disable-next-line
  }, []);



  const [isfollowed, setIsfollowed] = useState(false);
  const navigate = useNavigate()

  const userfollow = async () => {
    setIsfollowed(!isfollowed)
  await dispatch(followuser(searchuser._id));
    userdata()
    
  };

  return (

    <UserPageWrapper>
      {searchuser && (
        <div className="subcontainer dfc ac">
          <div className="profileinfo dfc gap15 ">
          <div className=' df ac ' style={{width:"100%",gap:"15px",padding:"5px"}}>
            <BiArrowBack size={20} onClick={()=>navigate(-1)} style={{cursor:"pointer"}}/>
            <b>{searchuser.username}</b>
           
        </div>
            <div className="subp1">
              <div className="pf">
                <div className="prophoto dfc">
                  <img
                    src={
                      searchuser.profileUrl
                        ? searchuser.profileUrl
                        : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    }
                    alt=""
                  />
                  <p>{searchuser.name.toUpperCase()}</p>
                </div>
                <div className="foll df ac ">
                  <div className="posts dfc ac">
                    <span>{searchuser.posts.length}</span>
                    <span>Posts</span>
                  </div>
                  <div className="folloers dfc ac cp" onClick={()=>navigate(`/followers/${searchuser._id}`)}>
                    <span>{searchuser.followers.length}</span>
                    <span>Followers</span>
                  </div>
                  <div className="following dfc ac cp" onClick={()=>navigate(`/followings/${searchuser._id}`)}>
                    <span>{searchuser.following.length}</span>
                    <span>Following</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="subp2">
              <div>
                <b>Bio</b>
              <TextareaAutosize      value={searchuser.bio}/>
              
              </div>
            </div>
            <div className="subp3 ">
              <div>
                <button onClick={() => userfollow()} className="cp">
                  {isfollowed ? " UnFollow" : "Follow"}
                </button>
              </div>
            </div>
          </div>

          <div className="postsinfo dfc ">
           
              {searchuser && searchuser.posts.reverse().map((e)=>{
                return(
                  <Card caption={e.caption} likes={e.likes.length} isliked={e.likes.some((e)=>e === user._id)} id={e._id} key={e._id}   likearray={e.likes} userImage={searchuser.profileUrl} image={e.imageUrl} username={searchuser.username}/>
                )
              })}
                
         
          </div>
        </div>
      ) }
      {!searchuser && loading &&<Loading/>}
    </UserPageWrapper>
  );
}

export default UserPage;
