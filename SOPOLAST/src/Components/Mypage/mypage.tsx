import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import TEST8 from "src/Assets/img/B1CODE.png";
import Head from "src/constants/head/Head/head";
import mail from "src/Assets/img/mail.png";
import github1 from "src/Assets/img/github.png";
import nm from "src/Assets/img/hp.png";
import * as s from "src/Components/Mypage/mypage.Style";
import Profile from "./Profile/profile";
import "./mypage.css";

// const YearSelect: React.FC<YearSelect & { index: number }> = ({ active, onClick, children, index }) => (
//   <s.Year className={active ? "selected" : ""} onClick={() => onClick(index)}>
//     {children}
//   </s.Year>
// );


const Mypage:React.FC=()=> {
  const navigate = useNavigate();
  const [isCertifying, setIsCertifying] = useState(false);  
  const [sideName, setSideName] = useState("");
  const [email, setEmail] = useState("");
  const [github, setgithub] = useState("");
  
  useEffect(() => {
    const localStorageName = localStorage.getItem("sopo_nm");
    const localStorageEmail = localStorage.getItem("sopo_id");

    const localStoragegithub = localStorage.getItem("sopo_github");
    if (localStorageEmail) {
      setEmail(localStorageEmail);
    }
    if (localStorageName) {
      setSideName(localStorageName);
    }
    setgithub(localStoragegithub);
  }, []);

  const handleEmailCertify = () => {
    setIsCertifying(true);
  };
  const LeavehandleEmailCertify = () => {
 
    setIsCertifying(false);
  };
  return (
    <s.Main>
        <Head active={true} />
        <s.Bottom>
        <s.TopProfile>
          <s.profilename>
            <s.Top1>{sideName}</s.Top1> 
            <s.Top2>DGSW 8th</s.Top2>
          </s.profilename>
          <s.Fixbutton onClick={() => handleEmailCertify()}>
            <s.FixbuttonT>프로필 수정하기</s.FixbuttonT>
          </s.Fixbutton>
        </s.TopProfile>
        <s.Readme>
          <s.Body1>프론트엔드 개발자</s.Body1>
          <s.Body2>
            안녕하세요! 프론트엔드 개발자라는 꿈을 향해 달리는 {sideName}입니다.
          </s.Body2>
        </s.Readme>
        <s.Social>
          <s.Socialp>
            <s.Pt>
              <s.imgButton>
                <s.link1
                  href={`https://github.com/${github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <s.SocialC src={github1} alt="GitHub" />
                  <s.SocialNam>GitHub.</s.SocialNam>
                  <s.SocialG>{github}ftery0</s.SocialG> 
                </s.link1>
              </s.imgButton>
              <s.imgButton>
                <s.link1 href={`mailto:${email}`}>
                  <s.SocialC src={mail}></s.SocialC>
                  <s.SocialNam>Mail.</s.SocialNam>
                  <s.SocialG>{email}</s.SocialG> 
                  </s.link1>
              </s.imgButton>
              <s.imgButton>
                <s.link1>
                  <s.SocialC src={nm}></s.SocialC>
                  <s.SocialNam>Num.</s.SocialNam>
                  <s.SocialG>{email}</s.SocialG>
                  </s.link1>
              </s.imgButton>
            </s.Pt>
          </s.Socialp>
        </s.Social>
        <s.post_1>
          <s.postrecord>{sideName}님이 쓴 글 보기</s.postrecord>
          <s.PostVeiw>
          <s.post_write onClick={() => {
              navigate("/Updownsub");
            }}>
            <s.Zonecontrol >
              <s.Name>{sideName}이해준</s.Name> 
              <s.Title>바인드 컨버런스를 듣고나서. </s.Title>
              <s.Detail>
                오늘은 팀 바인드에서 주최한 컨퍼런스 바코드에 대해 이야기 하려
                한다. ​<br></br>바코드? 작년겨울 시작 - 주로 일학년을 대상으로 새내기
                개발자들에게 꼭 필요한 지식 전하는 컨퍼런스. <br></br>Git & GitHub /
                백엔드 이지민선배
              </s.Detail>
              <s.Date>2023.09.10</s.Date>
            </s.Zonecontrol>
            
            <s.Img src={TEST8} alt="이미지"></s.Img>
          </s.post_write>
          </s.PostVeiw>
        </s.post_1>
        {isCertifying && (
         <Profile  onClose={LeavehandleEmailCertify}></Profile>
        )}
        </s.Bottom>
    </s.Main>
  );
}
export default Mypage;