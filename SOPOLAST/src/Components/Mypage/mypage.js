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
        <div className="post-write">
          <div className="Zonecontrol">
            <span className="Name">이해준</span>
            <span className="title">4개교 연합 해커톤 프론트엔드  </span>
            <span className="detail">
            2023년 08월 24일 4개교 연합 해커톤을 진행했다.고종현 님 @manudeli 경력 요기요에서
            -Merchant trine : 사장님 관련 서비스 사장 사이트, 사장 관리자 서비스 공통 요기요 디자인, FE
            나의 이야기 제대 전, 수포자 고등학생에서 미대생(디자인전공)으로서의 삶...
            </span>
            <span className="date">2023.09.22</span>
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
