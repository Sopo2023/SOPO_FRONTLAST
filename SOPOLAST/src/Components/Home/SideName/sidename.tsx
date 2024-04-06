import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as s from "../Style/Sidename.style";
const SideName = () => {
  const navigate = useNavigate();
  const [sideName, setSideName] = useState("");
  useEffect(() => {
    const localStorageName = localStorage.getItem("sopo_nm");
    if (localStorageName) {
      setSideName(localStorageName);
    }
  }, []);
  return (
    <>
      <s.SideNameArea>
        <s.SideNameAreaMain>
          <s.sideName>
            <s.Username>
              <s.usernameText
                onClick={() => navigate("/mypage")}
                className="sidenameColor"
              >
                {sideName}
              </s.usernameText>
            </s.Username>
            <s.Write>
              <s.WriteText
                className="link_side"
                onClick={() => {
                  navigate("/52562893");
                }}
              >
                내 포트폴리오
              </s.WriteText>
              <s.WriteText
                className="link_side"
                onClick={() => {
                  navigate("/sidewrite");
                }}
              >
                글쓰기
              </s.WriteText>
            </s.Write>
            <s.News>
              <s.WriteAlarm>소포 소식</s.WriteAlarm>
              <s.WriteDetail>
                <s.WriteMain>
                  <s.WritText>
                    <strong>서상렬</strong>님이{" "}
                    <strong>깃허브완전알려줌~ </strong>
                    글에 댓글을 남겼습니다.{" "}
                  </s.WritText>
                  <s.WritText>
                    <strong>dsd</strong>님이 <strong>깃허브완전알려줌~ </strong>
                    글에 댓글을 남겼습니다.{" "}
                  </s.WritText>
                </s.WriteMain>
              </s.WriteDetail>
            </s.News>
          </s.sideName>
        </s.SideNameAreaMain>
      </s.SideNameArea>
    </>
  );
};
export default SideName;
