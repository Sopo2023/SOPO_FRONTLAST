import React,{useState}  from "react";
import { useNavigate } from "react-router-dom";
import * as s from "src/Components/Mypage/Profile/profile.Style"
import Last from "src/Assets/img/Polygon 4.png";

const Profile = ({ onClose }) => {
    const navigate = useNavigate();
    const [select, setSelect] = useState<boolean>(false);
    const [selectedSkills, setSelectedSkills] = useState([]); // 중복 선택을 저장할 변수
    const [yearSelections, setYearSelections] = useState([
        false,
        false,
        false,
        false,
      ]); 
    const [dreamSelections, setdreamSelections] = useState([
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ]);
    const [clubSelections, setclubSelections] = useState([
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ]);

   
    
      const toggleYearColor = (index: number) => {
        const updatedSelections = Array(4).fill(false);
        updatedSelections[index] = true;
        setYearSelections(updatedSelections);
      };
    
      const toggledreamColor = (index) => {
        const updatedSelections = Array(8).fill(false);
        updatedSelections[index] = true;
        setdreamSelections(updatedSelections);
      };
      
      const toggleclubColor = (index) => {
        const updatedSelections = Array(10).fill(false);
        updatedSelections[index] = true;
        setclubSelections(updatedSelections);
      };
      
    
      const toggleSkill = (skill) => {
        const updatedSkills = [...selectedSkills];
    
        // 이미 선택된 스킬이면 제거, 아니면 추가
        const index = updatedSkills.indexOf(skill);
        if (index !== -1) {
          updatedSkills.splice(index, 1);
        } else {
          updatedSkills.push(skill);
        }
    
        setSelectedSkills(updatedSkills);
      };
      const LeavehandleEmailCertify = () => {
       onClose()
      };
    

    return(
        <s.Pagination>
         <s.Pagination_Writing>
              <s.Leave onClick={LeavehandleEmailCertify}>
                <s.BackButton src={Last} />
              </s.Leave>
              <s.Last_Pagination>내 정보 입력하기</s.Last_Pagination>
              <s.Horseman>
                <s.Writing>
                  <s.WritingM>당신의 기수를 알려주세요</s.WritingM>
                  <s.YearChoice>
                    <s.Year
                      className={yearSelections[0] ? "selected" : ""}
                      onClick={() => toggleYearColor(0)}
                    >
                      6기(2021)
                    </s.Year> 
                    <s.Year
                      className={yearSelections[1] ? "selected" : ""}
                      onClick={() => toggleYearColor(1)}
                    >
                      7기(2022)
                    </s.Year> 
                    <s.Year
                      className={yearSelections[2] ? "selected" : ""}
                      onClick={() => toggleYearColor(2)}
                    >
                      8기(2023)
                    </s.Year> 
                    <s.Year
                      className={yearSelections[3] ? "selected" : ""}
                      onClick={() => toggleYearColor(3)}
                    >
                      9기(2024)
                    </s.Year> 
                  </s.YearChoice>
                </s.Writing>
                <s.Writing>
                  <s.WritingM>당신의 전공은 무엇인가요?</s.WritingM>
                  <s.DreamSelect>
                    <s.Dream
                      className={dreamSelections[0] ? "selected" : ""}
                      onClick={() => toggledreamColor(0)}
                    >
                      프론트엔드
                    </s.Dream>
                    <s.Dream
                      className={dreamSelections[1] ? "selected" : ""}
                      onClick={() => toggledreamColor(1)}
                    >
                      백엔드
                    </s.Dream>
                    <s.Dream
                      className={dreamSelections[2] ? "selected" : ""}
                      onClick={() => toggledreamColor(2)}
                    >
                      Android
                    </s.Dream>
                    <s.Dream
                      className={dreamSelections[3] ? "selected" : ""}
                      onClick={() => toggledreamColor(3)}
                    >
                      iOS
                    </s.Dream>
                    <s.Dream
                      className={dreamSelections[4] ? "selected" : ""}
                      onClick={() => toggledreamColor(4)}
                    >
                      임베디드
                    </s.Dream>
                    <s.Dream
                      className={dreamSelections[5] ? "selected" : ""}
                      onClick={() => toggledreamColor(5)}
                    >
                      AI
                    </s.Dream>
                    <s.Dream
                      className={dreamSelections[6] ? "selected" : ""}
                      onClick={() => toggledreamColor(6)}
                    >
                      정보보안
                    </s.Dream>
                    <s.Dream
                      className={dreamSelections[7] ? "selected" : ""}
                      onClick={() => toggledreamColor(7)}
                    >
                      UI/UX 디자인
                    </s.Dream>
                    <s.Dream
                      className={dreamSelections[8] ? "selected" : ""}
                      onClick={() => toggledreamColor(8)}
                    >
                      풀스택
                    </s.Dream>
                  </s.DreamSelect>
                </s.Writing>
                <s.Writing>
                  <s.WritingM>
                    당신에 대하여 간단하게 설명해주세요!
                  </s.WritingM>
                  <s.Major
                    type="text"
                    placeholder="배움에서 즐거움을 찾는 프론트엔드 개발자, 홍길동 입니다."
                  ></s.Major>
                </s.Writing>
                <s.Writing>
                  <s.WritingM>당신의 동아리는 무엇인가요?</s.WritingM>
                  <s.ClubSelect>
                    <s.Club
                      className={clubSelections[0] ? "selected" : ""}
                      onClick={() => toggleclubColor(0)}
                    >
                      B1ND
                    </s.Club>
                    <s.Club
                      className={clubSelections[1] ? "selected" : ""}
                      onClick={() => toggleclubColor(1)}
                    >
                      CNS
                    </s.Club>
                    <s.Club
                      className={clubSelections[2] ? "selected" : ""}
                      onClick={() => toggleclubColor(2)}
                    >
                      ALT
                    </s.Club>
                    <s.Club
                      className={clubSelections[3] ? "selected" : ""}
                      onClick={() => toggleclubColor(3)}
                    >
                      두카미
                    </s.Club>
                    <s.Club
                      className={clubSelections[4] ? "selected" : ""}
                      onClick={() => toggleclubColor(4)}
                    >
                      삼디
                    </s.Club>
                    <s.Club
                      className={clubSelections[5] ? "selected" : ""}
                      onClick={() => toggleclubColor(5)}
                    >
                      모디
                    </s.Club>
                    <s.Club
                      className={clubSelections[6] ? "selected" : ""}
                      onClick={() => toggleclubColor(6)}
                    >
                      스페이스
                    </s.Club>
                    <s.Club
                      className={clubSelections[7] ? "selected" : ""}
                      onClick={() => toggleclubColor(7)}
                    >
                      DLC
                    </s.Club>
                    <s.Club
                      className={clubSelections[8] ? "selected" : ""}
                      onClick={() => toggleclubColor(8)}
                    >
                      기타
                    </s.Club>
                  </s.ClubSelect>
                </s.Writing>
                <s.Writing>
                  <s.WritingM>
                    {" "}
                    당신의 깃허브 아이디는 무엇인가요?{" "}
                  </s.WritingM>
                  <s.GitUrl
                    type="text"
                    placeholder="당신의 깃허브 URL를 입력해주세요.">
                  </s.GitUrl>
                </s.Writing>
                <s.Writing>
                  <s.WritingM>
                    {" "}
                    당신의 사용가능 스킬은 무엇인가요?{" "}
                  </s.WritingM>
                  <s.SkillsSelect>
                    <s.Skill
                      className={selectedSkills.includes("HTML") ? "selected" : ""}
                      onClick={() => toggleSkill("HTML")}
                    >
                      HTML
                    </s.Skill>
                    <s.Skill
                      className={selectedSkills.includes("CSS") ? "selected" : ""}
                      onClick={() => toggleSkill("CSS")}
                    >
                      CSS
                    </s.Skill>
                    <s.Skill
                      className={selectedSkills.includes("JavaScript") ? "selected" : ""}
                      onClick={() => toggleSkill("JavaScript")}
                    >
                      JavaScript
                    </s.Skill>
                    <s.Skill
                      className={selectedSkills.includes("REACT") ? "selected" : ""}
                      onClick={() => toggleSkill("REACT")}
                    >
                      REACT
                    </s.Skill>
                    <s.Skill
                      className={selectedSkills.includes("TypeScript") ? "selected" : ""}
                      onClick={() => toggleSkill("TypeScript")}
                    >
                      TypeScript
                    </s.Skill>
                    <s.Skill
                      className={selectedSkills.includes("JAVA") ? "selected" : ""}
                      onClick={() => toggleSkill("JAVA")}
                    >
                      JAVA
                    </s.Skill>
                    <s.Skill
                      className={selectedSkills.includes("Spring") ? "selected" : ""}
                      onClick={() => toggleSkill("Spring")}
                    >
                      Spring
                    </s.Skill>
                    <s.Skill
                      className={selectedSkills.includes("Kotlin") ? "selected" : ""}
                      onClick={() => toggleSkill("Kotlin")}
                    >
                      Kotlin
                    </s.Skill>
                    <s.Skill
                      className={selectedSkills.includes("Swift") ? "selected" : ""}
                      onClick={() => toggleSkill("Swift")}
                    >
                      Swift
                    </s.Skill>
                    <s.Skill
                      className={selectedSkills.includes("GG") ? "selected" : ""}
                      onClick={() => toggleSkill("GG")}
                    >
                      기타
                    </s.Skill>
                  </s.SkillsSelect>
                </s.Writing>
                <s.Writing>
                  <s.WritingM>
                    {" "}
                    당신의 수상이력을 입력해주세요.
                  </s.WritingM>
                  <s.Award
                    type="text"
                    placeholder="당신의 수상기록을 입력해주세요."></s.Award>
                </s.Writing>
                <s.Writing>
                  <s.WritingM>
                    {" "}
                    당신의 포트폴리오은 무엇인가요?{" "}
                  </s.WritingM>
                  <s.Pf
                  type="text"
                  placeholder="당신의 포트폴리오URL를 입력해주세요."
                  ></s.Pf>
                </s.Writing>
                <s.Completebutton>완료</s.Completebutton>
              </s.Horseman>
            </s.Pagination_Writing>
        </s.Pagination>
    )
};

export default Profile