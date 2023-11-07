// recoil.js 파일
import { atom } from "recoil";
import axios from "axios";

const SERVERURL = "https://port-0-sopo-backend-5yc2g32mlomvxoqs.sel5.cloudtype.app";

export const userState = atom({
  key: "userState",
  default: { name: "", email: "" },
});

export const isLoggedInState = atom({
  key: "isLoggedIn",
  default: localStorage.getItem("token") ? true : false,
});

export const login = async (email, password) => {
  const formData = { email, password };
  
  try {
    const response = await axios.post(SERVERURL + "/login", formData);
    const { name, email, token } = response.data;

    localStorage.setItem("token", token);

    return { name, email, token };
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};

export const signup = async (formData) => {
  const response = await axios.post(SERVERURL + "/createUser", formData);
  const { name, email, token } = response.data;

  localStorage.setItem("token", token);

  return { name, email, token };
};
