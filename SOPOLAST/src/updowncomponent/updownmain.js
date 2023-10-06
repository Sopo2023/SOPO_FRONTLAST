import './updown.css';
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

export default function start(){
  return( 
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
        </div>
       <div className="post-container">
            <div className="post-written">
                <div className='Movecontrol'>
                <span className="name">김가영</span><br></br>
                <span className="title">4개교 연합 해커톤 프론트엔드</span><br></br>
                <span className="detail">저희는 오늘 4개교 연합 토크콘서트를 갔다왔습니다 경험을 공유하고 명함을 공유해서 좋은 경험이였습니다</span><br></br>
                <span className="date">2023.09.30</span>
                <span className="img"><img className='post_img' src={require('../img/gayoe.jpeg')} alt="이미지"></img></span>
                </div>
            </div>
            <div className="post-written">
                <div className='Movecontrol'>
                <span className="name">이해준</span><br></br>
                <span className="title">오늘은 나르샤하는날</span><br></br>
                <span className="detail">오늘은 나르샤를 해야하지만 김호준은 축구를 하러갔다 짜증이 났다</span><br></br>
                <span className="date">2023.10.05</span>
                <span className="img"><img className='post_img' src={require('./postimg.jpeg')} alt="이미지"></img></span>
                </div>
            </div>
            <div className="post-written">
                <div className='Movecontrol'>
                <span className="name">김호준</span><br></br>
                <span className="title">오늘은 나르샤하는날</span><br></br>
                <span className="detail">오늘은 나르샤를 해야하지만 나는 축구를 하러 갔다 규민선배 좋아요</span><br></br>
                <span className="date">2023.10.05</span>
                <span className="img"><img className='post_img' src={require('../img/newjeans.jpeg')} alt="이미지"></img></span>
                </div>
            </div>
            <div className="post-written">
                <div className='Movecontrol'>
                <span className="name">전우진</span><br></br>
                <span className="title">오늘은 경민스쿨하는날</span><br></br>
                <span className="detail">오늘은 CNS에서 경민스쿨을 진행했다 리엑트에 평소에 관심이 많았는데 리엑트를 배울수 있어서 좋았다</span><br></br>
                <span className="date">2023.10.05</span>
                <span className="img"><img className='post_img' src={require('../img/park.JPG')} alt="이미지"></img></span>
                </div>
            </div>
            <div className="post-written">
                <div className='Movecontrol'>
                <span className="name">배채희</span><br></br>
                <span className="title">오늘의 리엑트 수업</span><br></br>
                <span className="detail">오늘은 동아리 CNS에서 경민스쿨을 진행했다 윤세욱이 제일 많이 문제를 맞췄다 역시 우리의 세욱이</span><br></br>
                <span className="date">2023.10.05</span>
                <span className="img"><img className='post_img' src={require('../img/gayoe.jpeg')} alt="이미지"></img></span>
                </div>
            </div>
       </div>
  </div>
  )
}