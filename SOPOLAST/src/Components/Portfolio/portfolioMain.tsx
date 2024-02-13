import React from "react";
import { useNavigate } from "react-router-dom";
import cnsLogo from "../../Assets/image/cnsLogo.png";
import b1nd from "../../Assets/image/b1nd.png";
import Sidename from "src/constants/Sidebar/Side/side";
import "./protfolio.css";
import Head from "../../constants/head/Head/head"
import MajorLine from "../../constants/MajorLine/Major"

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

          <MajorLine/>
        </S.SearchBox>

        <Sidename />
        <S.Mo>
          <S.NameCardBox
            className="namecardBox"
            onClick={() => {
              navigate("/52562893");
            }}
          >
            <S.CardName>배채희</S.CardName>
            <S.CardGrade> DGSW 8th </S.CardGrade>
            <S.CardMail> Mail - chaeeehui@gmail.com </S.CardMail>
          </S.NameCardBox>

          <S.NameCardBox2
            onClick={() => {
              navigate("/12362153");
            }}
          >
            <S.CardName>박규민</S.CardName>
            <S.CardGrade> DGSW 8th </S.CardGrade>
            <S.CardMail> Mail - kyumin7487@gmail.com </S.CardMail>
          </S.NameCardBox2>

          <S.NameCardBox3>
            <S.CardName> 전우진 </S.CardName>
            <S.CardGrade> DGSW 8th </S.CardGrade>
            <S.CardMail> Mail - woojin@gmail.com </S.CardMail>
          </S.NameCardBox3>

          <S.NameCardBox5>
            <S.CardName> 이윤선 </S.CardName>
            <S.CardGrade> DGSW 8th </S.CardGrade>
            <S.CardMail> Mail - younssun@gmail.com </S.CardMail>
          </S.NameCardBox5>

          <S.NameCardBox4>
            <S.CardName> 이예진 </S.CardName>
            <S.CardGrade> DGSW 8th </S.CardGrade>
            <S.CardMail> Mail - yejin@gmail.com </S.CardMail>
          </S.NameCardBox4>
        </S.Mo>
      </div>
    </div>
  );
}

// export default portfolio();
