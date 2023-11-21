import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import TEST8 from "../../Assets/img/B1CODE.png";
import Head from "../../constants/head/head";
import Last from "../../Assets/img/Polygon 4.png";
import mail from "../../Assets/img/mail.png";
import github1 from "../../Assets/img/github.png";
import nm from "../../Assets/img/hp.png";

export default function Mypage() {
  const navigate = useNavigate();
  const [isCertifying, setIsCertifying] = useState(false);
  const [isYearSelected, setIsYearSelected] = useState(false); // Year 버튼 상태를 저장할 변수
  const [is7thYearSelected, setIs7thYearSelected] = useState(false);
  const [is8thYearSelected, setIs8thYearSelected] = useState(false);
  const [is9thYearSelected, setIs9thYearSelected] = useState(false);

  const [isfrontdreamSelected, setIsfrontdreamSelected] = useState(false); // dream 버튼 상태를 저장할 변수
  const [isbackenddreamSelected, setIsbackenddreamSelected] = useState(false);
  const [isAndroiddreamSelected, setIsAndroiddreamSelected] = useState(false);
  const [isiOSdreamSelected, setIsiOSdreamSelected] = useState(false);
  const [isEmbeddeddreamSelected, setIsEmbeddeddreamSelected] = useState(false);
  const [isAIdreamSelected, setIsAIdreamSelected] = useState(false);
  const [isInfoSecdreamSelected, setIsInfoSecdreamSelected] = useState(false);
  const [isdesigndreamSelected, setIsdesigndreamSelected] = useState(false);
  const [isfullstackdreamSelected, setIsfullstackdreamSelected] =
    useState(false);

  const [isB1NDclubSelected, setIsB1NDclubSelected] = useState(false); // 동아리 버튼 상태를 저장할 변수
  const [isCNSclubSelected, setIsCNSclubSelected] = useState(false);
  const [isDoclubSelected, setIsDoclubSelected] = useState(false);
  const [isALTclubSelected, setIsALTclubSelected] = useState(false);
  const [is3DclubSelected, setIs3DclubSelected] = useState(false);
  const [isSpaceclubSelected, setIsSpaceclubSelected] = useState(false);
  const [isModiclubSelected, setIsModiclubSelected] = useState(false);
  const [isDLCclubSelected, setIsDLCclubSelected] = useState(false);
  const [isQIclubSelected, setIsQIclubSelected] = useState(false);
  const [iselseeclubSelected, setIselseeclubSelected] = useState(false);

  const [isHTMLSkillsSelected, setIsHTMLSkillsSelected] = useState(false); // 전공선택 버튼 상태를 저장할 변수
  const [isCSSkillsSelected, setIsCSSkillsSelected] = useState(false);
  const [isJavascriptSkillsSelected, setIsJavascriptSkillsSelected] =
    useState(false);
  const [isREACTSkillsSelected, setIsREACTSkillsSelected] = useState(false);
  const [isJavaSkillsSelected, setIsJavaSkillsSelected] = useState(false);
  const [isSpringSkillsSelected, setIsSpringSkillsSelected] = useState(false);
  const [isSpringBootSkillsSelected, setIsSpringBootSkillsSelected] =
    useState(false);
  const [isnoodjsSkillsSelected, setIsnoodjsSkillsSelected] = useState(false);
  const [isKotlinSkillsSelected, setIsKotlinSkillsSelected] = useState(false);
  const [isSwiftSkillsSelected, setIsSwiftSkillsSelected] = useState(false);
  const [isGGSkillsSelected, setIsGGSkillsSelected] = useState(false);

  const [sideName, setSideName] = useState("");
  const [email, setEmail] = useState("");
  const [instagram, setinstagram] = useState("");
  const [github, setgithub] = useState("");

  // const localStorageName = localStorage.getItem('sopo_nm');
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

  const toggleYearColor = () => {
    // Year 버튼을 클릭할 때 색상을 변경
    setIsYearSelected(true); // 현재 클릭된 버튼만 선택
    setIs7thYearSelected(false); // 다른 버튼들의 상태 초기화
    setIs8thYearSelected(false);
    setIs9thYearSelected(false);
  };

  const toggle7thYearColor = () => {
    // 7기 버튼을 클릭할 때 색상을 변경
    setIs7thYearSelected(true); // 현재 클릭된 버튼만 선택
    setIsYearSelected(false); // 다른 버튼들의 상태 초기화
    setIs8thYearSelected(false);
    setIs9thYearSelected(false);
  };

  const toggle8thYearColor = () => {
    // 8기 버튼을 클릭할 때 색상을 변경
    setIs8thYearSelected(true); // 현재 클릭된 버튼만 선택
    setIsYearSelected(false); // 다른 버튼들의 상태 초기화
    setIs7thYearSelected(false);
    setIs9thYearSelected(false);
  };

  const toggle9thYearColor = () => {
    // 9기 버튼을 클릭할 때 색상을 변경
    setIs9thYearSelected(true); // 현재 클릭된 버튼만 선택
    setIsYearSelected(false); // 다른 버튼들의 상태 초기화
    setIs7thYearSelected(false);
    setIs8thYearSelected(false);
  };

  const togglefrontdreamColor = () => {
    // dream색깔 바꾸기
    setIsfrontdreamSelected(!isfrontdreamSelected);
    setIsbackenddreamSelected(false);
    setIsAndroiddreamSelected(false);
    setIsiOSdreamSelected(false);
    setIsEmbeddeddreamSelected(false);
    setIsAIdreamSelected(false);
    setIsInfoSecdreamSelected(false);
    setIsdesigndreamSelected(false);
    setIsfullstackdreamSelected(false);
  };

  const togglebackenddreamColor = () => {
    setIsbackenddreamSelected(!isbackenddreamSelected);
    setIsfrontdreamSelected(false);
    setIsAndroiddreamSelected(false);
    setIsiOSdreamSelected(false);
    setIsEmbeddeddreamSelected(false);
    setIsAIdreamSelected(false);
    setIsInfoSecdreamSelected(false);
    setIsdesigndreamSelected(false);
    setIsfullstackdreamSelected(false);
  };

  const toggleAndroiddreamColor = () => {
    setIsAndroiddreamSelected(!isAndroiddreamSelected);
    setIsfrontdreamSelected(false);
    setIsbackenddreamSelected(false);
    setIsiOSdreamSelected(false);
    setIsEmbeddeddreamSelected(false);
    setIsAIdreamSelected(false);
    setIsInfoSecdreamSelected(false);
    setIsdesigndreamSelected(false);
    setIsfullstackdreamSelected(false);
  };

  const toggleiOSdreamColor = () => {
    setIsiOSdreamSelected(!isiOSdreamSelected);
    setIsfrontdreamSelected(false);
    setIsbackenddreamSelected(false);
    setIsAndroiddreamSelected(false);
    setIsEmbeddeddreamSelected(false);
    setIsAIdreamSelected(false);
    setIsInfoSecdreamSelected(false);
    setIsdesigndreamSelected(false);
    setIsfullstackdreamSelected(false);
  };

  const toggleEmbeddeddreamColor = () => {
    setIsEmbeddeddreamSelected(!isEmbeddeddreamSelected);
    setIsfrontdreamSelected(false);
    setIsbackenddreamSelected(false);
    setIsAndroiddreamSelected(false);
    setIsiOSdreamSelected(false);
    setIsAIdreamSelected(false);
    setIsInfoSecdreamSelected(false);
    setIsdesigndreamSelected(false);
    setIsfullstackdreamSelected(false);
  };

  const toggleAIdreamColor = () => {
    setIsAIdreamSelected(!isAIdreamSelected);
    setIsfrontdreamSelected(false);
    setIsbackenddreamSelected(false);
    setIsAndroiddreamSelected(false);
    setIsiOSdreamSelected(false);
    setIsEmbeddeddreamSelected(false);
    setIsInfoSecdreamSelected(false);
    setIsdesigndreamSelected(false);
    setIsfullstackdreamSelected(false);
  };

  const toggleInfoSecdreamColor = () => {
    setIsInfoSecdreamSelected(!isInfoSecdreamSelected);
    setIsfrontdreamSelected(false);
    setIsbackenddreamSelected(false);
    setIsAndroiddreamSelected(false);
    setIsiOSdreamSelected(false);
    setIsEmbeddeddreamSelected(false);
    setIsAIdreamSelected(false);
    setIsdesigndreamSelected(false);
    setIsfullstackdreamSelected(false);
  };

  const toggledesigndreamColor = () => {
    setIsdesigndreamSelected(!isdesigndreamSelected);
    setIsfrontdreamSelected(false);
    setIsbackenddreamSelected(false);
    setIsAndroiddreamSelected(false);
    setIsiOSdreamSelected(false);
    setIsEmbeddeddreamSelected(false);
    setIsAIdreamSelected(false);
    setIsInfoSecdreamSelected(false);
    setIsfullstackdreamSelected(false);
  };

  const togglefullstackdreamColor = () => {
    setIsfullstackdreamSelected(!isfullstackdreamSelected);
    setIsfrontdreamSelected(false);
    setIsbackenddreamSelected(false);
    setIsAndroiddreamSelected(false);
    setIsiOSdreamSelected(false);
    setIsEmbeddeddreamSelected(false);
    setIsAIdreamSelected(false);
    setIsInfoSecdreamSelected(false);
    setIsdesigndreamSelected(false);
  };

  const toggleB1NDclubColor = () => {
    // 동아리색깔 바꾸기
    setIsB1NDclubSelected(!isB1NDclubSelected);
    setIsCNSclubSelected(false);
    setIsALTclubSelected(false);
    setIsDoclubSelected(false);
    setIs3DclubSelected(false);
    setIsSpaceclubSelected(false);
    setIsModiclubSelected(false);
    setIsDLCclubSelected(false);
    setIsQIclubSelected(false);
    setIselseeclubSelected(false);
  };

  const toggleCNSclubColor = () => {
    setIsCNSclubSelected(!isCNSclubSelected);
    setIsB1NDclubSelected(false);
    setIsALTclubSelected(false);
    setIsDoclubSelected(false);
    setIs3DclubSelected(false);
    setIsSpaceclubSelected(false);
    setIsModiclubSelected(false);
    setIsDLCclubSelected(false);
    setIsQIclubSelected(false);
    setIselseeclubSelected(false);
  };

  const toggleDoclubColor = () => {
    setIsDoclubSelected(!isDoclubSelected);
    setIsB1NDclubSelected(false);
    setIsCNSclubSelected(false);
    setIsALTclubSelected(false);
    setIs3DclubSelected(false);
    setIsSpaceclubSelected(false);
    setIsModiclubSelected(false);
    setIsDLCclubSelected(false);
    setIsQIclubSelected(false);
    setIselseeclubSelected(false);
  };

  const toggleALTclubColor = () => {
    setIsALTclubSelected(!isALTclubSelected);
  };

  const toggle3DclubColor = () => {
    setIs3DclubSelected(!is3DclubSelected);
    setIsB1NDclubSelected(false);
    setIsCNSclubSelected(false);
    setIsALTclubSelected(false);
    setIsDoclubSelected(false);
    setIsSpaceclubSelected(false);
    setIsModiclubSelected(false);
    setIsDLCclubSelected(false);
    setIsQIclubSelected(false);
    setIselseeclubSelected(false);
  };

  const toggleSpaceclubColor = () => {
    setIsSpaceclubSelected(!isSpaceclubSelected);
    setIsB1NDclubSelected(false);
    setIsCNSclubSelected(false);
    setIsALTclubSelected(false);
    setIsDoclubSelected(false);
    setIs3DclubSelected(false);
    setIsModiclubSelected(false);
    setIsDLCclubSelected(false);
    setIsQIclubSelected(false);
    setIselseeclubSelected(false);
  };

  const toggleModiclubColor = () => {
    setIsModiclubSelected(!isModiclubSelected);
    setIsB1NDclubSelected(false);
    setIsCNSclubSelected(false);
    setIsALTclubSelected(false);
    setIsDoclubSelected(false);
    setIs3DclubSelected(false);
    setIsSpaceclubSelected(false);
    setIsDLCclubSelected(false);
    setIsQIclubSelected(false);
    setIselseeclubSelected(false);
  };

  const toggleDLCclubColor = () => {
    setIsDLCclubSelected(!isDLCclubSelected);
    setIsB1NDclubSelected(false);
    setIsCNSclubSelected(false);
    setIsALTclubSelected(false);
    setIsDoclubSelected(false);
    setIs3DclubSelected(false);
    setIsSpaceclubSelected(false);
    setIsModiclubSelected(false);
    setIsQIclubSelected(false);
    setIselseeclubSelected(false);
  };

  const toggleQIclubColor = () => {
    setIsQIclubSelected(!isQIclubSelected);
    setIsB1NDclubSelected(false);
    setIsCNSclubSelected(false);
    setIsALTclubSelected(false);
    setIsDoclubSelected(false);
    setIs3DclubSelected(false);
    setIsSpaceclubSelected(false);
    setIsModiclubSelected(false);
    setIsDLCclubSelected(false);
    setIselseeclubSelected(false);
  };

  const toggleelseeclubColor = () => {
    setIselseeclubSelected(!iselseeclubSelected);
    setIsB1NDclubSelected(false);
    setIsCNSclubSelected(false);
    setIsALTclubSelected(false);
    setIsDoclubSelected(false);
    setIs3DclubSelected(false);
    setIsSpaceclubSelected(false);
    setIsModiclubSelected(false);
    setIsDLCclubSelected(false);
    setIsQIclubSelected(false);
  };

  const toggleHTMLSkillsColor = () => {
    setIsHTMLSkillsSelected(!isHTMLSkillsSelected);
  };

  const toggleCSSkillsColor = () => {
    setIsCSSkillsSelected(!isCSSkillsSelected);
  };

  const toggleJavascriptSkillsColor = () => {
    setIsJavascriptSkillsSelected(!isJavascriptSkillsSelected);
  };

  const toggleREACTSkillsColor = () => {
    setIsREACTSkillsSelected(!isREACTSkillsSelected);
  };

  const toggleJavaSkillsColor = () => {
    setIsJavaSkillsSelected(!isJavaSkillsSelected);
  };

  const toggleSpringSkillsColor = () => {
    setIsSpringSkillsSelected(!isSpringSkillsSelected);
  };

  const toggleSpringBootSkillsColor = () => {
    setIsSpringBootSkillsSelected(!isSpringBootSkillsSelected);
  };

  const togglenoodjsSkillsColor = () => {
    setIsnoodjsSkillsSelected(!isnoodjsSkillsSelected);
  };

  const toggleKotlinSkillsColor = () => {
    setIsKotlinSkillsSelected(!isKotlinSkillsSelected);
  };

  const toggleSwiftSkillsColor = () => {
    setIsSwiftSkillsSelected(!isSwiftSkillsSelected);
  };

  const toggleGGSkillsColor = () => {
    setIsGGSkillsSelected(!isGGSkillsSelected);
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
          <p className="head">프론트엔드 개발자</p>
          <div className="body">
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
                  <img src={Last} />
                </div>
              </div>
              <div id="last-pagination">내 정보 입력하기</div>
              <form className="horseman">
                <span className="writing">
                  당신의 기수를 알려주세요
                  <div className="YearSelect">
                    {/* Year 버튼을 클릭할 때 색상을 변경 */}
                    <div className="YearSelect">
                      <div
                        className={`Year ${isYearSelected ? "selected" : ""}`}
                        onClick={toggleYearColor}
                      >
                        6기(2021)
                      </div>
                      <div
                        className={`elseYear ${
                          is7thYearSelected ? "selected" : ""
                        }`}
                        onClick={toggle7thYearColor}
                      >
                        7기(2022)
                      </div>
                      <div
                        className={`elseYear ${
                          is8thYearSelected ? "selected" : ""
                        }`}
                        onClick={toggle8thYearColor}
                      >
                        8기(2023)
                      </div>
                      <div
                        className={`elseYear ${
                          is9thYearSelected ? "selected" : ""
                        }`}
                        onClick={toggle9thYearColor}
                      >
                        9기(2024)
                      </div>
                    </div>
                  </div>
                </span>
                <span className="writing1">
                  당신의 전공은 무엇인가요?
                  <div className="dreamSelect">
                    <div
                      className={`elsedream ${
                        isfrontdreamSelected ? "selected" : ""
                      }`}
                      onClick={togglefrontdreamColor}
                    >
                      프론트엔드
                    </div>
                    <div
                      className={`elsedream ${
                        isbackenddreamSelected ? "selected" : ""
                      }`}
                      onClick={togglebackenddreamColor}
                    >
                      백엔드
                    </div>
                    <div
                      className={`elsedream ${
                        isAndroiddreamSelected ? "selected" : ""
                      }`}
                      onClick={toggleAndroiddreamColor}
                    >
                      Android
                    </div>
                    <div
                      className={`elsedream ${
                        isiOSdreamSelected ? "selected" : ""
                      }`}
                      onClick={toggleiOSdreamColor}
                    >
                      iOS
                    </div>
                    <div
                      className={`elsedream ${
                        isEmbeddeddreamSelected ? "selected" : ""
                      }`}
                      onClick={toggleEmbeddeddreamColor}
                    >
                      임베디드
                    </div>
                    <div
                      className={`elsedream ${
                        isAIdreamSelected ? "selected" : ""
                      }`}
                      onClick={toggleAIdreamColor}
                    >
                      AI
                    </div>
                    <div
                      className={`elsedream ${
                        isInfoSecdreamSelected ? "selected" : ""
                      }`}
                      onClick={toggleInfoSecdreamColor}
                    >
                      정보보안
                    </div>
                    <div
                      className={`elsedream ${
                        isdesigndreamSelected ? "selected" : ""
                      }`}
                      onClick={toggledesigndreamColor}
                    >
                      디자인
                    </div>
                    <div
                      className={`elsedream ${
                        isfullstackdreamSelected ? "selected" : ""
                      }`}
                      onClick={togglefullstackdreamColor}
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
                    className={`elseclub ${
                      isB1NDclubSelected ? "selected" : ""
                    }`}
                    onClick={toggleB1NDclubColor}
                  >
                    B1ND
                  </div>
                  <div
                    className={`elseclub ${
                      isCNSclubSelected ? "selected" : ""
                    }`}
                    onClick={toggleCNSclubColor}
                  >
                    CNS
                  </div>
                  <div
                    className={`elseclub ${
                      isALTclubSelected ? "selected" : ""
                    }`}
                    onClick={toggleALTclubColor}
                  >
                    ALT
                  </div>
                  <div
                    className={`elseclub ${isDoclubSelected ? "selected" : ""}`}
                    onClick={toggleDoclubColor}
                  >
                    두카미
                  </div>
                  <div
                    className={`elseclub ${is3DclubSelected ? "selected" : ""}`}
                    onClick={toggle3DclubColor}
                  >
                    삼디
                  </div>
                  <div
                    className={`elseclub ${
                      isSpaceclubSelected ? "selected" : ""
                    }`}
                    onClick={toggleSpaceclubColor}
                  >
                    스페이스
                  </div>
                  <div
                    className={`elseclub ${
                      isModiclubSelected ? "selected" : ""
                    }`}
                    onClick={toggleModiclubColor}
                  >
                    모디
                  </div>
                  <div
                    className={`elseclub ${isQIclubSelected ? "selected" : ""}`}
                    onClick={toggleQIclubColor}
                  >
                    QI
                  </div>
                  <div
                    className={`elseclub ${
                      isDLCclubSelected ? "selected" : ""
                    }`}
                    onClick={toggleDLCclubColor}
                  >
                    DLC
                  </div>
                  <div
                    className={`elseclub ${
                      iselseeclubSelected ? "selected" : ""
                    }`}
                    onClick={toggleelseeclubColor}
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

                {/* <span className="writing5"> 당신의 인스타는 무엇인가요? </span>
                    <input 
                    id="inst" 
                    type="text"
                    placeholder="당신의 인스타 URL을 입력해주세요."
                    ></input> */}

                <span className="writing6">
                  {" "}
                  당신의 사용가능 스킬은 무엇인가요?{" "}
                </span>
                <div className="SkillsSelect">
                  <div
                    className={`elseSkills ${
                      isHTMLSkillsSelected ? "selected" : ""
                    }`}
                    onClick={toggleHTMLSkillsColor}
                  >
                    HTML
                  </div>
                  <div
                    className={`elseSkills ${
                      isCSSkillsSelected ? "selected" : ""
                    }`}
                    onClick={toggleCSSkillsColor}
                  >
                    CSS
                  </div>
                  <div
                    className={`elseSkills ${
                      isJavascriptSkillsSelected ? "selected" : ""
                    }`}
                    onClick={toggleJavascriptSkillsColor}
                  >
                    JavaScript
                  </div>
                  <div
                    className={`elseSkills ${
                      isREACTSkillsSelected ? "selected" : ""
                    }`}
                    onClick={toggleREACTSkillsColor}
                  >
                    REACT
                  </div>
                  <div
                    className={`elseSkills ${
                      isnoodjsSkillsSelected ? "selected" : ""
                    }`}
                    onClick={togglenoodjsSkillsColor}
                  >
                    Nood.js
                  </div>
                  <div
                    className={`elseSkills ${
                      isJavaSkillsSelected ? "selected" : ""
                    }`}
                    onClick={toggleJavaSkillsColor}
                  >
                    JAVA
                  </div>
                  <div
                    className={`elseSkills ${
                      isSpringSkillsSelected ? "selected" : ""
                    }`}
                    onClick={toggleSpringSkillsColor}
                  >
                    Spring
                  </div>
                  <div
                    className={`elseSkills ${
                      isSpringBootSkillsSelected ? "selected" : ""
                    }`}
                    onClick={toggleSpringBootSkillsColor}
                  >
                    Spring Boot
                  </div>
                  <div
                    className={`elseSkills ${
                      isKotlinSkillsSelected ? "selected" : ""
                    }`}
                    onClick={toggleKotlinSkillsColor}
                  >
                    Kotlin
                  </div>
                  <div
                    className={`elseSkills ${
                      isSwiftSkillsSelected ? "selected" : ""
                    }`}
                    onClick={toggleSwiftSkillsColor}
                  >
                    Swift
                  </div>
                  <div
                    className={`elseSkills ${
                      isGGSkillsSelected ? "selected" : ""
                    }`}
                    onClick={toggleGGSkillsColor}
                  >
                    기타
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
