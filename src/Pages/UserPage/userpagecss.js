import styled from "styled-components";

const UserPageWrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 140px);


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
.cp{
    cursor: pointer;
}

  .subcontainer{
    width: 100%;
    max-width: 600px;
gap: 15px;
padding: 5px;
/* background-color: white; */
padding-bottom: 70px;


  }


.profileinfo{


    width: 100%;
/* height: 30%; */
    min-height: 200px;
    border-radius: 10px;
    padding: 20px;
    /* gap: 10px; */
    background-color: white;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
}

.subp1{
    /* background-color: wheat; */
}

.pf{
    /* background-color: aliceblue; */
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
    /* min-height: 100px; */
    
    padding: 7px;

    textarea{
  width: 100%;
 /* min-height: 50px; */
  pointer-events: none;
  outline: none;
  background-color: transparent;
  resize: none;
  border: none;
}
    
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

.postsinfo{
 
    width: 98%;
    gap: 15px;
}
`;

export default UserPageWrapper
