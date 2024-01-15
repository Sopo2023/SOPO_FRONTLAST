import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../../../recoil/auto";
import * as s from "../style/Auth.style";
import LOGO from "../../../Assets/image/LOGO.png";
import { loginUser } from "../../../hooks/LoginCraft/LoginCraft";
import { showToast } from "../../../constants/Swal/Swal";

interface UserData {
  email: string;
  password: string;
}

const LoginComponent: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [keepLoggedIn, setKeepLoggedIn] = useState<boolean>(false); // 로그인 유지하기 상태

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
      if (response) {
        showToast("success", "로그인 성공");
        navigate("/main");
      } else {
        showToast("error", "로그인에 실패하였습니다");
      }
    } catch (error) {
      console.log(error);
      showToast("error", "서버 통신 실패.");
    }
  };

  const handleKeepLoggedIn = () => {
    setKeepLoggedIn(!keepLoggedIn);
  };

  return (
    <s.App1>
      <s.Login_Main>
        <s.GreenBox>
          <s.Img src={LOGO} alt="로고"></s.Img>
        </s.GreenBox>
        <s.Box1>
          <s.Box_Group>
            <s.Form className="form">
              <s.Title>Log in</s.Title>
              <s.Input
                type="text"
                placeholder="E-Mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></s.Input>
              <s.Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></s.Input>
              <s.CheckboxWrapper>
                <s.CheckboxBundle>
                  <s.Checkbox
                    type="checkbox"
                    id="keepLoggedInCheckbox" // 체크박스에 id 추가
                    checked={keepLoggedIn}
                    onChange={handleKeepLoggedIn}
                  />

                  <s.CheckboxLabel htmlFor="keepLoggedInCheckbox">
                    로그인 유지
                  </s.CheckboxLabel>
                </s.CheckboxBundle>
              </s.CheckboxWrapper>
              <s.Button type="button" onClick={handleLogin}>
                Log in
              </s.Button>

              <s.SignLink onClick={() => navigate("/Signuppage")}>
                sign up
              </s.SignLink>
            </s.Form>
          </s.Box_Group>
        </s.Box1>
      </s.Login_Main>
    </s.App1>
  );
};

export default LoginComponent;
