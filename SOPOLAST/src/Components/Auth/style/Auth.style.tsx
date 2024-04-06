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
  max-width: 3000px;
  height: 956px;
  @media only screen and (min-width: 320px) {
    width: 320px;
    
  }
  @media only screen and (max-width: 540px) {
    width: 540px;
    height: 100%;
  }
  @media only screen and (max-width: 1023px) {
    width: 1023px;
    height: 100%;
  }
  @media only screen and (min-width: 1024px) {
    width: 1024px;
    height: 100%;
  }
  @media only screen and (min-width: 1100px) {
    width: 1100px;
    height: 100%;
  }
  @media only screen and (min-width: 1200px) {
    width: 1300px;
    height: 100%;
  }
  @media only screen and (min-width: 1400px) {
    width: 1400px;
    height: 100%;
  }
  @media only screen and (min-width: 1470px) {
    width: 1470px;
    height: 100%;
  }
  @media only screen and (min-width: 1500px) {
    width: 1500px;
    height: 100%;
  }
  @media only screen and (min-width: 1600px) {
    width: 1600px;
    height: 100%;
  }
  @media only screen and (min-width: 1700px) {
    width: 1700px;
    height: 100%;
  }
  @media only screen and (min-width: 1800px) {
    width: 1800px;
    height: 100%;
  }
  @media only screen and (min-width: 1900px) {
    width: 1900px;
    height: 1200px;
  }
  @media only screen and (min-width: 2000px) {
    width: 2100px;
    height: 100%;
  }
  @media only screen and (min-width: 2400px) {
    width: 2600px;
    height: 100%;
  }
  display: flex;
  align-items: center;
`;
export const GreenBox = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  /* min-width: 700px;
  max-width: 700px; */
  width: 80%;
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
  display: flex;
  width: 100%;
  height: 100%;
  /* min-width: 700px;
  max-width: 700px; */
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
export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 20px;
  height: 20px;
  background-color: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 100px;
  margin-right: 10px;
  position: relative;
  outline: none;
  cursor: pointer;
  &:checked {
    background-color: #1a9a18;
    border-color: #d7d7d7;
    &:checked::after {
      content: "✓";
      position: absolute;
      color: #ffffff;
      top: 50%;
      left: 50%;
      transform: translate(-18%, -38%);
      width: 20px;
      height: 20px;
    }
  }
`;
export const CheckboxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const CheckboxLabel = styled.label`
  font-size: 18px;

  color: #333333;
`;

export const SignLink = styled.div`
  position: relative;
  display: block;

  margin-right: 11%;
  color: #47a1f3;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
export const Email_certification = styled.div`
  width: 90%;
  height: 50px;
`;
export const CheckboxBundle = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Certification = styled.div`
  display: flex;
  width: 400px;
  height: 60px;
  position: relative;
`;
export const Authentication = styled.input`
  border: none;
  border-bottom: 2px solid #898989;
  padding: 10px;
  font-weight: bold;
  height: 34px;
  width: 260px;
  font-size: 16px;
  position: absolute;
  top: 10px;
`;
export const Completed = styled.button`
  display: inline;
  padding: 0;
  border: none;
  cursor: pointer;
  background-color: #1a9a18;
  color: #fff;
  margin: 10px;
  height: 50px;
  width: 80px;
  font-size: 16px;
  border-radius: 5px;
  font-weight: bold;
  text-align: center;
  position: absolute;
  top: 0;
  right: 0px;
`;
export const CertifiedButton = styled.button`
  padding: 0;
  cursor: pointer;
  background-color: #d7d7d7;
  border: none;
  height: 50px;
  width: 80px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  position: absolute;
  margin-left: 30px;

  &.entered {
    background-color: #1a9a18;
    color: #fff;
  }
`;
export const LogLink = styled.div`
  position: absolute;
  left: 20px;
  bottom: 0;
  color: #47a1f3;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
