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
  const { sideName, introduction, Bio, Email, skill, award, club, github,number, } =
    UseSidebar();
  return (
    <S.side>
      <S.proBox1>
        <S.allContainer>
          <S.NameBox>
            <S.ProName>{sideName}</S.ProName>
          </S.NameBox>
          <S.profile>
            <S.proBorder>
              <S.proMain>
                <S.Span>{introduction}</S.Span>
                <S.Span> {Bio}</S.Span>

                {skill.map((skill, index) => (
                  <>
                    <S.Span> Skill</S.Span>
                    <S.SkilSapnDetail key={index}>
                      <span>{skill}</span>
                    </S.SkilSapnDetail>
                  </>
                ))}
                <S.award>
                  {award.slice(0, 4).map((award, index) => (
                    <>
                      <S.Span>Award</S.Span>
                      <S.SapnDetail key={index}>
                        <span>🥇{award}</span>
                      </S.SapnDetail>
                    </>
                  ))}
                </S.award>

                <S.ProImage>
                  {club.length > 0 && (
                    <S.oodBio>
                      <S.imgBio src={org}></S.imgBio>
                      <S.perBio> {club}</S.perBio>
                    </S.oodBio>
                  )}

                  {Email.length > 0 && (
                    <S.oodBio>
                      <S.imgBio src={mail}></S.imgBio>
                      <S.perBio> {Email}</S.perBio>
                    </S.oodBio>
                  )}
                  {github.length > 0 && (
                    <S.oodBio>
                      <S.imgBio src={github1}></S.imgBio>
                    <S.perBio> {github} </S.perBio>
                    </S.oodBio>
                  )}
                  {github.length > 0 && (
                    <S.oodBio>
                      <S.imgBio src={kakao}></S.imgBio>
                    <S.perBio> {number} </S.perBio>
                    </S.oodBio>
                  )}
                </S.ProImage>
              </S.proMain>
            </S.proBorder>
          </S.profile>
        </S.allContainer>
      </S.proBox1>
    </S.side>
  );
}
