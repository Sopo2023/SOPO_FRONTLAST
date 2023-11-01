import { Link } from "react-router-dom";
import TEST from "../../Assets/img/postimg.jpeg"
import Head from "../../head/head";

export default function Mypage() {
  return (
    <div className="main">
      <div className="content">
      <Head />
      <div className="top">
        <p className="top1">이해준</p>
        <p className="top2">DGSW 8th</p>
        <br></br>
        <Link to="./mypageadjustment.js" className="fixbutton">
          프로필 수정하기
        </Link>
      </div>
      <div className="Readme">
        <p className="head">Frontend-Dev</p>
        <div className="body">
          안녕하세요! 프론트엔드 개발자라는 꿈을 향해 달리는 이해준입니다.
        </div>
      </div>
      <div className="social">
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
          <a href="mailto:lerb5253@dgsw.hs.kr"> 이해준님께 메일쓰기 </a>
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
      {/* <div className="post_mainnn"> */}
      <div className="post_1">
        <p className="post1">이해준님이 쓴 글 보기</p>
        <div className="post-write">
          <div className="Zonecontrol">
            <span className="Name">이해준</span>
            <span className="title">오늘 먹은거 </span>
            <span className="detail">
              햄버거 치킨 피자 짜장면 마라탕 탕후루 사과 탕수육 치즈 
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
      </div>
    </div>
  );
}
