import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;
export const Write_Main = styled.div`
  display: flex;
  position: relative;
  top: 80px;
  width: 900px;
  height: calc(100% - 80px);
`;
export const Writing = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
export const WriteTool = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  gap: 10px;
  width: 100%;
  height: 100px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  position: relative;
`;
export const Tool = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
  width: 100px;
  height: 100%;
`;
export const CategorySelect = styled.select`
  height: 50px;
  text-align: center;
  outline: none;
  border: none;
  padding: 12px;
  border-radius: 4px;
  background-color: rgb(241, 241, 241);
  appearance: none;
`;
export const SubmitButton = styled.button`
  cursor: pointer;
  border: none;
  width: 100%;
  background: none;
  color: #000;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;
export const plustimg = styled.div`
  width: 50px;
  height: 50px;
  img {
    cursor: pointer;
    width: 50px;
    height: 50px;
  }
`;
export const WriteUnder = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #f5f5f6;
`;
export const WriteForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
  background-color: white;
`;
export const WriteTitlelMain = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100px;
`;
export const WriteTitle = styled.input`
  display: flex;
  outline: none;
  border: none;
  width: 80%;
  height: 100px;
  flex-shrink: 0;
  font-size: 30px;
  padding-left: 10px;
  padding-top: 20px;
`;
export const WriteDetailMain = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
export const WriteDetail = styled.textarea`
  resize: none;
  display: flex;
  outline: none;
  border: none;
  vertical-align: top;
  width: 80%;
  height: 100%;
  font-size: 30px;
  border-top: 1px solid #dbdbdb;
  padding-top: 10px;
  padding-left: 10px;
`;
export const btnupload = styled.input`
  width: 100%;
  height: 100%;
  display: flex;
  border: none;
`;
export const From = styled.form`
  width: 100%;
  height: 100%;
`;
export const SubmitButtonMain = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-direction: column-reverse;
  width: 100px;
  height: 100%;
  border: none;
  cursor: pointer;
  background-color: white;
`;
