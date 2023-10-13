import { Link } from 'react-router-dom';
import cnsLogo from "../image/cnsLogo.png"
import b1nd from "../image/b1nd.png"
import Sidename from "../sidebar/side"
import "./protfolio.css"
// import selectLIne from "./image/selectLIne.png"

// import tri from "./image/tri.png"
// import tirang from "./image/tirang.png"

export default function portfolio() {
  return (
    <div className="portfolio">
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
        
        <div className='searchBox'>
        <div className="search">
          <input className="search_box"></input>
          <input type="button" className="search_icon"></input>
          <div className="searcg_icon_line"></div>
        </div>
          <div className='stackLine'>
            <div className='gradeSelet'> 8기 ▾ </div>
            <div className='gradegreen'> | </div>
            <div className='majorSelect'>
              <div className='frontEnd'> 프론트엔드 </div>
              <div className='elseMajor'> 백엔드 </div>
              <div className='elseMajor'> 안드로이드 </div>
              <div className='elseMajor'> iOS </div>
              <div className='elseMajor'> 임베디드 </div>
              <div className='elseMajor'> AI </div>
              <div className='elseMajor'> 정보보안 </div>
              <div className='elseMajor'> 디자인 </div>
            </div>
          </div>
        </div>
        <Sidename/>
      <div className='mo'>
        <div className='namecardBox'>
          <div className='nameName'> <Link to="/sub">배채희 </Link></div>
          <div className='nameGrade'> DGSW 8th </div>
          <div className='nameMail'> Mail - chaeeehui@gmail.com </div>
          <img src={cnsLogo} className='cnsLogo'></img>
        </div>

        <div className='namecardBox2'>
          <div className='nameName'> 이해준 </div>
          <div className='nameGrade'> DGSW 8th </div>
          <div className='nameMail'> Mail - haejoon@gmail.com </div>
          <img src={b1nd} className='b1ndLogo'></img>
        </div>

        <div className='namecardBox3'>
          <div className='nameName'> 전우진 </div>
          <div className='nameGrade'> DGSW 8th </div>
          <div className='nameMail'> Mail - woojin@gmail.com </div>
          <img src={cnsLogo} className='cnsLogo'></img>
        </div>

        <div className='namecardBox5'>
          <div className='nameName'> 이윤선 </div>
          <div className='nameGrade'> DGSW 8th </div>
          <div className='nameMail'> Mail - younssun@gmail.com </div>
          <img src={cnsLogo} className='cnsLogo'></img>
        </div>

        <div className='namecardBox4'>
          <div className='nameName'> 이예진 </div>
          <div className='nameGrade'> DGSW 8th </div>
          <div className='nameMail'> Mail - yejin@gmail.com </div>
          <img src={b1nd} className='b1ndLogo'></img>
        </div>
      </div>
      </div>
  );
}

// export default portfolio();
