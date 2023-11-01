import './cometitionsub.css';
import Side from '../Sidebar/side';
import { Link } from 'react-router-dom';
import "./cometitionsub.css"
function App() {
  return (
    <div className="main">
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
        </div>
        <Side />
        <div className='compBox1'>
          <div className='compBack1'> ◀ </div>
          <div className='compTitle1'>8기 프론트엔드 헬뉴월 해커톤 <br></br>같이 나갈 분 구해용~~</div>
          <div className='compGrade1'>DGSW 8th 배채희</div>
          <div className='compAbout1'>안녕하세요 <br></br>프론트엔드 개발자 한명 모자라서 구해요 <br></br><br></br> 팀원 8기 배채희 김가영, 7기 김호준으로 나갈 예정입니다. <br></br><br></br> 해커톤 열심히 하실 분 제 프로필 또는 <br></br> 밑에 연락처, 카웤으로 연락주세요. <br></br><br></br>같이 나가서 상 받아봐요..!!! <br></br><br></br> 카카오워크 1-4 배채희 <br></br>메일 chaeeehui@gmaiml.com <br></br>인스타그램 ikhibr
</div>
        </div> 
    </div>
  );
}

export default App;
