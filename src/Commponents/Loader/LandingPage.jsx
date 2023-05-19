
import React from 'react'
import styled from 'styled-components'
import Loading from './Loading'

function LandingPage() {
  return (
    <Landing>
        <div className='dfc ac'>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACK0lEQVR4nO2YPWgUURSFn/EPURtRCNhY2AhaiSBB974xKCKWBkGwsEwrSOzevYuCQUSsQmxsJEUEsVF7wUJMaeUPQSSCTbARTGGOTLBwbza7Zva+N29xDixsMRzON/vuPbPjXKNGjf4fYSLsAPE0PH+FF5h/SFbg5SXO3DoYB4DkTpTgXoPwO7gwEgNgKQmAF6AILXuAVOG9AC0p4gMUYczEl3iy05tXcS7ss/DuCWDoO65m4KOVdyIAnlLec1beqX6BJ8r7upV3KoBFNcCnrbyjA4DCflVmvzA2vdfCOzoAXBgB8Q1dYjZpBwQAyZtqHcCPagcAhW2VC4x4sn6A8mhUb+ATtQOsXUvyevN3X1Zw/sHOLAD6eh2f3Q6Sx8rzrV3aFFvIS1sN8IxN0mQA/EIN8DWbpKkASL51AoSjNklTzACFQ2qAf5Tr1y5tfIBL6vy/sksaGQAn7+2C56cK4L5t2kGK7Ozd3fAy/+ctw791QNG+kgUAJua3gvjZ5kssHM4DwPNMhQZegsOW2gFAcrPC888XFOFC9PD9AOD58tqfkc5rFkFh1OUibABQvoQC8U/Vqt/Rah9zOQldANBqH4HnZXWmy+0z7nIT9Pk9dfsAvHxQ+3wVxFddjsK67cEL64eSp1yuQv+N8tDlLPTe5c+jP4wNqo3D8wIo7HG5C90B8tr1vdRlYJfLNeqGRfD8/q9jUxYXuWESKFwEySeQfC6/152nUaNGbvj1G1xCJ0qSPG2FAAAAAElFTkSuQmCC" alt="" width={100} height={100}/>
         <Loading/>
            <b>Loading..</b>
<p>It may take some time </p>
        </div>
      
    </Landing>
  )
}

export default LandingPage

const Landing = styled.div`
position: fixed;
top: 0;
background-color: whitesmoke;
z-index: 999;
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;



`