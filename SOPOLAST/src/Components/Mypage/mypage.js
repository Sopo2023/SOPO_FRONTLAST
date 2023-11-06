import { Link , useNavigate } from "react-router-dom";
import { useState } from 'react';
import TEST from "../../Assets/img/postimg.jpeg"
import Head from "../../head/head";
import Last from "../../Assets/img/Polygon 4.png"

export default function Mypage() {
  const navigate = useNavigate(); 
  const [isCertifying, setIsCertifying] = useState(false);
  const handleEmailCertify = () => {
    setIsCertifying(true);
  };
  const LeavehandleEmailCertify = () => {
    setIsCertifying(false);
  };


  return (
    <div className="main">
      <div className="content">
      <Head />
      <div className="top">
        <p className="top1">이해준</p>
        <p className="top2">DGSW 8th</p>
        <br></br>
         <div className="fixbutton" onClick={() => handleEmailCertify()}> 
          <div className="fixbuttonT" >
              프로필 수정하기
          </div>
        </div>
      </div>
      <div className="Readme">
        <p className="head">Frontend-Dev</p>
        <div className="body">
          안녕하세요! 프론트엔드 개발자라는 꿈을 향해 달리는 이해준입니다.
        </div>
      </div>
      <div className="social">
        <p className="head2">About Me</p>
        <div className="socialp">
          <div className="pT">
              <p>
              <Link to="https://github.com/ftery0" className="link1">
                깃:
              </Link>
              <Link to="https://github.com/ftery0" className="link2">@ftery0</Link>
            </p>
            <p>
              <Link to="/mypage/mail" className="link1">
                메일:
              </Link>
              <Link className="link2" href="mailto:lerb5253@dgsw.hs.kr"> 이해준님께 메일쓰기 </Link>
            </p>
            <p>
              <Link to="/mypage/number" className="link1">
                전화번호:
              </Link>
              010-1234-5678
            </p>
            <p>
              <Link to="https://www.instagram.com/hae_jun7388/" className="link1">
                인스타:
              </Link>
              <Link to="https://www.instagram.com/hae_jun7388/" className="link2">@hae_jun7388</Link>
            </p>
            <p>
              <Link to="/mypage/kako" className="link1">
                카톡:
              </Link>
              이해준
            </p>
          </div>
        </div>
      </div>
      
      <div className="post_1">
        <p className="post1">이해준님이 쓴 글 보기</p>
        <div className="post-write" onClick={()=>{navigate("/Updownsub")}}>
          <div className="Zonecontrol">
            <span className="Name">이해준</span>
            <span className="title">바인드 컨버런스를 듣고나서.  </span>
            <span className="detail">
            오늘은 팀 바인드에서 주최한 컨퍼런스 바코드에 대해 이야기 하려 한다.
            ​바코드? 작년겨울 시작
            - 주로 일학년을 대상으로 새내기 개발자들에게 꼭 필요한 지식 전하는 컨퍼런스.
            Git & GitHub / 백엔드 이지민선배
            </span>
            <span className="date">2023.09.10</span>
          </div>
          <span className="img">
            <img
              className="real_img"
              src={TEST}
              alt="이미지"
            ></img>
          </span>

        </div>
      </div>
      {isCertifying && (
              <div className="pagination">
                <div className="pagination-writing">
                  <div id="leave" onClick={LeavehandleEmailCertify}>
                  <div className="last-pagination"><img src={Last} /></div>
                  </div>
                  <div id="last-pagination">내 정보 입력하기</div>
                  <form className="horseman">
                    <span className="writing">
                      당신의 기수를 알려주세요
                      <div className='YearSelect'>
                        <div className='Year'> 6기(2021) </div>
                        <div className='elseYear'> 7기(2022) </div>
                        <div className='elseYear'> 8기(2023) </div>
                        <div className='elseYear'> 9기(2024) </div>
                      </div>
                    </span>
                    <span className="writing1">
                      당신의 전공은 무엇인가요?
                      <div className='dreamSelect'>
                        <div className='dreamfront'> 프론트엔드 </div>
                        <div className='elsedream'> 백엔드 </div>
                        <div className='elsedream'> 안드로이드 </div>
                        <div className='elsedream'> iOS </div>
                        <div className='elsedream'> 임베디드 </div>
                        <div className='elsedream'> AI </div>
                        <div className='elsedream'> 정보보안 </div>
                        <div className='elsedream'> 디자인 </div>
                      </div>
                    </span>
                    <span className="writing2">당신에 대하여 간단하게 설명해주세요!</span>
                    <input 
                    id="major" 
                    type="text"
                    placeholder="배움에서 즐거움을 찾는 프론트엔드 개발자, 홍길동 입니다."
                    ></input>

                    <span className="writing3">당신의 동아리는 무엇인가요?</span>
                    <div className='clubSelect'>
                        <div className='clubB1ND'> B1ND </div>
                        <div className='elseclub'> 두카미 </div>
                        <div className="elseclub"> CNS </div>
                        <div className="elseclub"> ALT </div>
                        <div className="elseclub"> 삼디 </div>
                        <div className="elseclub"> 스페이스 </div>
                        <div className="elseclub"> 모디 </div>
                        <div className="elseclub"> DLC </div>
                        <div className="elseclub"> QI </div>
                        <div className="elseclub"> 기타 </div>
                      </div>

                    <span className="writing4"> 당신의 깃허브 아이디는 무엇인가요? </span>
                    <input 
                    id="git" 
                    type="text"
                    placeholder="당신의 깃허브 아이디를 입력해주세요."
                    ></input>
                    <div className="completebutton">
                    완료
                    </div>
                  </form>
                </div>
              </div>
            )}
      </div>
    </div>
  );
}
