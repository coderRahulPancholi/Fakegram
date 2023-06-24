import React, {  useEffect, useState } from "react";
// import styled from "styled-components";
import "./logincss.js"
import { useDispatch, useSelector } from "react-redux";
import { loaduser, loginuser } from "../../Actions/user";
import LoginWrapper from "./logincss.js";
import Loading from "../../Commponents/Loader/Loading.jsx";
import { Link } from "react-router-dom";




export default function Login() {
    // const [name,setName] = useState("")
    const [wait,setwait] = useState(false)
    // const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    // const [loading] = useState(false)
 
  

  const { isauthed,loading ,loginloading} = useSelector((state) => state.mainreducer);

  const dispatch = useDispatch()
  // // const singup=(e)=>{
  // //   e.preventDefault()
  // //   dispatch(register(name,username,email,password))
    
  // }
  const verify=async(e)=>{
    e.preventDefault()

    dispatch(loginuser(email,password))
  }

  useEffect(() => {
    dispatch(loaduser())
    setTimeout(() => {
      setwait(true)

    }, 1000);
    // eslint-disable-next-line
  }, []);

  return (
   <LoginWrapper className="df ac jc">
    <div className="dfc ac jc gap15 box">
      

    
<div className="dfc ac">
  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACK0lEQVR4nO2YPWgUURSFn/EPURtRCNhY2AhaiSBB974xKCKWBkGwsEwrSOzevYuCQUSsQmxsJEUEsVF7wUJMaeUPQSSCTbARTGGOTLBwbza7Zva+N29xDixsMRzON/vuPbPjXKNGjf4fYSLsAPE0PH+FF5h/SFbg5SXO3DoYB4DkTpTgXoPwO7gwEgNgKQmAF6AILXuAVOG9AC0p4gMUYczEl3iy05tXcS7ss/DuCWDoO65m4KOVdyIAnlLec1beqX6BJ8r7upV3KoBFNcCnrbyjA4DCflVmvzA2vdfCOzoAXBgB8Q1dYjZpBwQAyZtqHcCPagcAhW2VC4x4sn6A8mhUb+ATtQOsXUvyevN3X1Zw/sHOLAD6eh2f3Q6Sx8rzrV3aFFvIS1sN8IxN0mQA/EIN8DWbpKkASL51AoSjNklTzACFQ2qAf5Tr1y5tfIBL6vy/sksaGQAn7+2C56cK4L5t2kGK7Ozd3fAy/+ctw791QNG+kgUAJua3gvjZ5kssHM4DwPNMhQZegsOW2gFAcrPC888XFOFC9PD9AOD58tqfkc5rFkFh1OUibABQvoQC8U/Vqt/Rah9zOQldANBqH4HnZXWmy+0z7nIT9Pk9dfsAvHxQ+3wVxFddjsK67cEL64eSp1yuQv+N8tDlLPTe5c+jP4wNqo3D8wIo7HG5C90B8tr1vdRlYJfLNeqGRfD8/q9jUxYXuWESKFwEySeQfC6/152nUaNGbvj1G1xCJ0qSPG2FAAAAAElFTkSuQmCC" alt="" />
<h2>FakeGram</h2>
</div>

{!wait&&<Loading/>}

{wait&&!isauthed&&!loading&&
<div className="dfc ac inputs gap10">
  <h2 className="hding">Hello </h2>
  <form action="" onSubmit={verify} className="dfc ac gap10">
<input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
<input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />


{loginloading?<Loading/>:<button type="submit" className="cp btn lbtn w100">Login</button>}

  </form>
  <h5>OR</h5>
<p className="regp">Don't have a account yet?<Link href=""> <b>Register</b></Link></p>
</div>}


</div>
   </LoginWrapper>
  );
}

