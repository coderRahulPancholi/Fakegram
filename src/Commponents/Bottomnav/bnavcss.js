import styled from "styled-components";

const BottNavbar = styled.div`
width: 100vw;


z-index: 9;
position: sticky;
bottom: 0;
display: flex;
justify-content: center;
align-items: center;
.dfc{
    display: flex;
    flex-direction: column;
}
.ac{
    align-items: center;
}


.botcontainer{
    width: 100%;
    height: 70px;
    max-width: 600px;
    background-color: white;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    display: flex;
    align-items: center;
    justify-content: space-around;

}

.menus{
width: 60px;
height: 60px;
border-radius: 100%;
/* border-radius: 10px; */
/* cursor: pointer; */
justify-content: center;
transition: 0.5s;


.icontitle{
    display: none;

}



}


.active{
    background-color: #fb3c83;
    color: white;
    width: 60px;
height: 60px;
border-radius: 10px;
/* box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; */
box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
/* cursor: pointer; */
justify-content: center;
    transform: translateY(-15px);
    transition: 0.5s;
    
    .icontitle{
   font-size: 12px;
    
}

}
.smallimg{
    width: 30px;
    height: 30px;
    border-radius: 100%;
}

`

export default BottNavbar