import styled from "styled-components";

export const side = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 80px;
  width: 450px;
  height: calc(100vh - 80px);
`;
export const proBox1 = styled.div`
  display: flex;
  position: absolute;
  width: 320px;
  height: 640px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #f5f5f6;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
export const allContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
`;
export const NameBox = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
`;
export const ProName = styled.div`
  display: flex;
  align-items: center;
  margin-left: 50px;
  color: #000;
  font-family: Inter;
  font-size: 25px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;
export const profile = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
export const proBorder = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-top: 2px solid gray;
  width: 100%;
  height: 100%;
`;
export const proMain = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 80%;
  height: 100%;
  color: #000;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;
export const Span = styled.span`
  display: flex;
  width: 100%;
  height: 30px;
  white-space: pre-line;
`;
export const award = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 50px;
  height: 150px;
`;
export const SkilSapnDetail = styled.span`
display: flex;
flex-direction: row;
  color: #000;
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;
export const SapnDetail = styled.span`
display: flex;
  color: #000;
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;
export const ProImage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 20px;
  width: 100%;
  height: 100%;
`;
export const oodBio = styled.div`
  width: 100%;
  height: 10%;
`;
export const imgBio = styled.img`
  width: 20px;
  height: 20px;
  vertical-align: middle;
`;
export const perBio = styled.span`
  font-weight: 600;
  font-size: 15px;
  vertical-align: middle;
  margin-left: 10px;
`;
