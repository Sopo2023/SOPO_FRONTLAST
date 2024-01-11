import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import TEST8 from "../../Assets/img/B1CODE.png";
import Head from "../../constants/head/Head/head";
import Last from "../../Assets/img/Polygon 4.png";
import mail from "../../Assets/img/mail.png";
import github1 from "../../Assets/img/github.png";
import nm from "../../Assets/img/hp.png";
import "./mypage.css"

export default function Mypage() {
  const navigate = useNavigate();
  const [yearSelections, setYearSelections] = useState([false, false, false, false]); // Year 버튼 상태를 저장할 변수
  const [isCertifying, setIsCertifying] = useState(false);
  const [dreamSelections, setdreamSelections] = useState([false, false, false, false, false, false, false, false]); // dream 버튼 상태를 저장할 변수
  const [clubSelections, setclubSelections] = useState([false, false, false, false, false, false, false, false, false, false]) // 동아리 버튼 상태를 저장할 변수
  const [selectedSkills, setSelectedSkills] = useState([]); // 중복 선택을 저장할 변수
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

  const toggleYearColor = (index) => {
    const updatedSelections = Array(4).fill(false); //콜백 함수 사용해서 코드 리팩토링
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
    <div className="main">
      <div className="content">
        <Head />
        <div className="top">
          <p className="top1">{sideName}</p>
          <p className="top2">DGSW 8th</p>
          <br></br>
          <div className="fixbutton" onClick={() => handleEmailCertify()}>
            <div className="fixbuttonT">프로필 수정하기</div>
          </div>
        </div>
        <div className="Readme">
          <div className="body2">
            안녕하세요! 프론트엔드 개발자라는 꿈을 향해 달리는 {sideName}입니다.
          </div>
        </div>
        <div className="social">
          <p className="head2">About Me</p>
          <div className="socialp">
            <div className="pT">
              <p>
                <Link to={`https://github.com/${github}`} className="link1">
                  <img src={github1}></img>
                </Link>
                <Link to={`https://github.com/${github}`} className="link2">
                  @{github}
                </Link>
              </p>
              <p>
                <Link className="link1">
                  <img src={mail}></img>
                </Link>
                <Link className="link2" href={`mailto:${email}`}>
                  {" "}
                  {sideName}의 이메일{" "}
                </Link>
              </p>
              <p>
                <Link to="/mypage/kako" className="link1">
                  <img src={nm}></img>
                </Link>
                <Link className="link2">010-2612-2864</Link>
              </p>
            </div>
          </div>
        </div>
        <div className="post_1">
          <p className="post1">{sideName}님이 쓴 글 보기</p>
          <div
            className="post-write"
            onClick={() => {
              navigate("/Updownsub");
            }}
          >
            <div className="Zonecontrol">
              <span className="Name">{sideName}</span>
              <span className="title">바인드 컨버런스를 듣고나서. </span>
              <span className="detail">
                오늘은 팀 바인드에서 주최한 컨퍼런스 바코드에 대해 이야기 하려
                한다. ​바코드? 작년겨울 시작 - 주로 일학년을 대상으로 새내기
                개발자들에게 꼭 필요한 지식 전하는 컨퍼런스. Git & GitHub /
                백엔드 이지민선배
              </span>
              <span className="date">2023.09.10</span>
            </div>
            <span className="img">
              <img className="real_img" src={TEST8} alt="이미지"></img>
            </span>
          </div>
        </div>
        {isCertifying && (
          <div className="pagination">
            <div className="pagination-writing">
              <div id="leave" onClick={LeavehandleEmailCertify}>
                <div className="last-pagination">
                  <img className="BackButton" src={Last} onClick={<Mypage />}/>
                </div>
              </div>
              <div id="last-pagination">내 정보 입력하기</div>
              <form className="horseman">
                <span className="writing">
                  당신의 기수를 알려주세요
                  <div className="YearSelect"> {/* 콜백 함수를 사용해서 작성하였습니다 */}
                    <div
                      className={`Year ${yearSelections[0] ? "selected" : ""}`}
                      onClick={() => toggleYearColor(0)}
                    >
                      6기(2021)
                    </div>
                    <div
                      className={`elseYear ${yearSelections[1] ? "selected" : ""}`}
                      onClick={() => toggleYearColor(1)}
                    >
                      7기(2022)
                    </div>
                    <div
                      className={`elseYear ${yearSelections[2] ? "selected" : ""}`}
                      onClick={() => toggleYearColor(2)}
                    >
                      8기(2023)
                    </div>
                    <div
                      className={`elseYear ${yearSelections[3] ? "selected" : ""}`}
                      onClick={() => toggleYearColor(3)}
                    >
                      9기(2024)
                    </div>
                  </div>
                </span>
                <span className="writing1">
                  당신의 전공은 무엇인가요?
                  <div className="dreamSelect">
                    <div
                      className={`elsedream ${dreamSelections[0] ? "selected" : ""}`}
                      onClick={() => toggledreamColor(0)}
                    >
                      프론트엔드
                    </div>
                    <div
                      className={`elsedream ${dreamSelections[1] ? "selected" : ""}`}
                      onClick={() => toggledreamColor(1)}
                    >
                      백엔드
                    </div>
                    <div
                      className={`elsedream ${dreamSelections[2] ? "selected" : ""}`}
                      onClick={() => toggledreamColor(2)}
                    >
                      Android
                    </div>
                    <div
                      className={`elsedream ${dreamSelections[3] ? "selected" : ""}`}
                      onClick={() => toggledreamColor(3)}
                    >
                      iOS
                    </div>
                    <div
                      className={`elsedream ${dreamSelections[4] ? "selected" : ""}`}
                      onClick={() => toggledreamColor(4)}
                    >
                      임베디드
                    </div>
                    <div
                      className={`elsedream ${dreamSelections[5] ? "selected" : ""}`}
                      onClick={() => toggledreamColor(5)}
                    >
                      AI
                    </div>
                    <div
                      className={`elsedream ${dreamSelections[6] ? "selected" : ""}`}
                      onClick={() => toggledreamColor(6)}
                    >
                      정보보안
                    </div>
                    <div
                      className={`elsedream ${dreamSelections[7] ? "selected" : ""}`}
                      onClick={() => toggledreamColor(7)}
                    >
                      UI/UX 디자인
                    </div>
                    <div
                      className={`elsedream ${dreamSelections[8] ? "selected" : ""}`}
                      onClick={() => toggledreamColor(8)}
                    >
                      풀스택
                    </div>
                  </div>
                </span>
                <span className="writing2">
                  당신에 대하여 간단하게 설명해주세요!
                </span>
                <input
                  id="major"
                  type="text"
                  placeholder="배움에서 즐거움을 찾는 프론트엔드 개발자, 홍길동 입니다."
                ></input>

                <span className="writing3">당신의 동아리는 무엇인가요?</span>
                <div className="clubSelect">
                  <div
                    className={`elseclub ${clubSelections[0] ? "selected" : ""}`}
                    onClick={() => toggleclubColor(0)}
                  >
                    B1ND
                  </div>
                  <div
                    className={`elseclub ${
                      clubSelections[1] ? "selected" : ""}`}
                    onClick={() => toggleclubColor(1)}
                  >
                    CNS
                  </div>
                  <div
                    className={`elseclub ${clubSelections[2] ? "selected" : ""
                    }`}
                    onClick={() => toggleclubColor(2)}
                  >
                    ALT
                  </div>
                  <div
                    className={`elseclub ${clubSelections[3] ? "selected" : ""}`}
                    onClick={() => toggleclubColor(3)}
                  >
                    두카미
                  </div>
                  <div
                    className={`elseclub ${clubSelections[4] ? "selected" : ""}`}
                    onClick={() => toggleclubColor(4)}
                  >
                    삼디
                  </div>
                  <div
                    className={`elseclub ${clubSelections[5] ? "selected" : ""
                    }`}
                    onClick={() => toggleclubColor(5)}
                  >
                    스페이스
                  </div>
                  <div
                    className={`elseclub ${clubSelections[6] ? "selected" : ""
                    }`}
                    onClick={() => toggleclubColor(6)}
                  >
                    모디
                  </div>
                  <div
                    className={`elseclub ${clubSelections[7] ? "selected" : ""}`}
                    onClick={() => toggleclubColor(7)}
                  >
                    QI
                  </div>
                  <div
                    className={`elseclub ${clubSelections[8] ? "selected" : ""
                    }`}
                    onClick={() => toggleclubColor(8)}
                  >
                    DLC
                  </div>
                  <div
                    className={`elseclub ${clubSelections[9] ? "selected" : ""
                    }`}
                    onClick={() => toggleclubColor(9)}
                  >
                    기타
                  </div>
                </div>

                <span className="writing4">
                  {" "}
                  당신의 깃허브 아이디는 무엇인가요?{" "}
                </span>
                <input
                  id="git"
                  type="text"
                  placeholder="당신의 깃허브 URL를 입력해주세요."
                ></input>
                <span className="writing6">
                  {" "}
                  당신의 사용가능 스킬은 무엇인가요?{" "}
                </span>
                <div className="SkillsSelect">
                  <div
                    className={`elseSkills ${selectedSkills.includes("HTML") ? "selected" : ""}`}
                    onClick={() => toggleSkill("HTML")}
                  >
                    HTML
                  </div>
                  <div
                    className={`elseSkills ${selectedSkills.includes("CSS") ? "selected" : ""}`}
                    onClick={() => toggleSkill("CSS")}
                  >
                    CSS
                  </div>
                  <div
                    className={`elseSkills ${selectedSkills.includes("JavaScript") ? "selected" : ""}`}
                    onClick={() => toggleSkill("JavaScript")}
                  >
                    JavaScript
                  </div>
                  <div
                    className={`elseSkills ${selectedSkills.includes("REACT") ? "selected" : ""}`}
                    onClick={() => toggleSkill("REACT")}
                  >
                    REACT
                  </div>
                  <div
                    className={`elseSkills ${selectedSkills.includes("Nood.js") ? "selected" : ""}`}
                    onClick={() => toggleSkill("Nood.js")}
                  >
                    Nood.js
                  </div>
                  <div
                    className={`elseSkills ${selectedSkills.includes("JAVA") ? "selected" : ""}`}
                    onClick={() => toggleSkill("JAVA")}
                  >
                    JAVA
                  </div>
                  <div
                    className={`elseSkills ${selectedSkills.includes("Spring") ? "selected" : ""}`}
                    onClick={() => toggleSkill("Spring")}
                  >
                    Spring
                  </div>
                  <div
                    className={`elseSkills ${selectedSkills.includes("Spring Boot") ? "selected" : ""}`}
                    onClick={() => toggleSkill("Spring Boot")}
                  >
                    Spring Boot
                  </div>
                  <div
                    className={`elseSkills ${selectedSkills.includes("Kotlin") ? "selected" : ""}`}
                    onClick={() => toggleSkill("Kotlin")}
                  >
                    Kotlin
                  </div>
                  <div
                    className={`elseSkills ${selectedSkills.includes("Swift") ? "selected" : ""}`}
                    onClick={() => toggleSkill("Swift")}
                  >
                    Kotlin
                  </div>
                  <div
                    className={`elseSkills ${selectedSkills.includes("GG") ? "selected" : ""}`}
                    onClick={() => toggleSkill("GG")}
                  >
                    GG
                  </div>
                </div>
                <span className="writing7">
                  {" "}
                  당신이 수상이력 어떻게 되나요?
                </span>
                <input
                  id="Award"
                  type="text"
                  placeholder="당신의 수상기록을 입력해주세요."
                ></input>
                <span className="writing8">
                  {" "}
                  당신의 포트폴리오은 무엇인가요?{" "}
                </span>
                <input
                  id="kk"
                  type="text"
                  placeholder="당신의 포트폴리오URL를 입력해주세요."
                ></input>
                <div className="completebutton">완료</div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
