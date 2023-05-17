import axios from 'axios';
import { instance, tokenInstance } from './axios';

// * 게시글 작성
export const submitBoard = (boardFormData) => {
  return instance.post(`/api/board`, boardFormData)
  .then((response) => {
    console.log('axios 게시글 작성 성공!');
    return response.data;
  })
  .catch((error) => {
    console.error(error.response.data);
  })
}

// * 게시글 리스트 조회
export const getBoards = (setPage) => {
  // return instance.get(`/api/board?page=${setPage.page}&size=${setPage.size}&sort=${setPage.sort[0]}`)
  // .then((response) => {
  //   console.log('axios 게시글 리스트 조회 성공!');
  //   return response.data;
  // })
  // .catch((error) => {
  //   console.error(error.response.data);
  // })
}

// * 내 게시글 조회
export const getBoard = ( access_token ) => {
    return instance.get('/api/myboard',{
        headers:{
            'Access_Token': `${access_token}`
        }
    })
    .then((response) => {
        // console.log(response)
        return response.data;
    })
    .catch((error) => {
        return error;
    })
};

// 마이페이지 : 찜목록 조회
export const getMylikeBoard = ( access_token ) => {
    return instance.get('/api/like')
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
    return instance.get(`/api/board/${boardId}`)
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
    return instance.put(`/api/board/sell${boardId}`)
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
    return instance.delete(`/api/board/${boardId}`)
    .then((response) => {
        // console.log(response);
        return response.data;
    })
    .catch((error) => {
        console.log(error);
    })
};