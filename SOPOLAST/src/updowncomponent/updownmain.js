import './updown.css';
import { Link } from 'react-router-dom';
import Sidename from "../sidebar/side"

export default function start(){
  return( 
  <div className="content">
       <header className="header">
             <h1><Link to="/main" className='SOPO' >SOPO</Link></h1>
             <nav className="nav">
                 <ul>
                     <li><Link to="/Mentor-Mentee" className="link">선배가 후배에게</Link></li>
                     <li><Link to="/portfolio" className="link">포트폴리오</Link></li>
                     <li><Link to="/Competition" className="link">대회</Link></li>
                     <li><Link to="/mypage" className="link">내정보</Link></li>
                 </ul>
             </nav>
         </header>
         <Sidename />
        
        <div className="search">
          <input className="search_box"></input>
          <input type="button" className="search_icon"></input>
          <div className="searcg_icon_line"></div>
       </div>
       <div className="post-container">
            <div className="post-written">
                <div className='Movecontrol'>
                <span className="name">김가영</span><br></br>
                <span className="title">4개교 연합 해커톤 프론트엔드</span><br></br>
                <span className="detail">저희는 오늘 4개교 연합 토크콘서트를 갔다왔습니다 경험을 공유하고 명함을 공유해서 좋은 경험이였습니다</span><br></br>
                <span className="date">2023.09.30</span>
                <span className="img"><img className='post_img' src={require('../img/gayoe.jpeg')} alt="이미지"></img></span>
                </div>
            </div>
            <div className="post-written">
                <div className='Movecontrol'>
                <span className="name">이해준</span><br></br>
                <span className="title">오늘은 나르샤하는날</span><br></br>
                <span className="detail">오늘은 나르샤를 해야하지만 김호준은 축구를 하러갔다 짜증이 났다</span><br></br>
                <span className="date">2023.10.05</span>
                <span className="img"><img className='post_img' src={require('./postimg.jpeg')} alt="이미지"></img></span>
                </div>
            </div>
            <div className="post-written">
                <div className='Movecontrol'>
                <span className="name">김호준</span><br></br>
                <span className="title">오늘은 나르샤하는날</span><br></br>
                <span className="detail">오늘은 나르샤를 해야하지만 나는 축구를 하러 갔다 규민선배 좋아요</span><br></br>
                <span className="date">2023.10.05</span>
                <span className="img"><img className='post_img' src={require('../img/newjeans.jpeg')} alt="이미지"></img></span>
                </div>
            </div>
            <div className="post-written">
                <div className='Movecontrol'>
                <span className="name">전우진</span><br></br>
                <span className="title">오늘은 경민스쿨하는날</span><br></br>
                <span className="detail">오늘은 CNS에서 경민스쿨을 진행했다 리엑트에 평소에 관심이 많았는데 리엑트를 배울수 있어서 좋았다</span><br></br>
                <span className="date">2023.10.05</span>
                <span className="img"><img className='post_img' src={require('../img/park.JPG')} alt="이미지"></img></span>
                </div>
            </div>
            <div className="post-written">
                <div className='Movecontrol'>
                <span className="name">배채희</span><br></br>
                <span className="title">오늘의 리엑트 수업</span><br></br>
                <span className="detail">오늘은 동아리 CNS에서 경민스쿨을 진행했다 윤세욱이 제일 많이 문제를 맞췄다 역시 우리의 세욱이</span><br></br>
                <span className="date">2023.10.05</span>
                <span className="img"><img className='post_img' src={require('../img/gayoe.jpeg')} alt="이미지"></img></span>
                </div>
            </div>
       </div>
  </div>
  )
}