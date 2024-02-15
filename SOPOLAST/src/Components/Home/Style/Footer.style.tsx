import exp from "constants";
import styled from "styled-components";

export const FooterContainer = styled.div`
  position: relative;
  background-color: rgb(41, 44, 51);
  width: 100%;
  height: 330px;
  display: flex;
  justify-content: center;
`;
export const FooterWrap = styled.div`
  width: 1400px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 24px 0px;
`;

export const FootersidetWrap = styled.div`
  width: 920px;
  height: 261px;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;
export const FooterTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: center;
`;
export const FooterLogoWrap = styled.div`
  margin-left: 10px;
  display: flex;
  -webkit-box-align: center;
  cursor: pointer;
`;
export const FooterLogo = styled.img`
  width: 24px;
  height: 28px;
  margin-left: 40px;
  margin-top: 30px;
`;
export const FooterLogoTitle = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: white;
  margin-top: 38px;
  margin-left: 15px;
`;
export const FooterLogoText = styled.div`
font-size: 20px;
  font-weight: 600;
  color: white;
  margin-top: 38px;
  margin-left: 17px;
  color: #C9C9C9;
`
export const FooterListWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  column-gap: 10px;
  margin: 20px 0px 40px;
`;
export const FooterTeamName = styled.div`
  display: flex;
  margin-left: 50px;
  margin-top: 40px;
  color: white;
  width: 100%;
  height: 25px;
  font-weight: 800;
`;
export const Footerdeveloper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  margin-left: 20px;
  margin-top: 11px;
`;
export const FooterWebTeam = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
`;

export const FooterdeveloperTextTitle = styled.div`
  display: flex;
  width: 70px;
  height: 20px;
  color: white;
  font-weight: 650;
  justify-content: space-around;
  margin: 10px;
`;

export const FooterdeveloperText = styled.div`
  display: flex;
  width: 70px;
  height: 20px;
  color: white;
  justify-content: space-around;
  margin: 10px;
`;
export const FooterServerTeam = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
`;
export const FooterVersion = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  color: white;
  margin-left: 10px;

`;
