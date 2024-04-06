import React from "react";
import { useNavigate } from "react-router-dom";
import Java from "src/Assets/image/java.png";
import SOPO from "src/Assets/img/mainicon.png";
import bind from "src/Assets/image/b1nd.png";
import he from "src/Assets/image/1.png";
import * as s from "../Style/Post.style";
import useMainPost from "src/hooks/Main/Post/useMainPost"
const Post = () => {
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
              <span>{posts.date}</span>
              <span>{posts.createDate}</span>
            </s.PostZonecontrol>
            <s.Postimg>
              <img src={posts.image} alt="이미지" />
            </s.Postimg>
          </s.PostWrite>
        ))}    
      </s.PostVeiw>
    </>
  );
};
export default Post;
