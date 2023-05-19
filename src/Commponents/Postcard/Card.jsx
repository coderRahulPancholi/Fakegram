import React, {  useState } from 'react';

import './card.css';
import { useDispatch } from 'react-redux';
import { deletepost, likepost } from '../../Actions/post';
import {AiOutlineLike,AiFillLike} from 'react-icons/ai'
// import { rootuserposts } from '../../Actions/user';
import TextareaAutosize from 'react-textarea-autosize';
import ScrollDialog from '../Dailogs/Likes';
import { useNavigate } from 'react-router-dom';


const Card = ({ image, likes, comments, caption, username, userImage,postid,likearray,date,id,isliked,isaccount = false,isdelete =false,user_id  }) => {

  const [like,setlike] = useState(isliked)
  const [likecount,setlikecount] = useState(likes)
  const [open, setOpen] = useState(false);
  const navigate = useNavigate()

 const dispatch = useDispatch()

 const likfun = async()=>{
  dispatch(likepost(id))

  setlike(!like)
  setlikecount(like? prev=>prev -1:prev=> prev +1)
 }

 
  return (
    <div className="instagram-card" key={id}>
      {image&&<img src={image} className="post-image" alt='post ' />}
      <TextareaAutosize className='caption' value={caption} style={{padding:"5px 10px"}}/>
      
      <div className="card-info">
        <div className="user-info">
          <img src={userImage?userImage:"https://images.squarespace-cdn.com/content/v1/5d91b73a83856c46984c2857/1643318392157-X8TE36EZ6VAH7036AZ1W/Creative+captions+for+Facebook+profile+pictures.jpg?format=1500w"} alt="User Profile" className="user-image" />
          <h3 className="username cp" onClick={()=>navigate(`/user/${user_id}`)}>{username}</h3><br />
       
        </div>
        <div className="post-stats">
          <span className= "likes" > <b onClick={()=>setOpen(!open)}>Likes</b> {likecount} <span onClick={()=>likfun()} className='likes '> {like?<AiFillLike size={25} style={{color:"#fa5794"}}/>:<AiOutlineLike size={25}/>}</span></span>
          <span className="comments" onClick={()=>navigate(`/post/${id}`)}>{comments} Comments</span>

          {isdelete?
          <button className="comments" onClick={()=>dispatch(deletepost(id))}>Delete</button>:null}
          
        </div>
        <p>{new Date(date).getDate() === new Date(Date.now()).getDate()?"Today":new Date(date).getDate() === new Date(Date.now()).getDate() - 1 ?"Yesterday":date}</p>
        
        
      </div>
      <ScrollDialog open={open} setOpen={setOpen} likesby={likearray} />
    </div>
  );
};



export default Card;
