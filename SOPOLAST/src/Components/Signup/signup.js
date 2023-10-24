import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LOGO from "../../Assets/image/LOGO.png"
// import { useDispatch } from "react-redux";
import "./signup.css";

function LoginComponent() {
  // id = document.querySelector(".id-Email");
  // const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

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
      <img src={LOGO}></img>
      </div>
      <div className="box1">
        <p>Sign up</p>
        <form onSubmit={LOginFunc}>
          <input
            className="Name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
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
          <input
            className="re-enter password"
            type="password"
            placeholder="Re- enter Password"
            value={repassword}
            onChange={(e) => setRepassword(e.target.value)}
          ></input>

          <button type="submit" className="button">
            Sign up
          </button>
          {msg}
          <Link to="/">Log in</Link>
        </form>
      </div>
    </div>
  );
}

export default LoginComponent;
