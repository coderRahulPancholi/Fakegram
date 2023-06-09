import React, { useEffect } from "react";
import Wrapper from "./about";
import { useDispatch, useSelector } from "react-redux";
import { loaduser, rootuserposts } from "../../Actions/user";
// import Card from '../../Commponents/Postcard/Card'
// import { deletepost } from '../../Actions/post'
import Card from "../../Commponents/Postcard/Card";

import TextareaAutosize from "react-textarea-autosize";

import Loading from "../../Commponents/Loader/Loading";
import { useNavigate } from "react-router-dom";

import { BiArrowBack } from "react-icons/bi";

function About({ profileImage, bio, postsArray }) {
  // const [date,setdate] = useState()
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(rootuserposts());
    dispatch(loaduser());
  }, [dispatch]);

  const { user, userposts, loading } = useSelector(
    (state) => state.mainreducer
  );

  

  // const onchng = (e)=>{
  //   setdate(e.target.value)
  //   console.log(date)

  // }

  return  (
   
   
    <Wrapper>
        <div
          className=" df ac  "
          style={{ width: "100%", gap: "5px",padding:"15px",maxWidth:"600px" }}
        >
          <BiArrowBack
            size={20}
            onClick={() => navigate(-1)}
            style={{ cursor: "pointer" }}
          />
          <b>{user.username}</b>
        </div>
      <div className="instagram-profile-card">
        <div className="profile-info wrap">
          <div className="user-info ">
            <img
              src={
                user.profileUrl
                  ? user.profileUrl
                  : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              }
              alt=""
              className="profile-image"
            />

            <p className="name">{user.name}</p>
            {/* <h3 className="name">{user.name}</h3> */}
            {/* <h4 className="username">@ {user.name}</h4> */}
          </div>

          <div className="stats">
            <div className="stat">
              <span className="number">{user.posts.length}</span>
              <span className="label">Posts</span>
            </div>
            <div
              className="stat"
              onClick={() => navigate(`/followers/${user._id}`)}
              style={{ cursor: "pointer" }}
            >
              <span className="number">{user.followers.length}</span>
              <span className="label">Followers</span>
            </div>
            <div
              className="stat"
              onClick={() => navigate(`/followings/${user._id}`)}
              style={{ cursor: "pointer" }}
            >
              <span className="number">{user.following.length}</span>
              <span className="label">Following</span>
            </div>
          </div>
        </div>

        <div className="bios dfc">
          <b>Bio</b>
          <TextareaAutosize minRows={3} value={user.bio} />
        </div>
        <div className="w50 df ac jc gap10">

        <button className="editbtn" onClick={()=>navigate("/editprofile")} >
            Edit Profile
          </button>
        <button className="editbtn" >
           Share Profile
          </button>
        </div>
      </div>

      <div className="postarray ">
        {userposts
          ? userposts.map((e) => {
              return (
                <Card
                  caption={e.caption}
                  likes={e.likes.length}
                  isliked={e.likes.some((e) => e._id === user._id)}
                  id={e._id}
                  isdelete={true}
                  isaccount={true}
                  key={e._id}
                  likearray={e.likes}
                  userImage={e.ownerid.profileUrl}
                  image={e.imageUrl}
                  comments={e.comments.length}
                  username={e.ownerid.username}
                  user_id={e.ownerid._id}
                  date={new Date(e.postedon).toDateString()}
                />
              );
            })
          : null}
      </div>
      {loading && <Loading />}
    </Wrapper>
  )
}

export default About;
