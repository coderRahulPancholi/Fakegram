import React from 'react'
import Usercard from './usercardcss'
import { useNavigate } from 'react-router-dom'

function UserCard({ name, username, followers, following, posts, profileImage ,id}) {
const navigate = useNavigate()
  
  return (

    <Usercard onClick={()=>navigate(`/user/${id}`)}>
      
    <div className="instagram-profile-card">
      <div className="profile-info">
        <img src={profileImage?profileImage:"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"} alt="" className="profile-image" />
        <div className="user-info">
          <h3 className="name">{name}</h3>
          <h4 className="username">@ {username}</h4>
        </div>
      </div>
      {/* <div className="stats">
        <div className="stat">
          <span className="number">{posts}</span>
          <span className="label">Posts</span>
        </div>
        <div className="stat">
          <span className="number">{followers}</span>
          <span className="label">Followers</span>
        </div>
        <div className="stat">
          <span className="number">{following}</span>
          <span className="label">Following</span>
        </div>
      </div> */}
    </div>
  




      
    </Usercard>
  )
}

export default UserCard
