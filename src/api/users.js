import axios from 'axios';
import { request } from './axios';

// 회원가입
export const addUserSignUp = (user) => {
    console.log(request.body)
    return request({url:'register', method: 'post', body: user});
};

// 로그인
export const addLogin = (user) => {
    return request({url:'login', method: 'post', body: user});
}