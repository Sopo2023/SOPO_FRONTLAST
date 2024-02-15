import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as S from "../head.stlye";

interface HeadProps {
  active: boolean;
}

const Head: React.FC<HeadProps> = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isMain = location.pathname === "/main";
  const isMentorMentee = location.pathname === "/Mentor-Mentee";
  const isPortfolio = location.pathname === "/portfolio";
  const isCompetition = location.pathname === "/Competition";
  const isMyPage = location.pathname === "/mypage";
  const isWrite = location.pathname === "/sidewrite"

  return (
    <S.Header>
      <S.Head>
      <S.SopoLogo onClick={() => navigate("/main")}>
        SOPO
      </S.SopoLogo>
      <nav>
        <S.HeaderUl>
          <S.HeaderLi active={isMain} onClick={() => navigate("/main")}>
            홈
          </S.HeaderLi>
          <S.HeaderLi active={isMentorMentee} onClick={() => navigate("/Mentor-Mentee")}>
            선배가 후배에게
          </S.HeaderLi>
          <S.HeaderLi active={isPortfolio} onClick={() => navigate("/portfolio")}>
            포트폴리오
          </S.HeaderLi>
          <S.HeaderLi active={isCompetition} onClick={() => navigate("/Competition")}>
            대회
          </S.HeaderLi>
          <S.HeaderLi active={isWrite} onClick={() => navigate("/sidewrite")}>
            글쓰기
          </S.HeaderLi>
          <S.HeaderLi active={isMyPage} onClick={() => navigate("/mypage")}>
            내정보
          </S.HeaderLi>
        </S.HeaderUl>
      </nav>
      </S.Head>
    </S.Header>
  );
};

export default Head;
