import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Post1 from "../../Assets/image/1.png";
import Post2 from "../../Assets/img/postimg.jpeg";
import Post3 from "../../Assets/img/newjeans.jpeg";
import Head from '../../head/head';
import axios from "axios";
import "./main.css"


export default function Start() {
    const navigate=useNavigate()
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get('#')
      .then(response => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };


    return( 
    <div className='main'>
    <div className="content">
         <Head />
         <main className="mainCard">
            <div className="card1" onClick={()=>{navigate("/Portfoliosub")}}>
                <p className='card_p'>배채희</p>
                <p className='card_p'>Front-end Dev</p>
                <p className='card_p'>DGSW 8th</p>
                <p className='card_p'>CNS</p>
            </div>
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
         </main>
    
            <div className="sideName">
                <div className="CHname">
                    <p onClick={()=>{navigate("/mypage")}} className='sidenameColor' >이해준</p>
                </div>
                <div className="Write">
                    <p className="p1"><Link to="/myportfolio" className='link_side'>내 포트폴리오</Link></p>
                    <p className="p2"><Link to="/sidewrite" className='link_side'>글쓰기</Link></p>
                </div>
                <div className='News'>
                    <p className='writ_name'>내 소식</p>
                    <div className='write_detail'>
                    <p className='writ'><strong>전우진</strong>님이 <strong>깃허브완전알려줌~ </strong>글에 댓글을 남겼습니다. </p>
                    </div>
                    
                </div>
            </div>
    
        <div className="post">
            <div className="post-write">
                <div className='Zonecontrol'>
                    <span className="Name">김가영</span>
                    <span className="title">4개교 연합 해커톤 프론트엔드</span>
                    <span className="detail">박규민 모크 김가영은 핑구 배채희는 대소고 김채원 전우진은 학생회 김호준 축구부</span>
                    <span className="date">2023.09.30</span>
                </div>
                <span className="img"><img className='real_img' src={Post1} alt="이미지"></img></span>
            </div>
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
        <div className='paginat'>
            {currentPage > 1 && <button onClick={prevPage}>Previous Page</button>}
            {currentPage < Math.ceil(posts.length / postsPerPage) && (
              <button onClick={nextPage}>Next Page</button>
            )}
          </div>
        {/* <form className='chang_button'>
            <input id='leftbutton' type='button' value="1"></input>
            <input type='button' value="2"></input>
        </form> */}
    </div>
    </div>
    )
 }