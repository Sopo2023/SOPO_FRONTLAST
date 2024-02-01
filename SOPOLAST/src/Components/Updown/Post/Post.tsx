import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Magnifying from "src/constants/magnifying/Magnifying/Magnifying";
import * as s from "src/Components/Updown/Post/Post.Style";
import B1CODE from "src/Assets/img/B1CODE.png";
import SEOUL from "src/Assets/image/3.png";
import Yogiyo from "src/Assets/image/1.png";
import KOREA from "src/Assets/image/2.png";
import MAC from "src/Assets/img/MAC.JPG";
import { link } from "fs";
import Pagination from "src/constants/Pagination/Pagination";
// const UpdownPost = () => {
//     const SERVERURL = `${process.env.REACT_APP_SERVER_URL}`;
//     const navigate = useNavigate();
//     const [Post, setPost] = useState([]);
// };
// useEffect(() => {
//     AddPosts();
// }, []);
// const AddPosts = () => {
//     axios
//         .get(`${SERVERURL}/posts`)
//         .then((response) => {
//             const AddPosts = response.data;
//             setPost(AddPosts);
//             console.log("게시물 목록을 가져왔습니다", AddPosts);
//         })
//         .catch((error) => {
//             console.error("Error:",error);
//         });
// }
// const handlePostClick = (postId) => {
//     axios
//         .post(`${SERVERURL}/senior-to-junior/read`, { postId: postId })
//         .then((response) => {
//         console.log("게시물 요청이 성공했습니다. 서버 응답:", response.data);
//         window.location.href = response.data.redirectTo;
//         })
//         .catch((error) => {
//         console.error("Error:", error);
//         });
//   GetPost(postId);
// }
// const GetPost = (postId) => {
//     axios
//       .get(`${SERVERURL}/read/${postId}`)
//       .then((response) => {
//         const postContent = response.data;
//         console.log("게시물 내용을 가져옵니다:", postContent);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   };
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
  //게시물 가져오기
  useEffect(() => {
    axios.get<Post[]>("/api/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);
  //현재 페이지의 게시물 가져오기
  const indexOfLastPost: number = currentPage * postsPerPage;
  const indexOfFirstPost: number = indexOfLastPost - postsPerPage;
  const currentPosts: Post[] = posts.slice(indexOfFirstPost, indexOfLastPost);
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
          <s.PostWrite>
            <s.PostZonecontrol>
              <span>배채희</span>
              <span>4개교 연합 해커톤 - SW창업 알고보면 어렵지 않다</span>
              <span>
                스타트업 창업 상상을 현실로 이끄는 액션 플랜 온택트 코리아
                최지연님 <br></br>자신에게 구매욕구가 확실하게 작용하지 않으면
                매출로 이어지지 않는다. <br></br>전화 - 고객접접 만들기
                어려웠다. 현장 - 못들어오게 함.
              </span>
              <span>2023.10.28</span>
            </s.PostZonecontrol>
            <s.Postimg>
              <img className="Post_Img" src={KOREA} alt="이미지"></img>
            </s.Postimg>
          </s.PostWrite>
        </s.Post_border>
        <s.Post_border>
          <s.PostWrite>
            <s.PostZonecontrol>
              <span>이해준</span>
              <span>바인드 컨버런스를 듣고나서.</span>
              <span>
                오늘은 팀 바인드에서 주최한 컨퍼런스 바코드에 대해 이야기 하려
                한다. <br></br>​바코드? 작년겨울 시작 - 주로 일학년을 대상으로
                새내기 개발자들에게 꼭 필요한 지식 전하는 컨퍼런스. <br></br>Git
                & GitHub / 백엔드 이지민선배
              </span>
              <span>2023.10.27</span>
            </s.PostZonecontrol>
            <s.Postimg>
              <img className="Post_Img" src={B1CODE} alt="이미지"></img>
            </s.Postimg>
          </s.PostWrite>
        </s.Post_border>
        <s.Post_border>
          <s.PostWrite>
            <s.PostZonecontrol>
              <span>박규민</span>
              <span>경쟁 서비스 분석 및 비지니스 모델 이해</span>
              <span>
                경쟁서비스 분석 및 비지니스모델 이해 서울 신학대학교 이형주
                교수님<br></br>
                독창성,시장성(경쟁서비스에 대한 분석 및 이해가 적절한가?),
                사업계획 완성도<br></br>
                (제시한 서비스의 사업 모델이 설득력 있는가?) 경쟁서비스 이해
              </span>
              <span>2023.10.27</span>
            </s.PostZonecontrol>
            <s.Postimg>
              <img className="Post_Img" src={SEOUL} alt="이미지"></img>
            </s.Postimg>
          </s.PostWrite>
        </s.Post_border>
        <s.Post_border>
          <s.PostWrite>
            <s.PostZonecontrol>
              <span>전우진</span>
              <span>4개교 연합 해커톤 - SW창업 알고보면 어렵지 않다</span>
              <span>
                1학기, 3월부터 8월까지라는 짧지 않은 시간이 지났기에<br></br>
                나는 블로그의 첫글을 회고록으로 시작하고자 한다.<br></br>왜
                회고록을 쓰는가? 라고 묻는다면 난 단연코 '성장' 하기 위해서라고
                생각한다.<br></br>
                나는 그리 똑똑한 사람이 아니기에 어떤한 일의 모든 감정과, 그
                당시 느낀 귀중한 생각을
              </span>
              <span>2023.10.25</span>
            </s.PostZonecontrol>
            <s.Postimg>
              <img className="Post_Img" src={MAC} alt="이미지"></img>
            </s.Postimg>
          </s.PostWrite>
        </s.Post_border>
        <s.Post_border>
          <s.PostWrite>
            <s.PostZonecontrol>
              <span>김호준</span>
              <span>바인드 컨퍼런스를 주최하며 느낀점</span>
              <span>
                연말을 맞이하며 바인드 컨퍼런스를 주최하게 되었습니다.
                컨퍼런스를 직접 듣고<br></br>
                처음 개최하는 컨퍼런스이기에 발표를 맞게 되어 너무 떨렸습니다.
                꽤나 부담감을 느끼는 시간<br></br>
                속에서 바인드 컨퍼런스를 하는 날이 밝았습니다.
              </span>
              <span>2023.10.18</span>
            </s.PostZonecontrol>
            <s.Postimg>
              <img className="Post_Img" src={B1CODE} alt="이미지"></img>
            </s.Postimg>
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
