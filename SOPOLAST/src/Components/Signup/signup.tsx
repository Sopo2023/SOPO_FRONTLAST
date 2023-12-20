import React, { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LOGO from "../../Assets/image/LOGO.png";
import "./signup.css";
import { showToast } from "../../constants/Swal/Swal.js";

function LoginComponent(): JSX.Element {
  const SERVERURL = `${process.env.REACT_APP_SERVER_URL}`;
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repassword, setRepassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [msg, setMsg] = useState<string>("");
  const [isEmailEntered, setIsEmailEntered] = useState<boolean>(false);
  const [isCertifying, setIsCertifying] = useState<boolean>(false);
  const [isEmailVerified, setIsEmailVerified] = useState<boolean>(false);
  const [isVerifying, setIsVerifying] = useState<boolean>(false);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    setIsEmailEntered(!!emailValue);
  };

  const handleEmailCertify = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    
    setIsCertifying(true);

    if (!email) {
      setIsCertifying(false)
      showToast("warning", "이메일을 입력해 주세요");
      return;
    }

    try {
      const response = await axios.post(
        `${SERVERURL}/sendEmailVerifyNumber`,
        {
          email: email,
        },
        {
          withCredentials: true,
          headers: {
            "Email-Verification": "true",
          },
        }
      );

      if (response.data.status === 200) {
        showToast("success", "이메일이 성공적으로 보내졌습니다.");
        setIsEmailVerified(true);
      } else {
        showToast("error", "이메일 보내기 실패");
      }
    } catch (error) {
      console.error("서버 통신 오류:", error);
      showToast("error", "인증이 안보내졌습니다");
    } finally {
      setIsVerifying(false);
    }
  };

  const Authenticationverification = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    const authenticationCode = (
      document.querySelector(".Authentication") as HTMLInputElement
    ).value;

    if (authenticationCode.length !== 6) {
      showToast("error", "인증 코드는 여섯 자리여야 합니다.");
      return;
    }

    try {
      const response = await axios.post(
        `${SERVERURL}/verifyCheckEmail`,
        {
          email: email,
          verifyNm: authenticationCode,
        },
        {
          withCredentials: true,
        }
      );

      if (response.data.status === 200) {
        showToast("success", "인증 코드가 올바릅니다.");
        setIsCertifying(false);
        setMsg(""); // 이전 오류 메시지 제거
      } else {
        showToast("error", "인증 코드가 올바르지 않습니다.");
      }
    } catch (error) {
      console.error("서버 통신 오류:", error);
      showToast("error", "서버 통신 실패.");
    }
  };

  const LOginFunc = async (e: FormEvent): Promise<void> => {
    e.preventDefault();

    if (name === "") {
      showToast("warning", "이름을 써주세요");
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      showToast("warning", "이메일 형식이 올바르지 않습니다.");
      return;
    }

    if (!email.endsWith("@dgsw.hs.kr")) {
      showToast("warning", "이 도메인은 회원가입이 허용되지 않습니다.");
      return;
    }

    if (password !== repassword) {
      showToast("question", "비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      setLoading(true);
      const userData = {
        email: email,
        name: name,
        password: password,
      };

      const response = await axios.post(`${SERVERURL}/createUser`, userData, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });

      setLoading(false);

      if (response.data.status === 200) {
        showToast("success", "회원 가입이 완료되었습니다.");

        // 회원가입 성공 후 초기화
        setName("");
        setEmail("");
        setPassword("");
        setRepassword("");
        setIsEmailEntered(false);
        setIsCertifying(false);
        setIsEmailVerified(false);
      } else {
        showToast("error", "회원 가입에 실패하였습니다.");
      }
    } catch (error) {
      console.error("서버 통신 오류:", error);
      showToast("error", "서버 통신 실패.");
    }
  };

  return (
    <div className="App1">
      <div className="login_main">
        <div className="greenbox">
          <img src={LOGO} alt="Logo" />
        </div>
        <div className="box1">
          <div className="Box_Group">
            <form method="POST" className="form" onSubmit={LOginFunc}>
              <h1>Sign up</h1>
              <div className="Name">
                <input
                  className="Name"
                  name="name"
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </div>
              <div className="Email_certification">
                <input
                  className="id-Email"
                  name="E-mail"
                  type="text"
                  placeholder="E-Mail"
                  value={email}
                  onChange={handleEmailChange}
                ></input>
                <button
                  onClick={handleEmailCertify}
                  className={`Certified ${isEmailEntered ? "entered" : ""}`}
                >
                  {isVerifying ? "Verifying..." : "인증하기"}
                </button>
              
              </div>
              {isCertifying && (
                  <div className="Certificationbox" >
                    <input
                      maxLength={10}
                      className="Authentication"
                      placeholder="인증코드 여섯자리를 입력해주세요."
                    ></input>
                    <button
                      onClick={Authenticationverification}
                      className="completed"
                    >
                      확인
                    </button>
                  </div>
                )}
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
              <input
                type="submit"
                className="button"
                // disabled={loading || !isEmailVerified}
                value={loading ? "Signing up..." : "Sign up"}
              />
              <p>{msg}</p>
              <div onClick={() => navigate("/")} className="LogLink">
                Log in
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;
