import React from 'react'
import styled from 'styled-components'

function DeletePopUp() {
  return (
    <Popup className='df ac jc'>
        <div className='menus dfc ac jc gap15'>
          <div>
            Are you sure to delete
          </div>
            <div className='df ac jc gap10 w100'>
                <button >Delete</button>
                <button >Cancel</button>
                
            </div>
        </div>

    </Popup>
  
  )
}

export default DeletePopUp

const Popup = styled.div`
position: fixed;
bottom: 0;
width: 100vw;
height: auto;
z-index: 99999;


.menus{
    width: 100%;
    min-height: 300px;
    max-width: 600px;
    background-color: #ffffff;
  /* border-radius: 10px; */
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;

    ul{
        padding: 20px;
        width: 100%;
     
        li{
            width: 100%;
            padding: 10px;
          
       
        }
    }
}
    

`
