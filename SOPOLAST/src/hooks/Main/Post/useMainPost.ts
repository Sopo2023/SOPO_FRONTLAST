import React, {useEffect, useState} from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UseMainPost = () =>{
    const SERVERURL = `${process.env.REACT_APP_SERVER_URL}`;
  
  const [posts, setPosts] = useState([]); // 추가: 포스트 목록 상태 추가

  useEffect(() => {
    // 추가: 컴포넌트가 마운트되면 서버에서 포스트 목록을 가져옴
    fetchPosts();
  }, []);
  const fetchPosts = () => {
    axios
      .get(`${SERVERURL}/posts`) // 변경: 실제 포스트 목록을 가져오는 엔드포인트로 변경
      .then((response) => {
        const fetchedPosts = response.data;
        setPosts(fetchedPosts);
        console.log("포스트 목록을 가져왔습니다:", fetchedPosts);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handlePostClick = (postId) => {
    // 클라이언트에서 서버로 요청 보내기
    axios
      .post(`${SERVERURL}/senior-to-junior/read`, { postId: postId })
      .then((response) => {
        console.log("POST 요청이 성공했습니다. 서버 응답:", response.data);
        window.location.href = response.data.redirectTo;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    fetchPostContent(postId);
  };

  const fetchPostContent = (postId) => {
    axios
      .get(`${SERVERURL}/read/${postId}`)
      .then((response) => {
        const postContent = response.data;
        console.log("게시물 내용을 가져옵니다:", postContent);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return{
    handlePostClick,
    posts,
  }
}
export default UseMainPost