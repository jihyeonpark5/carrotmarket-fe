import React from 'react'
import { styled } from 'styled-components';
import { Layout } from '../components/ui';
import userDefaultImg from '../assets/user_default_image.jpg';
import exampleImg from '../assets/board_example.jpg';

function ChatList() {
  return (
    <Layout>
        <h1 style={{fontSize:"25px",marginBottom:"3px"}}>채팅</h1>
        <ChatListContainer>{/*  <---  채팅방 전체 감싸주는 컨테이너 */}
            <ChatRoom> {/*  <--- 채팅방  */}
                <UserImage><img src={userDefaultImg} alt='사용자기본이미지'/></UserImage> 
                <Chat>
                    <h2>구매자아이디최대열글자 <span>구매자 지역정보</span></h2>{/*  <--- 지역정보는 옵션입니다 ㅎㅅㅎ  */}
                    <p>채팅내용이 길어지면 ellipsis 적용합니다...</p>
                </Chat>
                <BoardImage><img src={exampleImg} alt='상품이미지'/></BoardImage>
            </ChatRoom>
        </ChatListContainer>
    </Layout>
  )
}

export default ChatList;

const ChatListContainer = styled.section`
    width:100%;
`
const ChatRoom = styled.div`
    width:100%;
    height:110px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    border-bottom:1px solid #eaeaea;
`
const UserImage = styled.div`
    width:70px;
    height:70px;
    border-radius:50%;
    border:1px solid #ccc;
    overflow:hidden;

    & img{
        width:100%;
    }
`
const Chat = styled.div`
    width:calc(100% - 190px);
    & h2{
        font-size:20px;
        line-height:1;
        margin:3px 0;
    }
    & h2 span{
        font-size:15px;
        color:#9d9d9d;
        font-weight:400;
    }
    & p{
        width:100%;
        text-overflow:ellipsis;
        white-space:nowrap;
        overflow:hidden;
        margin:3px 0;
    }
`
const BoardImage = styled.div`
    width:70px;
    height:70px;
    border-radius:12px;
    border:1px solid #ccc;
    overflow:hidden;

    & img{
        width:100%;
    }
`