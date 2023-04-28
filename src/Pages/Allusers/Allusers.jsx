import React, { useState } from 'react'
import ALLuserWrapper from './allusercss'
import { useDispatch, useSelector } from 'react-redux'
import { loadalluser } from '../../Actions/user'
import UserCard from '../../Commponents/UserCard/UserCard'


function Allusers() {
    const dispacth = useDispatch()
 
//     useEffect(()=>{
     

// // eslint-disable-next-line
//     },[])
    const {allusers,loading} = useSelector(s=>s.mainreducer)


    const [username,setUsername] = useState("")
    

    const search =()=>{
      
        console.log(username)

        if(username !== ""){
            dispacth(loadalluser(username))
            
        }
      
     
       
        console.log(allusers)
        
    }


  return (
    <ALLuserWrapper className='dfc  '>
        <div>
            <input type="text" value={username} onChange={(e)=> {setUsername(e.target.value,search())} } placeholder='Search' />
        </div>
        <div className='subcontainer dfc'>
            {allusers?allusers.map((e)=>{
                return(
                    
                    <UserCard name={e.name.toUpperCase()} followers={e.followers.length} following={e.following.length} posts={e.posts.length} username={e.name} id={e._id} key={e._id}  />
                    
                    

                )
            }):<>Search</>}
{loading?<div>Loading</div>:null}
        </div>
       
        


      
    </ALLuserWrapper>
  )
}

export default Allusers
