import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "src/constants/MajorLine/Major.style";
import axios from "axios";

export default function Major() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [grades, setGrades] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("히히api자리지롱");
        setGrades(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleClick = (index:string) => {
    setActiveIndex(index);
  };

  return (
    <div className="main">
      <div className="content">
        <S.StackLine>
        <S.GradeSelect className="gradeSelect">
            {grades.map((grade) => (
              <option key={grade.id} value={grade.id}>
                {grade.name}
              </option>
            ))}
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
