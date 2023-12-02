import yogiyo from "../../Assets/image/1.png";
import comment from "../../Assets/image/comment.png";
import Head from "../../constants/head/head";
import Sidebar from "../../constants/Sidebar/side";
import "./portfolioSub.css";

import org from "../../Assets/image/org.png";
import mail from "../../Assets/image/mail.png";
import github from "../../Assets/image/github.png";
import insta from "../../Assets/image/insta.png";
import kakao from "../../Assets/image/kakao.png";
import plus from "../../Assets/image/plusButton.svg";

function Portfoliosubon() {
  return (
    <div className="main">
      <div className="content">
        <Head />
        <Sidebar />
        <div className="mo_portfolio">
          <div className="allPort">
            <div className="portfolio_proflie">
              <div className="namePort"> 배채희 </div>
              <div className="gradePort"> DGSW 8th </div>
              <p className="bioPort"> 프론트엔드 개발자 </p>
              <p className="setBio">
                {" "}
                " <br /> 배움에서 즐거움을 찾는 개발자, 배채희입니다. <br /> "{" "}
              </p>
            </div>
            <div className="portfolio_skill">
              <p className="skillsBio"> My Skills </p>
              <p className="aboutSikll">
                {" "}
                React / HTML / CSS / JS / JAVA / Python / C
              </p>
            </div>
            <div className="portfolio-Award">
              <p className="awardBio"> Award </p>
              <p className="aboutAward">
                {" "}
                - 교내 해커톤 대상 <br /> - 헬로 뉴 월드 우수상 <br /> - 엄청
                대단한 대회 수상{" "}
              </p>
            </div>
            <div className="portfolio_AboutMe">
              <p className="aboutMe"> About Me! </p>
              <p className="morePort"> 더 자세한 포트폴리오가 보고 싶다면?</p>
              <a
                href="https://resisted-attention-d43.notion.site/6b94177c5cee4fd6a2b879768be91d5a?pvs=4"
                className="herfPort"
              >
                {" "}
                배채희님의 포트폴리오 보러 가기
              </a>
            </div>
            <div className="portMore">
              <img src={org} className="aboutPort"></img>
              <p className="aboutText">CNS</p> <br />
              <img src={mail} className="aboutPort"></img>
              <a href="mailto:chaeeehui@gmail.com" className="aboutText">
                chaeeehui@gmail.com
              </a>{" "}
              <br />
              <img src={github} className="aboutPort"></img>
              <a href="https://github.com/je355" className="aboutText">
                je355
              </a>{" "}
              <br />
              <img src={insta} className="aboutPort"></img>
              <a
                href="https://www.instagram.com/whywhywwwhy/"
                className="aboutText"
              >
                @whywhywwwhy
              </a>{" "}
              <br />
              <img src={kakao} className="aboutPort"></img>
              <p className="aboutText">@chaeeehui</p> <br />
            </div>

            <div className="moreText">
              <div className="myStory"> 배채희님이 쓴 글 보기</div>
              <div className="plusButton">
                {/* <img src={plus} className="plusImg"></img> */}
              </div>
              <div className="hrGreen" />
              <div className="aboutTitle">
                <p className="eachTitle"> 4개교 연합 해커톤 프론트엔드 </p>{" "}
                <hr />
                <p className="eachTitle"> React 공부 시작하는 법 A to Z</p>
                <hr />
                <p className="eachTitle"> Github commit 하는 법 </p>
                <hr />
                <p className="eachTitle"> 동아리 면접 준비 팁! </p>
              </div>
            </div>

            <div className="moreContent">
              <div className="myStory myCompi">
                {" "}
                배채희님이 모집하는 대회 보기{" "}
              </div>
              <div className="hrGreen" />
              <div className="aboutTitle">
                <p className="eachTitle">
                  {" "}
                  헬로 뉴 월드 같이 나갈 프론트엔드 구합니다.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfoliosubon;
