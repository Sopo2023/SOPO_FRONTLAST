import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import LOGO from "../../Assets/image/LOGO.png";
import "./signup.css";
import Swal from "sweetalert2";

function LoginComponent() {
  const SERVERURL = "http://10.80.161.148:8080";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [isEmailEntered, setIsEmailEntered] = useState(false);
  const [isCertifying, setIsCertifying] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    setIsEmailEntered(!!emailValue);
  };

  const handleEmailCertify = async (e) => {
    e.preventDefault();
    setIsCertifying(true);

    if (!email) {
      Swal.fire({
        icon: "error",
        title: "이메일을 입력해주세요.",
      });
      return;
    }

    try {
      const response = await axios.post(
        SERVERURL + "/sendEmailVerifyNumber",
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

      if (response.data.success) {
        Swal.fire({
          icon: "success",
          title: "이메일이 성공적으로 보내졌습니다.",
        });

        setIsEmailVerified(true);
      }
    } catch (error) {
      console.error("서버 통신 오류:", error);
      Swal.fire({
        icon: "error",
        title: "인증이 안보내졌습니다",
      });
    } finally {
      setIsVerifying(false);
    }
  };
  const Authenticationverification = async (e) => {
    // 이 함수는 사용자가 입력한 인증코드를 서버로 보내고, 인증 코드가 올바른지 확인하는 역할을 합니다.
    e.preventDefault();
    // 1. 입력된 인증 코드 가져오기
    const authenticationCode = document.querySelector(".Authentication").value;

    // 2. 입력된 인증 코드가 6자리인지 확인
    if (authenticationCode.length !== 6) {
      Swal.fire({
        icon: "error",
        title: "인증 코드는 여섯 자리여야 합니다.",
      });
      return;
    }

    try {
      // 3. 서버에 인증 코드를 보내어 확인
      const response = await axios.post(
        SERVERURL + "/verifyAuthenticationCode",
        {
          email: email, // 사용자 이메일
          code: authenticationCode, // 사용자가 입력한 인증 코드
        },
        {
          withCredentials: true,
        }
      );
      e.preventDefault();
      if (response.data.success) {
        Swal.fire({
          icon: "success",
          title: "인증 코드가 올바릅니다.",
        });

        // 인증 코드가 올바를 경우, 다음 단계로 진행
        setIsCertifying(false); // 인증 단계 종료
      } else {
        Swal.fire({
          icon: "error",
          title: "인증 코드가 올바르지 않습니다.",
        });
      }
    } catch (error) {
      console.error("서버 통신 오류:", error);
      Swal.fire({
        icon: "error",
        title: "서버 통신 실패.",
      });
    }
  };

  const LOginFunc = async (e) => {
    e.preventDefault();
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    if (name === "") {
      Toast.fire({
        icon: "warning",
        title: "이름을 써주세요",
      });
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      Toast.fire({
        icon: "warning",
        title: "이메일 형식이 올바르지 않습니다.",
      });
      return;
    }

    if (!email.endsWith("@dgsw.hs.kr")) {
      Toast.fire({
        icon: "warning",
        title: "이 도메인은 회원가입이 허용되지 않습니다.",
      });
      return;
    }

    if (password !== repassword) {
      Toast.fire({
        icon: "question",
        title: "비밀번호가 일치하지 않습니다.",
      });
      return;
    }

    try {
      setLoading(true);
      const userData = {
        email: email,
        name: name,
        password: password,
      };

      const response = await axios.post(SERVERURL + "/create/user", userData, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(response);

      setLoading(false);

      if (response.data.success) {
        Toast.fire({
          icon: "success",
          title: "회원 가입이 완료되었습니다.",
        });
      } else {
        Toast.fire({
          icon: "error",
          title: "회원 가입에 실패하였습니다.",
        });
      }
    } catch (error) {
      console.log(error);
      Toast.fire({
        icon: "error",
        title: "서버 통신 실패.",
      });
    }
  };

  return (
    <div className="App1">
      <div className="login_main">
        <div className="greenbox">
          <img src={LOGO} alt="Logo" />
        </div>
        <div className="box1">
          <p>Sign up</p>
          <form>
            <input
              className="Name"
              name="name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
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
            {isCertifying && (
              <div className="Certificationbox">
                {/*인증박스*/}
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
            <button
              type="button"
              className="button"
              onClick={LOginFunc}
              disabled={loading || !isEmailVerified}
            >
              {loading ? "Signing up..." : "Sign up"}
            </button>
            <p>{msg}</p>
            <Link to="/">Log in</Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;
