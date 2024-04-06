import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "src/constants/token/token.constants";
import token from "../token/token";
import { SopoV1Axios } from "./CustomAxios";
import CONFIG from "src/config/config.json";

//리프레쉬 작업중인지 아닌지를 구분하는 변수
let isRefreshing = false;
let refreshSubscribers: ((accessToken: string) => void)[] = [];

const onTokenRefreshed = (accessToken: string) => {
  refreshSubscribers.map((callback) => callback(accessToken));
};

const addRefreshSubscriber = (callback: (accessToken: string) => void) => {
  refreshSubscribers.push(callback);
};

const errorResponseHandler = async (error: AxiosError) => {
  if (error.response) {
    const {
      config: originalRequest,
      response: { status },
    } = error;
    const usingAccessToken = token.getToken(ACCESS_TOKEN_KEY);
    const usingRefreshToken = token.getToken(REFRESH_TOKEN_KEY);

    if (
      usingAccessToken !== undefined &&
      usingRefreshToken !== undefined &&
      status === 401
    ) {
      if (!isRefreshing) {
        isRefreshing = true;

        try {
          //일단 오류 해결을 위한 코드
          const data = await axios.post(`${CONFIG.server}/refresh`,{
            refreshToken:usingRefreshToken,
          })
          const newAccessToken = data.data.data.accessToken;
          
          // const { data: newAccessToken } =
          //   await tokenRepository.getRefreshToken({
          //     refreshToken: usingRefreshToken,
          //   });
          // alimoV1Axios.defaults.headers.common[
          //   REQUEST_TOKEN_KEY
          // ] = `Bearer ${newAccessToken}`;
          // console.log(newAccessToken);

          token.setToken(ACCESS_TOKEN_KEY, newAccessToken);
          
          //리프레쉬 작업을 마침
          isRefreshing = false;
          //새로 받은 accessToken을 기반으로 이때까지 밀려있던 요청을 모두 처리
          onTokenRefreshed(newAccessToken);
        } catch (error) {
          //리프레쉬 하다가 오류난거면 리프레쉬도 만료된 것이므로 다시 로그인
          token.clearToken();
          window.location.href = "/login";
        }
      }

      //어떤 요청이 리프레쉬 작업중이라면 여기로 와서 그 후에 요청된 다른 API Promise를 refreshSubscribers에 넣어줌
      return new Promise((resolve, reject) => {
        addRefreshSubscriber((accessToken: string) => {
          if (originalRequest) {
            originalRequest.headers![
              REQUEST_TOKEN_KEY
            ] = `Bearer ${accessToken}`;
            resolve(SopoV1Axios(originalRequest));
          } else {
            reject("originalRequest is undefined");
          }
        });
      });
    }
  }

  return Promise.reject(error);
};

export default errorResponseHandler;
