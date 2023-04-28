import "./App.css";
import {  Route,  Routes } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";
import { useDispatch, useSelector } from "react-redux";
import Login from "./Pages/Login/Login";
import Navbar from "./Commponents/Navbar/Navbar";
import { useEffect, useState } from "react";
import { loaduser } from "./Actions/user";
import BottomNav from "./Commponents/Bottomnav/BottomNav";
import Allusers from "./Pages/Allusers/Allusers";
import Loading from "./Commponents/Loader/Loading";
import NewPost from "./Pages/Post/NewPost";
import UserPage from "./Pages/UserPage/UserPage";

function App() {
  const [loader,setLoader] = useState(true)
  const { isauthed,loading } = useSelector((state) => state.mainreducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loaduser());
   if(!loading){
    setLoader(false)
   }
    // eslint-disable-next-line 
  }, []);



  // const router = createBrowserRouter([
  //   {
  //     path: "*",
  //     element: isauthed ? <Home /> : <Login />,
  //   },
  //   {
  //     path: "/",
  //     element: isauthed ? <Home /> : <Login />,
  //   },
  //   {
  //     path: "/about",
  //     element: isauthed ? <About /> : <Login />,
  //   },
  // ]);

 
  return (
    <>
    {loader?<Loading/>:null}
      {isauthed ? <Navbar /> : null}
      <Routes>
        <Route path="*" element={isauthed ? <Home /> : <Login />}/>
        <Route path="/" element={isauthed ? <Home /> : <Login />}/>
        <Route path="/newpost" element={isauthed ? <NewPost /> : <Login />}/>
        <Route path="/about" element={isauthed ? <About /> : <Login />}/>
        <Route path="/allusers" element={isauthed ? <Allusers /> : <Login />}/>
        <Route path="/user/:userid" element={<UserPage />}/>
      </Routes>
    
      {isauthed ? <BottomNav /> : null}
    </>
  );
}

export default App;
