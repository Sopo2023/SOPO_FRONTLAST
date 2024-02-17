import React, { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useSignup } from "src/hooks/auth/UseSignup";
import axios from "axios";
import LOGO from "../../../Assets/image/LOGO.png";
import { showToast } from "../../../constants/Swal/Swal";
import * as s from "../style/Auth.style";

const LoginComponent: React.FC = () => {
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
    <s.App1>
      <s.Login_Main>
        <s.GreenBox>
          <s.Img src={LOGO} alt="Logo" />
        </s.GreenBox>
        <s.Box1>
          <s.Box_Group>
            <s.Form method="POST" onSubmit={LOginFunc}>
              <s.Title>Sign up</s.Title>
              <s.Name>
                <s.Input
                  name="name"
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></s.Input>
              </s.Name>
              <s.Email_certification>
                <s.Email
                  name="E-mail"
                  type="text"
                  placeholder="E-Mail"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setIsEmailEntered(true);
                  }}
                ></s.Email>
                <s.CertifiedButton
                  onClick={handleEmailCertify}
                  className={`Certified ${isEmailEntered ? "entered" : ""}`}
                >
                  {isVerifying ? "Verifying..." : "인증하기"}
                </s.CertifiedButton>
              </s.Email_certification>
              {isCertifying && (
                <s.Certification>
                  <s.Authentication
                    maxLength={10}
                    placeholder="인증코드 여섯자리를 입력해주세요."
                  ></s.Authentication>
                  <s.Completed onClick={Authenticationverification}>
                    확인
                  </s.Completed>
                </s.Certification>
              )}
              <s.Input
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></s.Input>
              <s.Input
                type="password"
                placeholder="Re-enter Password"
                value={repassword}
                onChange={(e) => setRepassword(e.target.value)}
              ></s.Input>
              <s.Button
                type="submit"
                // disabled={loading || !isEmailVerified}
                value={loading ? "Signing up..." : "Sign up"}
              >
                Sign Up
              </s.Button>
              <p>{msg}</p>
              <s.LogLink onClick={() => navigate("/")}>Log in</s.LogLink>
            </s.Form>
          </s.Box_Group>
        </s.Box1>
      </s.Login_Main>
    </s.App1>
  );
};

export default LoginComponent;
