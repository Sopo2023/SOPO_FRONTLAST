import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { showToast } from "src/constants/Swal/Swal";
import axios from "axios";

const useSignup = () => {
  const SERVERURL = `${process.env.REACT_APP_SERVER_URL}`;
  const navigate = useNavigate();
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
  const [authenticationCode, setAuthenticationCode] = useState(""); // 추가된 부분

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    setIsEmailEntered(!!emailValue);
  };

  const handleEmailCertify = async (e) => {
    e.preventDefault();

    setIsCertifying(true);

    if (!email) {
      setIsCertifying(false);
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

  const Authenticationverification = async (e) => {
    e.preventDefault();

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

  const LOginFunc = async (e) => {
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

  return {
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
  };
};

export default useSignup;
