import styled from "styled-components";

const UserPageWrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;

.dfc{
    display: flex;
    flex-direction: column;
}
.ac{
    align-items: center;
}
.df{
    display: flex;
}

  .subcontainer{
    width: 100%;
    max-width: 600px;
min-height: calc(100vh - 140px);
padding: 5px;
background-color: white;

  }

.profileinfo{
    /* background-color: wheat; */
    width: 100%;
height: 30%;
    min-height: 200px;
    border-radius: 10px;
    /* padding: 20px; */
    gap: 10px;
}

.subp1{
    /* background-color: wheat; */
}

.pf{
    background-color: aliceblue;
    display: flex;
    width: 100%;
    align-items: center;
    /* gap: 20px; */
    justify-content: space-between;
    
}

.prophoto{
    /* width: 30%; */
    

    img{
        width: 100px;
height: 100px;
border-radius: 100%;
        


    }
 p{
    width: 100%;
    text-align: center;
 }
}

.foll{
    flex: 1;
    flex-basis: 200px;
    /* width: 50%; */
    gap: 20px;
    justify-content: center;
}

.subp2{
    
    
}
.subp3{
    width: 100%;
    /* padding: 5px; */
    div{
width: 50%;
display: flex;
justify-content: center;

    

    button{
        width: 100px;
        padding: 5px 10px;
        border-radius: 5px;
        border: none;
        background-color: #1d44a8;
        color: white;
        margin-left: 10px;
       
    }
}

}
`;

export default UserPageWrapper
