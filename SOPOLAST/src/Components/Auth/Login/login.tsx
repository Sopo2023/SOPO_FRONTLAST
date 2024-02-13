import React from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "src/hooks/auth/UseLogin";
import * as s from "../style/Auth.style";
import LOGO from "src/Assets/image/LOGO.png";

const LoginComponent: React.FC = () => {
  const navigate = useNavigate();

  const {
    email,
    password,
    setPassword,
    keepLoggedIn,
    onChangeEmail,
    onChangePassword,
    handleKeepLoggedIn,
    handleLogin,
  } = useLogin();

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
                onChange={onChangeEmail}
              ></s.Input>
              <s.Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={onChangePassword}
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
