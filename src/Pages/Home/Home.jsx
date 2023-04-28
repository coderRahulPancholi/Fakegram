import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  loadfollowingposts } from "../../Actions/user";
import Card from "../../Commponents/Postcard/Card";
import HomeWrapper from "./homecss";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(loadalluser());
    dispatch(loadfollowingposts());
    // eslint-disable-next-line
  }, []);
  const {user} = useSelector(state=>state.mainreducer)
  const { followingposts } = useSelector((state) => state.mainreducer);

  return (
    <HomeWrapper>
      <div className="homecontainer">
        {followingposts?followingposts.filter((e)=>new Date(e.postedon).getDate()  === new Date(Date.now()).getDate()).length!==0?<h5>Today </h5>:null:null }
     




        {followingposts? (
          followingposts.filter((e)=>new Date(e.postedon).getDate()  === new Date(Date.now()).getDate()).map((e) => {
            return (
              
                <div key={e._id}>
                  <Card caption={e.caption} username={e.ownerusername} likes={e.likes.length} comments={e.comments.length}  id={e._id} date={new Date(e.postedon).toDateString()} isliked={e.likes.some((e)=>e === user._id)} />
                </div>
             
            );
          })
        ) : (
          null
        )}
      </div>
      <div className="homecontainer">
        <h5>Old</h5>
        {followingposts ? followingposts.length !== 0?(
          followingposts.filter((e)=>new Date(e.postedon).getDate()  !== new Date(Date.now()).getDate()).map((e) => {
            return (
              
                <div>
                  <Card caption={e.caption} username={e.ownerusername} likes={e.likes.length} comments={e.comments.length} likearray={e.likes} id={e._id} date={new Date(e.postedon).toDateString()}  isliked={e.likes.some((e)=>e === user._id)}/>
                </div>
             
            );
          })
        ) :<>No Posts</>:null}
      </div>
    </HomeWrapper>
  );
}

export default Home;
