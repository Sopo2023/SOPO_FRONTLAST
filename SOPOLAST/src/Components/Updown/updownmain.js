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
                2023년 08월 24일 4개교 연합 해커톤을 진행했다.고종현 님 @manudeli 경력 요기요에서 -Merchant trine : 사장님 관련 서비스 사장 사이트, 사장 관리자 서비스 공통 요기요 디자인, FE 나의 이야기 제대 전, 수포자 고등학생에서 미대생(디자인전공)으로서의 삶...
                </span>
                <br></br>
                <br></br>
                <span className="date">2023.08.25</span>
                <span className="img">
                  <img className="post_img" src={TEST4} alt="이미지"></img>
                </span>
              </div>
            </div>
          </div>
          <div className="post-written">
            <div className="postshow1">
              <div className="post_border">
                <span className="name">배채희</span>
                <br></br>
                <span className="title">4개교 연합 해커톤 - SW창업 알고보면 어렵지 않다</span>
                <br></br>
                <span className="detail">
                  스타트업 창업 상상을 현실로 이끄는 액션 플랜
                  온택트 코리아 최지연님
                  자신에게 구매욕구가 확실하게 작용하지 않으면 매출로 이어지지 않는다.
                  전화 - 고객접접 만들기 어려웠다. 현장 - 못들어오게 함.
                </span>
                <br></br>
                <br></br>
                <span className="date">2023.09.02</span>
                <span className="img">
                  <img className="post_img" src={TEST0} alt="이미지"></img>
                </span>
              </div>
            </div>
          </div>
          <div className="post-written">
            <div className="postshow1">
              <div className="post_border">
                <span className="name">이해준</span>
                <br></br>
                <span className="title">바인드 컨버런스를 듣고나서.</span>
                <br></br>
                <span className="detail">
                  오늘은 팀 바인드에서 주최한 컨퍼런스 바코드에 대해 이야기 하려 한다.
                  ​바코드? 작년겨울 시작
                  - 주로 일학년을 대상으로 새내기 개발자들에게 꼭 필요한 지식 전하는 컨퍼런스.
                  Git & GitHub / 백엔드 이지민선배
                </span>
                <br></br>
                <br></br>
                <span className="date">2023.10.05</span>
                <span className="img">
                  <img className="post_img" src={TEST3} alt="이미지"></img>
                </span>
              </div>
            </div>
          </div>
          <div className="post-written">
            <div className="postshow1">
              <div className="post_border">
                <span className="name">박규민</span>
                <br></br>
                <span className="title">SW연합해커톤</span>
                <br></br>
                <span className="detail">
                - 왜 SW 개발자가 필요할까?
    
    비지니스가 소프트웨어로 이루어 진다
    
    소프트웨어로 인해 사람의 삶이 바뀌고 살아가는 방식이 바뀐다
    
- 기업이 원한는 SW개발자란?
    - Tech Skill
        - 코드 가독성이 좋은
        - 재사용이 가능한 코드
        - 유지보수성을 고려하는 코드
        - 버그없는 코드
    - Soft Skill
        - 업무공유와 협업에 능한
        - 소통을 잘하는
        - 이슈에 빠르게 대응하는
        - 고객사/협력사/동료와 관계가 좋은
    - 우수SW개발자
        - 협업에 유연하고
        - 자기 주도적이며
        - 문제 해결력이 높은
                </span>
                <br></br>
                <br></br>
                <span className="date">2023.10.05</span>
              </div>
              <span className="img">
                <img className="post_img" src={TEST2} alt="이미지"></img>
              </span>
            </div>
          </div>
          <div className="post-written">
            <div className="post_border">
                <div className="postshow1">
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
    </div>
  );
}
