import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import "../head.css";
import * as s from "../head.stlye"

export default function Head() {
    const navigate = useNavigate();
    const location = useLocation();

    const isMain = location.pathname === "/main";
    const isMentorMentee = location.pathname === "/Mentor-Mentee";
    const isPortfolio = location.pathname === "/portfolio";
    const isCompetition = location.pathname === "/Competition";
    const isMyPage = location.pathname === "/mypage";
    
    return (
        <s.Header>
            <s.SopoLogo onClick={() => { navigate("/main") }}>SOPO</s.SopoLogo>
            <nav>
                <s.HeaderUl>
                    <s.HeaderLi className={isMain ? 'link active' : 'link'} onClick={() => navigate("/main")}> 홈</s.HeaderLi>
                    <s.HeaderLi className={isMentorMentee ? 'link active' : 'link'} onClick={() => navigate("/Mentor-Mentee")}>선배가 후배에게</s.HeaderLi>
                    <s.HeaderLi className={isPortfolio ? 'link active' : 'link'} onClick={() => navigate("/portfolio")}>포트폴리오</s.HeaderLi>
                    <s.HeaderLi className={isCompetition ? 'link active' : 'link'} onClick={() => navigate("/Competition")}>대회</s.HeaderLi>
                    <s.HeaderLi className={isMyPage ? 'link active' : 'link'} onClick={() => navigate("/mypage")}>내정보</s.HeaderLi>
                </s.HeaderUl>
            </nav>
        </s.Header>
    )
}
