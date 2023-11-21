import "./updown.css";
import { Link, useNavigate } from "react-router-dom";
import Sidename from "../../constants/Sidebar/side";
import TEST5 from "../../Assets/image/3.png";
import TEST6 from "../../Assets/image/1.png";
import TEST7 from "../../Assets/image/2.png";
import TEST8 from "../../Assets/img/B1CODE.png";
import TEST9 from "../../Assets/img/MAC.JPG";
import Head from "../../constants/head/head";

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
          <div
            className="post-written"
            onClick={() => {
              navigate("/Updownsub");
            }}
          >
            <div className="postshow1">
              <div className="post_border">
                <span className="name">김가영</span>
                <br></br>
                <span className="title">4개교 연합 해커톤 프론트엔드</span>
                <br></br>
                <span className="detail">
                  2023년 08월 24일 4개교 연합 해커톤을 진행했다.고종현 님
                  @manudeli 경력 요기요에서 -Merchant trine : 사장님 관련 서비스
                  사장 사이트, 사장 관리자 서비스 공통 요기요 디자인, FE 나의
                  이야기 제대 전, 수포자 고등학생에서 미대생(디자인전공)으로서의
                  삶...
                </span>
                <br></br>
                <br></br>
                <span className="date">2023.11.02</span>
                <span className="img">
                  <img className="post_img" src={TEST6} alt="이미지"></img>
                </span>
              </div>
            </div>
          </div>
          <div className="post-written">
            <div className="postshow1">
              <div className="post_border">
                <span className="name">배채희</span>
                <br></br>
                <span className="title">
                  4개교 연합 해커톤 - SW창업 알고보면 어렵지 않다
                </span>
                <br></br>
                <span className="detail">
                  스타트업 창업 상상을 현실로 이끄는 액션 플랜 온택트 코리아
                  최지연님 자신에게 구매욕구가 확실하게 작용하지 않으면 매출로
                  이어지지 않는다. 전화 - 고객접접 만들기 어려웠다. 현장 -
                  못들어오게 함.
                </span>
                <br></br>
                <br></br>
                <span className="date">2023.10.28</span>
                <span className="img">
                  <img className="post_img" src={TEST7} alt="이미지"></img>
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
                  오늘은 팀 바인드에서 주최한 컨퍼런스 바코드에 대해 이야기 하려
                  한다. ​바코드? 작년겨울 시작 - 주로 일학년을 대상으로 새내기
                  개발자들에게 꼭 필요한 지식 전하는 컨퍼런스. Git & GitHub /
                  백엔드 이지민선배
                </span>
                <br></br>
                <br></br>
                <span className="date">2023.10.28</span>
                <span className="img">
                  <img className="post_img" src={TEST8} alt="이미지"></img>
                </span>
              </div>
            </div>
          </div>
          <div className="post-written">
            <div className="postshow1">
              <div className="post_border">
                <span className="name">박규민</span>
                <br></br>
                <span className="title">
                  경쟁 서비스 분석 및 비지니스 모델 이해
                </span>
                <br></br>
                <span className="detail">
                  경쟁서비스 분석 및 비지니스모델 이해 서울 신학대학교 이형주
                  교수님<br></br>
                  독창성,시장성(경쟁서비스에 대한 분석 및 이해가 적절한가?),
                  사업계획 완성도<br></br>
                  (제시한 서비스의 사업 모델이 설득력 있는가?) 경쟁서비스 이해
                </span>
                <br></br>
                <br></br>
                <span className="date">2023.10.27</span>
              </div>
              <span className="img">
                <img className="post_img" src={TEST5} alt="이미지"></img>
              </span>
            </div>
          </div>
          <div className="post-written">
            <div className="post_border">
              <div className="postshow1">
                <span className="name">전우진</span>
                <br></br>
                <span className="title">
                  4개교 연합 해커톤 - SW창업 알고보면 어렵지 않다
                </span>
                <br></br>
                <span className="detail">
                  1학기, 3월부터 8월까지라는 짧지 않은 시간이 지났기에<br></br>
                  나는 블로그의 첫글을 회고록으로 시작하고자 한다.<br></br>왜
                  회고록을 쓰는가? 라고 묻는다면 난 단연코 '성장' 하기
                  위해서라고 생각한다.<br></br>
                  나는 그리 똑똑한 사람이 아니기에 어떤한 일의 모든 감정과, 그
                  당시 느낀 귀중한 생각을
                </span>
                <br></br>
                <br></br>
                <span className="date">2023.10.25</span>
                <span className="img">
                  <img className="post_img" src={TEST9} alt="이미지"></img>
                </span>
              </div>
            </div>
          </div>
          <div className="post-written">
            <div className="post_border">
              <div className="postshow1">
                <span className="name">김호준</span>
                <br></br>
                <span className="title">바인드 컨퍼런스를 주최하며 느낀점</span>
                <br></br>
                <span className="detail">
                  연말을 맞이하며 바인드 컨퍼런스를 주최하게 되었습니다.
                  컨퍼런스를 직접 듣고<br></br>
                  처음 개최하는 컨퍼런스이기에 발표를 맞게 되어 너무 떨렸습니다.
                  꽤나 부담감을 느끼는 시간<br></br>
                  속에서 바인드 컨퍼런스를 하는 날이 밝았습니다.
                </span>
                <br></br>
                <br></br>
                <span className="date">2023.10.18</span>
                <span className="img">
                  <img className="post_img" src={TEST8} alt="이미지"></img>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
