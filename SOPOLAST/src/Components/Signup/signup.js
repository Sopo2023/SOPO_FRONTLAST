import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import LOGO from "../../Assets/image/LOGO.png";
import "./signup.css";
import SERVERKEY from "../../Apis/auth/axios"
import Swal from "sweetalert2";

function LoginComponent() {
  // const SERVERKEY ="/createUser"
  const SERVERURL = "http://10.80.162.77:8080/createUser";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");



  const LOginFunc = async (e) => {
    e.preventDefault();
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      }
    });
    if (name === ""){
      Toast.fire({
        icon: 'warning',
        title: '이름을 써주세요'
      });
      return;
    };
    // 이메일 형식 검사
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      Toast.fire({
        icon: 'warning',
        title: '이메일 형식이 올바르지 않습니다.'
      });
      return;
    }
  
    // 이메일 도메인 검사
    if (!email.endsWith("@dgsw.hs.kr")) {
      Toast.fire({
        icon: 'warning',
        title: '이 도메인은 회원가입이 허용되지 않습니다.'
      });
      return;
    }
  
    // 비밀번호 확인
    if (password !== repassword) {
      Toast.fire({
        icon: 'question',
        title: '비밀번호가 일치하지 않습니다.'
      });
      return;
    }
  
    // 서버로 데이터 전송
    try {
      setLoading(true);
      const userData = {
        email: email,
        name: name,
        password: password,
      };
  
      const response = await axios.post(SERVERKEY, userData, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      console.log(response);
  
      setLoading(false);
  
      if (response.data.success) {
        Toast.fire({
          icon: 'success',
          title: '회원 가입이 완료되었습니다.'
        });
      } else {
        Toast.fire({
          icon: 'error',
          title: '회원 가입에 실패하였습니다.'
        });
      }
  
    } catch (error) {
      console.log(error); // 에러 메시지 콘솔에 출력
      Toast.fire({
        icon: 'error',
        title: '서버 통신 실패.'
      });
    }
  };
  
  

  return (
    <div className="App">
      <div className="greenbox">
        <img src={LOGO} alt="Logo" />
      </div>
      <div className="box1">
        <p>Sign up</p>
        <form onSubmit={LOginFunc}>
          <input
            className="Name"
            name="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            className="id-Email"
            name="E-mail"
            type="text"
            placeholder="E-Mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            className="password"
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <input
            className="re-enter password"
            type="password"
            placeholder="Re-enter Password"
            value={repassword}
            onChange={(e) => setRepassword(e.target.value)}
          ></input>

          <button type="submit" className="button" disabled={loading}>
            {loading ? "Signing up..." : "Sign up"}
          </button>
          <p>{msg}</p>
          <Link to="/">Log in</Link>
        </form>
      </div>
    </div>
  );
}

export default LoginComponent;
