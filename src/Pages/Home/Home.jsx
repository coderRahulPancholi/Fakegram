import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  loadfollowingposts } from "../../Actions/user";
import Card from "../../Commponents/Postcard/Card";
import HomeWrapper from "./homecss";
import { Box, CircularProgress, LinearProgress } from "@mui/material";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(loadalluser());
    dispatch(loadfollowingposts());
    // eslint-disable-next-line
  }, []);
  const {user,loading,followingposts} = useSelector(state=>state.mainreducer)
  const {createpostloading} = useSelector(state=>state.postreducer)
  // const { followingposts } = useSelector((state) => state.mainreducer);

  return (
    <HomeWrapper>
        {createpostloading && (
              <Box sx={{ width: "100%" }}>
                <h5>Creating Post</h5>
                <LinearProgress />
              </Box>
            )}
      <div className="homecontainer">
        {followingposts&&followingposts.filter((e)=>new Date(e.postedon).getDate()  === new Date(Date.now()).getDate()).length!==0&&<h5>Today </h5>}
     




        {followingposts? (
          followingposts.filter((e)=>new Date(e.postedon).getDate()  === new Date(Date.now()).getDate()).map((e) => {
            return (
              
                <div key={e._id}>
                  <Card caption={e.caption} username={e.ownerusername} likes={e.likes.length} comments={e.comments.length}  id={e._id} date={new Date(e.postedon).toDateString()} isliked={e.likes.some((e)=>e._id === user._id)} likearray={e.likes} userImage={e.ownerid.profileUrl} image={e.imageUrl} user_id={e.ownerid._id}/>
                </div>
             
            );
          })
        ) : (
          null
        )}
      </div>
      <div className="homecontainer">
      {followingposts&&followingposts.filter((e)=>new Date(e.postedon).getDate()  !== new Date(Date.now()).getDate()).length!==0&&<h5> Old Posts </h5> }
        
        {followingposts ? followingposts.length !== 0?(
          followingposts.filter((e)=>new Date(e.postedon).getDate()  !== new Date(Date.now()).getDate()).map((e) => {
            return (
              
                <div key={e._id}>
                  <Card caption={e.caption} username={e.ownerusername} likes={e.likes.length} comments={e.comments.length} likearray={e.likes} id={e._id} date={new Date(e.postedon).toDateString()}  isliked={e.likes.some((e)=>e._id === user._id)} userImage={e.ownerid.profileUrl} image={e.imageUrl} user_id={e.ownerid._id}/>
                </div>
             
            );
          })
        ) :<>Follow your Friends To Get Thier letest Posts</>:null}
      </div>
    {loading&&    <Box sx={{ display: 'flex' }}>
        <CircularProgress style={{color:"#fb3c83"}}/>
      </Box> }
    </HomeWrapper>
  );
}

export default Home;
