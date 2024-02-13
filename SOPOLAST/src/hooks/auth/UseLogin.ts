import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { showToast } from "src/constants/Swal/Swal";
import axios from "axios";
import Token from "src/lib/Token/token";

interface UserData {
  email: string;
  password: string;
}

export const useLogin = () => {
  const SERVERURL = process.env.REACT_APP_SERVER_URL;
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
      const response = await axios.post(`${SERVERURL}/login`, userData, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });
      setLoading(false);
      if (response.status === 200) {
        const { accessToken, refreshToken } = response.data.data;
        Token.setToken("accessToken", accessToken);
        Token.setToken("refreshToken", refreshToken);
        showToast("success", "로그인 성공");
        navigate("/main");
      } else {
        showToast("error", "로그인에 실패하였습니다");
      }
    } catch (error) {
      showToast("error", "서버 통신 실패.");
    }
  };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    // 이메일 유효성 검사
    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    const isValidEmail = emailRegex.test(newEmail);

    const isKoreanInput = /[ㄱ-ㅎㅏ-ㅣ가-힣]/;
    if (isKoreanInput.test(newEmail)) {
      // 한글 입력이 감지되면 공백으로 치환
      const filteredEmail = newEmail.replace(isKoreanInput, "");
      setEmail(filteredEmail);
    } else if (!isValidEmail) {
      // 유효하지 않은 이메일 형식이면 에러 처리
      console.log("유효하지 않은 이메일 형식입니다.");
      // 또는 setError("유효하지 않은 이메일 형식입니다.");와 같이 상태를 업데이트할 수 있습니다.
    }
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    // 비밀번호 유효성 검사
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const isValidPassword = passwordRegex.test(newPassword);

    if (!isValidPassword) {
      // 유효하지 않은 비밀번호 형식이면 에러 처리

      console.log("비밀번호는 영문자와 숫자를 포함한 8자 이상이어야 합니다.");
    }
  };
  const handleKeepLoggedIn = () => {
    setKeepLoggedIn(!keepLoggedIn);
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    onChangeEmail,
    onChangePassword,
    keepLoggedIn,
    handleKeepLoggedIn,
    handleLogin,
  };
};
