import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Post1 from "../../Assets/image/1.png";
// import Post2 from "../../Assets/img/postimg.jpeg";
// import Post3 from "../../Assets/img/newjeans.jpeg";

import Java from "../../Assets/image/java.png";
import SOPO from "../../Assets/img/mainicon.png";
import bind from "../../Assets/image/b1nd.png";
import Jagu from "../../Assets/img/MAC.JPG";
import he from "../../Assets/image/1.png";
import Head from "../../head/head";
import axios from "axios";
import "./main.css";
// import { useRecoilValue } from 'recoil';
// import { userState } from '../../recoil/auto';

export default function Start() {
  const navigate = useNavigate();
  const scrollContainerRef = useRef(null);
  const [posts, setPosts] = useState([]);
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [cards, setCards] = useState([]);

  const handlePostClick = (postId) => {
    // 클라이언트에서 서버로 요청 보내기
    axios
      .post(
        "https://port-0-sopo-backend-5yc2g32mlomvxoqs.sel5.cloudtype.app/senior-to-junior/read", //선배가 후배에게 게시물 보내기
        { postId: postId }
      )

      .then((response) => {
        console.log("POST 요청이 성공했습니다. 서버 응답:", response.data);
        // 서버에서 받은 응답을 기반으로 클라이언트에서 리디렉션 수행
        window.location.href = response.data.redirectTo;
      })

      .catch((error) => {
        console.error("Error:", error);
      });
    fetchPostContent(postId);
  };

  const fetchPostContent = (postId) => {
    axios
      .get(
        `https://port-0-sopo-backend-5yc2g32mlomvxoqs.sel5.cloudtype.app/read/${postId}` //선배가 후배에게 게시물 가져오기
      ) // 실제 게시물 내용을 가져오는 엔드포인트로 변경
      .then((response) => {
        const postContent = response.data; // 가져온 게시물 내용
        console.log("게시물 내용을 가져옵니다:", postContent);
        // 여기에서 postContent를 state나 모달 창 등에 표시하도록 설정
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  //   const user = useRecoilValue(userState);
  const [sideName, setSideName] = useState("");
  const localStorageName = localStorage.getItem("sopo_nm");
  useEffect(() => {
    const localStorageName = localStorage.getItem("sopo_nm");
    if (localStorageName) {
      setSideName(localStorageName);
    }
  }, []);

  const handleMouseDown = (e) => {
    if (e.button !== 0) return; // 왼쪽 마우스 버튼만
    setDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.addEventListener("mousedown", handleMouseDown);
      scrollContainerRef.current.addEventListener("mouseup", handleMouseUp);
      scrollContainerRef.current.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.removeEventListener(
          "mousedown",
          handleMouseDown
        );
        scrollContainerRef.current.removeEventListener(
          "mouseup",
          handleMouseUp
        );
        scrollContainerRef.current.removeEventListener(
          "mousemove",
          handleMouseMove
        );
      }
    };
  }, [scrollContainerRef, handleMouseDown, handleMouseUp, handleMouseMove]);

  useEffect(() => {
    // 게시물 목록을 가져오는 GET 요청
    axios
      .get(
        "https://port-0-sopo-backend-5yc2g32mlomvxoqs.sel5.cloudtype.app/list" //선배가 후배에게 게시물 목록 가져오기
      )
      .then((response) => {
        console.log("게시물 목록을 가져옵니다:", response.data);
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []); // 빈 배열을 두어 페이지가 로드될 때 한 번만 실행되도록 설정합니다.

  // const fetchCardData = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://port-0-sopo-backend-5yc2g32mlomvxoqs.sel5.cloudtype.app/senior-to-junior/read"
  //     );
  //     return response.data;
  //   } catch (error) {
  //     console.error("데이터를 불러오는 중 에러 발생:", error);
  //     return [];
  //   }
  // };
  // 페이지가 로드될 때 데이터 가져오는 코드
  // useEffect(() => {
  //   fetchCardData().then((data) => {
  //     setCards(data);
  //   });
  //   window.addEventListener("beforeunload", () => {
  //     fetchCardData().then((data) => {
  //       setCards(data);
  //     });
  //   });
  // }, []);

  return (
    <div className="main">
      <div className="content">
        <Head />
        <div className="mainCard" ref={scrollContainerRef}>
          <div
            className="card1"
            onClick={() => {
              navigate("/Portfoliosub");
            }}
          >
            <p className="card_p">배채희</p>
            <p className="card_p">Front-end Dev</p>
            <p className="card_p">DGSW 8th</p>
            <p className="card_p">CNS</p>
          </div>
          {cards.map((card) => (
            <div
              key={card.id} //서버로부터 받은 id
              onClick={() => navigate(`/card${card.id + 1}`)}
              className="card1"
            >
              <p className="card_p">{card.name}</p>
              <p className="card_p">{card.major}</p>
              <p className="card_p">{card.batch}</p>
              <p className="card_p">{card.club}</p>
            </div>
          ))}
          <div
            className="card2"
            onClick={() => {
              navigate("/card2");
            }}
          >
            <p className="card_p">박규민</p>
            <p className="card_p">Full-Stack Dev</p>
            <p className="card_p">DGSW 8th</p>
            <p className="card_p">ALT</p>
          </div>
          <div
            className="card3"
            onClick={() => {
              navigate("/card3");
            }}
          >
            <p className="card_p">서상렬</p>
            <p className="card_p">Back-end Dev</p>
            <p className="card_p">DGSW 8th</p>
            <p className="card_p">DLC</p>
          </div>
          <div
            className="card4"
            onClick={() => {
              navigate("/card4");
            }}
          >
            <p className="card_p">전우진</p>
            <p className="card_p">Front-Stack Dev</p>
            <p className="card_p">DGSW 8th</p>
            <p className="card_p">모디</p>
          </div>
          <div
            className="card5"
            onClick={() => {
              navigate("/card5");
            }}
          >
            <p className="card_p">김호준</p>
            <p className="card_p">Back-end Dev</p>
            <p className="card_p">DGSW 8th</p>
            <p className="card_p">모디</p>
          </div>
          <div
            className="card6"
            onClick={() => {
              navigate("/card6");
            }}
          >
            <p className="card_p">이해준</p>
            <p className="card_p">Front-Stack Dev</p>
            <p className="card_p">DGSW 8th</p>
            <p className="card_p">QI</p>
          </div>
        </div>

        <div className="sideName">
          <div className="CHname">
            <p onClick={() => navigate("/mypage")} className="sidenameColor">
              {sideName}
            </p>
          </div>
          <div className="Write">
            <p
              className="link_side"
              onClick={() => {
                navigate("/Portfoliosub");
              }}
            >
              내 포트폴리오
            </p>
            <p
              className="link_side"
              onClick={() => {
                navigate("/sidewrite");
              }}
            >
              글쓰기
            </p>
          </div>
          <div className="News">
            <p className="writ_name">내 소식</p>
            <div className="write_detail">
              <p className="writ">
                <strong>서상렬</strong>님이 <strong>깃허브완전알려줌~ </strong>
                글에 댓글을 남겼습니다.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="post">
          {posts.map((post) => (
            <div
              className="post-write"
              key={post.id}
              onClick={() => handlePostClick(post.id)}
            >
              <div className="Zonecontrol">
                <span className="Name">{posts.name}</span>
                <span className="title">{posts.title}</span>
                <span className="detail">{posts.content}</span>
                <span className="date">{posts.createDate}</span>
              </div>
              <span className="img">
                <img className="real_img" src={posts.image} alt="이미지" />
              </span>
            </div>
          ))}
          <div
            className="post-write"
            onClick={() => {
              navigate("/Updownsub");
            }}
          >
            <div className="Zonecontrol">
              <span className="Name"> 김가영 </span>
              <span className="title"> 4개교 연합 해커톤 프론트엔드 </span>
              <span className="detail">
                2023년 08월 24일 4개교 연합 해커톤을 진행했다.고종현 님
                @manudeli 경력 요기요에서 -Merchant trine : 사장님 관련 서비스
                사장 사이트, 사장 관리자 서비스 공통 요기요 디자인, FE 나의
                이야기 제대 전, 수포자 고등학생에서 미대생(디자인전공)으로서의
                삶...
              </span>
              <span className="date">2023.11.02</span>
            </div>
            <span className="img">
              <img className="real_img" src={he} alt="이미지"></img>
            </span>
          </div>
          <div className="post-write">
            <div className="Zonecontrol">
              <span className="Name"> 서상렬 </span>
              <span className="title"> 나르샤 일지 </span>
              <span className="detail">
                {" "}
                지난 8월부터 시작한 나르샤가 끝나간다. 나르샤가 끝나가며 ICT에
                나가게 되었는데 아직 그 순간을 기억하면 떨리고 있다. 힘들기도
                무척 힘들었지만 뿌듯함과{" "}
              </span>
              <span className="date">2023.09.22</span>
            </div>
            <span className="img">
              <img className="real_img" src={SOPO} alt="이미지"></img>
            </span>
          </div>
          <div className="post-write">
            <div className="Zonecontrol">
              <span className="Name"> 김창대 </span>
              <span className="title"> JAVA 공부법 </span>
              <span className="detail">
                {" "}
                JAVA 공부법.
                <br /> 안녕하세요. 오늘은 자바 공부법에 대해 이야기합니다.{" "}
              </span>
              <span className="date">2023.09.18</span>
            </div>
            <span className="img">
              <img className="real_img" src={Java} alt="이미지"></img>
            </span>
          </div>
          <div className="post-write">
            <div className="Zonecontrol">
              <span className="Name"> 김호준 </span>
              <span className="title"> 바인드 컨퍼런스 듣기 </span>
              <span className="detail">
                {" "}
                바인드 컨퍼런스 들은 날 <br /> 바인드 컨퍼런스를 시청각실에서
                들었는데 너무너무 좋은 이야기가 있었다.
              </span>
              <span className="date">2023.09.15</span>
            </div>
            <span className="img">
              <img className="real_img" src={bind} alt="이미지"></img>
            </span>
          </div>
          <div className="post-write">
            <div className="Zonecontrol">
              <span className="Name"> 조현아 </span>
              <span className="title"> 자료구조 시험을 치고나서 </span>
              <span className="detail">
                {" "}
                난 자료구조 시험을 중간고사에 치고서 배운점이 많이 생겨서 다른
                학생들도 알면 좋을것 같단 생각에 이 글을 쓰게 되었다!!{" "}
              </span>
              <span className="date">2023.09.12</span>
            </div>
            <span className="img">
              <img className="real_img" src={Jagu} alt="이미지"></img>
            </span>
          </div>
        </div>

        {/* <form className='chang_button'>
            <input id='leftbutton' type='button' value="1"></input>
            <input type='button' value="2"></input>
        </form> */}
      </div>
    </div>
  );
}
