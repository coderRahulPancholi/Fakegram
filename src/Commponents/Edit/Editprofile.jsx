import React, { useState } from 'react'
import Ewrapper from './editprofilecss'
import {GrClose} from 'react-icons/gr'
import { useDispatch, useSelector } from 'react-redux'
import { loaduser, updateUserPhoto, updateprofile } from '../../Actions/user'
import TextareaAutosize from 'react-textarea-autosize';
import { useNavigate } from 'react-router-dom'
// import Loading from '../Loader/Loading'

function Editprofile() {

    const {user,loading} = useSelector(s=>s.mainreducer)
    const[editedbio,setEditedbio]=useState(user.bio)
    const[editedbcity,setEditedcity]=useState(user.city)
    const[editednum,setEditednum]=useState(user.num)
    const[editedstate,setEditedstate]=useState(user.state)
    const[editedname,setEditedname]=useState(user.name)
    const[editeddob,setEditeddob]=useState(user.dob)
    const[file,setFile]=useState("")
    const [imgpreview,setImgpreview] = useState(user.profileUrl)
    
    const states = [ "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry"]

const navigate = useNavigate()

const dispatch = useDispatch()

    const updatedata = async()=>{
        console.log(file)
        await dispatch(updateUserPhoto(file))
       await dispatch(updateprofile(editedname,editedbio,editednum,editeddob,editedbcity,editedstate))
       await dispatch(loaduser())
       navigate("/about")
    }

    
    const changehandle =async(e)=>{

const url = URL.createObjectURL(e.target.files[0]);
// const formData = new FormData();
// formData.append('file', file);
setFile(e.target.files[0])
setImgpreview(url)

 }
   
  return (
    <Ewrapper>
      <div className='sub  '>
        <div className='uppersub'>
            <div className='df ac' style={{gap:"15px"}}>
                <GrClose size={20} onClick={()=>navigate("/about")} />
                <h4>Edit Profile</h4>
            </div>
            <button onClick={updatedata}>{loading?"Updating":"Update"}</button>
        </div>
<form action="">
    <div className='dfc ac gap10 '>
        <img src={imgpreview} alt="" style={{width:"70px",height:"70px",borderRadius:"100%"}} />
        <label htmlFor="file" className='costomfileinputLabal'>Change Photo</label>
        <input type="file" name='file' id='file' onChange={changehandle} className='costomfileinput' accept="image/png, image/jpeg,image/jpg,image/JPG image/*;capture=camera"/>
    </div>
    <div className='bio '>
        <label htmlFor="name">Name</label>
        <input type="text" name='name' value={editedname} onChange={(e)=>setEditedname(e.target.value)}  />
    </div>
    <div className='bio '>
        <label htmlFor="bio">Bio</label>
        <TextareaAutosize type="text" name='bio' value={editedbio} onChange={(e)=>setEditedbio(e.target.value)} rows="1"  />
    </div>
    <div className='bio df'>
        <div>

        <label htmlFor="number">Mobile Number</label>
        <input type="text" name='number' value={editednum} onChange={(e)=>setEditednum(e.target.value)} maxLength={10} />
        </div>
        <div> 

        <label htmlFor="dob">DOB</label>
        <input type="date" name='dob' value={editeddob} onChange={(e)=>setEditeddob(e.target.value)}/>
        </div>

    </div>
    <div className='bio df'>
        
        <div> 

        <label htmlFor="state">State</label>
        <select name="state" id="state" value={editedstate} onChange={(e)=>setEditedstate(e.target.value)}>
            
            {states.map((e)=>{
                return(

                    <option value={e} selected={editedstate===e&&true}>{e}</option>
                )
            })}
 
         </select>
        {/* <input type="text" name='state' value={editedstate} onChange={(e)=>setEditedstate(e.target.value)} /> */}
        </div>
        <div>

        <label htmlFor="city">City</label>
        <input type="text" name='city' value={editedbcity} onChange={(e)=>setEditedcity(e.target.value)} />
       
        </div>

    </div>
   
</form>
      </div>
      
    </Ewrapper>
  )
}

export default Editprofile
