import React from 'react'
import styled from 'styled-components'
import Box from '@mui/material/Box';

import { CircularProgress } from '@mui/material';


function Loading() {
  return (
    <Wrapper>
        <Box sx={{ display: 'flex' }}>
        <CircularProgress style={{color:"#fb3c83"}}/>
      </Box>
 
    </Wrapper>
  )
}



export default Loading


const Wrapper = styled.div`

/* width: 90vw;
height: 5px;
position: fixed;
border-top-right-radius: 5px;
border-bottom-right-radius: 5px;
top: 0;
background-color:#fb3c83 ;
z-index: 999;
animation: identifier 2s ease-out  1  ;

@keyframes identifier {
  from{
    width: 0;
  }to{
    width: 90vw;
  }
  
} */
`
