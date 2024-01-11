import React from "react";
import { Link } from "react-router-dom";
import Sidname from "../../constants/Sidebar/side";
import Head from "../../constants/head/Head/head";
import "./Competition.css";
import { useNavigate } from "react-router-dom";

function Competition() {
  const majorClick = (major) => {
    console.log(`Clicked on ${major}`);
  };

  const majorbutton: HTMLElement | null = document.getElementById('majorbutton');

  if (majorbutton) {
    majorbutton.addEventListener('click', function() {
      if (majorbutton.classList.contains('clicked')) {
        majorbutton.classList.remove('clicked');
      } else {
        majorbutton.classList.add('clicked');
      }
    });
  }

  const navigate = useNavigate();
  return (
    <div className="main">
      <div className="content">
        <Head />
        <Sidname />
        <div className="searchBox">
          <div className="search">
            <input className="search_box"></input>
            <input type="button" className="search_icon"></input>
            <div className="searcg_icon_line"></div>
          </div>
          <div className="stackLine">
            <select className="gradeSelet">
              <option>8기 </option>
              <option>7기 </option>
              <option>6기 </option>
            </select>
            <div className="gradegreen"> | </div>
            <div className="majorSelect">
              <button
              className="majorbutton"
              onClick={() => majorClick('프론트엔드')}
              >
              프론트엔드
              </button>

              <button
              className="majorbutton"
              onClick={() => majorClick('백엔드')}
              >
              백엔드
              </button>

              <button
              className="majorbutton"
              onClick={() => majorClick('안드로이드')}
              >
              안드로이드
              </button>

              <button
              className="majorbutton"
              onClick={() => majorClick('iOS')}
              >
              iOS
              </button>

              <button
              className="majorbutton"
              onClick={() => majorClick('임베디드')}
              >
              임베디드
              </button>

              <button
              className="majorbutton"
              onClick={() => majorClick('AI')}
              >
              AI
              </button>

              <button
              className="majorbutton"
              onClick={() => majorClick('정보보안')}
              >
              정보보안
              </button>

              <button
              className="majorbutton"
              onClick={() => majorClick('디자인')}
              >
              디자인
              </button>
            </div>
          </div>
        </div>
        <div className="mo1">
          <div
            className="gatherBox"
            onClick={() => {
              navigate("/CompetitionSub");
            }}
          >
            <div className="gatherTitle">
              {" "}
              8기 프론트엔드 헬뉴월 해커톤 <br></br> 같이 나갈 분 구해용~~{" "}
            </div>
            <div className="gatherGradeName"> DGSW 8th 배채희 </div>
            <div className="gatherMail"> Mail - chaeeehui@gmail.com </div>
          </div>
          <div className="gatherBox2">
            <div className="gatherTitle">
              {" "}
              ICT 창업경진대회 <br></br> 같이 나갈 프론트 있나요??
            </div>
            <div className="gatherGradeName"> DGSW 8th 박규민 </div>
            <div className="gatherMail"> Mail - kyumin@gmail.com </div>
          </div>
          <div className="gatherBox3">
            <div className="gatherTitle">
              {" "}
              저 대회나가려고 하는데 8기 <br></br>프론트 아무나 구해요.
            </div>
            <div className="gatherGradeName"> DGSW 7th 이해준 </div>
            <div className="gatherMail"> Mail - haejoon@gmail.com </div>
          </div>
          <div className="gatherBox4">
            <div className="gatherTitle">
              {" "}
              하이톤 나갈 8기 <br></br>프론트 연락주세요{" "}
            </div>
            <div className="gatherGradeName"> DGSW 7th 김가영 </div>
            <div className="gatherMail"> Mail - kiku@gmail.com </div>
          </div>
          <div className="gatherBox5">
            <div className="gatherTitle">
              {" "}
              저랑 스택 나갈 프론트... <br></br> 혹시 있나요??
            </div>
            <div className="gatherGradeName"> DGSW 8th 제민국 </div>
            <div className="gatherMail"> Mail - jegal@gmail.com </div>
          </div>
          <div className="gatherBox6">
            <div className="gatherTitle">
              {" "}
              헬로뉴월드 같이 나갈 <br></br> 프론트엔드 개발자 구합니다.
            </div>
            <div className="gatherGradeName"> DGSW 8th 김호준 </div>
            <div className="gatherMail"> Mail - gaemi@gmail.com </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Competition;
