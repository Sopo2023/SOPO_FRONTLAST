import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import TEST8 from "../../Assets/img/B1CODE.png";
import Head from "../../constants/head/Head/head";
import Last from "../../Assets/img/Polygon 4.png";
import mail from "../../Assets/img/mail.png";
import github1 from "../../Assets/img/github.png";
import nm from "../../Assets/img/hp.png";
import * as s from "src/Components/Mypage/mypage.Style";
import "./mypage.css";

// const YearSelect: React.FC<YearSelect & { index: number }> = ({ active, onClick, children, index }) => (
//   <s.Year className={active ? "selected" : ""} onClick={() => onClick(index)}>
//     {children}
//   </s.Year>
// );


const Mypage:React.FC=()=> {
  const navigate = useNavigate();
  const [yearSelections, setYearSelections] = useState([
    false,
    false,
    false,
    false,
  ]); 
  // Year 버튼 상태를 저장할 변수
  const [isCertifying, setIsCertifying] = useState(false);
  const [dreamSelections, setdreamSelections] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]); // dream 버튼 상태를 저장할 변수
  const [clubSelections, setclubSelections] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]); // 동아리 버튼 상태를 저장할 변수
  const [selectedSkills, setSelectedSkills] = useState([]); // 중복 선택을 저장할 변수
  const [sideName, setSideName] = useState("");
  const [email, setEmail] = useState("");
  const [github, setgithub] = useState("");
  const [select, setSelect] = useState<boolean>(false);
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

  const toggleYearColor = (index: number) => {
    const updatedSelections = Array(4).fill(false);
    updatedSelections[index] = true;
    setYearSelections(updatedSelections);
  };

  const toggledreamColor = (index) => {
    const updatedSelections = Array(8).fill(false);
    updatedSelections[index] = true;
    setdreamSelections(updatedSelections);
  };
  
  const toggleclubColor = (index) => {
    const updatedSelections = Array(10).fill(false);
    updatedSelections[index] = true;
    setclubSelections(updatedSelections);
  };
  

  const toggleSkill = (skill) => {
    const updatedSkills = [...selectedSkills];

    // 이미 선택된 스킬이면 제거, 아니면 추가
    const index = updatedSkills.indexOf(skill);
    if (index !== -1) {
      updatedSkills.splice(index, 1);
    } else {
      updatedSkills.push(skill);
    }

    setSelectedSkills(updatedSkills);
  };

  return (
    <s.Main>
        <Head active={true} />
        <s.TopProfile>
          <s.Top1>{sideName}</s.Top1> 
          <s.Top2>DGSW 8th</s.Top2>
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
              <s.Git>
                <s.link1
                  href={`https://github.com/${github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <s.SocialC src={github1} alt="GitHub" />
                </s.link1>
                <s.link2 href={`mailto:${github}`}>
                  <s.SocialM>GitHub.</s.SocialM>
                  <s.SocialG>{github}</s.SocialG> 
                </s.link2>
              </s.Git>
              <s.Email>
                <s.link1>
                  <s.SocialC src={mail}></s.SocialC>
                </s.link1>
                <s.link2 href={`mailto:${email}`}>
                  <s.SocialM>Mail.</s.SocialM>
                  <s.SocialG>{email}</s.SocialG> 
                </s.link2>
              </s.Email>
              <s.Number>
                <s.link1>
                  <s.SocialC src={nm}></s.SocialC>
                </s.link1>
                <s.link2>
                  <s.SocialM>Num.</s.SocialM>
                  <s.SocialG>{email}</s.SocialG> 
                  {/* 010-2612-2864 */}
                </s.link2>
              </s.Number>
            </s.Pt>
          </s.Socialp>
        </s.Social>
        <s.post_1>
          <s.post1>{sideName}님이 쓴 글 보기</s.post1>
          <s.post_write
            onClick={() => {
              navigate("/Updownsub");
            }}
          >
            <s.Zonecontrol>
              <s.Name>{sideName}</s.Name> 
              <s.Title>바인드 컨버런스를 듣고나서. </s.Title>
              <s.Detail>
                오늘은 팀 바인드에서 주최한 컨퍼런스 바코드에 대해 이야기 하려
                한다. ​<br></br>바코드? 작년겨울 시작 - 주로 일학년을 대상으로 새내기
                개발자들에게 꼭 필요한 지식 전하는 컨퍼런스. <br></br>Git & GitHub /
                백엔드 이지민선배
              </s.Detail>
              <s.Date>2023.09.10</s.Date>
              <s.Img src={TEST8} alt="이미지"></s.Img>
            </s.Zonecontrol>
          </s.post_write>
        </s.post_1>
        {isCertifying && (
          <s.Pagination>
            <s.Pagination_Writing>
              <s.Leave onClick={LeavehandleEmailCertify}>
                <s.BackButton src={Last} />
              </s.Leave>
              <s.Last_Pagination>내 정보 입력하기</s.Last_Pagination>
              <s.Horseman>
                <s.Writing>
                  <s.WritingM>당신의 기수를 알려주세요</s.WritingM>
                  <s.YearChoice>
                    {" "}
                    {/* 콜백 함수를 사용해서 작성하였습니다 */}
                    {/* <s.Year
                      className={yearSelections[0] ? "selected" : ""}
                      onClick={() => toggleYearColor(0)}
                    >
                      6기(2021)
                    </s.Year> */}
                    <YearSelect index={0} active={yearSelections[0]} onClick={() => toggleYearColor(0)}>
                      6기(2021)
                    </YearSelect>
                    <YearSelect index={1} active={yearSelections[1]} onClick={() => toggleYearColor(1)}>
                      7기(2022)
                    </YearSelect>
                    <YearSelect index={2} active={yearSelections[2]} onClick={() => toggleYearColor(2)}>
                      8기(2023)
                    </YearSelect>
                    <YearSelect index={3} active={yearSelections[3]} onClick={() => toggleYearColor(3)}>
                      9기(2024)
                    </YearSelect>
                  </s.YearChoice>
                </s.Writing>
                <s.Writing>
                  <s.WritingM>당신의 전공은 무엇인가요?</s.WritingM>
                  <s.DreamSelect>
                    <s.Dream
                      className={dreamSelections[0] ? "selected" : ""}
                      onClick={() => toggledreamColor(0)}
                    >
                      프론트엔드
                    </s.Dream>
                    <s.Dream
                      className={dreamSelections[1] ? "selected" : ""}
                      onClick={() => toggledreamColor(1)}
                    >
                      백엔드
                    </s.Dream>
                    <s.Dream
                      className={dreamSelections[2] ? "selected" : ""}
                      onClick={() => toggledreamColor(2)}
                    >
                      Android
                    </s.Dream>
                    <s.Dream
                      className={dreamSelections[3] ? "selected" : ""}
                      onClick={() => toggledreamColor(3)}
                    >
                      iOS
                    </s.Dream>
                    <s.Dream
                      className={dreamSelections[4] ? "selected" : ""}
                      onClick={() => toggledreamColor(4)}
                    >
                      임베디드
                    </s.Dream>
                    <s.Dream
                      className={dreamSelections[5] ? "selected" : ""}
                      onClick={() => toggledreamColor(5)}
                    >
                      AI
                    </s.Dream>
                    <s.Dream
                      className={dreamSelections[6] ? "selected" : ""}
                      onClick={() => toggledreamColor(6)}
                    >
                      정보보안
                    </s.Dream>
                    <s.Dream
                      className={dreamSelections[7] ? "selected" : ""}
                      onClick={() => toggledreamColor(7)}
                    >
                      UI/UX 디자인
                    </s.Dream>
                    <s.Dream
                      className={dreamSelections[8] ? "selected" : ""}
                      onClick={() => toggledreamColor(8)}
                    >
                      풀스택
                    </s.Dream>
                  </s.DreamSelect>
                </s.Writing>
                <s.Writing>
                  <s.WritingM>
                    당신에 대하여 간단하게 설명해주세요!
                  </s.WritingM>
                  <s.Major
                    type="text"
                    placeholder="배움에서 즐거움을 찾는 프론트엔드 개발자, 홍길동 입니다."
                  ></s.Major>
                </s.Writing>
                <s.Writing>
                  <s.WritingM>당신의 동아리는 무엇인가요?</s.WritingM>
                  <s.ClubSelect>
                    <s.Club
                      className={clubSelections[0] ? "selected" : ""}
                      onClick={() => toggleclubColor(0)}
                    >
                      B1ND
                    </s.Club>
                    <s.Club
                      className={clubSelections[1] ? "selected" : ""}
                      onClick={() => toggleclubColor(1)}
                    >
                      CNS
                    </s.Club>
                    <s.Club
                      className={clubSelections[2] ? "selected" : ""}
                      onClick={() => toggleclubColor(2)}
                    >
                      ALT
                    </s.Club>
                    <s.Club
                      className={clubSelections[3] ? "selected" : ""}
                      onClick={() => toggleclubColor(3)}
                    >
                      두카미
                    </s.Club>
                    <s.Club
                      className={clubSelections[4] ? "selected" : ""}
                      onClick={() => toggleclubColor(4)}
                    >
                      삼디
                    </s.Club>
                    <s.Club
                      className={clubSelections[5] ? "selected" : ""}
                      onClick={() => toggleclubColor(5)}
                    >
                      모디
                    </s.Club>
                    <s.Club
                      className={clubSelections[6] ? "selected" : ""}
                      onClick={() => toggleclubColor(6)}
                    >
                      스페이스
                    </s.Club>
                    <s.Club
                      className={clubSelections[7] ? "selected" : ""}
                      onClick={() => toggleclubColor(7)}
                    >
                      DLC
                    </s.Club>
                    <s.Club
                      className={clubSelections[8] ? "selected" : ""}
                      onClick={() => toggleclubColor(8)}
                    >
                      기타
                    </s.Club>
                  </s.ClubSelect>
                </s.Writing>
                <s.Writing>
                  <s.WritingM>
                    {" "}
                    당신의 깃허브 아이디는 무엇인가요?{" "}
                  </s.WritingM>
                  <s.GitUrl
                    type="text"
                    placeholder="당신의 깃허브 URL를 입력해주세요.">
                  </s.GitUrl>
                </s.Writing>
                <s.Writing>
                  <s.WritingM>
                    {" "}
                    당신의 사용가능 스킬은 무엇인가요?{" "}
                  </s.WritingM>
                  <s.SkillsSelect>
                    <s.Skill
                      className={selectedSkills.includes("HTML") ? "selected" : ""}
                      onClick={() => toggleSkill("HTML")}
                    >
                      HTML
                    </s.Skill>
                    <s.Skill
                      className={selectedSkills.includes("CSS") ? "selected" : ""}
                      onClick={() => toggleSkill("CSS")}
                    >
                      CSS
                    </s.Skill>
                    <s.Skill
                      className={selectedSkills.includes("JavaScript") ? "selected" : ""}
                      onClick={() => toggleSkill("JavaScript")}
                    >
                      JavaScript
                    </s.Skill>
                    <s.Skill
                      className={selectedSkills.includes("REACT") ? "selected" : ""}
                      onClick={() => toggleSkill("REACT")}
                    >
                      REACT
                    </s.Skill>
                  </s.SkillsSelect>
                  <div className="SkillsSelect">
                  <div
                    className={`elseSkills ${
                      selectedSkills.includes("HTML") ? "selected" : ""
                    }`}
                    onClick={() => toggleSkill("HTML")}
                  >
                    HTML
                  </div>
                  <div
                    className={`elseSkills ${
                      selectedSkills.includes("CSS") ? "selected" : ""
                    }`}
                    onClick={() => toggleSkill("CSS")}
                  >
                    CSS
                  </div>
                  <div
                    className={`elseSkills ${
                      selectedSkills.includes("JavaScript") ? "selected" : ""
                    }`}
                    onClick={() => toggleSkill("JavaScript")}
                  >
                    JavaScript
                  </div>
                  <div
                    className={`elseSkills ${
                      selectedSkills.includes("REACT") ? "selected" : ""
                    }`}
                    onClick={() => toggleSkill("REACT")}
                  >
                    REACT
                  </div>
                  <div
                    className={`elseSkills ${
                      selectedSkills.includes("Nood.js") ? "selected" : ""
                    }`}
                    onClick={() => toggleSkill("Nood.js")}
                  >
                    Nood.js
                  </div>
                  <div
                    className={`elseSkills ${
                      selectedSkills.includes("JAVA") ? "selected" : ""
                    }`}
                    onClick={() => toggleSkill("JAVA")}
                  >
                    JAVA
                  </div>
                  <div
                    className={`elseSkills ${
                      selectedSkills.includes("Spring") ? "selected" : ""
                    }`}
                    onClick={() => toggleSkill("Spring")}
                  >
                    Spring
                  </div>
                  <div
                    className={`elseSkills ${
                      selectedSkills.includes("Spring Boot") ? "selected" : ""
                    }`}
                    onClick={() => toggleSkill("Spring Boot")}
                  >
                    Spring Boot
                  </div>
                  <div
                    className={`elseSkills ${
                      selectedSkills.includes("Kotlin") ? "selected" : ""
                    }`}
                    onClick={() => toggleSkill("Kotlin")}
                  >
                    Kotlin
                  </div>
                  <div
                    className={`elseSkills ${
                      selectedSkills.includes("Swift") ? "selected" : ""
                    }`}
                    onClick={() => toggleSkill("Swift")}
                  >
                    Kotlin
                  </div>
                  <div
                    className={`elseSkills ${
                      selectedSkills.includes("GG") ? "selected" : ""
                    }`}
                    onClick={() => toggleSkill("GG")}
                  >
                    기타
                  </div>
                </div>
                </s.Writing>
                <s.Writing>
                  <s.WritingM>
                    {" "}
                    당신이 수상이력 어떻게 되나요?
                  </s.WritingM>
                  <s.Award
                    type="text"
                    placeholder="당신의 수상기록을 입력해주세요."></s.Award>
                </s.Writing>
                <s.Writing>
                  <s.WritingM>
                    {" "}
                    당신의 포트폴리오은 무엇인가요?{" "}
                  </s.WritingM>
                </s.Writing>
                <s.Pf
                  type="text"
                  placeholder="당신의 포트폴리오URL를 입력해주세요."
                ></s.Pf>
                <s.Completebutton>완료</s.Completebutton>
              </s.Horseman>
            </s.Pagination_Writing>
          </s.Pagination>
        )}
    </s.Main>
  );
}
export default Mypage;