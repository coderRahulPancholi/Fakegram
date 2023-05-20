import React from 'react'
import "./navbar.css"
import { useDispatch } from 'react-redux'
// import { CgProfile } from 'react-icons/cg';
import { logout } from '../../Actions/user';
import { useNavigate } from 'react-router-dom';
import {AiOutlineLogout} from 'react-icons/ai'

function Navbar() {
    // const {user} = useSelector(state=>state.mainreducer)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const logoutuser=()=>{
       dispatch(logout())


    }
  return (
    <header className='header'>
      <div className='cont'>
        <div className='sub sub1 df ac'>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACK0lEQVR4nO2YPWgUURSFn/EPURtRCNhY2AhaiSBB974xKCKWBkGwsEwrSOzevYuCQUSsQmxsJEUEsVF7wUJMaeUPQSSCTbARTGGOTLBwbza7Zva+N29xDixsMRzON/vuPbPjXKNGjf4fYSLsAPE0PH+FF5h/SFbg5SXO3DoYB4DkTpTgXoPwO7gwEgNgKQmAF6AILXuAVOG9AC0p4gMUYczEl3iy05tXcS7ss/DuCWDoO65m4KOVdyIAnlLec1beqX6BJ8r7upV3KoBFNcCnrbyjA4DCflVmvzA2vdfCOzoAXBgB8Q1dYjZpBwQAyZtqHcCPagcAhW2VC4x4sn6A8mhUb+ATtQOsXUvyevN3X1Zw/sHOLAD6eh2f3Q6Sx8rzrV3aFFvIS1sN8IxN0mQA/EIN8DWbpKkASL51AoSjNklTzACFQ2qAf5Tr1y5tfIBL6vy/sksaGQAn7+2C56cK4L5t2kGK7Ozd3fAy/+ctw791QNG+kgUAJua3gvjZ5kssHM4DwPNMhQZegsOW2gFAcrPC888XFOFC9PD9AOD58tqfkc5rFkFh1OUibABQvoQC8U/Vqt/Rah9zOQldANBqH4HnZXWmy+0z7nIT9Pk9dfsAvHxQ+3wVxFddjsK67cEL64eSp1yuQv+N8tDlLPTe5c+jP4wNqo3D8wIo7HG5C90B8tr1vdRlYJfLNeqGRfD8/q9jUxYXuWESKFwEySeQfC6/152nUaNGbvj1G1xCJ0qSPG2FAAAAAElFTkSuQmCC" alt=""  style={{height:'80%'}}/>
            <h2 className='appname'>FakeGram</h2>

        </div>
        <div className='sub sub2'>
            <div className=' df ac' onClick={()=>navigate("/about")}>
                {/* <div className='df ac'>
                <CgProfile size={25}/>
                </div>
                <div className='df ac'>
                <p>{user.name.toUpperCase()} </p>

                </div> */}

            
            

            </div>
           
              <div onClick={logoutuser} className='dfc ac cp'>
                <AiOutlineLogout size={24}/>
                <span>Logout</span>

              </div>
           
         
            
           

        </div>

      </div>
      
    </header>
  )
}

export default Navbar
