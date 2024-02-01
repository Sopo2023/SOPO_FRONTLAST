// import yogiyo from "../../Assets/image/1.png"
// import comment from "../../Assets/image/comment.png"
import Head from "../constants/head/Head/head";
import Sidebar from "../constants/Sidebar/Side/side";
import org from "../Assets/image/org.png";
import mail from "../Assets/image/mail.png";
import github from "../Assets/image/github.png";
import insta from "../Assets/image/insta.png";
import kakao from "../Assets/image/kakao.png";
import plus from "../Assets/image/plusButton.svg";

function Portfoliosubon() {
  return (
    <div className="main">
      <div className="content">
        <Head />
        <Sidebar />
        <div className="mo_portfolio">
          <div className="allPort">
            <div className="portfolio_proflie">
              <div className="namePort"> 박규민 </div>
              <div className="gradePort"> DGSW 8th </div>
              <p className="bioPort"> 프론트엔드 개발자 </p>
              <p className="setBio">
                {" "}
                " <br /> 후회하기 싫어서 노력하는 개발자 박규민입니다. <br /> "{" "}
              </p>
            </div>
            <div className="portfolio_skill">
              <p className="skillsBio"> My Skills </p>
              <p className="aboutSikll">
                {" "}
                React / HTML / CSS / JS / JAVA / Python / C / Mysql
              </p>
            </div>
            <div className="portfolio-Award">
              <p className="awardBio"> Award </p>
              <p className="aboutAward">
                {" "}
                <br /> <br />{" "}
              </p>
            </div>
            <div className="portfolio_AboutMe">
              <p className="aboutMe"> About Me! </p>
              <p className="morePort"> 더 자세한 포트폴리오가 보고 싶다면?</p>
              <a
                href="https://gilded-emmental-851.notion.site/cdf25b3accb64e51a5be0b25e8db030f"
                className="herfPort"
              >
                {" "}
                박규민님의 포트폴리오 보러 가기
              </a>
            </div>
            <div className="portMore">
              <img src={org} className="aboutPort"></img>
              <p className="aboutText">ALT</p> <br />
              <img src={mail} className="aboutPort"></img>
              <a href="mailto:kyumin7487@gmail.com" className="aboutText">
                kyumin7487@gmail.com
              </a>{" "}
              <br />
              <img src={github} className="aboutPort"></img>
              <a href="https://github.com/kyumin7487" className="aboutText">
                kyumin7487
              </a>{" "}
              <br />
            </div>

            <div className="moreText">
              <div className="myStory"> 박규민님이 쓴 글 보기</div>
              <div className="plusButton">
                {/* <img src={plus} className="plusImg"></img> */}
              </div>
              <div className="hrGreen" />
              <div className="aboutTitle">
                <p className="eachTitle">바인드 컴퍼런스 후기</p> <hr />
                <p className="eachTitle"> GitHub 프로필 꾸미는법</p>
                <hr />
                <p className="eachTitle"> 선배와 친해지기 </p>
                <hr />
                <p className="eachTitle"> 우리 학교 꿀팁</p>
              </div>
            </div>

            <div className="moreContent">
              <div className="myStory myCompi">
                {" "}
                박규민님이 모집하는 대회 보기{" "}
              </div>
              <div className="hrGreen" />
              <div className="aboutTitle">
                <p className="eachTitle">
                  {" "}
                  ICT 창업경진대회 같이 나갈 프론트 있나요??{" "}
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
