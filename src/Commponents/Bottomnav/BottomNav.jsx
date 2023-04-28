import React from 'react'
import BottNavbar from './bnavcss'
import { useNavigate } from 'react-router-dom'
import{AiOutlineHome ,AiOutlineSearch} from 'react-icons/ai'
import{FiUsers } from 'react-icons/fi'
import{CgProfile } from 'react-icons/cg'
import{MdOutlineAddBox } from 'react-icons/md'



function BottomNav() {
  const navigate = useNavigate()
 
  return (
   <BottNavbar>
    <div className="botcontainer">
      <div className={`${window.location.pathname==="/"?"active":"menus"} dfc ac `} onClick={()=>navigate("/")}><span ><AiOutlineHome size={25}/></span> <span  className='icontitle'>Home</span></div>
      <div className={`${window.location.pathname==="/allusers"?"active":"menus"} dfc ac `} onClick={()=>navigate("/allusers")} ><span><AiOutlineSearch size={25}/></span> <span  className='icontitle'>Search</span></div>
      <div className={`${window.location.pathname==="/newpost"?"active":"menus"} dfc ac `} onClick={()=>navigate("/newpost")} ><span><MdOutlineAddBox size={30}/></span> <span  className='icontitle'>Post</span></div>
      <div className={`${window.location.pathname==="/post"?"active":"menus"} dfc ac `}><span><FiUsers size={25}/></span> <span  className='icontitle'>Post</span></div>
      <div className={`${window.location.pathname==="/about"?"active":"menus"} dfc ac `} onClick={()=>navigate("/about")} ><span><CgProfile size={25}/></span> <span  className='icontitle'> Me</span></div>
      
      
        
    </div>



   </BottNavbar>
  )
}

export default BottomNav
