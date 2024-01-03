import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Java from "src/Assets/image/java.png";
import SOPO from "src/Assets/img/mainicon.png";
import bind from "src/Assets/image/b1nd.png";
import Jagu from "src/Assets/img/MAC.JPG";
import he from "src/Assets/image/1.png";
import * as s from "../Style/Post.style";
const Post = () => {
  const SERVERURL = `${process.env.REACT_APP_SERVER_URL}`;
  const navigate = useNavigate();
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

  return (
    <>
      <s.PostVeiw>
        {posts.map((posts) => (
          <s.PostWrite key={posts.id} onClick={() => handlePostClick(posts.id)}>
            <s.PostZonecontrol>
              <span>{posts.name}</span>
              <span>{posts.title}</span>
              <span>{posts.content}</span>
              <span>{posts.createDate}</span>
            </s.PostZonecontrol>
            <s.Postimg>
              <img src={posts.image} alt="이미지" />
            </s.Postimg>
          </s.PostWrite>
        ))}
        <s.PostWrite
          onClick={() => {
            navigate("/Updownsub");
          }}
        >
          <s.PostZonecontrol>
            <span> 김가영 </span>
            <span> 4개교 연합 해커톤 프론트엔드 </span>
            <span>
              2023년 08월 24일 4개교 연합 해커톤을 진행했다.고종현 님 @manudeli
              경력 요기요에서 -Merchant trine : 사장님 관련 서비스 사장 사이트,
              사장 관리자 서비스 공통 요기요 디자인, FE 나의 이야기 제대 전,
              수포자 고등학생에서 미대생(디자인전공)으로서의 삶...
            </span>
            <span>2023.11.02</span>
          </s.PostZonecontrol>
          <s.Postimg>
            <img src={he} alt="이미지"></img>
          </s.Postimg>
        </s.PostWrite>
        <s.PostWrite>
          <s.PostZonecontrol>
            <span> 서상렬 </span>
            <span> 나르샤 일지 </span>
            <span>
              {" "}
              지난 8월부터 시작한 나르샤가 끝나간다. 나르샤가 끝나가며 ICT에
              나가게 되었는데 아직 그 순간을 기억하면 떨리고 있다. 힘들기도 무척
              힘들었지만 뿌듯함과{" "}
            </span>
            <span>2023.09.22</span>
          </s.PostZonecontrol>
          <s.Postimg>
            <img className="real_img" src={SOPO} alt="이미지"></img>
          </s.Postimg>
        </s.PostWrite>
        <s.PostWrite>
          <s.PostZonecontrol>
            <span> 김창대 </span>
            <span> JAVA 공부법 </span>
            <span>
              {" "}
              JAVA 공부법.
              <br /> 안녕하세요. 오늘은 자바 공부법에 대해 이야기합니다.{" "}
            </span>
            <span>2023.09.18</span>
          </s.PostZonecontrol>
          <s.Postimg>
            <img src={Java} alt="이미지"></img>
          </s.Postimg>
        </s.PostWrite>
        <s.PostWrite>
          <s.PostZonecontrol>
            <span> 김호준 </span>
            <span> 바인드 컨퍼런스 듣기 </span>
            <span>
              {" "}
              바인드 컨퍼런스 들은 날 <br /> 바인드 컨퍼런스를 시청각실에서
              들었는데 너무너무 좋은 이야기가 있었다.
            </span>
            <span>2023.09.15</span>
          </s.PostZonecontrol>
          <s.Postimg>
            <img src={bind} alt="이미지"></img>
          </s.Postimg>
        </s.PostWrite>
        <s.PostWrite>
          <s.PostZonecontrol>
            <span> 조현아 </span>
            <span> 자료구조 시험을 치고나서 </span>
            <span>
              {" "}
              난 자료구조 시험을 중간고사에 치고서 배운점이 많이 생겨서 다른
              학생들도 알면 좋을것 같단 생각에 이 글을 쓰게 되었다!!{" "}
            </span>
            <span>2023.09.12</span>
          </s.PostZonecontrol>
          <s.Postimg>
            <img className="real_img" src={Jagu} alt="이미지"></img>
          </s.Postimg>
        </s.PostWrite>
      </s.PostVeiw>
    </>
  );
};
export default Post;
