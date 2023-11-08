import "./side.css"
import { useState, useEffect } from 'react';
import hp from "../../Assets/image/hp.png"
import org from "../../Assets/image/org.png"
import mail from "../../Assets/image/mail.png"
import github from "../../Assets/image/github.png"
import instag from "../../Assets/image/insta.png"
import kakao from "../../Assets/image/kakao.png"

export default function Side(){
  const [sideName, setSideName] = useState('');
  const [email, setemail] = useState('')
  const [insta, setinsta] = useState('')
  useEffect(() => {
    const localStorageName = localStorage.getItem('sopo_nm');
    const localStorageEmail= localStorage.getItem('sopo_id')
    
    const localStorageinstagram =  localStorage.getItem('sopo_instagram');
    if (localStorageName) {
      setSideName(localStorageName);
    }
    if (localStorageEmail) {
      setemail(localStorageEmail);
    }
    if(localStorageinstagram){
      setinsta(localStorageinstagram)
    }
  }, []);
    return(
        <div className="side">
        <div className='proBox_2'>
          <div className='proBox_1'>


            <div className="allContainer">
              
              <div className="boxContents">
                <div className='proName'>
                  <div className="nameSide">
                    {sideName}
                  </div>

                  <hr className='nameHr'/>
                  <div className='proBio'>
                    <span className='firstBio'>안녕하세요.<br />프론트엔드 개발자 {sideName}입니다.</span>
                    <div className='secondBio'> 매일 성장하는 개발자 {sideName}입니다.</div>
                    <div className='skillTitle'>skills</div>
                    <div>React / HTML / CSS / JS / C</div>
                    <div className='awardTitle'>Award</div>
                    <div>🥇 교내해커톤 대상<br></br>🏆 스마틴 앱 챌린지 우수상 <br></br>🎖️ ICT 대구 교육감상</div>

                      <div className='bioInfo'>

                        <div className='oddBio'>
                          <img src={org} className='imgBio'></img>
                          <span className='perBio'> B1ND</span>
                        </div>

                        <div className='oddBio'>
                          <img src={mail} className='imgBio'></img>
                          <span className='perBio'> {email}</span>
                        </div>

                        <div className='oddBio'>
                          <img src={github} className='imgBio'></img>
                          <span className='perBio'> githae </span>
                        </div>

                        <div className='oddBio'>
                          <img src={instag} className='imgBio'></img>
                          <span className='perBio'> @{insta}</span>
                        </div>

                        <div className='oddBio'>
                          <img src={kakao} className='imgBio'></img>
                          <span className='perBio'> imhaejoon </span>
                        </div>

                      </div> 
            </div>
          </div>
        </div>
                {/* bioInfo */}
              </div> 
              {/* award */}
            </div>
        </div>
            {/* probio */}
        {/* probox */}
        </div>
    )
}