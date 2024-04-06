import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Magnifying from "src/Components/magnifying/Magnifying/Magnifying";
import * as s from "src/Components/Updown/Post/Post.Style";
import SEOUL from "src/Assets/image/3.png";
import { link } from "fs";
import Pagination from "src/Components/Pagination/Pagination";
interface Post {
  id: number;
  author: string;
  title: string;
  content: string;
  date: string;
  image: string;
}

export default function UpdownPost() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(10);
  const [posts, setPosts] = useState<Post[]>([]);
  const [boardList, setBoardList] = useState([]);

  const getBoardList = async () => {
    const resp = await (await axios.get('SERVER_URL')).data; // 2) 게시글 목록 데이터에 할당  
    setBoardList(resp.data); // 3) boardList 변수에 할당
    console.log(boardList);
  }

  useEffect(() => {
    getBoardList(); // 1) 게시글 목록 조회 함수 호출
  }, []);

  //페이지네이션 변경 시 이벤트 처리
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  return (
    <s.PostMain>
      <s.PostMainView>
        <Magnifying />
        <s.Post_border>
          <s.PostWrite
            onClick={() => {
              navigate("/Updownsub");
            }}
          >
            <s.PostZonecontrol>
              <span> 김가영 </span>
              <span> 4개교 연합 해커톤 프론트엔드 </span>
              <span>
                2023년 08월 24일 4개교 연합 해커톤을 진행했다.고종현 님
                @manudeli 경력 요기요에서 -Merchant trine : 사장님 관련 서비스
                사장 사이트, 사장 관리자 서비스 공통 요기요 디자인, FE 나의
                이야기 제대 전, 수포자 고등학생에서 미대생(디자인전공)으로서의
                삶...
              </span>
              <span>2023.11.02</span>
            </s.PostZonecontrol>
            <s.Postimg>
              <img src={SEOUL} alt="이미지"></img>
            </s.Postimg>
          </s.PostWrite>
        </s.Post_border>
        <s.Post_border>
          <s.PostWrite
            onClick={() => {
              navigate("/Updownsub");
            }}
          >
            {boardList.map((board) => (
              // 4) map 함수로 데이터 출력
              <s.PostZonecontrol>
                <span key={board.author}>{board.name}</span>
                <span key={board.title}>{board.title}</span>
                <span key={board.content}>{board.content}</span>
                <span key={board.data}>{board.data}</span>
              <s.Postimg>
                <img key={board.image}>{board.image}</img>
              </s.Postimg>
              </s.PostZonecontrol>
            ))}
          </s.PostWrite>
        </s.Post_border>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </s.PostMainView>
    </s.PostMain>
  );
}
