import "./updown.css";
import { Link , useNavigate } from "react-router-dom";
import Sidename from "../Sidebar/side";
import TEST0 from "../../Assets/img/postimg.jpeg";
import TEST1 from "../../Assets/img/gayoe.jpeg";
import TEST2 from "../../Assets/img/park.JPG";
import TEST3 from "../../Assets/img/newjeans.jpeg";
import TEST4 from "../../Assets/img/gayoe.jpeg";
import Head from "../../head/head";

export default function Start() {
  const navigate = useNavigate();



  return (
    <div className="main">
      <div className="content">
        <Head />
        <Sidename />

        <div className="search1">
          <input className="search_box"></input>
          <input type="button" className="search_icon"></input>
          <div className="searcg_icon_line"></div>
        </div>
        <div className="post-container">
          <div className="post-written" onClick={()=>{navigate("/Updownsub")}}>
            <div className="postshow1" >
            <div className="post_border">
              <span className="name">김가영</span>
              <br></br>
              <span className="title">4개교 연합 해커톤 프론트엔드</span>
              <br></br>
              <span className="detail">
                저희는 오늘 4개교 연합 토크콘서트를 갔다왔습니다 경험을 공유하고
                명함을 공유해서 좋은 경험이였습니다
              </span>
              <br></br>
              <br></br>
              <span className="date">2023.09.30</span>
              <span className="img">
                <img className="post_img" src={TEST4} alt="이미지"></img>
              </span>
            </div>
            </div>
          </div>
          <div className="post-written">
            <div className="post_border">
              <span className="name">이해준</span>
              <br></br>
              <span className="title">오늘은 나르샤하는날</span>
              <br></br>
              <span className="detail">
                오늘은 나르샤를 해야하지만 김호준은 축구를 하러갔다 짜증이 났다
              </span>
              <br></br>
              <br></br>
              <span className="date">2023.10.05</span>
              <span className="img">
                <img className="post_img" src={TEST0} alt="이미지"></img>
              </span>
            </div>
          </div>
          <div className="post-written">
            <div className="post_border">
              <span className="name">김호준</span>
              <br></br>
              <span className="title">오늘은 나르샤하는날</span>
              <br></br>
              <span className="detail">
                오늘은 나르샤를 해야하지만 나는 축구를 하러 갔다 규민선배 좋아요
              </span>
              <br></br>
              <br></br>
              <span className="date">2023.10.05</span>
              <span className="img">
                <img className="post_img" src={TEST3} alt="이미지"></img>
              </span>
            </div>
          </div>
          <div className="post-written">
            <div className="post_border">
              <span className="name">전우진</span>
              <br></br>
              <span className="title">오늘은 경민스쿨하는날</span>
              <br></br>
              <span className="detail">
                오늘은 CNS에서 경민스쿨을 진행했다 리엑트에 평소에 관심이
                많았는데 리엑트를 배울수 있어서 좋았다
              </span>
              <br></br>
              <br></br>
              <span className="date">2023.10.05</span>
            </div>
            <span className="img">
              <img className="post_img" src={TEST2} alt="이미지"></img>
            </span>
          </div>
          <div className="post-written">
            <div className="post_border">
              <span className="name">배채희</span>
              <br></br>
              <span className="title">오늘의 리엑트 수업</span>
              <br></br>
              <span className="detail">
                오늘은 동아리 CNS에서 경민스쿨을 진행했다 윤세욱이 제일 많이
                문제를 맞췄다 역시 우리의 세욱이
              </span>
              <br></br>
              <br></br>
              <span className="date">2023.10.05</span>
              <span className="img">
                <img className="post_img" src={TEST1} alt="이미지"></img>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
