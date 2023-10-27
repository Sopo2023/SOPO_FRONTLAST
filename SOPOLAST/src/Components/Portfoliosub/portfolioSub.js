import yogiyo from "../../Assets/image/1.png"
import comment from "../../Assets/image/comment.png"
import Head from "../../head/head";
import "./portfolioSub.css"

function Portfoliosubon() {
  return (
    <div className="App">
      <div className="content">
         <Head/>
        
        <div className='portPerson'>
          <div className='portName'> 배채희 </div>
          <div className='portGrade'> DGSW 8th </div>
          <div className='portMajor'> Frontend-Dev </div>
          <div className='readMe'>
            <div className='readMeText'> 매일 계발하는 개발자 배채희입니다. </div>
            <div className='readMeAboutMe'> About Me </div>
            <div className='readMePort'>My Portfolio</div>
            <a href="https://resisted-attention-d43.notion.site/6b94177c5cee4fd6a2b879768be91d5a?pvs=4">배채희의 포트폴리오 보러가기</a>
            <div className='readMePort'>My Github</div>
            <a href="https://github.com/je355">배채희의 깃허브 보러가기</a>


            <div className='readMeTitle'> 배채희님이 쓴 글 보기 </div>
            <div className='readMeUser'> 배채희 </div>
            <img src={yogiyo} className='noticePhoto'></img>
            <div className='readMeNotice'> 4개교 연합 해커톤 프론트엔드 </div>
            <div className='readMeAbout'> 2023년 08월 24일 4개교 연합 해커톤을 진행했다.고종현 님 @manudeli 경력 요기요에서 -Merchant trine : 사장님 관련 서비스 사장 사이트, 사장 관리자 서비스 공통 요기요 디자인, FE 나의 이야기 제대 전, 수포자 고등학생에서 미대생(디자인전공)으로서의 삶... </div>
            <div className='readMeDate'> 2023. 08. 25. </div>
            <img src={comment}></img>
            <hr></hr>

            <div className='readMeUser'> 배채희 </div>
            <img src={yogiyo} className='noticePhoto'></img>
            <div className='readMeNotice'> 4개교 연합 해커톤 프론트엔드 </div>
            <div className='readMeAbout'> 2023년 08월 24일 4개교 연합 해커톤을 진행했다.고종현 님 @manudeli 경력 요기요에서 -Merchant trine : 사장님 관련 서비스 사장 사이트, 사장 관리자 서비스 공통 요기요 디자인, FE 나의 이야기 제대 전, 수포자 고등학생에서 미대생(디자인전공)으로서의 삶... </div>
            <div className='readMeDate'> 2023. 08. 25. </div>
            <img src={comment}></img>
            <hr></hr>

            <div className='readMeUser'> 배채희 </div>
            <img src={yogiyo} className='noticePhoto'></img>
            <div className='readMeNotice'> 4개교 연합 해커톤 프론트엔드 </div>
            <div className='readMeAbout'> 2023년 08월 24일 4개교 연합 해커톤을 진행했다.고종현 님 @manudeli 경력 요기요에서 -Merchant trine : 사장님 관련 서비스 사장 사이트, 사장 관리자 서비스 공통 요기요 디자인, FE 나의 이야기 제대 전, 수포자 고등학생에서 미대생(디자인전공)으로서의 삶... </div>
            <div className='readMeDate'> 2023. 08. 25. </div>
            <img src={comment}></img>
            <hr></hr>

            <div className='readMeUser'> 배채희 </div>
            <img src={yogiyo} className='noticePhoto'></img>
            <div className='readMeNotice'> 4개교 연합 해커톤 프론트엔드 </div>
            <div className='readMeAbout'> 2023년 08월 24일 4개교 연합 해커톤을 진행했다.고종현 님 @manudeli 경력 요기요에서 -Merchant trine : 사장님 관련 서비스 사장 사이트, 사장 관리자 서비스 공통 요기요 디자인, FE 나의 이야기 제대 전, 수포자 고등학생에서 미대생(디자인전공)으로서의 삶... </div>
            <div className='readMeDate'> 2023. 08. 25. </div>
            <img src={comment}></img>
            <hr></hr>
          </div>
          </ div >
        </div>
    </div>
  );
}

export default Portfoliosubon;
