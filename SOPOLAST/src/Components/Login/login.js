import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./login.css";
import LOGO from "../../Assets/image/LOGO.png";
import axios from "axios";
import Swal from "sweetalert2";

const LoginComponent = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const SERVERURL = "http://10.80.161.148:8080login";
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleLogin = async () => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    if (email === "" || password === "") {
      Toast.fire({
        icon: "warning",
        title: "이메일과 비밀번호를 모두 입력해주세요",
      });
      return;
    }

    // 서버에 로그인 정보를 확인하기 위한 요청을 보냅니다
    try {
      setLoading(true);
      const userData = {
        email: email,
        password: password,
      };

      const response = await axios.post(SERVERURL, userData, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });

      setLoading(false);

      if (response.data.success) {
        // 로그인이 성공한 경우, "mypage" 경로로 이동합니다.
        navigate("/mypage");
        // 사용자의 로그인 상태를 Redux나 context API와 같은 전역 상태 관리 시스템에 저장할 수도 있습니다.
      } else {
        Toast.fire({
          icon: "error",
          title: "로그인에 실패하였습니다.",
        });
      }
    } catch (error) {
      console.log(error);
      Toast.fire({
        icon: "error",
        title: "서버 통신 실패.",
      });
    }
  };

  return (
    <div className="App1">
      <div className="signup_main">
        <div className="greenbox">
          <img src={LOGO} alt="로고"></img>
        </div>
        <div className="box2">
          <p>Log in</p>
          <form>
            <input
              className="Email"
              type="text"
              placeholder="E-Mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              className="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>

            <button type="button" className="button" onClick={handleLogin}>
              Log in
            </button>
            {msg}
            <Link to="/Signuppage" className="LINK">
              sign up
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
