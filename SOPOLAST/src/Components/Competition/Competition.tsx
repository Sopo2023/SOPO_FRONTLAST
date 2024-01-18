import React from "react";
import { Link } from "react-router-dom";
import Sidname from "../../constants/Sidebar/Side/side";
import Head from "../../constants/head/Head/head";
import "./Competition.css";
import { useNavigate } from "react-router-dom";

import * as S from "../Competition/competiton.sytle"

function Competition() {
  const majorClick = (major) => {
    console.log(`Clicked on ${major}`);
  };

  const majorbutton: HTMLElement | null =
    document.getElementById("majorbutton");

  if (majorbutton) {
    majorbutton.addEventListener("click", function () {
      if (majorbutton.classList.contains("clicked")) {
        majorbutton.classList.remove("clicked");
      } else {
        majorbutton.classList.add("clicked");
      }
    });
  }

  const navigate = useNavigate();

  return (
    <div className="main">
      <div className="content">
        <Head active={true} />
        <Sidname />
        <S.SearchBox>
          <S.Search>
            <S.Searchbox/>
            <S.SearchIcon type="button"/>
            <S.serchIconLine/>
          </S.Search>

          <S.StackLine>
            <>
              <S.GradeSelect className="gradeSelect">
                <option value="8">8기 </option>
                <option value="7">7기 </option>
                <option value="6">6기 </option>
              </S.GradeSelect>
            </>

            <S.GradeGreen> | </S.GradeGreen>
            <S.MajorSelect>
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
            </S.MajorSelect>
          </S.StackLine>
        </S.SearchBox>

        <S.Mo1>
          <S.GatherBox
            onClick={() => {
              navigate("/CompetitionSub");
            }}
          >
            <S.GatherTitle>
              {" "}
              8기 프론트엔드 헬뉴월 해커톤 <br></br> 같이 나갈 분 구해용~~{" "}
            </S.GatherTitle>
            <S.GatherGradeName> DGSW 8th 배채희 </S.GatherGradeName>
            <S.GatherMail> Mail - chaeeehui@gmail.com </S.GatherMail>
          </S.GatherBox>
          <S.GatherBox2>
            <S.GatherTitle>
              {" "}
              ICT 창업경진대회 <br></br> 같이 나갈 프론트 있나요??
            </S.GatherTitle>
            <S.GatherGradeName> DGSW 8th 박규민 </S.GatherGradeName>
            <S.GatherMail> Mail - kyumin@gmail.com </S.GatherMail>
          </S.GatherBox2>
          <S.GatherBox3>
            <S.GatherTitle>
              {" "}
              저 대회나가려고 하는데 8기 <br></br>프론트 아무나 구해요.
            </S.GatherTitle>
            <S.GatherGradeName> DGSW 7th 이해준 </S.GatherGradeName>
            <S.GatherMail> Mail - haejoon@gmail.com </S.GatherMail>
          </S.GatherBox3>
          <S.GatherBox4>
            <S.GatherTitle>
              {" "}
              하이톤 나갈 8기 <br></br>프론트 연락주세요{" "}
            </S.GatherTitle>
            <S.GatherGradeName> DGSW 7th 김가영 </S.GatherGradeName>
            <S.GatherMail> Mail - kiku@gmail.com </S.GatherMail>
          </S.GatherBox4>
          <S.GatherBox5>
            <S.GatherTitle>
              {" "}
              저랑 스택 나갈 프론트... <br></br> 혹시 있나요??
            </S.GatherTitle>
            <S.GatherGradeName> DGSW 8th 제민국 </S.GatherGradeName>
            <S.GatherMail> Mail - jegal@gmail.com </S.GatherMail>
          </S.GatherBox5>
          <S.GatherBox6>
            <S.GatherTitle>
              {" "}
              헬로뉴월드 같이 나갈 <br></br> 프론트엔드 개발자 구합니다.
            </S.GatherTitle>
            <S.GatherGradeName> DGSW 8th 김호준 </S.GatherGradeName>
            <S.GatherMail> Mail - gaemi@gmail.com </S.GatherMail>
          </S.GatherBox6>
        </S.Mo1>
      </div>
    </div>
  );
}

export default Competition;
