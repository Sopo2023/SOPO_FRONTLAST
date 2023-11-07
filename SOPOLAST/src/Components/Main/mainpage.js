import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Post1 from "../../Assets/image/1.png";
import Post2 from "../../Assets/img/postimg.jpeg";
import Post3 from "../../Assets/img/newjeans.jpeg";
import Head from '../../head/head';
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
//   const user = useRecoilValue(userState);
const [sideName, setSideName] = useState('');
const localStorageName = localStorage.getItem('sopo_nm'); 
useEffect(() => {
    const localStorageName = localStorage.getItem('sopo_nm');
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
      scrollContainerRef.current.addEventListener('mousedown', handleMouseDown);
      scrollContainerRef.current.addEventListener('mouseup', handleMouseUp);
      scrollContainerRef.current.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.removeEventListener('mousedown', handleMouseDown);
        scrollContainerRef.current.removeEventListener('mouseup', handleMouseUp);
        scrollContainerRef.current.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [scrollContainerRef, handleMouseDown, handleMouseUp, handleMouseMove]);
  
 
  
  useEffect(() => {
    
    axios.get('#')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);
  
  const fetchCardData = async () => {
    try {
      const response = await axios.get('서버에서 JSON 데이터를 가져올 엔드포인트');
      return response.data;
    } catch (error) {
      console.error('데이터를 불러오는 중 에러 발생:', error);
      return [];
    }
  };
   // 페이지가 로드될 때 데이터 가져오는 코드
   useEffect(() => {
    fetchCardData().then((data) => {
      setCards(data);
    });
    window.addEventListener('beforeunload', () => {
      fetchCardData().then((data) => {
        setCards(data);
      });
    });
  }, []);


    return( 
    <div className='main'>
    <div className="content">
         <Head />
         <div className="mainCard" ref={scrollContainerRef}>
            {/* <div className="card1" onClick={()=>{navigate("/Portfoliosub")}}>
                <p className='card_p'>배채희</p>
                <p className='card_p'>Front-end Dev</p>
                <p className='card_p'>DGSW 8th</p>
                <p className='card_p'>CNS</p>
            </div> */}
            {cards.map((card) => ( 
            <div
            key={card.id} //서버로부터 받은 id
            onClick={() => navigate(`/card${card.id + 1}`)}
            className="card1"
            >
            <p className='card_p'>{card.name}</p>
            <p className='card_p'>{card.major}</p>
            <p className='card_p'>{card.batch}</p>
            <p className='card_p'>{card.club}</p>
            </div>
        ))}
            <div className="card2" onClick={()=>{navigate("/card2")}}>
                <p className='card_p'>박규민</p>
                <p className='card_p'>Full-Stack Dev</p>
                <p className='card_p'>DGSW 8th</p>
                <p className='card_p'>ALT</p>
            </div>
            <div className="card3" onClick={()=>{navigate("/card3")}}>
                <p className='card_p'>가요이</p>
                <p className='card_p'>Back-end Dev</p>
                <p className='card_p'>DGSW 8th</p>
                <p className='card_p'>DLC</p>
            </div>
            <div className="card4"  onClick={()=>{navigate("/card4")}}>
                <p className='card_p'>전우진</p>
                <p className='card_p'>Front-Stack Dev</p>
                <p className='card_p'>DGSW 8th</p>
                <p className='card_p'>모디</p>
            </div>
            <div className="card5"  onClick={()=>{navigate("/card5")}}>
                <p className='card_p'>김호준</p>
                <p className='card_p'>Back-end Dev</p>
                <p className='card_p'>DGSW 8th</p>
                <p className='card_p'>모디</p>
            </div>
            <div className="card6"  onClick={()=>{navigate("/card6")}}>
                <p className='card_p'>이해준</p>
                <p className='card_p'>Front-Stack Dev</p>
                <p className='card_p'>DGSW 8th</p>
                <p className='card_p'>QI</p>
            </div>
         </div>
    
            <div className="sideName">
                <div className="CHname">
                <p onClick={() => navigate("/mypage")} className='sidenameColor'>{sideName}</p>
                </div>
                <div className="Write">
                    <p className="link_side" onClick={()=>{navigate("/Mypage")}}>내 포트폴리오</p>
                    <p className="link_side" onClick={()=>{navigate("/sidewrite")}}>글쓰기</p>
                </div>
                <div className='News'>
                    <p className='writ_name'>내 소식</p>
                    <div className='write_detail'>
                    <p className='writ'><strong>서상렬</strong>님이 <strong>깃허브완전알려줌~ </strong>글에 댓글을 남겼습니다. </p>
                    </div>
                </div>
            </div>
    
        <div className="post">
        {posts.map(post => (
            <div className="post-write" key={post.id} onClick={()=>navigate(`/post/${post.id}`)}>
              <div className="Zonecontrol">
                <span className="Name">{post.author}</span>
                <span className="title">{post.title}</span>
                <span className="detail">{post.content}</span>
                <span className="date">{post.date}</span>
              </div>
              <span className="img">
                <img className="real_img" src={post.imageUrl} alt="이미지" />
              </span>
            </div>
          ))}
            <div className="post-write">
                <div className='Zonecontrol'>
                    <span className="Name">이해준</span>
                    <span className="title">오늘 먹은거 </span>
                    <span className="detail">햄버거 치킨 피자 짜장면 마라탕 탕후루 사과 탕수육 치즈 </span>
                    <span className="date">2023.09.22</span>
                </div>
                <span className="img"><img className='real_img' src={Post2} alt="이미지"></img></span>
            </div>
            <div className="post-write">
                <div className='Zonecontrol'>
                    <span className="Name">전우진</span>
                    <span className="title">오늘 한거 </span>
                    <span className="detail">갈굼 당하기 리엑트 하기 사진찍기</span>
                    <span className="date">2023.09.18</span>
                </div>
                <span className="img"><img className='real_img' src={Post3} alt="이미지"></img></span>
            </div>
            <div className="post-write">
                <div className='Zonecontrol'>
                    <span className="Name">박규민</span>
                    <span className="title">오늘 한거 </span>
                    <span className="detail">누워서 자기 키 크기 자치방에서 빨래하기</span>
                    <span className="date">2023.09.15</span>
                </div>
            </div>
            <div className="post-write">
                <div className='Zonecontrol'>
                    <span className="Name">김호준</span>
                    <span className="title">오늘 한거 </span>
                    <span className="detail">축구하기 수업째기</span>
                    <span className="date">2023.09.12</span>
                </div>
            </div>       
        </div>
 
        {/* <form className='chang_button'>
            <input id='leftbutton' type='button' value="1"></input>
            <input type='button' value="2"></input>
        </form> */}
    </div>
    </div>
    )
 }