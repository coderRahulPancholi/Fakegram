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
  justify-content: flex-start;
  align-items: center;
}

.profile-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 20px;
}

.user-info {
  display: flex;
  /* flex-direction: column; */
  /* justify-content: center; */
  align-items: center;
}

.name {
  font-size: 24px;
  margin: 0;
}

.username {
  font-size: 18px;
  margin: 0;
  color: #a0a0a0;
}

.stats {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.stat {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.number {
  font-size: 24px;
  font-weight: bold;
}

.label {
  font-size: 18px;
  color: #a0a0a0;
  margin-top: 10px;
}

.postarray{
   width: 100%;
    max-width: 600px;
    display: flex;
    gap: 15px;
    background-color: aliceblue;
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