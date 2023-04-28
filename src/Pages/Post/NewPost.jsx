import React, { useState } from 'react'
import PostCreater from './newpostcss'
import { useDispatch, useSelector } from 'react-redux'
import { createnewpost } from '../../Actions/post'

function NewPost() {
    const {user} = useSelector(s=>s.mainreducer)
    const dispatch = useDispatch()
    const[caption , setCaption] = useState("")
  return (
    <PostCreater>
        <div className='subcontainer'>
            <div className='newpostcard'>
                <div>
                    
                   <h4>Hello <b className='username'> {user.name.toUpperCase()} </b></h4>
                </div>
                <div>
                    <textarea type="text" className='input' placeholder='Share Your Thoghts Here' value={caption}  onChange={(e)=>setCaption(e.target.value)}/>
                </div>
                <div className='btns'>
                    <button className='btn' onClick={()=>{return dispatch(createnewpost(caption)),setCaption("")}} disabled={caption===""?true:false}>Post</button>
                </div>
            </div>
            

        </div>
      
    </PostCreater>
  )
}

export default NewPost
