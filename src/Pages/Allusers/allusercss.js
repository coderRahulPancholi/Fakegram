import styled from "styled-components";

const ALLuserWrapper = styled.div`
width: 100vw;
min-height: calc(100vh - 140px);
display: flex;
    flex-direction: column;
    align-items: center;


.dfc{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.subcontainer{
    width: 100%;
    max-width: 600px;
    /* background-color: aliceblue; */
    /* height: 500px; */
   
    gap: 5px;
    padding: 10px;
  
}

.searchinput{
    width: 100%;
    max-width: 600px;
    padding: 10px;


    input{
        width: 100%;
        padding: 15px;
        outline: none;
        border-radius: 10px;
        border: none;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    }
  
}




`

export default ALLuserWrapper