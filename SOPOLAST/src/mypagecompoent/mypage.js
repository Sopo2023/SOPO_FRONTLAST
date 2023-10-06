import { Link } from "react-router-dom";

export default function Mypage() {
  return (
    <div className="Mypage">
      <header className="header">
        <h1>
          <Link to="/main" className="SOPO">
            SOPO
          </Link>
        </h1>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/Mentor-Mentee" className="link">
                선배가 후배에게
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="link">
                포트폴리오
              </Link>
            </li>
            <li>
              <Link to="/mypage" className="link">
                내정보
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="top">
        <p className="top1">이해준</p>
        <p className="top2">DGSW 8th</p>
        <br></br>
        <button className="fixbutton">프로필 수정하기</button>
      </div>
      <div className="Readme">
        <p className="head">Frontend-Dev</p>
        <div className="body">
          안녕하세요! 프론트엔드 개발자라는 꿈을 향해 달리는 이해준입니다.
        </div>
      </div>
      <div className="social">
        <p>
          <Link to="/mypage/git">깃</Link>ㅇ니ㅏㅇㄴ
        </p>
        <p>
          <Link to="/mypage/mail">메일</Link>ㅇㅁㅇㅁㅁ
        </p>
        <p>
          <Link to="/mypage/number">전화번호</Link>010-1234-5678
        </p>
        <p>
          <Link to="/mypage/instar">인스타</Link>@apnalchangchangkimseoneung{" "}
        </p>
        <p>
          <Link to="/mypage/kako">카톡</Link>카톡
        </p>
      </div>
      <div></div>
    </div>
  );
}
