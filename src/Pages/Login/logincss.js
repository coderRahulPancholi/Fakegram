import styled from "styled-components";

const LoginWrapper = styled.div`
width: 100vw;
height: 90vh;


.inputs{
   width: 100%;
    padding: 20px;
   
    padding: 20px;
    border-radius: 10px;
    
    form{
        width: 100%;
        max-width: 300px;
    }
}
.hding{
    width: 100%;
        max-width: 300px;
        color:#db1d6a ;
}
input{
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    outline:none;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

}
.part{
    flex: 1;
    flex-basis: 500px;
}
.box{
  /* border: 1px solid #db1d6a; */
  
    width: 100%;
    max-width: 500px;
   
}

.btn{
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: whitesmoke;
    max-width: 300px;

    
}
.lbtn{ 
background-color: blue;
margin-top: 20px;
color: white;
}

.regp{
    font-size: 12px;
}

`


export default LoginWrapper