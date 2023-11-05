import './cometitionsub.css';
import Side from '../Sidebar/side';
import "./cometitionsub.css"
import Head from '../../head/head';
import { useNavigate } from 'react-router-dom';

function App() {
const navigate=useNavigate()
let goBack = () => {
  navigate(-1);
};
  return (
    <div className="main">
      <div className="content">
        <Head/>  
       
        <Side />
        <div className='compBox1'>
          <div className='compBack1' onClick={goBack}> ◀ </div>
          <p className='compTitle1'>8기 프론트엔드 헬뉴월 해커톤 <br></br>같이 나갈 분 구해용~~</p>
          <p className='compGrade1'>DGSW 8th 배채희</p>
          <div className='compAbout1'>안녕하세요 프론트엔드 개발자 한명 모자라서 구해요 
           팀원 8기 배채희 김가영, 7기 김호준으로 나갈 예정입니다.   <br />
           <br />
           해커톤 열심히 하실 분 제 프로필 또는 밑에 연락처, 카웤으로 연락주세요. <br />
           같이 나가서 상 받아봐요..!!!  <br />
           카카오워크 1-4 배채희 메일 <a href='mailto:chaeeehui@gmail.com' className='mailComp'> chaeeehui@gmail.com </a>  <br />
           인스타그램 <a href='https://www.instagram.com/whywhywwwhy/' className='mailComp'> whywhywwwhy </a>
</div>
        </div>  
        </div>
    </div>
  );
}

export default App;
