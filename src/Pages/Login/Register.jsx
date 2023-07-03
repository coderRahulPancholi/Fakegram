import React, { useEffect, useState } from "react";
// import styled from "styled-components";
import "./logincss.js";
import { useSelector } from "react-redux";
// import { loaduser } from "../../Actions/user";
import LoginWrapper from "./logincss.js";
import Loading from "../../Commponents/Loader/Loading.jsx";
import { Link, useNavigate } from "react-router-dom";
import { Global_Url } from "../../url.js";

export default function Register() {
  const [name, setName] = useState("");
  // const [wait,setwait] = useState(false)
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  // const [loading] = useState(false)
  const [enterOtp, setEnterOtp] = useState(false);
  // const [verified,setVerified] = useState(false)
  const [mailcheck, setMailCheck] = useState(false);
  const [usernamepass, setUsernamepass] = useState(false);
  const [mailpass, setMailpass] = useState(false);
  const [resmes, setResmes] = useState("");

  const { loginloading } = useSelector((state) => state.mainreducer);

  // const dispatch = useDispatch()
  const navigate = useNavigate();
  // // const singup=(e)=>{
  // //   e.preventDefault()
  // //   dispatch(register(name,username,email,password))

  // }
  const verify = async (e) => {
    e.preventDefault();
    setMailCheck(true);

    const udata = await fetch(`${Global_Url}/sendotp`, {
      method: "POST",
      credentials: "include",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        username,
        name,
        password,
      }),
    });
    const res = await udata.json();
    setMailCheck(false);
    console.log(res);
    setResmes(res.messeage);
    if (res.sucess) {
      setEnterOtp(true);
    }
  };
  const checkusername = async () => {
    setMailCheck(true);
    const udata = await fetch(`${Global_Url}/checkusername`, {
      method: "POST",
      credentials: "include",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
      }),
    });
    const res = await udata.json();
    setMailCheck(false);
    setUsernamepass(res.sucess);
  };
  const emailcheck = async () => {
    setMailCheck(true);
    const udata = await fetch(`${Global_Url}/checkemail`, {
      method: "POST",
      credentials: "include",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });
    const res = await udata.json();
    setMailCheck(false);
    setMailpass(res.sucess);
  };

  const verifyOtp = async (e) => {
    e.preventDefault();

    const udata = await fetch(`${Global_Url}/verifymail`, {
      method: "POST",
      credentials: "include",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        otp,
      }),
    });
    const res = await udata.json();
    console.log(udata);
    setResmes(res.messeage);
    alert(res.messeage);
    if(udata.status === 408){
     alert("Time Out")
     navigate("/");
    }
    if (res.sucess) {
      navigate("/");
    }
  };
  const resendOtp = async (e) => {
    e.preventDefault();

    const udata = await fetch(`${Global_Url}/resendotp`, {
      method: "POST",
      credentials: "include",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });
    const res = await udata.json();
    console.log(res);
    setResmes(res.messeage);
  };

  useEffect(()=>{
if(email.length<5){
  setMailpass(false)
}
  },[email])

  return (
    <LoginWrapper className="df ac jc">
      <div className="dfc ac jc gap15 box">
        <div className="dfc ac">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACK0lEQVR4nO2YPWgUURSFn/EPURtRCNhY2AhaiSBB974xKCKWBkGwsEwrSOzevYuCQUSsQmxsJEUEsVF7wUJMaeUPQSSCTbARTGGOTLBwbza7Zva+N29xDixsMRzON/vuPbPjXKNGjf4fYSLsAPE0PH+FF5h/SFbg5SXO3DoYB4DkTpTgXoPwO7gwEgNgKQmAF6AILXuAVOG9AC0p4gMUYczEl3iy05tXcS7ss/DuCWDoO65m4KOVdyIAnlLec1beqX6BJ8r7upV3KoBFNcCnrbyjA4DCflVmvzA2vdfCOzoAXBgB8Q1dYjZpBwQAyZtqHcCPagcAhW2VC4x4sn6A8mhUb+ATtQOsXUvyevN3X1Zw/sHOLAD6eh2f3Q6Sx8rzrV3aFFvIS1sN8IxN0mQA/EIN8DWbpKkASL51AoSjNklTzACFQ2qAf5Tr1y5tfIBL6vy/sksaGQAn7+2C56cK4L5t2kGK7Ozd3fAy/+ctw791QNG+kgUAJua3gvjZ5kssHM4DwPNMhQZegsOW2gFAcrPC888XFOFC9PD9AOD58tqfkc5rFkFh1OUibABQvoQC8U/Vqt/Rah9zOQldANBqH4HnZXWmy+0z7nIT9Pk9dfsAvHxQ+3wVxFddjsK67cEL64eSp1yuQv+N8tDlLPTe5c+jP4wNqo3D8wIo7HG5C90B8tr1vdRlYJfLNeqGRfD8/q9jUxYXuWESKFwEySeQfC6/152nUaNGbvj1G1xCJ0qSPG2FAAAAAElFTkSuQmCC"
            alt=""
          />
          <h2>FakeGram</h2>
        </div>

        <div className="dfc ac inputs gap10">
          <h2 className="hding">Hi There.. </h2>

          {!enterOtp ? (
            <form action="" onSubmit={verify} className="dfc ac gap10">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                onKeyUp={
                  email.length > 5 ? emailcheck :null
                }
                className={
                  email.length > 5 && email.includes("@")?mailpass
                    ?
                       "passed"
                      : "failed"
                   :null
                }
                
              />

              <input
                type="text"
                placeholder="UserName"
                value={username.toLowerCase()}
                onChange={(e) => setUsername(e.target.value.toLowerCase())}
                required
                onKeyUp={username.length > 3 ? checkusername : null}
                className={
                  username.length > 3
                    ? usernamepass
                      ? "passed"
                      : "failed"
                    : null
                }
                
              />

              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
               
              />

              <input
                type="password"
                placeholder="Set Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                
              />

              <h4>{resmes}</h4>

              {!enterOtp ? (
                loginloading ? (
                  <Loading />
                ) : (
                  <button type="submit" className="cp btn lbtn w100">
                    {!mailcheck ? "Next" : "Wait.."}
                  </button>
                )
              ) : null}
            </form>
          ) : (
            <form action="">
              <p>{resmes}</p>
              <input
                type="number"
                placeholder="Enter Otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                maxLength={"6"}

              />
             
              <button onClick={resendOtp}>Resend Otp</button>
              <button onClick={verifyOtp} className="cp btn lbtn w100">
                Verify
              </button>
            </form>
          )}
          <h5>OR</h5>
          <p className="regp">
            Already Have An Account?
            <Link to={"/"}>
              {" "}
              <b>Login</b>
            </Link>
          </p>
        </div>
      </div>
    </LoginWrapper>
  );
}
