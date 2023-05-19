import styled from "styled-components";

const Ewrapper = styled.div`

width: 100vw;
display: flex;
justify-content: center;

.dfc{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.sub{
    min-height: calc(100vh - 140px);
    width: 100%;
    max-width: 600px;
    background-color: white;
    display: flex;
    flex-direction: column;
    

    
    form{
        width: 100%;
 height: 100%;
 padding: 10px;
 gap: 15px;
 display: flex;
 flex-direction: column;
    }
}

.uppersub{
    width: 100%;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.bio{
    width: 100%;
    gap: 10px;
    div{
        width: 50%;
    }
    textarea{
        width: 100%;
    min-height: 50px;
        resize: none;
        outline: none;
        border: none;
        padding: 7px;
        box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
        border-radius: 10px;
    }
    input{
        width: 100%;
        box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
        border-radius: 10px;
        resize: none;
        outline: none;
        border: none;
        padding: 10px;
    }
}
.citystate{
    display: flex;
    width: 100%;
gap: 10px;
align-items: center;
justify-content: space-between;
    input{
        width: 40%;
     resize: none;
     outline: none;
     border: none;
     border-radius: 10px;
     padding: 10px;
     box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
 }
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


export default Ewrapper