import { Link } from "react-router-dom";
import TEST from "../../Assets/img/postimg.jpeg"
import Head from "../../head/head";

export default function Mypagesub() {
  return (
    <div className="main2">
      <div className="content2">
        <div className="black">
            <Head />
            <div className="top3">
                <p className="top4">이해준</p>
                <p className="top5">DGSW 8th</p>
            </div>
        </div>
        <div className="profile">
            <p className="minimi">내정보 입력하기</p>
        </div>
      </div>
    </div>
  );
}
