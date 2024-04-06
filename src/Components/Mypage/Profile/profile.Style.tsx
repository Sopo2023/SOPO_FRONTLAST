import styled from "styled-components";

export const Pagination = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: #73737339;
`;
export const Pagination_Writing = styled.div`
  position: absolute;
  width: 100%;
  height: 1400px;
  background-color: #fff;
  top: 300px;
  border-radius: 30px 30px 0 0;
  animation-name: pagination;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
`;
export const Leave = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  left: 40px;
  top: 30px;
  cursor: pointer;
`;
export const BackButton = styled.img`
  cursor: pointer;
`;
export const Last_Pagination = styled.div`
  position: absolute;
  top: 40px;
  left: 100px;
  color: #000;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;
export const Horseman = styled.form`
  position: relative;
  top: 65px;
  width: 100%;
  height: 1500px;
`;
export const Writing = styled.div`
  position: relative;
  width: 900px;
  height: 90px;
  margin-top: 40px;
  margin-left: 100px;
`;
export const WritingM = styled.span`
  position: absolute;
  color: #000;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;
export const Major = styled.input`
  position: absolute;
  width: 840px;
  border: none;
  border-bottom: 2px solid #1a9a18;
  outline: none;
  font-size: 20px;
  margin-top: 50px;
  &::placeholder {
    font-size: 18px;
  }
`;
export const GitUrl = styled.input`
  position: absolute;
  width: 840px;
  border: none;
  border-bottom: 2px solid #1a9a18;
  outline: none;
  font-size: 20px;
  margin-top: 50px;
  &::placeholder {
    font-size: 18px;
  }
`;
export const Award = styled.input`
  position: absolute;
  width: 840px;
  border: none;
  border-bottom: 2px solid #1a9a18;
  outline: none;
  font-size: 20px;
  margin-top: 50px;
  &::placeholder {
    font-size: 18px;
  }
`;
export const Pf = styled.input`
  position: absolute;
  width: 840px;
  border: none;
  border-bottom: 2px solid #1a9a18;
  outline: none;
  font-size: 20px;
  margin-top: 50px;
  &::placeholder {
    font-size: 18px;
  }
`;
export const YearChoice = styled.div`
  position: relative;
  display: flex;
  margin-left: -15px;
`;
export const Year = styled.div`
  position: relative;
  color: #a7a7a7;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 50px;
  margin-left: 15px;
  &.selected {
    color: #1a9a18; /* 선택된 경우의 색상전환 */
  }
  &:hover {
    cursor: pointer;
    color: #178915;
  }
`;
export const DreamSelect = styled.div`
  position: relative;
  display: flex;
  margin-left: -15px;
`;
export const Dream = styled.div`
  position: relative;
  color: #a7a7a7;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 50px;
  margin-left: 15px;
  &.selected {
    color: #1a9a18; /* 선택된 경우의 색상전환 */
  }
  &:hover {
    cursor: pointer;
    color: #178915;
  }
`;
export const ClubSelect = styled.div`
  position: relative;
  display: flex;
  margin-left: -15px;
`;
export const Club = styled.div`
  position: relative;
  color: #a7a7a7;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 50px;
  margin-left: 15px;
  &.selected {
    color: #1a9a18; /* 선택된 경우의 색상전환 */
  }
  &:hover {
    cursor: pointer;
    color: #178915;
  }
`;
export const SkillsSelect = styled.div`
  position: relative;
  display: flex;
  margin-left: -15px;
`;
export const Skill = styled.div`
  position: relative;
  color: #a7a7a7;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 50px;
  margin-left: 15px;
  &.selected {
    color: #1a9a18; /* 선택된 경우의 색상전환 */
  }
  &:hover {
    cursor: pointer;
    color: #178915;
  }
`;
export const Completebutton = styled.div`
  position: relative;
  font-size: 40px;
  color: #178915;
  cursor: pointer;
  transition: color 0.3s;
  margin-left: 1200px;
`;