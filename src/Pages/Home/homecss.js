import styled from "styled-components";

const HomeWrapper = styled.div`
width: 100vw;


display: flex;
flex-direction: column;
align-items: center;


/* min-height: calc(100vh - 140px); */
margin-bottom: 80px;


.homecontainer{
    width: 100%;
    max-width: 600px;
    
    /* background-color: aliceblue; */
    display: flex;
   flex-direction: column;
    gap: 20px;
    align-items: center;
    padding: 10px;

    div{
        width: 100%;
    }
  


}

`

export default HomeWrapper