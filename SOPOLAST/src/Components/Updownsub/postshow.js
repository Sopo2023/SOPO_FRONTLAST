import "./postshow.css";
import Sidename from "../Sidebar/side";
import TEST6 from "../../Assets/image/1.png";
import Head from "../../head/head";

export default function Start() {
  return (
    <div className="main">
      <div className="content">
        <Head />
        <Sidename />
          <div className="post-written1">
            <div className="post_border1">
              <span className="title1">4개교 연합 해커톤 프론트엔드</span>
              <br></br>
              <span className="name1">김가영</span>
              <br></br>
              <span className="img">
                <img className="post_img1" src={TEST6} alt="이미지"></img>
              </span>
              <span className="detail1">
              <div className="minit">
              경쟁서비스 이해
              </div><br></br>
                - 같은 고객층에게 비슷한 가격으로 공급하고 있는 자사 서비스와 시슷한 제품과 서비스<br></br>
                - 기업 관점의 경재자, 시장 관점의 경쟁자<br></br>
                <br></br>
                기업관점 - (음료) 펩시, 코카콜라, 닥터펩시<br></br>
                시장관점 - (갈증해소) 생과일 주스, 물, 콜라, 이온음료<br></br>
                <br></br>
                - 효율성 - 내 제춤 경쟁제품으로 자리매김, 차별성 위한 기준점 방향 제시<br></br>
                - 내가 공략라는 목표고객 제시, 문제 남겨준 선구자<br></br>
                - 큰 사업전개를 위해 필요한 파트너(유통, 공급)를 개척해 공유하는 자<br></br>
                - 내가 돈 벌 수 있는 차별적인 사업 모델에 대해 기반을 제공해주는 개척자<br></br>
                - 내 사업의 multiple을 만들어 나에게 기어가치 제공, 투자유치 용이 도우미<br></br>
                - 일정 시장 검봉 후 해당 제품과 서비스 및 기업을 인수하는 acquirer(사업인수자 등등)<br></br>
                <br></br>
                <div className="minit2">
                  작성가이드
                </div>
                <br></br>
                우리팀 서비스에 대한 경쟁 서비스 3-5 선정<br></br>
                - 세계적인 서비스 보다 마켓 출시 5년 이내의 서비스 중 선정<br></br>
                <br></br>
                선쟁 경쟁서비스를 직접 사용한 후 우리팀 서비스와 비교<br></br>
                - 비교 할 요소는 개요, 주요기능, 강약점, 서비스 목표 및 전략, 서비스 기술<br></br>
              </span>
            </div>
          </div>
        </div>
      </div>
  );
}
