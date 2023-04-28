import React, { useEffect } from 'react'
import Wrapper from './about'
import { useDispatch, useSelector } from 'react-redux'
import { loaduser, rootuserposts } from '../../Actions/user'
// import Card from '../../Commponents/Postcard/Card'
// import { deletepost } from '../../Actions/post'
import Card from '../../Commponents/Postcard/Card'


function About({ name, username, followers, following, posts, profileImage, bio, postsArray }) {
const dispatch = useDispatch()
useEffect(()=>{
  dispatch(rootuserposts())
  dispatch(loaduser())
 
 // eslint-disable-next-line
},[])

  const {user,userposts} = useSelector(state=>state.mainreducer)
  



  return (
    <Wrapper>

<div className="instagram-profile-card">
      <div className="profile-info">
        <img src={profileImage?profileImage:"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"} alt="" className="profile-image" />
        <div className="user-info">
          <h3 className="name">{user.name}</h3>
          <h4 className="username">@ {user.name}</h4>
        </div>
      </div>
      <div className="stats">
        <div className="stat">
          <span className="number">{user.posts.length}</span>
          <span className="label">Posts</span>
        </div>
        <div className="stat">
          <span className="number">{user.followers.length}</span>
          <span className="label">Followers</span>
        </div>
        <div className="stat">
          <span className="number">{user.following.length}</span>
          <span className="label">Following</span>
        </div>
      </div>
      
     
      </div>
  
<div className="postarray ">
{userposts?userposts.map((e)=>{
  return(

<Card caption={e.caption} likes={e.likes.length} isliked={e.likes.some((e)=>e === user._id)} id={e._id} isdelete = {true} key={e._id}/>
  )

}):null}

</div>
 



    </Wrapper>
  )
}

export default About
