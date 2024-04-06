import styled from "styled-components";

export const PostMain = styled.div`
    margin-top: 80px;
    display: flex;

    justify-content: center;
    position: relative;
    width: 900px;
    height: 1200px;
`;
export const PostMainView= styled.div`
    display: flex;    
    gap: 20px;
    align-items: center;
    flex-direction: column;
    width: 90%;
    height: 100%;
    
`
export const Post_border = styled.div`
    display: flex;
    width: 100%;
    height: 200px;
`;
export const PostWrite = styled.div`
  display: flex;
  gap: 15%;
  border-bottom: 2px solid #d9d9d9;
  width: 100%;
  height: 200px;
  cursor: pointer;
`;
export const PostZonecontrol = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  span:nth-child(1) {
    display: flex;
    margin-top: 10px;
    color: #000;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }
  span:nth-child(2) {
    display: flex;
    color: #8c8c8c;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  span:nth-child(3) {
    display: flex;
    overflow: hidden;
    height: 70px;
    color: #8c8c8c;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  span:nth-child(4) {
    display: flex;
    color: #8c8c8c;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;
export const Postimg = styled.span`
  display: flex;
  align-items: center;
  width: 200px;
  height: 100%;
  left: 60%;
  bottom: 70px;
  img {
    width: 250px;
    height: 150px;
    object-fit: contain;
  }
`;

export const Post_Written = styled.div`
    width: 900px;
    height: 200px;
    border-bottom: 1px solid #888;
`