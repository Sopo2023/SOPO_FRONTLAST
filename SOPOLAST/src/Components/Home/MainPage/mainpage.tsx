import React, { useEffect, useState, useRef } from "react";
import * as s from "../Style/Main.style";
import { useNavigate } from "react-router-dom";
import Post from "../Post/post";
import Head from "../../../constants/head/Head/head";
import SideName from "../SideName/sidename";
import Footer from "../Footer/Fotter";
import axios from "axios";
import MainCard from "../Card/Maincard";

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
  const [posts, setPosts] = useState<Post[]>([]);
  
  useEffect(() => {
    const fetchPosts = async () => {
      const localStorageEmail = localStorage.getItem("sopo_id");
      try {
        const response = await axios.get<Post[]>(`/list`, {
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
      <Head active={true}/>
      <s.MainContainer>
        <s.MainHome>
          <MainCard/>
          <s.BottomArea>
            <Post />
            <SideName />
          </s.BottomArea>
        </s.MainHome>
        <Footer />
      </s.MainContainer>
    </>
  );
}
