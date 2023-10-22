
import hp from "../image/hp.png"
import org from "../image/org.png"
import mail from "../image/mail.png"
import github from "../image/github.png"
import insta from "../image/insta.png"
import kakao from "../image/kakao.png"
import yogiyo from "../image/요기요고종현님-001.png"
import comment from "../image/comment.png"


function App() {
  return (
    <div className="App">
      <div className="content">
         <header className="header">
             <h1><a herf="">SOPO</a></h1>
         
             <nav className="nav">
                 <ul>
                     <li><a herf="#">홈</a></li>
                     <li><a herf="#">선배가 후배에게</a></li>
                     <li><a herf="#">포트폴리오</a></li>
                     <li><a herf="#">내정보</a></li>
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
        <div className='portPerson'>
          <div className='portName'> 배채희 </div>
          <div className='portGrade'> DGSW 8th </div>
          <div className='portMajor'> Frontend-Dev </div>
          <div className='readMe'>
            <div className='readMeText'> 매일 계발하는 개발자 배채희입니다. </div>
            <div className='readMeAboutMe'> About Me </div>
            <div className='readMePort'>My Portfolio</div>
            <a href="https://resisted-attention-d43.notion.site/6b94177c5cee4fd6a2b879768be91d5a?pvs=4">배채희의 포트폴리오 보러가기</a>
            <div className='readMePort'>My Github</div>
            <a href="https://github.com/je355">배채희의 깃허브 보러가기</a>


            <div className='readMeTitle'> 배채희님이 쓴 글 보기 </div>
            <div className='readMeUser'> 배채희 </div>
            <img src={yogiyo} className='noticePhoto'></img>
            <div className='readMeNotice'> 4개교 연합 해커톤 프론트엔드 </div>
            <div className='readMeAbout'> 2023년 08월 24일 4개교 연합 해커톤을 진행했다.고종현 님 @manudeli 경력 요기요에서 -Merchant trine : 사장님 관련 서비스 사장 사이트, 사장 관리자 서비스 공통 요기요 디자인, FE 나의 이야기 제대 전, 수포자 고등학생에서 미대생(디자인전공)으로서의 삶... </div>
            <div className='readMeDate'> 2023. 08. 25. </div>
            <img src={comment}></img>
            <hr></hr>

            <div className='readMeUser'> 배채희 </div>
            <img src={yogiyo} className='noticePhoto'></img>
            <div className='readMeNotice'> 4개교 연합 해커톤 프론트엔드 </div>
            <div className='readMeAbout'> 2023년 08월 24일 4개교 연합 해커톤을 진행했다.고종현 님 @manudeli 경력 요기요에서 -Merchant trine : 사장님 관련 서비스 사장 사이트, 사장 관리자 서비스 공통 요기요 디자인, FE 나의 이야기 제대 전, 수포자 고등학생에서 미대생(디자인전공)으로서의 삶... </div>
            <div className='readMeDate'> 2023. 08. 25. </div>
            <img src={comment}></img>
            <hr></hr>

            <div className='readMeUser'> 배채희 </div>
            <img src={yogiyo} className='noticePhoto'></img>
            <div className='readMeNotice'> 4개교 연합 해커톤 프론트엔드 </div>
            <div className='readMeAbout'> 2023년 08월 24일 4개교 연합 해커톤을 진행했다.고종현 님 @manudeli 경력 요기요에서 -Merchant trine : 사장님 관련 서비스 사장 사이트, 사장 관리자 서비스 공통 요기요 디자인, FE 나의 이야기 제대 전, 수포자 고등학생에서 미대생(디자인전공)으로서의 삶... </div>
            <div className='readMeDate'> 2023. 08. 25. </div>
            <img src={comment}></img>
            <hr></hr>

            <div className='readMeUser'> 배채희 </div>
            <img src={yogiyo} className='noticePhoto'></img>
            <div className='readMeNotice'> 4개교 연합 해커톤 프론트엔드 </div>
            <div className='readMeAbout'> 2023년 08월 24일 4개교 연합 해커톤을 진행했다.고종현 님 @manudeli 경력 요기요에서 -Merchant trine : 사장님 관련 서비스 사장 사이트, 사장 관리자 서비스 공통 요기요 디자인, FE 나의 이야기 제대 전, 수포자 고등학생에서 미대생(디자인전공)으로서의 삶... </div>
            <div className='readMeDate'> 2023. 08. 25. </div>
            <img src={comment}></img>
            <hr></hr>
          </div>
        </div>
    </div>
  );
}

export default App;
