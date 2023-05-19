import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from './Card'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import {AiOutlineSend} from 'react-icons/ai';
import { commentonpost } from '../../Actions/post'
import Loading from '../Loader/Loading'
import { BiArrowBack } from 'react-icons/bi'
import { Global_Url} from '../../url'



function ViewPost() {
const dispacth = useDispatch()
const navigate = useNavigate()
const {postid} = useParams()
const [thipost,setThispost] = useState(undefined)
const { user,loading } = useSelector((s) => s.mainreducer);
const [comment,setComment] = useState("")
const getpost = async () => {
   dispacth({
    type:"loadingtrue"
   })
    const post = await axios.get(
      `${Global_Url}/user/onepost/${postid}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    console.log(post.data.post);
    setThispost(post.data.post)
    dispacth({
      type:"loadingfalse"
     })
   

  }

  const sendcomment = async()=>{
   await dispacth(commentonpost(postid,comment))
   getpost()
   setComment("")
  }

  useEffect(()=>{
getpost()
// eslint-disable-next-line
  },[])

  return (
    <Fwrapper>

        <div className="scont">

        
        <div className=' df ac ' style={{width:"100%",gap:"15px",padding:"15px"}}>
            <BiArrowBack size={20} onClick={()=>navigate(-1)} style={{cursor:"pointer"}}/>
            <b>Back</b>
        </div>
        {loading&&<Loading/>}
        {thipost && <div className="post">

      <Card caption={thipost.caption} likes={thipost.likes.length} likearray={thipost.likes} comments={thipost.comments.length} date={thipost.postedon} isliked={thipost.likes.some((e)=>e._id === user._id)} id={thipost._id} image={thipost.imageUrl} userImage={thipost.ownerid.profileUrl}/>
      <div className="postcomments dfc">
        <div className='commentinput df ac'>
          <input type="text" placeholder='Comment Here' value={comment} onChange={(e)=>setComment(e.target.value)}/>
        <AiOutlineSend onClick={sendcomment} className="cp" size={22}/>
          
         
        </div>
        <div className='dfc commentsarray' style={{gap:"15px",padding:"10px"}}>

       
        {thipost.comments.length>0?thipost.comments.map((e,i)=>{
            return(
                <div className='comment df ac' key={i}>
               <div><img src={e.userid.profileUrl?e.userid.profileUrl:"https://images.squarespace-cdn.com/content/v1/5d91b73a83856c46984c2857/1643318392157-X8TE36EZ6VAH7036AZ1W/Creative+captions+for+Facebook+profile+pictures.jpg?format=1500w"} alt="" style={{width:"30px",height:"30px",borderRadius:"100%"}}/></div>
               <div >
<h5 onClick={()=>navigate(`/user/${e.userid._id}`)}>{e.username}</h5>
<p>{e.comment }</p>
               </div>
                </div>
            )
               
            

        }
          
        ):<>No comments yet</>}
      </div>
 </div>
     </div>}
    
     

     </div>
    </Fwrapper>
  )
}

export default ViewPost

const Fwrapper = styled.div`
width: 100vw;
/* min-height: calc(100vh - 140px); */
margin-bottom: 80px;
display: flex;
justify-content: center;
.scont{
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    

}
.dfc{
    display: flex;
    flex-direction: column;
}
.ac{
    align-items: center;
}
.df{
    display: flex;
}
.cp{
    cursor: pointer;
}
.detail{
    width: 100%;
}

.post{
    width: 100%;
}
.postcomments{
    /* background-color: antiquewhite; */
    padding: 10px;
    gap: 15px;
}

.commentinput{
  width: 100%;
  background-color: #d8d8d8;
  padding: 7px;
  border-radius: 10px;

  input{
    width: 100%;
    background-color: transparent;
    border: none;
    outline: none;
  }
  button{
    width: 100%;
  }
}

.comment{
/* background-color: aliceblue; */
padding: 5px;
gap: 5px;
/* border-radius: 7px; */
border-bottom: 0.02px solid gray;

h5{
  text-decoration: underline;
  cursor: pointer;
  margin-bottom: 2px;
 
}
}
`
