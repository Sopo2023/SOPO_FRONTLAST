import React from "react";
import "../side.css";
import * as s from "../side.style";
import { useState, useEffect } from "react";
import hp from "src/Assets/image/hp.png";
import org from "src/Assets/image/org.png";
import mail from "src/Assets/image/mail.png";
import github1 from "src/Assets/image/github.png";
import kakao from "src/Assets/image/hp.png";

export default function Side() {
  const [sideName, setSideName] = useState("");
  const [email, setemail] = useState("");
  const [github, setgithub] = useState("");

  useEffect(() => {
    const localStorageName = localStorage.getItem("sopo_nm");
    const localStorageEmail = localStorage.getItem("sopo_id");
    const localStoragegithub = localStorage.getItem("sopo_github");

    if (localStorageName) {
      setSideName(localStorageName);
    }
    if (localStorageEmail) {
      setemail(localStorageEmail);
    }
    setgithub(localStoragegithub);
  }, []);
  return (
    <s.side>
      <s.proBox1>
        <s.allContainer>
          <s.NameBox>
            {" "}
            <s.ProName>{sideName}박규민 </s.ProName>
          </s.NameBox>
          <s.profile>
            <s.proBorder>
              <s.proMain>
                <s.Span>
                  안녕하세요.
                  <br />
                  프론트엔드 개발자 {sideName}입니다.
                </s.Span>
                <s.Span> 매일 성장하는 개발자 {sideName}입니다.</s.Span>
                <s.Span>skills</s.Span>
                <s.SapnDetail>React / HTML / CSS / JS / C</s.SapnDetail>
                <s.Span>Award</s.Span>
                <s.SapnDetail>
                  🥇 교내해커톤 대상<br></br>🏆 스마틴 앱 챌린지 우수상{" "}
                  <br></br>
                  🎖️ ICT 대구 교육감상
                </s.SapnDetail>

                <s.ProImage>
                  <s.oodBio>
                    <s.imgBio src={org}></s.imgBio>
                    <s.perBio> CNS</s.perBio>
                  </s.oodBio>

                  <s.oodBio>
                    <s.imgBio src={mail}></s.imgBio>
                    <s.perBio> {email}</s.perBio>
                  </s.oodBio>

                  <s.oodBio>
                    <s.imgBio src={github1}></s.imgBio>
                    <s.perBio> {github} </s.perBio>
                  </s.oodBio>

                  <s.oodBio>
                    <s.imgBio src={kakao}></s.imgBio>
                    <s.perBio> 010-2612-2864 </s.perBio>
                  </s.oodBio>
                </s.ProImage>
              </s.proMain>
            </s.proBorder>
          </s.profile>
        </s.allContainer>
      </s.proBox1>
    </s.side>
  );
}
