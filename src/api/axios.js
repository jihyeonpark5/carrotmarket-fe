import axios from "axios";

// 요청을 보낼 서버를 지정
export const client = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL 
})

// 로그인 시 받아서 저장해놓은 token
export const accessToken = sessionStorage.getItem('accessToken');

export const request = ({URL, ...options}) => {
    // 클라이언트로 요청을 보낼 때 마다 header에 로그인시 받아놓은 token을 같이 보내준다.
    // client.defaults.headers.common.Authorization = accessToken;
    // 요청이 왔을 때 성공하면 reponse 받은 거 보내주고
    const OnSuccess = (response) => {
        return response
    }
    // 실패하면 error 받은거 보내줌 또는 error났을 떄 메인으로 돌아가거나 다른 설정을 여기다가 해줄 수 있음
    const OnError = (error) => {
        console.log('요청실패')
        return error;
    };

    // request요청이 끝나면 성공하면 response보내주거나 error나면 error값 보내줌
    return client(options).then(OnSuccess).catch(OnError);
};

export const tokenrequest = ({URL, ...options}) => {
    // 클라이언트로 요청을 보낼 때 마다 header에 로그인시 받아놓은 token을 같이 보내준다.
    // client.defaults.headers.common.Authorization = accessToken;
    // 요청이 왔을 때 성공하면 reponse 받은 거 보내주고
    const OnSuccess = (response) => {
        return response
    }
    // 실패하면 error 받은거 보내줌 또는 error났을 떄 메인으로 돌아가거나 다른 설정을 여기다가 해줄 수 있음
    const OnError = (error) => {
        console.log('요청실패')
        return error;
    };

    // request요청이 끝나면 성공하면 response보내주거나 error나면 error값 보내줌
    return client(options).then(OnSuccess).catch(OnError);
};

