import React from 'react'
import { useNavigate } from "react-router-dom";

import * as S from "src/constants/MajorLine/Major.style"

export default function Major() {
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

  
            <S.StackLine>
              <>
                <S.GradeSelect className="gradeSelect">
                  <option value="8">8기 </option>
                  <option value="7">7기 </option>
                  <option value="6">6기 </option>
                </S.GradeSelect>
              </>
  
              <S.GradeGreen> | </S.GradeGreen>
              <S.MajorSelect>
                <S.MajorButton
                  onClick={() => majorClick('프론트엔드')}
                >
                  프론트엔드
                </S.MajorButton>
  
                <S.MajorButton
                  onClick={() => majorClick('백엔드')}
                >
                  백엔드
                </S.MajorButton>
  
                <S.MajorButton
                  onClick={() => majorClick('안드로이드')}
                >
                  안드로이드
                </S.MajorButton>
  
                <S.MajorButton
                onClick={() => majorClick('iOS')}
                >
                  iOS
                </S.MajorButton>
  
                <S.MajorButton
                  onClick={() => majorClick('임베디드')}
                >
                  임베디드
                </S.MajorButton>
  
                <S.MajorButton
                onClick={() => majorClick('AI')}
                >
                  AI
                </S.MajorButton>
  
                <S.MajorButton
                  onClick={() => majorClick('정보보안')}
                >
                  정보보안
                </S.MajorButton>
  
                <S.MajorButton
                  onClick={() => majorClick('디자인')}
                >
                  디자인
                </S.MajorButton>
              </S.MajorSelect>
            </S.StackLine>
        </div>
      </div>
    );
  }
  