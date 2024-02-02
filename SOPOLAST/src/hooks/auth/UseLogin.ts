import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { showToast } from "src/constants/Swal/Swal";
import { loginUser } from "src/hooks/LoginCraft/LoginCraft";

interface UserData {
  email: string;
  password: string;
}

export const useLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [keepLoggedIn, setKeepLoggedIn] = useState<boolean>(false); // 로그인 유지하기 상태
  const idRegex = /^[A-Za-z0-9]+$/;
  const passwordRegex = /^\s*[\w!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?]+$/;
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

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
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
    keepLoggedIn,
    handleKeepLoggedIn,
    handleLogin,
  };
};
