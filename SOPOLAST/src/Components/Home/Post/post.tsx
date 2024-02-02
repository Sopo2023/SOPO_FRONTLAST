import React from "react";
import { useNavigate } from "react-router-dom";
import Java from "src/Assets/image/java.png";
import SOPO from "src/Assets/img/mainicon.png";
import bind from "src/Assets/image/b1nd.png";
import he from "src/Assets/image/1.png";
import * as s from "../Style/Post.style";
import useMainPost from "src/hooks/Post/useMainPost"
const Post = () => {
  const navigate = useNavigate();
  const {
    handlePostClick,
    posts,
  } = useMainPost();
  

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
      </s.PostVeiw>
    </>
  );
};
export default Post;
