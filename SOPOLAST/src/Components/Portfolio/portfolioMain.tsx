import React from "react";
import { useNavigate } from "react-router-dom";
import cnsLogo from "../../Assets/image/cnsLogo.png";
import b1nd from "../../Assets/image/b1nd.png";
import Sidename from "../../constants/Sidebar/side";
import "./protfolio.css";
import Head from "../../constants/head/Head/head"

import * as S from "../Portfolio/portfolioMain.style"

export default function Portfolio() {
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
        <Head active={true}/>

        <S.SearchBox>
          <S.Search>
            <S.Searchbox/>
            <S.SearchIcon type="button"/>
            <S.serchIconLine/>
          </S.Search>

          <S.StackLine>
            <S.GradeSelect>
              <select className="gradeSelect">
                <option value="8">8기 </option>
                <option value="7">7기 </option>
                <option value="6">6기 </option>
              </select>
            </S.GradeSelect>

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
          </S.StackLine>
        </S.SearchBox>

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
