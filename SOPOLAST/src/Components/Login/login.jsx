import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../../recoil/auto";
import "./login.css";
import LOGO from "../../Assets/image/LOGO.png";
import { loginUser } from "../../hooks/LoginCraft/LoginCraft.ts";
import { showToast } from "../../constants/Swal/Swal.js";

const LoginComponent = () => {
  
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useRecoilState(userState);

  const handleLogin = async () => {

    if (email === "" || password === "") {
      showToast("warning","이메일과 비밀번호를 모두 입력해주세요")
      return;
    }

    try {
      setLoading(true);
      const userData = {
        email: email,
        password: password,
      };

      const response = await loginUser(userData);

      setLoading(false);

      if (response.status === 200) {
        showToast("success","로그인 성공")
        localStorage.clear();
        localStorage.setItem("sopo_id", response.data.data.email);
        localStorage.setItem("sopo_nm", response.data.data.name);
        localStorage.setItem("sopo_github", "je355");

        navigate("/main");
      } else {
        showToast("error","로그인에 실패하였습니다")
      }
    } catch (error) {
      console.log(error);
      showToast("error","서버 통신 실패.")
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
