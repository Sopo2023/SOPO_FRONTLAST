import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import * as s from "src/Components/Updownsub/postshow.Style";
import Sidename from "src/constants/Sidebar/Side/side";
import Head from "src/constants/head/Head/head";

interface Post {
  id: number;
  author: string;
  title: string;
  content: string;
  date: string;
  image: string;
}
const BoardDetail = () => {
  const { idx } = useParams(); // /board/:idx와 동일한 변수명으로 데이터를 꺼낼 수 있습니다.
  const [loading, setLoading] = useState(true);
  const [board, setBoard] = useState([]);
  const getBoard = async () => {
    const resp = await (await axios.get('SERVER_URL')).data; // 2) 게시글 목록 데이터에 할당  
    setBoard(resp.data); // 3) boardList 변수에 할당
    console.log(board);
  }

  useEffect(() => {
    getBoard(); // 1) 게시글 목록 조회 함수 호출
  }, []);

  return (
    <div className="Main">
      <Head active={true} />
      <Sidename />
      <div className="Post">
        {board.map((board) => (
          <div className="Postdetail">
            <span key={board.title}>{board.title}</span>
            <span key={board.author}>{board.name}</span>
            <img key={board.image}>{board.image}</img>
            <span key={board.content}>{board.content}</span>
          </div>
        ))}
      </div>
    </div>
  );
};