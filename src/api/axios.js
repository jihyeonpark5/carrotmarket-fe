import axios from "axios";

// instance : 기본 URL과 공통 헤더를 설정해주는 역할
// Access-Controller-Allow-Origins는 헤더를 설정하는 부분
// CORS 관련 설정 중 하나로 요청 보낸 도메인에서 해당 리소스에 접근할 수 있는지 여부 확인
export const instance = axios.create({
    baseURL : process.env.REACT_APP_URL,
    headers: {
        "Access-Control-Allow-Origin": "*",
    }
});

export const baseURL = axios.create({
    baseURL: process.env.REACT_APP_URL,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });

  // 인스턴스 request header
  baseURL.interceptors.request.use((config) => {
    if (config.headers === undefined) return;
    const token = sessionStorage.getItem("id");
    config.headers["Authorization"] = `${token}`;
    return config;
  });