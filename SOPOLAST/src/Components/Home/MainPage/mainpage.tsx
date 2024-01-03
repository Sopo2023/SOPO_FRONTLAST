import React, { useEffect, useState, useRef } from "react";
import * as s from "../Style/Main.style";
import { Link, useNavigate } from "react-router-dom";
import Post from "../Post/post";
import Head from "src/constants/head/head";
import axios from "axios";
import "./main.css";
import Footer from "../Footer/Fotter";

interface Post {
  id: number;
  name: string;
  title: string;
  content: string;
  createDate: string;
  image: string;
}

export default function Start() {
  const navigate = useNavigate();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [cards, setCards] = useState<any[]>([]);
  const SERVERURL = `${process.env.REACT_APP_SERVER_URL}`;


  //   const user = useRecoilValue(userState);
  const [sideName, setSideName] = useState("");
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
    const fetchPosts = async () => {
      const localStorageEmail = localStorage.getItem("sopo_id");
      try {
        const response = await axios.get<Post[]>(`${SERVERURL}/list`, {
          params: {
            userId: localStorageEmail,
          },
        });
        console.log("게시물 목록을 가져옵니다:", response.data);
        setPosts(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <>
      <Head />
      <s.MainContainer>
        <s.MainHome>
          <s.MainCard ref={scrollContainerRef}>
            <s.CardContainer ref={scrollContainerRef}>
              <s.Card
                onClick={() => {
                  navigate("/52562893");
                }}
              >
                <s.CardP>
                  <s.p>배채희</s.p>
                  <s.p>Front-end Dev</s.p>
                  <s.p>DGSW 8th</s.p>
                  <s.p>CNS</s.p>
                </s.CardP>
              </s.Card>
              {/* {cards.map((card) => (
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
          ))} */}
              <s.Card
                onClick={() => {
                  navigate("/12362153");
                }}
              >
                <s.CardP>
                  <s.p>박규민</s.p>
                  <s.p>Front-end Dev</s.p>
                  <s.p>DGSW 8th</s.p>
                  <s.p>ALT</s.p>
                </s.CardP>
              </s.Card>
              <s.Card
                onClick={() => {
                  navigate("/card3");
                }}
              >
                <s.CardP>
                  <s.p>김가영</s.p>
                  <s.p>Back-end Dev</s.p>
                  <s.p>DGSW 8th</s.p>
                  <s.p>B1ND </s.p>
                </s.CardP>
              </s.Card>
              <s.Card
                onClick={() => {
                  navigate("/card4");
                }}
              >
                <s.CardP>
                  <p className="card_p">전우진</p>
                  <p className="card_p">Front-end Dev</p>
                  <p className="card_p">DGSW 8th</p>
                  <p className="card_p">모디</p>
                </s.CardP>
              </s.Card>
              <s.Card
                onClick={() => {
                  navigate("/card5");
                }}
              >
                <div className="cardP">
                  <s.p>김호준</s.p>
                  <s.p>Back-end Dev</s.p>
                  <s.p>DGSW 8th</s.p>
                  <s.p>모디</s.p>
                </div>
              </s.Card>
              <s.Card
                onClick={() => {
                  navigate("/card6");
                }}
              >
                <div className="cardP">
                  <p className="card_p">이해준</p>
                  <p className="card_p">Front-end Dev</p>
                  <p className="card_p">DGSW 8th</p>
                  <p className="card_p">QI</p>
                </div>
              </s.Card>
            </s.CardContainer>
          </s.MainCard>
          <s.BottomArea>
            <Post />
            {/* <form className='chang_button'>
            <input id='leftbutton' type='button' value="1"></input>
            <input type='button' value="2"></input>
        </form> */}
            <div className="SideNameArea">
              <div className="SideNameArea_flex">
                <div className="sideName">
                  <div className="CHname">
                    <p
                      onClick={() => navigate("/mypage")}
                      className="sidenameColor"
                    >
                      {sideName}
                    </p>
                  </div>
                  <div className="Write">
                    <p
                      className="link_side"
                      onClick={() => {
                        navigate("/52562893");
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
                </div>
                <div className="News">
                  <p className="writ_name">내 소식</p>
                  <div className="write_detail">
                    <p className="writ">
                      <strong>서상렬</strong>님이{" "}
                      <strong>깃허브완전알려줌~ </strong>
                      글에 댓글을 남겼습니다.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </s.BottomArea>
        </s.MainHome>
        <Footer />
      </s.MainContainer>
    </>
  );
}
