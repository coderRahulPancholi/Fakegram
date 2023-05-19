import React, {  useEffect, useState } from "react";
// import styled from "styled-components";
import "./login.css"
import { useDispatch } from "react-redux";
import { loaduser, loginuser, register } from "../../Actions/user";




export default function Login() {
    const [name,setName] = useState("")
    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [loading] = useState(false)
 
  const [value, setValue] = useState("login");

  const dispatch = useDispatch()
  const singup=(e)=>{
    e.preventDefault()
    dispatch(register(name,username,email,password))
    
  }
  const verify=(e)=>{
    e.preventDefault()
    dispatch(loginuser(email,password))
  }

  useEffect(() => {
    dispatch(loaduser())
    // eslint-disable-next-line
  }, []);

  return (
    <div className="wrapper">
      <div className="brand">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACK0lEQVR4nO2YPWgUURSFn/EPURtRCNhY2AhaiSBB974xKCKWBkGwsEwrSOzevYuCQUSsQmxsJEUEsVF7wUJMaeUPQSSCTbARTGGOTLBwbza7Zva+N29xDixsMRzON/vuPbPjXKNGjf4fYSLsAPE0PH+FF5h/SFbg5SXO3DoYB4DkTpTgXoPwO7gwEgNgKQmAF6AILXuAVOG9AC0p4gMUYczEl3iy05tXcS7ss/DuCWDoO65m4KOVdyIAnlLec1beqX6BJ8r7upV3KoBFNcCnrbyjA4DCflVmvzA2vdfCOzoAXBgB8Q1dYjZpBwQAyZtqHcCPagcAhW2VC4x4sn6A8mhUb+ATtQOsXUvyevN3X1Zw/sHOLAD6eh2f3Q6Sx8rzrV3aFFvIS1sN8IxN0mQA/EIN8DWbpKkASL51AoSjNklTzACFQ2qAf5Tr1y5tfIBL6vy/sksaGQAn7+2C56cK4L5t2kGK7Ozd3fAy/+ctw791QNG+kgUAJua3gvjZ5kssHM4DwPNMhQZegsOW2gFAcrPC888XFOFC9PD9AOD58tqfkc5rFkFh1OUibABQvoQC8U/Vqt/Rah9zOQldANBqH4HnZXWmy+0z7nIT9Pk9dfsAvHxQ+3wVxFddjsK67cEL64eSp1yuQv+N8tDlLPTe5c+jP4wNqo3D8wIo7HG5C90B8tr1vdRlYJfLNeqGRfD8/q9jUxYXuWESKFwEySeQfC6/152nUaNGbvj1G1xCJ0qSPG2FAAAAAElFTkSuQmCC" alt="Fakegram" />
        <h4>Fakegram</h4>
      </div>
      <div className="containerl">
        <div className="buttons">
          <button
            className={value === "login" ? "active" : ""}
            onClick={() => setValue("login")}
          >
            Login
          </button>
          <button
            className={value === "singup" ? "active" : ""}
            onClick={() => setValue("singup")}
          >
            Register
          </button>
          <span className={value === "login" ? "span log" : "span sing"}></span>
        </div>
        <div className="inputs">
          <div
            className={
              value === "singup" ? "logininputs translate" : "logininputs"
            }
          >
            <form onSubmit={verify} className="form">
              <h3>Welcome Back</h3>
              <div>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <span>Email</span>
              </div>
              <div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span>Password</span>
              </div>

              <button type="submit" className="btn btn-primary">
                {loading ? "Wait.." : "Login"}
              </button>
              <p>
                Not a user{" "}
                <span
                  style={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",  
                  }}
                  onClick={() => setValue("singup")}
                >
                  Register
                </span>
              </p>
            </form>
          </div>
          <div
            className={
              value === "login"
                ? "singupinputs translatesingup"
                : "singupinputs"
            }
          >
            <form onSubmit={singup} className="form">
              <h3 style={{ textAlign: "center" }}>
                Explore The New Notes World
              </h3>
              <div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <span>Name</span>
              </div>
              <div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <span>Username</span>
              </div>
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <span>Email</span>
              </div>
              <div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span>Password</span>
              </div>

              <button type="submit" className="btn btn-primary">
                {loading ? "Wait...." : "Sign Up"}
              </button>
              <p>
                Already a user{" "}
                <span
                  style={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  onClick={() => setValue("login")}
                >
                  Login
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
// const Wrapper = styled.div`
//   width: 100vw;
//   height: calc(100vh - 70px);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: aliceblue;

//   .container {
//     width: 90%;
//     padding: 30px;
//     max-width: 600px;
//     background-color: white;
//     box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

//     height: 70%;
//     /* min-height: 300px; */
//     max-height: 700px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     border-radius: 10px;
//   }

//   .buttons {
//     width: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: space-around;
//     /* background-color: #c9c5c5; */
//     background-color: #ebebed;
//     position: relative;
//     /* border: 0.5px solid black; */
//     border-radius: 7px;

//     .span {
//       position: absolute;
//       left: 0%;
//       width: 50%;
//       height: 100%;
//       background-color: #1b70fa;
//       transition: 0.5s;

//       border-radius: 7px;
//     }
//     .sing {
//       transform: translateX(100%);
//       transition: 0.5s;
//       background-color: #5d39e3;
//     }

//     button {
//       border: none;
//       background-color: transparent;
//       font-size: 17px;
//       font-weight: bold;
//       opacity: 40%;

//       padding: 7px;
//       width: 50%;
//       height: 100%;
//       z-index: 9;
//       transition: 0.5s;
//       border-radius: 7px;
//       transition: 0.5s;
//     }
//     .active {
//       background-color: transparent;
//       opacity: 100%;

//       color: white;
//       transition: 0.5s;
//     }
//   }

//   .form {
//     width: 100%;
//     height: 100%;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     gap: 25px;

//     input {
//       width: 100%;
//       max-width: 300px;
//       padding: 10px;
//       border: none;
//       border-radius: 5px;
//       outline: none;
//       background-color: #ebebed;

//       /* border: 1px solid #1b70fa ;/ */
//     }
//   }

//   .inputs {
//     width: 100%;
//     height: 100%;
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     justify-content: center;
//     overflow: hidden;

//     .logininputs {
//       min-width: 100%;
//       height: 100%;
//       transform: translateX(50%);
//       transition: 0.5s;
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//       justify-content: space-around;

//       div {
//         width: 90%;
//         max-width: 300px;

//         display: flex;
//         justify-content: center;
//         align-items: center;
//         position: relative;

//         span {
//           position: absolute;
//           left: 0;
//           padding: 10px;
//           pointer-events: none;
//           transition: 0.5s;
//           color: #949292;
//         }

//         input {
//           &:focus,
//           &:valid {
//             border: 1px solid #1b70fa;
//           }

//           &:focus ~ span,
//           &:valid ~ span {
//             transform: translateY(-25px);
//             left: 10px;
//             padding: 1px 10px;
//             font-size: 13px;
//             transition: 0.5s;
//             border-radius: 5px;
//             background-color: #ebebed;
//             color: #1b70fa;
//           }
//         }
//       }
//     }
//     .singupinputs {
//       min-width: 100%;
//       height: 100%;
//       transform: translateX(-50%);
//       transition: 0.5s;
//       /* display: none; */
//       .form {
//         width: 100%;
//         height: 100%;
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         justify-content: center;
//         gap: 20px;

//         div {
//           width: 90%;
//           max-width: 300px;

//           display: flex;
//           justify-content: center;
//           align-items: center;
//           position: relative;

//           span {
//             position: absolute;
//             left: 0;
//             padding: 10px;
//             pointer-events: none;
//             transition: 0.5s;
//             color: #949292;
//           }

//           input {
//             &:focus,
//             &:valid {
//               border: 1px solid #1b70fa;
//             }

//             &:focus ~ span,
//             &:valid ~ span {
//               transform: translateY(-25px);
//               left: 10px;
//               padding: 1px 10px;
//               font-size: 13px;
//               transition: 0.5s;
//               border-radius: 5px;
//               background-color: #ebebed;
//               color: #1b70fa;
//             }
//           }
//         }
//       }
//     }
//     .translate {
//       transform: translateX(-100%);
//       transition: 0.5s;
//       /* display: none; */
//     }
//     .translatesingup {
//       /* display: flex; */
//       transform: translateX(100%);
//       transition: 0.5s;
//     }
//   }
// `;
