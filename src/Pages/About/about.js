import styled from "styled-components";

const Wrapper = styled.div`
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;

gap: 10px;
min-height: calc(100vh - 140px);

.instagram-profile-card {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  padding: 10px;
  
  /* margin: 20px; */
  max-width: 600px;
  width: 100%;
}

.profile-info {
  display: flex;
  justify-content: space-around;
  
  align-items: center;
}

.profile-image {
  width: 70px;
  height: 70px;
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
  font-size: 12px;
  margin: 0;
  
}

.username {
  font-size: 18px;
  margin: 0;
  color: #a0a0a0;
}

.stats {
  display: flex;
  /* justify-content: space-between; */
gap: 20px;

  /* margin-top: 20px; */
}

.stat {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  min-height: 100px;
  width: 100%;
/* background-color: #a0a0a0; */
padding: 5px;
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
    padding: 10px;
    flex-wrap: wrap;
}
.posts{
  width: 100%;
  min-height: 100px;
  background-color: whitesmoke;
  padding: 10px;
 
}

`

export default Wrapper