import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import "./head.css";

export default function Head() {
    const navigate = useNavigate();
    const location = useLocation();

    const isMain = location.pathname === "/main";
    const isMentorMentee = location.pathname === "/Mentor-Mentee";
    const isPortfolio = location.pathname === "/portfolio";
    const isCompetition = location.pathname === "/Competition";
    const isMyPage = location.pathname === "/mypage";
    
    return (
        <header className="header">
            <h1 className='SOPO' onClick={() => { navigate("/main") }}>SOPO</h1>
            <nav className="nav">
                <ul>
                    <li className={isMain ? 'link active' : 'link'} onClick={() => navigate("/main")}> 홈</li>
                    <li className={isMentorMentee ? 'link active' : 'link'} onClick={() => navigate("/Mentor-Mentee")}>선배가 후배에게</li>
                    <li className={isPortfolio ? 'link active' : 'link'} onClick={() => navigate("/portfolio")}>포트폴리오</li>
                    <li className={isCompetition ? 'link active' : 'link'} onClick={() => navigate("/Competition")}>대회</li>
                    <li className={isMyPage ? 'link active' : 'link'} onClick={() => navigate("/mypage")}>내정보</li>
                </ul>
            </nav>
        </header>
    )
}
