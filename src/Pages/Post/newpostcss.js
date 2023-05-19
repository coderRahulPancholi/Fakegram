import styled from "styled-components";

const PostCreater = styled.div`
width: 100vw;


display: flex;

justify-content: center;

.subcontainer{
    width: 100%;
    max-width: 600px;
    /* margin-top: 10px; */
    min-height: calc(100vh - 140px);
    /* background-color: #2e302e; */
  
}
.newpostcard{
    margin-top: 10px;
    width: 100%;
    /* height: 100%; */
    background-color: white;
    padding: 10px;
    border-radius: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
 display: flex;
 flex-direction: column;
 align-items: center;
 /* gap: 10px; */

 div{
    padding: 10px;
    width: 100%;
 }
}

.username{
    /* font-size: large; */
    color: #db1d6a;
}
.input{
    width: 100%;
    
    min-height: 100px;
    padding: 10px;
    outline: none;
    border: none;
    border-radius: 10px;
    background-color: aliceblue;
    resize: none;
}

.btns{
    display: flex;
    justify-content: end;
    align-items: center;

}
.btn{
    padding: 10px;
    border: none;
    background-color:#ed478a ;
    border-radius: 5px;
    color: white;
    cursor: pointer;

    &:hover{
        background-color:#db1d6a ;

    }
}
.post-image {
    width:40%;
    /* max-width: 300px; */
    height: auto;
    border-radius: 10px;
  }
  .costomfileinput {
  display: none;
}
.costomfileinputLabal{
    background-color: aliceblue;
    font-size: 12px;
    padding: 5px;
    border-radius: 7px;
}
`

export default PostCreater