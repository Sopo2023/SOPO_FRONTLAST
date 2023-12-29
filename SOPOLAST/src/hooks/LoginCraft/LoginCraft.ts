import axios from "axios";
import Token from "@src/lib/Token/token";
interface LoginData {
  email: string;
  password: string;
}

const SERVERURL = process.env.REACT_APP_SERVER_URL;

export const loginUser = async (userData: LoginData): Promise<any> => {
  try {
    const response = await axios.post(`${SERVERURL}/login`, userData, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      const { accessToken, refreshToken } = response.data.data;
      Token.setToken("accessToken", accessToken);
      Token.setToken("refreshToken", refreshToken);
    }

    return response;
  } catch (error) {
    throw error;
  }
};