import React, { useState } from 'react';

import './card.css';
import { useDispatch } from 'react-redux';
import { likepost } from '../../Actions/post';
import {AiOutlineLike,AiFillLike} from 'react-icons/ai'

const Card = ({ image, likes, comments, caption, username, userImage,postid,likearray,date,id,isliked }) => {

  const [like,setlike] = useState(isliked)
  const [likecount,setlikecount] = useState(likes)

 const dispatch = useDispatch()
  return (
    <div className="instagram-card" key={id}>
      {/* {image?<img src={image} className="post-image" alt='post ' />:null} */}
      
      <p>{caption}</p>
      <div className="card-info">
        <div className="user-info">
          <img src={userImage?userImage:"https://images.squarespace-cdn.com/content/v1/5d91b73a83856c46984c2857/1643318392157-X8TE36EZ6VAH7036AZ1W/Creative+captions+for+Facebook+profile+pictures.jpg?format=1500w"} alt="User Profile" className="user-image" />
          <h3 className="username">{username}</h3><br />
       
        </div>
        <div className="post-stats">
          <span className= "likes" onClick={()=>{ return setlike(!like),setlikecount(like?prev=>prev -1:prev=> prev +1), dispatch(likepost(id))}}>{likecount} {like?<AiFillLike size={25}/>:<AiOutlineLike size={25}/>}</span>
          <span className="comments">{comments} Comments</span>
          
        </div>
        <p>{new Date(date).getDate() === new Date(Date.now()).getDate()?"Today":new Date(date).getDate() === new Date(Date.now()).getDate() - 1 ?"Yesterday":date}</p>
        
        
      </div>
    </div>
  );
};



export default Card;
