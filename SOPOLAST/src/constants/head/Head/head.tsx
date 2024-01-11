import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as s from "../head.stlye";

interface HeadProps {
  active: boolean;
}

const Head: React.FC <HeadProps> = ({ active }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isMain = location.pathname === "/main";
  const isMentorMentee = location.pathname === "/Mentor-Mentee";
  const isPortfolio = location.pathname === "/portfolio";
  const isCompetition = location.pathname === "/Competition";
  const isMyPage = location.pathname === "/mypage";

  return (
    <s.Header>
      <s.SopoLogo onClick={() => navigate("/main")}>
        SOPO
      </s.SopoLogo>
      <nav>
        <s.HeaderUl>
          <s.HeaderLi active={active} onClick={() => navigate("/Mentor-Mentee")}>
            홈
          </s.HeaderLi>
          <s.HeaderLi active={active} onClick={() => navigate("/Mentor-Mentee")}>
            선배가 후배에게
          </s.HeaderLi>
          <s.HeaderLi active={active} onClick={() => navigate("/portfolio")}>
            포트폴리오
          </s.HeaderLi>
          <s.HeaderLi active={active} onClick={() => navigate("/Competition")}>
            대회
          </s.HeaderLi>
          <s.HeaderLi active={active} onClick={() => navigate("/mypage")}>
            내정보
          </s.HeaderLi>
        </s.HeaderUl>
      </nav>
    </s.Header>
  );
};

export default Head;
