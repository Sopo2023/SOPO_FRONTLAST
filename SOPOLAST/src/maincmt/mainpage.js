import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Start(){
    let [currentIndex, setCurrentIndex] = useState(['김가영']);


    return( 
    <div className="content">
         <header className="header">
             <h1><Link to="/main" className='SOPO' >SOPO</Link></h1>
             <nav className="nav">
                 <ul>
                    <li><Link to="/main" className="link">홈</Link></li>
                     <li><Link to="/Mentor-Mentee" className="link">선배가 후배에게</Link></li>
                     <li><Link to="/portfolio" className="link">포트폴리오</Link></li>
                     <li><Link to="/Competition" className="link">대회</Link></li>
                     <li><Link to="/mypage" className="link">내정보</Link></li>
                 </ul>
             </nav>
         </header>
         <main className="mainCard">
            <div className="card1">
                <p className='card_p'><Link to="/card1" className='link_card'>배채희</Link></p>
                <p className='card_p'>Front-end Dev</p>
                <p className='card_p'>DGSW 8th</p>
                <p className='card_p'>CNS</p>
                {/* <p><img className='card_img' src={require('../img/image 40.png')} alt="이미지"></img></p> */}
                
            </div>
            <div className="card2">
                <p className='card_p'><Link to="/card2" className='link_card'>박규민</Link></p>
                <p className='card_p'>Full-Stack Dev</p>
                <p className='card_p'>DGSW 8th</p>
                <p className='card_p'>ALT</p>
            </div>
            <div className="card3">
                <p className='card_p'><Link to="/card3" className='link_card'>가요이</Link></p>
                <p className='card_p'>Back-end Dev</p>
                <p className='card_p'>DGSW 8th</p>
                <p className='card_p'>DLC</p>
            </div>
            <div className="card4">
                <p className='card_p'><Link to="/card4" className='link_card'>전우진</Link></p>
                <p className='card_p'>Front-Stack Dev</p>
                <p className='card_p'>DGSW 8th</p>
                <p className='card_p'>모디</p>
            </div>
            <div className="card5">
                <p className='card_p'><Link to="/card5" className='link_card'>김호준</Link></p>
                <p className='card_p'>Back-end Dev</p>
                <p className='card_p'>DGSW 8th</p>
                <p className='card_p'>모디</p>
            </div>
            <div className="card6">
                <p className='card_p'><Link to="/card6" className='link_card'>이해준</Link></p>
                <p className='card_p'>Front-Stack Dev</p>
                <p className='card_p'>DGSW 8th</p>
                <p className='card_p'>QI</p>
            </div>
         </main>
    <div className='sideName-mom'>
         <div className="sideName">
             <div className="CHname">
                 <Link to="/mypage" className='sidenameColor' >이해준</Link>
             </div>
             <div className="Write">
                 <p className="p1"><Link to="/myportfolio" className='link_side'>내 포트폴리오</Link></p>
                 <p className="p2"><Link to="/main/sidewrite" className='link_side'>글쓰기</Link></p>
             </div>
             <div className='News'>
                <p className='writ_name'>내 소식</p>
                <div className='write_detail'>
                <p className='writ'><strong>전우진</strong>님이 <strong>깃허브완전알려줌~ </strong>글에 댓글을 남겼습니다. </p>
                </div>
                
             </div>
         </div>
    </div>
        <div className="post">
            <div className="post-write">
                <div className='Zonecontrol'>
                    <span className="Name">{currentIndex[0]}</span>
                    <span className="title">4개교 연합 해커톤 프론트엔드</span>
                    <span className="detail">박규민 모크 김가영은 핑구 배채희는 대소고 김채원 전우진은 학생회 김호준 축구부</span>
                    <span className="date">2023.09.30</span>
                </div>
                <span className="img"><img className='real_img' src={require('../img/gayoe.jpeg')} alt="이미지"></img></span>
            </div>
            <div className="post-write">
                <div className='Zonecontrol'>
                    <span className="Name">이해준</span>
                    <span className="title">오늘 먹은거 </span>
                    <span className="detail">햄버거 치킨 피자 짜장면 마라탕 탕후루 사과 탕수육 치즈 </span>
                    <span className="date">2023.09.22</span>
                </div>
                <span className="img"><img className='real_img' src={require('../updowncomponent/postimg.jpeg')} alt="이미지"></img></span>
            </div>
            <div className="post-write">
                <div className='Zonecontrol'>
                    <span className="Name">전우진</span>
                    <span className="title">오늘 한거 </span>
                    <span className="detail">갈굼 당하기 리엑트 하기 사진찍기</span>
                    <span className="date">2023.09.18</span>
                </div>
                <span className="img"><img className='real_img' src={require('../img/newjeans.jpeg')} alt="이미지"></img></span>
            </div>
            <div className="post-write">
                <div className='Zonecontrol'>
                    <span className="Name">박규민</span>
                    <span className="title">오늘 한거 </span>
                    <span className="detail">누워서 자기 키 크기 자치방에서 빨래하기</span>
                    <span className="date">2023.09.15</span>
                </div>
            </div>
            <div className="post-write">
                <div className='Zonecontrol'>
                    <span className="Name">김호준</span>
                    <span className="title">오늘 한거 </span>
                    <span className="detail">축구하기 수업째기</span>
                    <span className="date">2023.09.12</span>
                </div>
            </div>       
        </div>
        {/* <form className='chang_button'>
            <input id='leftbutton' type='button' value="1"></input>
            <input type='button' value="2"></input>
        </form> */}
        <br></br>
        <footer className='footer'>
            
        </footer>
    </div>
    
    
    )
 }