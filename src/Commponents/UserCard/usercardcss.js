import styled from "styled-components";

const Usercard = styled.div`
width: 100%;
max-width: 500px;

.instagram-profile-card {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  padding: 10px;
  /* margin: 20px; */
  max-width: 600px;
  width: 100%;
  cursor: pointer;
  transition:0.5s;

  &:hover{
    transform: scale(1.01);
    transition:0.5s;
    background-color: 
#f7f0f3
;

  }

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
  font-size: 15px;
  margin: 0;
}

.username {
  font-size: 12px;
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


`

export default Usercard