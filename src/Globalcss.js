import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 
    
    
}
body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x:hidden ;
    background-color: #faf8f7;
   
}

/* html{
    font-size: 62.5%;
    overflow-x: hidden;
} */

.dfjac{
     display: flex;
    align-items: center;
    justify-content: center;
    
}
.df{
    display: flex;
    flex-direction: row;
}
.dfc{
    display: flex;
    flex-direction: column;
}
.jc{
    justify-content: center;
}
.jss{
    justify-content: flex-start;
}
.jsa{
    justify-content: space-around;
}
.jsb{
    justify-content: space-between;
}
.ac{
    align-items: center;
}
.as{
    align-items: flex-start;
}
.gap5{
    gap: 5px;
}
.gap15{
    gap: 15px;
}
.gap10{
    gap: 10px;
}
.gap20{
    gap: 20px;
}
.wrap{
    flex-wrap: wrap;
}
.w100{
    width: 100%;
}
.h100{
    height: 100%;
}
.w90{
    width: 90%;
}
.w50{
    width: 50%;
}
.w50{
    width: 50%;
}
.container{
    max-width:120rem ;
    margin: 0 auto;
    min-height: 70vh;
}
.btn-text{
    color: white;
}
.wrapper{
    min-height: 90vh;
    padding: 90px 0;
    /* margin-top: 70px; */
    justify-content: center;
}

li{
    list-style: none;

    a{
        text-decoration: none;
        color: black;
    }
}


.globalbtn{
    padding: 7px;
    border: none;
   
   
    padding: 7px;
  background-color: #262ea1;
  border-radius: 5px;
  color: white;
  &:hover{
    background-color: #3940a8;
  }
}
.cp{
    cursor: pointer;
}
`;
 
export default GlobalStyle;