import React from "react";
import * as S from "../side.style";
import { useState, useEffect } from "react";
import hp from "src/Assets/image/hp.png";
import org from "src/Assets/image/org.png";
import mail from "src/Assets/image/mail.png";
import github1 from "src/Assets/image/github.png";
import kakao from "src/Assets/image/hp.png";
import UseSidebar from "src/hooks/Sidebar/useSidebar";

export default function Side() {
const {
  sideName,
  Email,
  skill,
  award,
  club,
  github,
}=UseSidebar();
  return (
    <S.side>
      <S.proBox1>
        <S.allContainer>
          <S.NameBox>
            {" "}
            <S.ProName>{sideName}박규민 </S.ProName>
          </S.NameBox>
          <S.profile>
            <S.proBorder>
              <S.proMain>
                <S.Span>
                  안녕하세요.
                  <br />
                  프론트엔드 개발자 {sideName}입니다.
                </S.Span>
                <S.Span> 매일 성장하는 개발자 {sideName}입니다.</S.Span>
                <S.Span>skills</S.Span>
                <S.SapnDetail>React / HTML / CSS / JS / C</S.SapnDetail>
                <S.award>
                <S.Span>Award</S.Span>
                <S.SapnDetail>
                  🥇 교내해커톤 대상
                </S.SapnDetail>
                <S.SapnDetail>
                🏆 스마틴 앱 챌린지 우수상
                </S.SapnDetail>
                <S.SapnDetail>
                🎖️ ICT 대구 교육감상
                </S.SapnDetail>
                </S.award>
                <S.ProImage>
                  <S.oodBio>
                    <S.imgBio src={org}></S.imgBio>
                    <S.perBio> CNS</S.perBio>
                  </S.oodBio>

                  <S.oodBio>
                    <S.imgBio src={mail}></S.imgBio>
                    <S.perBio> {Email}</S.perBio>
                  </S.oodBio>

                  <S.oodBio>
                    <S.imgBio src={github1}></S.imgBio>
                    <S.perBio> {github} </S.perBio>
                  </S.oodBio>

                  <S.oodBio>
                    <S.imgBio src={kakao}></S.imgBio>
                    <S.perBio> 010-2612-2864 </S.perBio>
                  </S.oodBio>
                </S.ProImage>
              </S.proMain>
            </S.proBorder>
          </S.profile>
        </S.allContainer>
      </S.proBox1>
    </S.side>
  );
}
