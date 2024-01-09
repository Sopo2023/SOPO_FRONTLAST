import styled from "styled-components";

export const App1 = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  overflow-y: hidden;
`;

export const Login_Main = styled.div`
  width: 1470px;
  height: 956px;
  display: flex;
  justify-content: space-around;
`;
export const GreenBox = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  min-width: 700px;
  max-width: 700px;
  height: 100%;
  position: relative;
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
  float: left;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
`;
export const Box1 = styled.div`
  width: 100%;
  height: 100%;
`;
export const Box_Group = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Form = styled.form`
  /* display: contents; */
  width: 450px;
  display: flex;
  flex-direction: column;
  row-gap: 28px;
  justify-content: space-between;
  justify-content: center;
  align-items: flex-start;
  position: absolute;
`;
export const Title = styled.h1`
  text-align: left;
  font-size: 40px;
  font-weight: bold;
`;
export const Email = styled.input`
  border: none;
  border-bottom: 2px solid #898989;
  padding: 10px;
  font-weight: bold;
  height: 34px;
  width: 260px;
  font-size: 16px;
`;
export const Password = styled.input`
  border: none;
  outline: none;
  border-bottom: 2px solid #898989;
  padding: 10px;
  font-weight: bold;
  height: 34px;
  width: 380px;
  font-size: 16px;
`;
export const Input = styled.input`
  border: none;
  outline: none;
  border-bottom: 2px solid #898989;
  padding: 10px;
  font-weight: bold;
  height: 34px;
  width: 380px;
  font-size: 16px;
`;

export const Name = styled.div`
  height: 56px;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  background-color: #1a9a18;
  color: #fff;
  height: 50px;
  width: 400px;
  font-size: 20px;
  border-radius: 5px;
  font-weight: bold;
`;

export const SignLink = styled.div`
  position: absolute;
  left: 5%;
  bottom: -30px;
  color: #47a1f3;
`;
export const Email_certification = styled.div`
  width: 90%;
  height: 50px;
`;
