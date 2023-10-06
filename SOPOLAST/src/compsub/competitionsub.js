import './App.css';
import hp from "./image/hp.png"
import org from "./image/org.png"
import mail from "./image/mail.png"
import github from "./image/github.png"
import insta from "./image/insta.png"
import kakao from "./image/kakao.png"
import yogiyo from "./image/요기요고종현님-001.png"
import comment from "./image/comment.png"
import { Link } from 'react-router-dom';
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
        <div className='proBox1'>
          <div className='proName1'>
            <span>
              이해준
            </span>
            <div className='proHr1'></div>
            <div className='proBio1'>
              <span className='firstBio1'>안녕하세요.<br />프론트엔드 개발자 이해준입니다.</span>
              <div className='secondBio1'> 매일 성장하는 개발자 이해준입니다.</div>
              <div className='skillTitle1'>skills</div>
              <div>React / HTML / CSS / JS / C</div>
              <div className='awardTitle1'>Award</div>
              <div>🥇 교내해커톤 대상<br></br>🏆 스마틴 앱 챌린지 우수상 <br></br>🎖️ ICT 대구 교육감상</div>

                <div className='bioInfo1'>
                  <div className='oddBio1'>
                    <img src={hp} className='imgBio1'></img>
                    <span className='perBio1'> 010-1234-1234</span>
                  </div>

                  <div className='oddBio1'>
                    <img src={org} className='imgBio1'></img>
                    <span className='perBio1'> B1ND</span>
                  </div>

                  <div className='oddBio1'>
                    <img src={mail} className='imgBio1'></img>
                    <span className='perBio1'> leehaejoon@dgsw.hs.kr</span>
                  </div>

                  <div className='oddBio1'>
                    <img src={github} className='imgBio1'></img>
                    <span className='perBio1'> githae </span>
                  </div>

                  <div className='oddBio1'>
                    <img src={insta} className='imgBio1'></img>
                    <span className='perBio1'> @haeejoon1234</span>
                  </div>

                  <div className='oddBio1'>
                    <img src={kakao} className='imgBio1'></img>
                    <span className='perBio1'> imhaejoon </span>
                  </div>

                </div> 
                {/* bioInfo */}
              </div> 
              {/* award */}
            </div>
            {/* probio */}
        </div>
        {/* probox */}
        <div className='compBox1'>
          <div className='compBack1'> ◀ </div>
          <div className='compTitle1'>8기 프론트엔드 헬뉴월 해커톤 <br></br>같이 나갈 분 구해용~~</div>
          <div className='compGrade1'>DGSW 8th 배채희</div>
          <div className='compAbout1'>안녕하세요 <br></br>프론트엔드 개발자 한명 모자라서 구해요 <br></br><br></br> 팀원 8기 배채희 김가영, 7기 김호준으로 나갈 예정입니다. <br></br><br></br> 해커톤 열심히 하실 분 제 프로필 또는 <br></br> 밑에 연락처, 카웤으로 연락주세요. <br></br><br></br>같이 나가서 상 받아봐요..!!! <br></br><br></br> 카카오워크 1-4 배채희 <br></br>메일 chaeeehui@gmaiml.com <br></br>인스타그램 ikhibr
</div>
        </div> 
    </div>
  );
}

export default App;
