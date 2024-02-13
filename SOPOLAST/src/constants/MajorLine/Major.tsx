import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from 'src/constants/MajorLine/Major.style';

export default function Major() {
  const [isClicked, setIsClicked] = useState(false); // 버튼 클릭 상태를 관리합니다.
  const navigate = useNavigate();

  const majorClick = (major) => {
    console.log(`Clicked on ${major}`);
    setIsClicked(!isClicked); // 버튼 클릭 시 상태를 변경하여 클래스 추가/제거를 토글합니다.
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
              onClick={() => majorClick('프론트엔드')}
              clicked={isClicked}
            >
              프론트엔드
            </S.MajorButton>

            <S.MajorButton
              onClick={() => majorClick('백엔드')}
              clicked={isClicked}
            >
              백엔드
            </S.MajorButton>

            <S.MajorButton
              onClick={() => majorClick('안드로이드')}
              clicked={isClicked}
            >
              안드로이드
            </S.MajorButton>

            <S.MajorButton
              onClick={() => majorClick('iOS')}
              clicked={isClicked}
            >
              iOS
            </S.MajorButton>

            <S.MajorButton
              onClick={() => majorClick('임베디드')}
              clicked={isClicked}
            >
              임베디드
            </S.MajorButton>

            <S.MajorButton
              onClick={() => majorClick('AI')}
              clicked={isClicked}
            >
              AI
            </S.MajorButton>

            <S.MajorButton
              onClick={() => majorClick('정보보안')}
              clicked={isClicked}
            >
              정보보안
            </S.MajorButton>

            <S.MajorButton
              onClick={() => majorClick('디자인')}
              clicked={isClicked}
            >
              디자인
            </S.MajorButton>
          </S.MajorSelect>
        </S.StackLine>
      </div>
    </div>
  );
}