import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../../recoil/auto";
import "./login.css";
import LOGO from "../../Assets/image/LOGO.png";
import { loginUser } from "../../hooks/LoginCraft/LoginCraft";
import { showToast } from "../../constants/Swal/Swal.js";
import Cookies from "js-cookie";

interface UserData {
  email: string;
  password: string;
}

const LoginComponent: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useRecoilState(userState);

  const handleLogin = async () => {
    if (email === "" || password === "") {
      showToast("warning", "이메일과 비밀번호를 모두 입력해주세요");
      return;
    }

    try {
      setLoading(true);
      const userData: UserData = {
        email: email,
        password: password,
      };

      const response = await loginUser(userData);

      setLoading(false);

      if (response.status === 200) {
        showToast("success", "로그인 성공");
        const { accessToken, refreshToken } = response.data.data;
        localStorage.setItem("accessToken", accessToken);
        Cookies.set("refreshToken", refreshToken);

        navigate("/main");
      } else {
        showToast("error", "로그인에 실패하였습니다");
      }
    } catch (error) {
      console.log(error);
      showToast("error", "서버 통신 실패.");
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
            <div onClick={()=>navigate("/Signuppage")} className="LINK">
              sign up
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
