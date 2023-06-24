import React from 'react'
import Usercard from './usercardcss'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'



function UserCard({ name, username,profileImage ,id,isfollowed,follwers}) {
const {user} = useSelector((s)=>s.mainreducer)
const navigate = useNavigate()

const gotosearch = ()=>{
if(user._id===id){
  navigate("/about")
}else{

  navigate(`/user/${id}`)
} 
}
  
  return (

    <Usercard onClick={gotosearch}>
      
    <div className="instagram-profile-card">
      <div className="profile-info">
        <img src={profileImage?profileImage:"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"} alt="" className="profile-image" />
        <div className="user-info">
          <h3 className="name">{name}</h3>
          <h4 className="username">@ {username}</h4>
        </div>
      </div>
    
    </div>
  




      
    </Usercard>
  )
}

export default UserCard
