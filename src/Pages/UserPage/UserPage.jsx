import React, { useEffect, useState } from 'react'
import UserPageWrapper from './userpagecss'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { followuser, searchuser } from '../../Actions/user'

function UserPage() {
const dispatch = useDispatch()
    const {userid} = useParams()
    const {searcheduser,user} = useSelector(s=>s.mainreducer)
    const e = searcheduser

    const is = e?e.followers.some((e)=>e === user._id):false
    const [isfollowed,setIsfollowed] = useState(is)

    useEffect(()=>{
dispatch(searchuser(userid))
        console.log(isfollowed)
// eslint-disable-next-line
    },[])

    const follow = ()=>{
        dispatch(followuser(e._id))
        setIsfollowed(!isfollowed)

    }

  return (
    <UserPageWrapper>
        {e? 
        <div className='subcontainer'>

            <div className="profileinfo dfc ">
                <div className='subp1'>

               
                <div className="pf">
                    <div className="prophoto dfc">
                      
                        <img src={e.image?e.image:"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"} alt="" />
                        <p>{e.name.toUpperCase()}</p>
                       
                    </div>
                    <div className="foll df ac ">
                        <div className="posts dfc ac">
                            <span>{e.posts.length}</span>
                            <span>Posts</span>
                        
                        </div>
                        <div className="folloers dfc ac">
                        <span>{e.followers.length}</span>
                            <span>Followers</span>
                        </div>
                        <div className="following dfc ac">
                        <span>{e.following.length}</span>
                            <span>Following</span>
                        </div>
                    </div>
                </div>
                </div>
                <div className="subp2">
                   <div>
                    <p>
                    {e._id}
                         </p>
                   </div>
                </div>
                <div className="subp3">
                   <div>
                    <button onClick={()=>follow()}>{isfollowed?" UnFollow": "Follow"}</button>
                   </div>
                </div>

            </div>


            <div className="postsinfo">

            </div>

        </div>:<>No user</>
}
      
    </UserPageWrapper>
  )
}

export default UserPage
