import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import LOGO from "../../Assets/image/LOGO.png";
import "./signup.css";

function LoginComponent() {
  const SERVERURL = "http://10.80.162.77:8080/createUser";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const LOginFunc = async (e) => {
    e.preventDefault();

    // 이메일 형식 검사
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      alert("이메일 형식이 올바르지 않습니다.");
      return;
    }

    // 비밀번호 확인
    if (password !== repassword) {
      alert("비밀번호가 일치하지 않습니다.");
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
    
      const response = await axios.post("/createUser", userData, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });
    
      setLoading(false);
    
      if (response.data.success) {
        alert("회원 가입이 완료되었습니다.");
      } else {
        alert("회원 가입에 실패하였습니다.");
      }
    } catch (error) {
      setLoading(false);
      alert("서버와의 통신 중 오류가 발생했습니다.");
      console.error(error);
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
