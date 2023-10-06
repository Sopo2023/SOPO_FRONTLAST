import { Link } from 'react-router-dom';
import hp from "../image/hp.png"
import org from "../image/org.png"
import mail from "../image/mail.png"
import github from "../image/github.png"
import insta from "../image/insta.png"
import kakao from "../image/kakao.png"
import searchFito from "../image/searchFito.png"
import cnsLogo from "../image/cnsLogo.png"
import b1nd from "../image/b1nd.png"
// import selectLIne from "./image/selectLIne.png"

// import tri from "./image/tri.png"
// import tirang from "./image/tirang.png"

function App() {
  return (
    <div className="App">
      <div className="content">
      <header className="header">
             <h1><Link to="/main" className='SOPO' >SOPO</Link></h1>
             <nav className="nav">
                 <ul>
                     <li><Link to="/Mentor-Mentee" className="link">선배가 후배에게</Link></li>
                     <li><Link to="/portfolio" className="link">포트폴리오</Link></li>
                     <li><Link to="/Competition" className="link">대회</Link></li>
                     <li><Link to="/mypage" className="link">내정보</Link></li>
                 </ul>
             </nav>
         </header> 
        </div>
        <div className='proBox'>
          <div className='proName'>
            <span>
              이해준
            </span>
            <div className='proHr'></div>
            <div className='proBio'>
              <span className='firstBio'>안녕하세요.<br />프론트엔드 개발자 이해준입니다.</span>
              <div className='secondBio'> 매일 성장하는 개발자 이해준입니다.</div>
              <div className='skillTitle'>skills</div>
              <div>React / HTML / CSS / JS / C</div>
              <div className='awardTitle'>Award</div>
              <div>🥇 교내해커톤 대상<br></br>🏆 스마틴 앱 챌린지 우수상 <br></br>🎖️ ICT 대구 교육감상</div>

                <div className='bioInfo'>
                  <div className='oddBio'>
                    <img src={hp} className='imgBio'></img>
                    <span className='perBio'> 010-1234-1234</span>
                  </div>

                  <div className='oddBio'>
                    <img src={org} className='imgBio'></img>
                    <span className='perBio'> B1ND</span>
                  </div>

                  <div className='oddBio'>
                    <img src={mail} className='imgBio'></img>
                    <span className='perBio'> leehaejoon@dgsw.hs.kr</span>
                  </div>

                  <div className='oddBio'>
                    <img src={github} className='imgBio'></img>
                    <span className='perBio'> githae </span>
                  </div>

                  <div className='oddBio'>
                    <img src={insta} className='imgBio'></img>
                    <span className='perBio'> @haeejoon1234</span>
                  </div>

                  <div className='oddBio'>
                    <img src={kakao} className='imgBio'></img>
                    <span className='perBio'> imhaejoon </span>
                  </div>

                </div> 
                {/* bioInfo */}
              </div> 
              {/* award */}
            </div>
            {/* probio */}
        </div>
        {/* probox */}
        <div className='searchBox'>
          <img src={searchFito} className='searchFito'></img>
          <div className='stackLine'>
            <div className='gradeSelet'> 8기 ▾ </div>
            <div className='gradegreen'> | </div>
            <div className='majorSelect'>
              <div className='frontEnd'> 프론트엔드 </div>
              <div className='elseMajor'> 백엔드 </div>
              <div className='elseMajor'> 안드로이드 </div>
              <div className='elseMajor'> iOS </div>
              <div className='elseMajor'> 임베디드 </div>
              <div className='elseMajor'> AI </div>
              <div className='elseMajor'> 정보보안 </div>
              <div className='elseMajor'> 디자인 </div>
            </div>
          </div>
          <div className='gatherBox'>
            <div className='gatherTitle'> 8기 프론트엔드 헬뉴월 해커톤 <br></br> 같이 나갈 분 구해용~~ </div>
            <div className='gatherGradeName'> DGSW 8th 배채희 </div>
            <div className='gatherMail'> Mail - chaeeehui@gmail.com </div>
        </div>
        <div className='gatherBox2'>
            <div className='gatherTitle'> ICT 창업경진대회 <br></br> 같이 나갈 프론트 있나요??</div>
            <div className='gatherGradeName'> DGSW 8th 박규민 </div>
            <div className='gatherMail'> Mail - kyumin@gmail.com </div>
        </div>
        <div className='gatherBox3'>
            <div className='gatherTitle'> 저 대회나가려고 하는데 8기 <br></br>프론트 아무나 구해요.</div>
            <div className='gatherGradeName'> DGSW 7th 이해준 </div>
            <div className='gatherMail'> Mail - haejoon@gmail.com </div>
        </div>
        <div className='gatherBox4'>
            <div className='gatherTitle'> 하이톤 나갈 8기 <br></br>프론트 연락주세요 </div>
            <div className='gatherGradeName'> DGSW 7th 김가영 </div>
            <div className='gatherMail'> Mail - kiku@gmail.com </div>
        </div>
        <div className='gatherBox5'>
            <div className='gatherTitle'> 저랑 스택 나갈 프론트... <br></br> 혹시 있나요??</div>
            <div className='gatherGradeName'> DGSW 8th 제민국 </div>
            <div className='gatherMail'> Mail - jegal@gmail.com </div>
        </div>
        <div className='gatherBox6'>
            <div className='gatherTitle'> 헬로뉴월드 같이 나갈 <br></br> 프론트엔드 개발자 구합니다.</div>
            <div className='gatherGradeName'> DGSW 8th 김호준 </div>
            <div className='gatherMail'> Mail - gaemi@gmail.com </div>
        </div>
        </div>
    </div>
  );
}

export default App;
