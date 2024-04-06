import React, { useState}from "react";
import { useNavigate } from "react-router-dom";
import { useSignup } from "src/hooks/auth/UseSignup";
import LOGO from "src/Assets/image/LOGO.png";
import * as S from "../style/Auth.style";

const LoginComponent= () => {
  const navigate = useNavigate();
  const [isEmailEntered, setIsEmailEntered] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isCertifying, setIsCertifying] = useState(false);
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    repassword,
    setRepassword,
    handleEmailChange,
    handleEmailCertify,
    Authenticationverification,
    LOginFunc,
  } = useSignup();

  return (
    <S.App1>
      <S.Login_Main>
        <S.GreenBox>
          <S.Img src={LOGO} alt="Logo" />
        </S.GreenBox>
        <S.Box1>
          <S.Box_Group>
            <S.Form method="POST" onSubmit={LOginFunc}>
              <S.Title>Sign up</S.Title>
              <S.Name>
                <S.Input
                  name="name"
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></S.Input>
              </S.Name>
              <S.Email_certification>
                <S.Email
                  name="E-mail"
                  type="text"
                  placeholder="E-Mail"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setIsEmailEntered(true);
                  }}
                ></S.Email>
                <S.CertifiedButton
                  onClick={handleEmailCertify}
                  className={`Certified ${isEmailEntered ? "entered" : ""}`}
                >
                  {isVerifying ? "Verifying..." : "인증하기"}
                </S.CertifiedButton>
              </S.Email_certification>
              {isCertifying && (
                <S.Certification>
                  <S.Authentication
                    maxLength={10}
                    placeholder="인증코드 여섯자리를 입력해주세요."
                  ></S.Authentication>
                  <S.Completed onClick={Authenticationverification}>
                    확인
                  </S.Completed>
                </S.Certification>
              )}
              <S.Input
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></S.Input>
              <S.Input
                type="password"
                placeholder="Re-enter Password"
                value={repassword}
                onChange={(e) => setRepassword(e.target.value)}
              ></S.Input>
              <S.Button
                type="submit"
                // disabled={loading || !isEmailVerified}
                value={loading ? "Signing up..." : "Sign up"}
              >
                Sign Up
              </S.Button>
              <p>{msg}</p>
              <S.LogLink onClick={() => navigate("/")}>Log in</S.LogLink>
            </S.Form>
          </S.Box_Group>
        </S.Box1>
      </S.Login_Main>
    </S.App1>
  );
};

export default LoginComponent;
