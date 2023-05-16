import axios from 'axios';
import { instance, tokenInstance } from './axios';

// 마이페이지 : 나의 게시글 불러오기
export const getMyBoard = ( access_token ) => {
    return instance.get('/api/myBoard',{
        headers:{
            'Access_Token': `${access_token}`
        }
    })
    .then((response) => {
        // console.log(response)
        return response.data.data;
    })
    .catch((error) => {
        return error;
    })
};

// 마이페이지 : 찜목록 조회
export const getMylikeBoard = ( access_token ) => {
    return instance.get('/api/like',{
        headers:{
            'Access_Token': `${access_token}`
        }
    })
    .then((response) => {
        // console.log(response);
        return response.data.data;
    })
    .catch((error) => {
        console.log(error);
    })
};

// 상세페이지 이동
export const getDetailBoard = ({boardId, access_token}) => {
    return instance.get(`/api/board/${boardId}`,{
        headers:{
            'Access_Token': `${access_token}`
        }
    })
    .then((response) => {
        // console.log(response);
        return response.data;
    })
    .catch((error) => {
        console.log(error);
    })
};

// 마이페이지 : 거래 완료
export const putBoardSoldout = ({boardId, access_token}) => {
    return instance.put(`/api/board/sell${boardId}`,{
        headers:{
            'Access_Token': `${access_token}`
        }
    })
    .then((response) => {
        // console.log(response);
        return response.data;
    })
    .catch((error) => {
        console.log(error);
    })
};

// 마이페이지 : 게시글 삭제
export const deleteBoard = ({boardId, access_token}) => {
    return instance.delete(`/api/board/${boardId}`,{
        headers:{
            'Access_Token': `${access_token}`
        }
    })
    .then((response) => {
        // console.log(response);
        return response.data;
    })
    .catch((error) => {
        console.log(error);
    })
};