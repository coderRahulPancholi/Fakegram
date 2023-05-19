import React, { useEffect, useState } from 'react'
import Ewrapper from './editprofilecss'
import {BiArrowBack} from "react-icons/bi"
import UserCard from '../UserCard/UserCard'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../Loader/Loading'



function Followings() {
  const {followingsof}= useParams()
  const dispacth = useDispatch()
  const [followers,setfollowers] = useState()
  const navigate = useNavigate()
  const {loading} = useSelector((s)=>s.mainreducer)

  const getfollowers = async () => {
    dispacth({
     type:"loadingtrue"
    })
     const getfoll = await axios.get(
       `https://fakegramapi.onrender.com/user/followings/${followingsof}`,
       {
         headers: {
           "Content-Type": "application/json",
         },
         withCredentials: true,
       }
     );
     console.log(getfoll.data.followings);
     setfollowers(getfoll.data.followings)

     
     dispacth({
       type:"loadingfalse"
      })
    
 
   }

   useEffect(()=>{
getfollowers()
    // eslint-disable-next-line
      },[])

  return (
    <Ewrapper>
      
       <div className='sub  '>
        <div className=' df ac ' style={{width:"100%",gap:"15px",padding:"15px"}}>
            <BiArrowBack size={20} onClick={()=>navigate(-1)} style={{cursor:"pointer"}}/>
            <b>Followings</b>
           
        </div>

        <div style={{width:"100%",gap:"5px",padding:"10px"}} className='dfc '>
            {followers &&  followers.map((e)=>{
                return(
                   <UserCard name={e.name} id={e._id} profileImage={e.profileUrl}/>
                )
            })}
{loading && <Loading/>}
        </div>
        </div>

   
      
    </Ewrapper>
  )
}

export default Followings

