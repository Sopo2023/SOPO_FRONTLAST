import React from "react";
import yogiyo from "src/Assets/image/1.png";
import comment from "src/Assets/image/comment.png";
import Head from "src/Components/head/Head/head";
import Sidebar from "../../Sidebar/Side/side";

import * as S from "./portfolioSub.style";

import org from "src/Assets/image/org.png";
import mail from "src/Assets/image/mail.png";
import github from "src/Assets/image/github.png";
import insta from "src/Assets/image/insta.png";
import kakao from "src/Assets/image/kakao.png";
import plus from "src/Assets/image/plusButton.svg";

function Portfoliosubon() {
  return (
    <S.AllContainer>
      <Head active={false} />
      <S.SidebarWrap>
        <Sidebar />
      </S.SidebarWrap>
      <S.PortfolioMain>
        <S.MoPortfolio>
          <S.AllPort>
            <S.PortfoioProfile>
              <S.NamePort> 배채희 </S.NamePort>
              <S.GradePort> DGSW 8th </S.GradePort>
              <S.BioPort> 프론트엔드 개발자 </S.BioPort>
              <S.SetBio>
                {" "}
                " <br /> 배움에서 즐거움을 찾는 개발자, 배채희입니다. <br /> "{" "}
              </S.SetBio>
            </S.PortfoioProfile>
            <S.PortfolioSkill>
              <S.SkillsBio> My Skills </S.SkillsBio>
              <S.AboutSkills>
                {" "}
                React / HTML / CSS / JS / JAVA / Python / C
              </S.AboutSkills>
            </S.PortfolioSkill>
            <S.PortfoioAward>
              <S.AwardBio> Award </S.AwardBio>
              <S.AboutAward>
                {" "}
                - 교내 해커톤 대상 <br /> - 헬로 뉴 월드 우수상 <br /> - 엄청
                대단한 대회 수상{" "}
              </S.AboutAward>
            </S.PortfoioAward>
            <S.PortfoiloAboutMe>
              <S.AboutMe> About Me! </S.AboutMe>
              <S.MorePort> 더 자세한 포트폴리오가 보고 싶다면?</S.MorePort>
              <S.HerfPort href="https://resisted-attention-d43.notion.site/6b94177c5cee4fd6a2b879768be91d5a?pvs=4">
                {" "}
                배채희님의 포트폴리오 보러 가기
              </S.HerfPort>
            </S.PortfoiloAboutMe>
            <S.PortMore>
              <S.AboutPort src={org}></S.AboutPort>
              <S.AboutText>CNS</S.AboutText> <br />
              <S.Aboutport src={mail}></S.Aboutport>
              <S.Abouttext href="mailto:chaeeehui@gmail.com">
                chaeeehui@gmail.com
              </S.Abouttext>{" "}
              <br />
              <S.Aboutport src={github}></S.Aboutport>
              <S.Abouttext href="https://github.com/je355">
                je355
              </S.Abouttext>{" "}
              <br />
              <S.Aboutport src={insta}></S.Aboutport>
              <S.Abouttext href="https://www.instagram.com/whywhywwwhy/">
                @whywhywwwhy
              </S.Abouttext>{" "}
              <br />
              <S.Aboutport src={kakao}></S.Aboutport>
              <S.Abouttext>@chaeeehui</S.Abouttext> <br />
            </S.PortMore>

            <S.MoreText>
              <S.MyStroy> 배채희님이 쓴 글 보기</S.MyStroy>
              <S.PlusButton>
                {/* <img src={plus} className="plusImg"></img> */}
              </S.PlusButton>
              <S.HrGreen />
              <S.AboutTitle>
                <S.EachTitle> 4개교 연합 해커톤 프론트엔드 </S.EachTitle> <hr />
                <S.EachTitle> React 공부 시작하는 법 A to Z</S.EachTitle>
                <hr />
                <S.EachTitle> Github commit 하는 법 </S.EachTitle>
                <hr />
                <S.EachTitle> 동아리 면접 준비 팁! </S.EachTitle>
              </S.AboutTitle>
            </S.MoreText>

            <S.MoreContent>
              <S.MyCompi> 배채희님이 모집하는 대회 보기 </S.MyCompi>
              <S.HrGreen />
              <S.AboutTitle>
                <S.EachTitle>
                  {" "}
                  헬로 뉴 월드 같이 나갈 프론트엔드 구합니다.{" "}
                </S.EachTitle>
              </S.AboutTitle>
            </S.MoreContent>
          </S.AllPort>
        </S.MoPortfolio>
      </S.PortfolioMain>
    </S.AllContainer>
  );
}

export default Portfoliosubon;
