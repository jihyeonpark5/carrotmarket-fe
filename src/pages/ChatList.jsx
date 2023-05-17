import React from 'react'
import { styled } from 'styled-components';
import { Layout, Image } from '../components/element';
import userDefaultImg from '../assets/user_default_image.jpg';
import exampleImg from '../assets/board_example.jpg';

function ChatList() {
  return (
    <Layout>
      <PageNameH1>채팅</PageNameH1>
      <ChatListDiv>
        <ChatRoomDiv>
          <Image
            width={'60px'}
            height={'60px'}
            borderradius={'50%'}
            src={userDefaultImg}
            alt={'채팅 상대방 회원 이미지'}
          />
          <ChatInfo>
            <h2>구매자닉네임 <span>역삼동</span></h2>
            <p>가격은 얼마 정도로 생각하시나요?</p>
          </ChatInfo>
          <Image
            width={'60px'}
            height={'60px'}
            borderradius={'10px'}
            src={exampleImg}
            alt={'채팅 상대방 회원 이미지'}
          />
        </ChatRoomDiv>
      </ChatListDiv>
    </Layout>
  )
}

export default ChatList;

const PageNameH1 = styled.h1`
  margin-bottom: 0;
  padding: 10px 0;
  font-size: 25px;
  border-bottom: 1px solid lightgrey;
`

const ChatListDiv = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid lightgrey;
`

const ChatRoomDiv = styled.div`
  display: flex;
  flex-direction: row;
`

const ChatInfo = styled.div`
  width: 75%;
  margin: 0 15px;
  & h2 {
    font-size: 20px;
    margin: 0;
  }
  & span {
    font-size: 14px;
    font-weight: 300;
    color: grey;
  }
  & p {
    font-size: 16px;
    margin: 3px 0;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`