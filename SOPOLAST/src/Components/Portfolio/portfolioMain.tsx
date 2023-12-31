import React from "react";
import { useNavigate } from "react-router-dom";
import cnsLogo from "../../Assets/image/cnsLogo.png";
import b1nd from "../../Assets/image/b1nd.png";
import Sidename from "../../constants/Sidebar/side";
import "./protfolio.css";
import Head from "../../constants/head/head";

export default function Portfolio() {
  const navigate = useNavigate();

  return (
    <div className="main">
      <div className="content">
        <Head />

        <div className="searchBox">
          <div className="search">
            <input className="search_box"></input>
            <input type="button" className="search_icon"></input>
            <div className="searcg_icon_line"></div>
          </div>

          <div className="stackLine">
            <select className="gradeSelet">
              <option value="8">8기 </option>
              <option value="7">7기 </option>
              <option value="6">6기 </option>
            </select>
            <div className="gradegreen"> | </div>
            <div className="majorSelect">
              <div className="frontEnd"> 프론트엔드 </div>
              <div className="elseMajor"> 백엔드 </div>
              <div className="elseMajor"> 안드로이드 </div>
              <div className="elseMajor"> iOS </div>
              <div className="elseMajor"> 임베디드 </div>
              <div className="elseMajor"> AI </div>
              <div className="elseMajor"> 정보보안 </div>
              <div className="elseMajor"> 디자인 </div>
            </div>
          </div>
        </div>

        <Sidename />
        <div className="mo">
          <div
            className="namecardBox"
            onClick={() => {
              navigate("/52562893");
            }}
          >
            <div className="nameName">배채희</div>
            <div className="nameGrade"> DGSW 8th </div>
            <div className="nameMail"> Mail - chaeeehui@gmail.com </div>
          </div>

          <div
            className="namecardBox2"
            onClick={() => {
              navigate("/12362153");
            }}
          >
            <div className="nameName">박규민</div>
            <div className="nameGrade"> DGSW 8th </div>
            <div className="nameMail"> Mail - kyumin7487@gmail.com </div>
          </div>

          <div className="namecardBox3">
            <div className="nameName"> 전우진 </div>
            <div className="nameGrade"> DGSW 8th </div>
            <div className="nameMail"> Mail - woojin@gmail.com </div>
          </div>

          <div className="namecardBox5">
            <div className="nameName"> 이윤선 </div>
            <div className="nameGrade"> DGSW 8th </div>
            <div className="nameMail"> Mail - younssun@gmail.com </div>
          </div>

          <div className="namecardBox4">
            <div className="nameName"> 이예진 </div>
            <div className="nameGrade"> DGSW 8th </div>
            <div className="nameMail"> Mail - yejin@gmail.com </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default portfolio();
