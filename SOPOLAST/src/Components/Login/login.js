import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import {  userState } from "../../recoil/auto"; 

import "./login.css";
import LOGO from "../../Assets/image/LOGO.png";
import axios from "axios";
import Swal from "sweetalert2";

const LoginComponent = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const [user, setUser] = useRecoilState(userState);

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

      const SERVERURL =`${process.env.REACT_APP_SERVER_URL}`;

      const response = await axios.post(`${SERVERURL}/login`, userData, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });

      setLoading(false);

      if (response.data.status === 200) {
        Toast.fire({
          icon: "success",
          title: "로그인 성공",
        });
        // setUser({ name: response.data.name, email: response.data.email });
        localStorage.clear()
        localStorage.setItem('sopo_id', response.data.data.email);
        localStorage.setItem('sopo_nm',  response.data.data.name);
        
        localStorage.setItem('sopo_github',"je355");
        // console.log(response.data.data.email);
        // console.log(response.data.data.name);
        // console.log(localStorage.getItem('sopo_id'));
        // console.log(localStorage.getItem('sopo_nm'));
       
        navigate("/main");
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
