import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
import "./login.css";
import LOGO from "../../Assets/image/LOGO.png";
import axios from "axios";
import Swal from "sweetalert2";

const LoginComponent = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const SERVERURL = "http://10.80.162.77:8080/createUser";
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    // dd
  }, [msg]);

  const LOginFunc = async (e) => {
    e.preventDefault();
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
    if (email === "") {
      Toast.fire({
        icon: "warning",
        title: "이메일을 써주세요",
      });
      return;
    }
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      Toast.fire({
        icon: "warning",
        title: "이메일 형식이 올바르지 않습니다.",
      });
      return;
    }

    if (!email.endsWith("@dgsw.hs.kr")) {
      Toast.fire({
        icon: "warning",
        title: "이 도메인은 로그인이 허용되지 않습니다.",
      });
      return;
    }
    try {
      setLoading(true);
      const userData = {
        email: email,
        password: password,
      };

      const response = await axios.post("/createUser", userData, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });

      navigate("/mypage");
      console.log(response);

      setLoading(false);

      if (response.data.success) {
        Toast.fire({
          icon: "success",
          title: "회원 가입이 완료되었습니다.",
        });
      } else {
        Toast.fire({
          icon: "error",
          title: "회원 가입에 실패하였습니다.",
        });
      }
    } catch (error) {
      console.log(error); // 에러 메시지 콘솔에 출력
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
          <img src={LOGO}></img>
        </div>
        <div className="box2">
          <p>Log in</p>
          <form onSubmit={LOginFunc}>
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

            <button type="submit" className="button">
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
