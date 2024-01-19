import React from "react";
import "./cometitionsub.css";
import Side from "src/constants/Sidebar/Side/side";
import "./cometitionsub.css";
import Head from "../../constants/head/Head/head";
import { useNavigate } from "react-router-dom";

import * as S from "../compsub/competitionsub.style";

function App() {
  const navigate = useNavigate();
  let goBack = () => {
    navigate(-1);
  };
  return (
      <S.Main>
        
          <Head active={false} />
          <Side />
          <S.AllCompContain>
            <S.CompBox1>
              <S.CompBack1 onClick={goBack}>
                {" "}
                ◀{" "}
              </S.CompBack1>
              <S.CompTitle1>
                8기 프론트엔드 헬뉴월 해커톤 <br></br>같이 나갈 분 구해용~~
              </S.CompTitle1>
              <S.CompGrade1>DGSW 8th 배채희</S.CompGrade1>
              <S.CompAbout1>
                안녕하세요 프론트엔드 개발자 한명 모자라서 구해요 팀원 8기 배채희
                김가영, 7기 김호준으로 나갈 예정입니다. <br />
                <br />
                해커톤 열심히 하실 분 제 프로필 또는 밑에 연락처, 카웤으로
                연락주세요. <br />
                같이 나가서 상 받아봐요..!!! <br />
                카카오워크 1-4 배채희 메일{" "}
                <S.MailComp href="mailto:chaeeehui@gmail.com">
                  {" "}
                  chaeeehui@gmail.com{" "}
                </S.MailComp>{" "}
                <br />
                인스타그램{" "}
                <S.MailComp
                  href="https://www.instagram.com/whywhywwwhy/"
                >
                  {" "}
                  whywhywwwhy{" "}
                </S.MailComp>
              </S.CompAbout1>
            </S.CompBox1>
          </S.AllCompContain>
      </S.Main>
  );
}

export default App;
