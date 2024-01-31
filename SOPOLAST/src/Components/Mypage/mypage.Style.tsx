import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;
export const Bottom = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 100vw;
  height: 1200px;
`;
export const TopProfile = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const profilename = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  height: 100%;
`
export const Top1 = styled.p`
margin-left: 50px;
  font-size: 30px;
  font-weight: 900;
  display: inline-block;
`;
export const Top2 = styled.p`
  font-size: 25px;
  font-weight: 600;
  margin: 0;
  display: inline-block;
`;
export const Fixbutton = styled.div`
margin-left: 50px;
  width: 200px;
  height: 70px;
  border-radius: 10px;
  color: #868686;
  background-color: #f5f5f6;
  border: none;
  cursor: pointer;
`;
export const FixbuttonT = styled.div`
  margin-top: 13px;
  margin-left: 45px;
  position: absolute;
`;
export const Readme = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  height: 400px;
`;
export const Body1 = styled.span`
  display: flex;
  font-weight: 700;
  font-size: 25px;
  margin-left: 70px;
`;
export const Body2 = styled.div`
  display: flex;
  width: 90%;
  height: 120px;
  background-color: #f5f5f6;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  font-size: 25px;
  font-weight: 800;
`;
export const Social = styled.div`
  display: flex;
  width: 100%;
  height: 300px;
  font-size: 20px;
  font-weight: 800;
`;
export const Socialp = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;
export const Pt = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
margin-left: 30px;
width: 100%;
height: 100%;
`;
export const link1 = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
  width: 250px;
  height: 50px;
  img {
    width: 50px;
    height: 50px;
  }
`;
export const imgButton = styled.p`
display: flex;
flex-direction: row;
  width: 200px;
  height: 50px;
`;
export const SocialNam = styled.p`
  display: flex;
  font-size: 25px;
  margin-top: 5px;
  margin-left: 10px;
`;
export const SocialG = styled.p`
display: flex;
margin-top: 5px;
`;
export const post_1 = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  width: 100%;
  height: 700px;
`;
export const postrecord = styled.p`
  margin-left: 15%;
  color: #1a9a18;
  font-size: 25px;
  font-weight: 800;
`;
export const PostVeiw = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 20px;
`
export const post_write = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8%;
  width: 70%;
  height: 200px;
  border-bottom: 2px solid #888;
  cursor: pointer;
`;
export const Zonecontrol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 60%;
  height: 100%;

`;
export const Name = styled.span`
  display: flex;
  color: #000;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;
export const Title = styled.span`
  display: flex;
  color: #8c8c8c;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const Detail = styled.span`
  color: #8c8c8c;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const Date = styled.span`
  color: #8c8c8c;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
`;
export const Img = styled.img` 
  width: 250px;
 height: 80%;
`;
export const SocialC = styled.img``;