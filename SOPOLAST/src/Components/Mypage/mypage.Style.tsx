import styled from "styled-components";

interface Year {
  active: boolean;
}

export const Main = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  overflow: hidden;
`;
export const TopProfile = styled.div`
  position: relative;
  align-items: flex-start;
  margin-top: 120px;
`;
export const Top1 = styled.p`
  font-size: 30px;
  font-weight: 900;
  margin: 0 19px 0 60px;
  display: inline-block;
`;
export const Top2 = styled.p`
  font-size: 25px;
  font-weight: 600;
  margin: 0;
  display: inline-block;
`;
export const Fixbutton = styled.div`
  position: relative;
  width: 200px;
  height: 40px;
  border-radius: 10px;
  color: #868686;
  background-color: #f5f5f6;
  border: none;
  margin: 30px 19px 50px 60px;
  margin-top: 67px;
  cursor: pointer;
`;
export const FixbuttonT = styled.div`
  margin-top: 13px;
  margin-left: 45px;
  position: absolute;
`;
export const Readme = styled.div`
  margin-top: 110px;
`;
export const Body1 = styled.span`
  position: absolute;
  font-weight: 700;
  font-size: 25px;
  margin-left: 70px;
  margin-top: -30px;
`;
export const Body2 = styled.div`
  display: flex;
  width: 1570px;
  height: 120px;
  background-color: #f5f5f6;
  border-radius: 10px;
  margin: 0 60px 0 60px;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: 800;
`;
export const Social = styled.div`
  margin: 52px 0 0 60px;
  font-size: 20px;
  font-weight: 800;
  position: absolute;
`;
export const Socialp = styled.div`
  width: 1570px;
  height: 200px;
  border-radius: 10px;
  position: relative;
`;
export const Pt = styled.div`
  position: absolute;
  margin-left: 10px;
  margin-top: 10px;
`;
export const link1 = styled.a`
  text-decoration: none;
  color: #8c8c8c;
  width: 250px;
  height: 200px;
  position: absolute;
  img {
    width: 50px;
    height: 30px;
    object-fit: contain;
    margin-left: 0px;
    margin-top: -10px;
    position: absolute;
  }
`;
export const link2 = styled.a`
  text-decoration: none;
  bottom: 7px;
  margin-left: 52px;
  color: #000;
`;
export const Git = styled.p`
  margin-top: 10px;
`;
export const Email = styled.p`
  margin-top: 20px;
`;
export const Number = styled.p`
  margin-top: 20px;
`;
export const SocialM = styled.p`
  position: absolute;
  font-size: 25px;
  margin-left: 60px;
  margin-top: -5px;
`;
export const SocialG = styled.p`
  position: absolute;
  font-size: 18px;
  margin-left: 168px;
  margin-top: -3px;
`;
export const post_1 = styled.div`
  margin: 60px 0 0 10px;
  overflow-x: hidden;
  position: relative;
  left: 50px;
  top: 440px;
  width: 1430px;
  height: 700px;
  margin-left: -40px;
  margin-top: -220px;
`;
export const post1 = styled.p`
  top: 30px;
  left: 50px;
  color: #1a9a18;
  font-size: 25px;
  font-weight: 800;
  position: absolute;
  margin-top: 25px;
`;
export const post_write = styled.div`
  margin: 0;
  position: relative;
  top: 70px;
  margin-top: 25px;
  height: 190px;
  margin-left: 51px;
  border-bottom: 2px solid #888;
  width: 1470px;
`;
export const Zonecontrol = styled.div`
  width: 55%;
  height: 100px;
  margin-left: 10px;
`;
export const Name = styled.span`
  position: absolute;
  top: 5px;
  color: #000;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  margin-top: -7px;
`;
export const Title = styled.span`
  display: block;
  position: absolute;
  top: 7px;
  color: #8c8c8c;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 25px;
`;
export const Detail = styled.span`
  position: absolute;
  top: 10px;
  color: #8c8c8c;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 60px;
`;
export const Date = styled.span`
  position: absolute;
  display: block;
  top: 80px;
  color: #8c8c8c;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  margin-top: 80px;
`;
export const Img = styled.img`
  position: absolute;
  width: 250px;
  left: 75%;
  bottom: 2.8vh;
`;
export const SocialC = styled.img``;
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
`;
export const WritingM = styled.span`
  position: absolute;
  left: 100px;
  top: 130px;
  color: #000;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;
export const Major = styled.input`
  position: absolute;
  left: 100px;
  top: 450px;
  width: 840px;
  border: none;
  border-bottom: 2px solid #1a9a18;
  outline: none;
  font-size: 20px;
  &::placeholder {
    font-size: 18px;
  }
`;
export const GitUrl = styled.input`
  position: absolute;
  left: 100px;
  top: 450px;
  width: 840px;
  border: none;
  border-bottom: 2px solid #1a9a18;
  outline: none;
  font-size: 20px;
  margin-top: 295px;
  &::placeholder {
    font-size: 18px;
  }
`;
export const Award = styled.input`
  position: absolute;
  left: 100px;
  top: 350px;
  width: 840px;
  border: none;
  border-bottom: 2px solid #1a9a18;
  outline: none;
  font-size: 20px;
  margin-top: 685px;
  &::placeholder {
    font-size: 18px;
  }
`;
export const Pf = styled.input`
  position: absolute;
  left: 100px;
  top: 450px;
  width: 840px;
  border: none;
  border-bottom: 2px solid #1a9a18;
  outline: none;
  font-size: 20px;
  margin-top: 720px;
  &::placeholder {
    font-size: 18px;
  }
`;
export const Completebutton = styled.div`
  position: relative;
  bottom: 200px;
  right: 400px;
  font-size: 40px;
  color: #8c8c8c;
  cursor: pointer;
  transition: color 0.3s;
`;
export const YearSelect = styled.div`
  color: #a7a7a7;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-left: 150px;
`;
export const Year = styled.div`
  display: inline-block;
  margin-left: 30px;
  margin-top: 27px;
  &.selected {
    color: #1a9a18; /* 선택된 경우의 색상전환 */
  }
  &:hover {
    cursor: pointer;
    color: #178915;
  }
`;
export const DreamSelect = styled.div`
  color: #a7a7a7;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-left: -25px;
  margin-top: 30px;
`;
export const Dream = styled.div`
  display: inline-block;
  margin-left: 30px;
  margin-top: 27px;
  &.selected {
    color: #1a9a18; /* 선택된 경우의 색상전환 */
  }
  &:hover {
    cursor: pointer;
    color: #178915;
  }
`;
export const ClubSelect = styled.div`
  color: #a7a7a7;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-left: 75px;
  margin-top: 600px;
`;
export const Club = styled.div`
  display: inline-block;
  margin-left: 30px;
  margin-top: 27px;
  &.selected {
    color: #1a9a18; /* 선택된 경우의 색상전환 */
  }
  &:hover {
    cursor: pointer;
    color: #178915;
  }
`;
export const SkillsSelect = styled.div`
  color: #a7a7a7;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-left: 75px;
  margin-top: 250px;
`;
export const Skill = styled.div`
  display: inline-block;
  margin-left: 30px;
  margin-top: 27px;
  &.selected {
    color: #1a9a18; /* 선택된 경우의 색상전환 */
  }
  &:hover {
    cursor: pointer;
    color: #178915;
  }
`;
