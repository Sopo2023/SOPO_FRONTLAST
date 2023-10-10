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

export default function portfolio() {
  return (
    <div className="portfolio">
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
        <div className='proBox_'>
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
        <div className="search">
          <input className="search_box"></input>
          <input type="button" className="search_icon"></input>
          <div className="searcg_icon_line"></div>
        </div>
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
        </div>
      <div className='mo'>
        <div className='namecardBox'>
          <div className='nameName'> 배채희 </div>
          <div className='nameGrade'> DGSW 8th </div>
          <div className='nameMail'> Mail - chaeeehui@gmail.com </div>
          <img src={cnsLogo} className='cnsLogo'></img>
        </div>

        <div className='namecardBox2'>
          <div className='nameName'> 이해준 </div>
          <div className='nameGrade'> DGSW 8th </div>
          <div className='nameMail'> Mail - haejoon@gmail.com </div>
          <img src={b1nd} className='b1ndLogo'></img>
        </div>

        <div className='namecardBox3'>
          <div className='nameName'> 전우진 </div>
          <div className='nameGrade'> DGSW 8th </div>
          <div className='nameMail'> Mail - woojin@gmail.com </div>
          <img src={cnsLogo} className='cnsLogo'></img>
        </div>

        <div className='namecardBox5'>
          <div className='nameName'> 이윤선 </div>
          <div className='nameGrade'> DGSW 8th </div>
          <div className='nameMail'> Mail - younssun@gmail.com </div>
          <img src={cnsLogo} className='cnsLogo'></img>
        </div>

        <div className='namecardBox4'>
          <div className='nameName'> 이예진 </div>
          <div className='nameGrade'> DGSW 8th </div>
          <div className='nameMail'> Mail - yejin@gmail.com </div>
          <img src={b1nd} className='b1ndLogo'></img>
        </div>
      </div>
      </div>
  );
}

// export default portfolio();
