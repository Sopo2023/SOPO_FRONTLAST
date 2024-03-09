import React from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "src/hooks/auth/UseLogin";
import * as S from "../style/Auth.style";
import LOGO from "src/Assets/image/LOGO.png";

const LoginComponent = () => {
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
    <S.App1>
      <S.Login_Main>
        <S.GreenBox>
          <S.Img src={LOGO} alt="로고"></S.Img>
        </S.GreenBox>
        <S.Box1>
          <S.Box_Group>
            <S.Form className="form">
              <S.Title>Log in</S.Title>
              <S.Input
                type="text"
                placeholder="E-Mail"
                value={email}
                onChange={onChangeEmail}
              ></S.Input>
              <S.Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={onChangePassword}
              ></S.Input>
              <S.CheckboxWrapper>
                <S.CheckboxBundle>
                  <S.Checkbox
                    type="checkbox"
                    id="keepLoggedInCheckbox" // 체크박스에 id 추가
                    checked={keepLoggedIn}
                    onChange={handleKeepLoggedIn}
                  />

                  <S.CheckboxLabel htmlFor="keepLoggedInCheckbox">
                    로그인 유지
                  </S.CheckboxLabel>
                </S.CheckboxBundle>
              </S.CheckboxWrapper>
              <S.Button type="button" onClick={handleLogin}>
                Log in
              </S.Button>

              <S.SignLink onClick={() => navigate("/Signuppage")}>
                sign up
              </S.SignLink>
            </S.Form>
          </S.Box_Group>
        </S.Box1>
      </S.Login_Main>
    </S.App1>
  );
};

export default LoginComponent;
