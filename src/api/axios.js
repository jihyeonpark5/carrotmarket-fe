import axios from "axios";

// 요청을 보낼 서버를 지정
export const instance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
    withCredentials: true, 
});

// 로그인 시 받아서 저장해놓은 token
export const refreshToken = localStorage.getItem('refresh_token');
export const accessToken = sessionStorage.getItem('access_token');

// access토큰이 만료되었을 때 refresh토큰을 이용하여 access토큰 재발급 받기
export const tokenInstance = axios.create({
    headers:{
        access_token : 'Bearer' + accessToken,
        refresh_token : 'Bearer' + refreshToken,
    }
});

const refresh = async (config) => {
    // const expireAt = sessionStorage.getItem('expireAt');
    // let token = sessionStorage.getItem("access_token");
    // console.log('만료확인');

    // if(mockComponent(expireAt).diff(moment()) < 0){
    //     const res = tokenInstance.post('/api/member/logout');
        
    // }
}

