import React, { useState } from "react";

import "./card.css";
import { useDispatch } from "react-redux";
import { deletepost, likepost } from "../../Actions/post";

import { BiComment } from "react-icons/bi";
import { FiSend,FiMoreVertical } from "react-icons/fi";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";

// import { rootuserposts } from '../../Actions/user';
import TextareaAutosize from "react-textarea-autosize";
// import ScrollDialog from "../Dailogs/Likes";
import { useNavigate } from "react-router-dom";

const Card = ({
  image,
  likes,
  comments,
  caption,
  username,
  userImage,
  postid,
  likearray,
  date,
  id,
  isliked,
  isaccount = false,
  isdelete = false,
  user_id,
}) => {
  const [like, setlike] = useState(isliked);
  const [likecount, setlikecount] = useState(likes);
  // const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const likfun = async () => {
    dispatch(likepost(id));

    setlike(!like);
    setlikecount(like ? (prev) => prev - 1 : (prev) => prev + 1);
  };

  return (
    <div className="instagram-card " key={id}>
      <div className="user-inf df ac jsb">
        <div className="df ac">
          <img
            src={
              userImage
                ? userImage
                : "https://images.squarespace-cdn.com/content/v1/5d91b73a83856c46984c2857/1643318392157-X8TE36EZ6VAH7036AZ1W/Creative+captions+for+Facebook+profile+pictures.jpg?format=1500w"
            }
            alt="User Profile"
            className="user-image"
          />
          <h4 className=" cp" onClick={() => navigate(`/user/${user_id}`)}>
            {username}
          </h4>
        </div>
        {isdelete && 
          <div className="morediv df ac jc"> 
            <div onClick={()=>setDrop(!drop)} className="p10 cp">
<FiMoreVertical size={22}/>
            </div>
           {drop&& <div className="dropmenu dfc ac">
            <button
          
          onClick={() => dispatch(deletepost(id))}
        >
          Delete
        </button> 
            <button
          
          onClick={() => dispatch(deletepost(id))}
        >
          Delete
        </button> 
            <button
          
          onClick={() => dispatch(deletepost(id))}
        >
          Delete
        </button> 
            </div>}
          

          </div>
       
        }
      </div>

      <div className="dfc">
        <div>
          {image && (
            <img
              src={image}
              className="post-image"
              alt="post "
              onDoubleClick={likfun}
            />
          )}
        </div>
        <div className="post-stats df ac">
          {/* <b onClick={()=>setOpen(!open)}>Likes</b>  */}
          <span onClick={() => likfun()} className="likes cp">
            {" "}
            {like ? (
              <FcLike size={25} style={{ color: "#fa5794" }} />
            ) : (
              <FcLikePlaceholder size={25} />
            )}
          </span>
          <span className="comments cp" onClick={() => navigate(`/post/${id}`)}>
            <BiComment size={25} />
          </span>
          <span className="comments">
            <FiSend size={25} />
          </span>
        </div>
<div className="likediv cp" onClick={()=>navigate(`/postlikesby/${id}`)}>
  {likecount} likes
</div>
        <div className="df " style={{ padding: "0px 10px" }}>
          <b>{username}</b>{" "}
          <TextareaAutosize
            name="postinfo"
            className="caption"
            value={caption}
            style={{ padding: "5px 10px" }}
          />
        </div>
      </div>

      <div className="card-info">
        <p style={{ padding: "5px 10px" }}>
          {new Date(date).getDate() === new Date(Date.now()).getDate()
            ? "Today"
            : new Date(date).getDate() === new Date(Date.now()).getDate() - 1
            ? "Yesterday"
            : date}
        </p>
      </div>
     
      {/* <ScrollDialog open={open} setOpen={setOpen} likesby={likearray} /> */}
    </div>
  );
};

export default Card;
