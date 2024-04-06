import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as S from "../head.stlye";
import {HeadProps} from "src/types/Head/Head.types"



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
      <S.Nav>
        <S.HeaderUl>
          <S.HeaderLi active={isMain} onClick={() => navigate("/main")}>
            <span> 홈</span>
          </S.HeaderLi>
          <S.HeaderLi active={isMentorMentee} onClick={() => navigate("/Mentor-Mentee")}>
            <span>선배가 후배에게</span>
          </S.HeaderLi>
          <S.HeaderLi active={isPortfolio} onClick={() => navigate("/portfolio")}>
          <span> 포트폴리오</span>
          </S.HeaderLi>
          <S.HeaderLi active={isCompetition} onClick={() => navigate("/Competition")}>
          <span>대회</span>
          </S.HeaderLi>
          <S.HeaderLi active={isWrite} onClick={() => navigate("/sidewrite")}>
            <span>글쓰기</span>
          </S.HeaderLi>
          <S.HeaderLi active={isMyPage} onClick={() => navigate("/mypage")}>
            <span>내정보</span>
          </S.HeaderLi>
        </S.HeaderUl>
      </S.Nav>
      </S.Head>
    </S.Header>
  );
};

export default Head;
