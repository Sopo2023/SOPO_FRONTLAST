import axios from "axios";
interface LoginData {
  email: string;
  password: string;
}
const SERVERURL=process.env.REACT_APP_SERVER_URL
export const loginUser = async (userData: LoginData): Promise<any> => {
  try {
    const response = await axios.post(`${SERVERURL}/login`, userData, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};