import axios from 'axios';
import { instance } from './axios';

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
  return instance.get(`/api/board?page=${setPage.page}&size=${setPage.size}&sort=${setPage.sort[0]}`)
  .then((response) => {
    console.log('axios 게시글 리스트 조회 성공!');
    return response.data;
  })
  .catch((error) => {
    console.error(error.response.data);
  })
}

// * 게시글 상세 조회
export const getBoardDetail = (currentBoardId) => {
  return instance.get(`/api/board/${currentBoardId}`)
  .then((response) => {
    console.log('axios 게시글 상세 조회 성공!');
    return response.data;
  })
  .catch((error) => {
    console.error(error.response.data);
  })
}

// * 게시글 수정
export const setEditBoard = (boardEditData) => {
  return instance.put(`/api/board/${boardEditData.boardId}`)
  .then((response) => {
    console.log('axios 게시글 수정 성공!');
    return response.data;
  })
  .catch((error) => {
    console.error(error.response.data);
  })
}

// * 게시글 삭제
export const setDeleteBoard = (currentBoardId) => {
  return instance.put(`/api/board/${currentBoardId}`)
  // TODO 실패 시 http status 코드에 따라 다른 alert msg 띄우기
  .then((response) => {
    console.log('axios 게시글 삭제 성공!');
    return response;
  })
}

// * 내 게시글 조회
export const getBoard = ( access_token ) => {
    return instance.get('/api/myboard',{
        headers:{
            'Access_Token': `${access_token}`
        }
    })
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })
}