import "./side.css"
import hp from "../image/hp.png"
import org from "../image/org.png"
import mail from "../image/mail.png"
import github from "../image/github.png"
import insta from "../image/insta.png"
import kakao from "../image/kakao.png"
import searchFito from "../image/searchFito.png"
import cnsLogo from "../image/cnsLogo.png"
import b1nd from "../image/b1nd.png"

export default function side(){
    return(
        <div className="side">
<div className='proBox_1'>
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
        </div>
    )
}