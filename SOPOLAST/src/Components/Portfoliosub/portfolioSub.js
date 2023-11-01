import yogiyo from "../../Assets/image/1.png"
import comment from "../../Assets/image/comment.png"
import Head from "../../head/head";
import Sidebar from "../Sidebar/side"
import "./portfolioSub.css"

function Portfoliosubon() {
  return (
    <div className="App">
      <div className="content">
         <Head/>
         <Sidebar/>
         <div className="allPort">
            <div className="namePort"> 배채희 </div>
            <div className="gradePort"> DGSW 8th </div>
            <p className="bioPort"> 프론트엔드 개발자 </p>
            <p className="setBio"> " <br/> 배움에서 즐거움을 찾는 개발자, 배채희입니다. <br/> " </p>
            <div>
              <p className="skillsBio"> My Skills </p>
              <p className="aboutSikll"> React / HTML / CSS / JS / JAVA / Python / C</p>
            </div>
            <div>
              <p className="awardBio"> Award </p>
              <p className="aboutAward"> - 교내 해커톤 대상 <br/> - 헬로 뉴 월드 우수상 <br/> - 엄청 대단한 대회 수상 </p>
            </div>
            <div>
              <p className="aboutMe"> About Me! </p>
              <p className="morePort"> 더 자세한 포트폴리오가 보고 싶다면?</p>
              <a href="https://resisted-attention-d43.notion.site/6b94177c5cee4fd6a2b879768be91d5a?pvs=4" className="herfPort"> 배채희님의 포트폴리오 보러 가기</a>
            </div>
         </div>

        </div>
    </div>
  );
}

export default Portfoliosubon;
