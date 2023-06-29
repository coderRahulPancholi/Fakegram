import styled from "styled-components";

const Wrapper = styled.div`
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
position: relative;

gap: 10px;
/* min-height: calc(100vh - 140px); */
margin-bottom: 80px;

.instagram-profile-card {
  /* background-color: #ffffff; */
  /* border-radius: 10px; */
  /* box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1); */
  padding: 15px;

  /* margin: 20px; */
  max-width: 600px;
  width: 100%;
}

.profile-info {
  display: flex;
  /* justify-content: space-evenly; */
  /* padding: 15px; */
  align-items: center;
}

.profile-image {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  /* margin-right: 20px; */
}

.user-info {
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
}

.name {
  font-size: 13px;
  margin: 0;
  
}

.username {
  font-size: 18px;
  margin: 0;
  color: #a0a0a0;
}

.stats {
  display: flex;
  justify-content: center;
gap: 20px;
flex: 1;
flex-basis: 100px;

  /* margin-top: 20px; */
}

.stat {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* width: 20%; */
}

.number {
  font-size: 22px;
  font-weight: bold;
}

.label {
  font-size: 15px;
  color: #a0a0a0;
  /* margin-top: 10px; */
}
.bios{
  /* min-height: 100px; */
  width: 100%;
/* background-color: #a0a0a0; */
/* padding: 15px; */
position: relative;


textarea{
  width: 100%;
 min-height: 50px;
  pointer-events: none;
  outline: none;
  background-color: transparent;
  resize: none;
  border: none;
}


.editbtn{
  position: absolute;
  top: 0;
  right: 5px;
}
}

.postarray{
   width: 100%;
    max-width: 600px;
    display: flex;

    gap: 15px;
    /* background-color: aliceblue; */
    padding:10px;
    flex-wrap: wrap;
    
}
.posts{
  width: 100%;
  min-height: 100px;
  background-color: whitesmoke;
  padding: 10px;
 
}

.editbtn{
padding: 5px;
border-radius: 2px;
border: none;
box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
cursor: pointer;
}

`

export default Wrapper