import React from "react";
import * as s from "../Style/Footer.style";
import LOGO from "src/Assets/image/sopologo.png";
const Fotter = () => {
  return (
    <s.FooterContainer>
      <s.FooterWrap>
        <s.FootersidetWrap>
          <s.FooterTextWrap>
            <s.FooterLogoWrap>
              <s.FooterLogo
                src={LOGO}
                onClick={() =>
                  window.open(
                    "https://sparkling-sting-af7.notion.site/SOPO-600a1747126840339ac79278dd44a657"
                  )
                }
              />
              <s.FooterLogoTitle>SOPO</s.FooterLogoTitle>
              <s.FooterLogoText>선배와 후배를 잇다</s.FooterLogoText>
              
            </s.FooterLogoWrap>
          </s.FooterTextWrap>
          <s.FooterListWrap>
            <s.FooterTeamName>낮은기대치</s.FooterTeamName>
            <s.Footerdeveloper>
              <s.FooterWebTeam>
                <s.FooterdeveloperTextTitle>웹</s.FooterdeveloperTextTitle>
                <s.FooterdeveloperText>이해준</s.FooterdeveloperText>
                <s.FooterdeveloperText>박규민</s.FooterdeveloperText>
                <s.FooterdeveloperText>배채희</s.FooterdeveloperText>
                <s.FooterdeveloperText>전우진</s.FooterdeveloperText>
              </s.FooterWebTeam>
              <s.FooterServerTeam>
                <s.FooterdeveloperTextTitle>서버</s.FooterdeveloperTextTitle>
                <s.FooterdeveloperText>김가영</s.FooterdeveloperText>
                <s.FooterdeveloperText>김호준</s.FooterdeveloperText>
              </s.FooterServerTeam>
            </s.Footerdeveloper>
          </s.FooterListWrap>
          <s.FooterVersion>v1.0.0</s.FooterVersion>
        </s.FootersidetWrap>
      </s.FooterWrap>
    </s.FooterContainer>
  );
};

export default Fotter;
