import "./App.css";
import {  Route,  Routes } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";
import { useDispatch, useSelector } from "react-redux";
import Login from "./Pages/Login/Login";
import Navbar from "./Commponents/Navbar/Navbar";
import { useEffect } from "react";
import { loaduser } from "./Actions/user";
import BottomNav from "./Commponents/Bottomnav/BottomNav";
import Allusers from "./Pages/Allusers/Allusers";
// import Loading from "./Commponents/Loader/Loading";
import NewPost from "./Pages/Post/NewPost";
import UserPage from "./Pages/UserPage/UserPage";
import LandingPage from "./Commponents/Loader/LandingPage";
import ViewPost from "./Commponents/Postcard/ViewPost";
import Followers from "./Commponents/Edit/Followers";
import Followings from "./Commponents/Edit/Following";
import GlobalStyle from "./Globalcss";


function App() {

  const { isauthed,loading } = useSelector((state) => state.mainreducer);

  const dispatch = useDispatch();
  useEffect( () => {
     dispatch(loaduser());
   if(!loading){

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
<GlobalStyle/>
    {!isauthed && loading?<LandingPage/>:null}
    {isauthed ? <Navbar /> : null}
      <Routes>
        <Route path="*" element={isauthed ? <Home /> : <Login />}/>
        <Route path="/" element={isauthed ? <Home /> : <Login />}/>
        <Route path="/newpost" element={isauthed ? <NewPost /> : <Login />}/>
        <Route path="/about" element={isauthed ? <About /> : <Login />}/>
        <Route path="/allusers" element={isauthed ? <Allusers /> : <Login />}/>
        <Route path="/user/:userid" element={isauthed ? <UserPage /> : <Login />}/>
        <Route path="/post/:postid" element={isauthed ? <ViewPost /> : <Login />}/>
        <Route path="/followers/:followersof" element={isauthed ? <Followers /> : <Login />}/>
        <Route path="/followings/:followingsof" element={isauthed ? <Followings /> : <Login />}/>
      </Routes>
    
      {isauthed ? <BottomNav /> : null}
    </>
  );
}

export default App;
