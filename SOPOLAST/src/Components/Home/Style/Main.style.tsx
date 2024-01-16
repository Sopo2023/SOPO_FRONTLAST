import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
`;
export const MainHome = styled.div`
  width: 100%;
  min-height: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;
export const MainCard = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  width: 100vw;
  height: 291px;
  background-color: #f5f5f6;
  position: absolute;
  top: 80px;
  -ms-overflow-style: none;
  scrollbar-width: none;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const CardContainer = styled.div`
  width: 200vw;
  height: 291px;
  flex-direction: row;
  flex-wrap: nowrap;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Card = styled.div`
  display: flex;
  cursor: pointer;
  margin-left: 60px;
  margin-top: 30px;
  width: 460px;
  height: 240px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
export const CardP = styled.div`
  position: relative;
  width: 200px;
  height: 50px;
`;
export const p = styled.p`
  position: relative;
  top: 114px;
  left: 29px;
  margin: 0;
  color: #000;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

export const BottomArea = styled.div`
  position: absolute;
  top: 400px;
  width: 100%;
  height: 800px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
