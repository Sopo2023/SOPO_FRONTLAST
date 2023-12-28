import React from "react";
import "./side.css"
import { useState, useEffect } from 'react';
import hp from "../../Assets/image/hp.png"
import org from "../../Assets/image/org.png"
import mail from "../../Assets/image/mail.png"
import github1 from "../../Assets/image/github.png"
import kakao from "../../Assets/image/hp.png"

export default function Side(){
  const [sideName, setSideName] = useState('');
  const [email, setemail] = useState('')
  const [github, setgithub] = useState('')
  
  useEffect(() => {
    const localStorageName = localStorage.getItem('sopo_nm');
    const localStorageEmail= localStorage.getItem('sopo_id');
    const localStoragegithub=localStorage.getItem('sopo_github');
    
    if (localStorageName) {
      setSideName(localStorageName);
    }
    if (localStorageEmail) {
      setemail(localStorageEmail);
    }
    setgithub(localStoragegithub)
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
                          <span className='perBio'> CNS</span>
                        </div>

                        <div className='oddBio'>
                          <img src={mail} className='imgBio'></img>
                          <span className='perBio'> {email}</span>
                        </div>

                        <div className='oddBio'>
                          <img src={github1} className='imgBio'></img>
                          <span className='perBio'> {github} </span>
                        </div>

                        <div className='oddBio'>
                          <img src={kakao} className='imgBio'></img>
                          <span className='perBio'> 010-2612-2864 </span>
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