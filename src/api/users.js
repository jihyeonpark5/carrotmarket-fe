import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { instance, request, tokenInstance } from './axios';

// 회원가입
export const userSignup = (userInfo) => {
    return instance.post('/api/member/signup', userInfo)
    .then((response) => {
        console.log('회원가입 성공')
        return response.data;
    })
    .catch((error) => {
        console.log(error.response.data.responseMessage)
        // throw error;
    })
};
  
// 로그인
export const userLogin = (userInfo) => {
    return instance.post('/api/member/login', userInfo)
    .then((response) => {
        console.log(response)
        return response;
    })
    .catch((error) => {
        // console.log(userInfo)
        console.log(error.response.data.responseMessage)
        // throw error;
    })
};

// 로그아웃
export const userLogout = () => {
    return tokenInstance.get('/api/member/logout')
    .then((response) => {
        console.log('로그아웃 성공')
        return response;
    })
    .catch((error) => {
        console.log(error.response.data.responseMessage)
        // throw error;
    })
};



