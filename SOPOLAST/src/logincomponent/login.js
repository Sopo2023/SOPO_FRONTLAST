import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
// import { useDispatch } from "react-redux";
import "./login.css";

function LoginComponent() {
  // id = document.querySelector(".id-Email");
  // const dispatch = useDispatch();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    /*... */
  }, [msg]);

  const LOginFunc = (e) => {
    e.preventDefault(); // 올바른 메소드명으로 수정
    // 로그인 로직을 이곳에 추가해야 합니다.
  };

  return (
    <div className="App">
      <div className="greenbox">
        {/* 초록색 박스 스타일을 여기에 적용하세요 */}
      </div>
      <div className="box1">
        <p>Log in</p>
        <form onSubmit={LOginFunc}>
          <input
            className="id-Email"
            type="text"
            placeholder="E-Mail"
            value={id}
            onChange={(e) => setId(e.target.value)}
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
          <Link to="/Signuppage">sign up</Link>
        </form>
      </div>
    </div>
  );
}

export default LoginComponent;
