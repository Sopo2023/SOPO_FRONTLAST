import exp from "constants";
import styled from "styled-components";

export const FooterContainer = styled.div`
  position: relative;
  background-color: rgb(41, 44, 51);
  width: 100%;
  height: 100%;
`;
export const FooterWrap = styled.div`
  width: 1200px;
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
  width: 28px;
  height: 28px;
`;
export const FooterLogoTitle = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: white;
  margin-top: 8px;
  margin-left: 2px;
`;
export const FooterLogoText = styled.div`
font-size: 20px;
  font-weight: 600;
  color: white;
  margin-top: 8px;
  margin-left: 10px;
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
  margin-left: 10px;
  color: white;
  width: 100%;
  height: 25px;
`;
export const Footerdeveloper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;
export const FooterWebTeam = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
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
