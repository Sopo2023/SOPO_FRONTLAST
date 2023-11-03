import "./postshow.css";
import { Link , useNavigate } from "react-router-dom";
import Sidename from "../Sidebar/side";
import TEST0 from "../../Assets/img/postimg.jpeg";
import TEST1 from "../../Assets/img/gayoe.jpeg";
import TEST2 from "../../Assets/img/park.JPG";
import TEST3 from "../../Assets/img/newjeans.jpeg";
import TEST4 from "../../Assets/img/gayoe.jpeg";
import Head from "../../head/head";

export default function Start() {
    return (
      <div className="main">
        <div className="content">
          <Head />
          <Sidename />
  
          <div className="post-container">
            <div className="post-written">
              <div className="postshow1" onClick={()=>{navigate("/Updownsub")}}>
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
          </div>
        </div>
      </div>
    );
  }
  