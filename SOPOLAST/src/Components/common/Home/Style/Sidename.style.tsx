import styled from "styled-components";

export const SideNameArea = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 480px;
  height: 100%;
`;
export const SideNameAreaMain = styled.div`
  display: flex;
  justify-content: center;
  width: 350px;
  height: 400px;
`;
export const sideName = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 290px;
  height: 310px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
export const Username = styled.div`
  display: flex;
  align-items: center;
  background-color: #1a9a18;
  width: 290;
  height: 80px;
  border-radius: 10px 10px 0 0;
`;
export const usernameText = styled.p`
  display: flex;
  margin-left: 30px;
  width: 50;
  height: 20px;
  cursor: pointer;
  text-decoration: none;
  color: #fff;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;
export const Write = styled.div`
  display: flex;
  justify-content: space-around;
  width: 290px;
  height: 50px;
  background-color: #f5f5f6;
`;
export const WriteText = styled.p`
  justify-content: center;
  align-items: center;
  display: flex;
  cursor: pointer;
`;
export const News = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 180px;
`;
export const WriteAlarm = styled.p`
  display: flex;
  margin-left: 30px;
  color: #178915;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  margin-top: 5px;
`;
export const WriteDetail = styled.div`
display: flex;
justify-content: center;
width: 100%;
height: 100%;
overflow-y: scroll;
overflow-x: hidden;
`;
export const WriteMain = styled.div`
display: flex;
width: 80%;
height: 100px;
flex-direction: column;
gap:10px;
`
export const WritText = styled.p`
width: 80%;
height: 40px;
color: #000;
font-family: Inter;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;
