import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "src/constants/MajorLine/Major.style";

export default function Major() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index:string) => {
    setActiveIndex(index);
  };

  return (
    <div className="main">
      <div className="content">
        {/* 스타일을 적용한 요소들을 렌더링합니다. */}
        <S.StackLine>
          <S.GradeSelect className="gradeSelect">
            <option value="8">8기</option>
            <option value="7">7기</option>
            <option value="6">6기</option>
          </S.GradeSelect>

          <S.GradeGreen> | </S.GradeGreen>

          <S.MajorSelect>
            <S.MajorButton
              active={activeIndex === "프론트엔드"}
              onClick={() => handleClick("프론트엔드")}
            >
              프론트엔드
            </S.MajorButton>

            <S.MajorButton
              active={activeIndex === "백엔드"}
              onClick={() => handleClick("백엔드")}
            >
              백엔드
            </S.MajorButton>

            <S.MajorButton
              active={activeIndex === "안드로이드"}
              onClick={() => handleClick("안드로이드")}
            >
              안드로이드
            </S.MajorButton>

            <S.MajorButton
              active={activeIndex === "Ios"}
              onClick={() => handleClick("Ios")}
            >
              iOS
            </S.MajorButton>

            <S.MajorButton
              active={activeIndex === "임베디드"}
              onClick={() => handleClick("임베디드")}
            >
              임베디드
            </S.MajorButton>

            <S.MajorButton
              active={activeIndex === "AI"}
              onClick={() => handleClick("AI")}
            >
              AI
            </S.MajorButton>

            <S.MajorButton
              active={activeIndex === "정보보안"}
              onClick={() => handleClick("정보보안")}
            >
              정보보안
            </S.MajorButton>

            <S.MajorButton
              active={activeIndex === "디자인"}
              onClick={() => handleClick("디자인")}
            >
              디자인
            </S.MajorButton>
          </S.MajorSelect>
        </S.StackLine>
      </div>
    </div>
  );
}
