import React, { useState } from 'react';
import { styled } from 'styled-components';
import { Layout, Image, Input } from '../components/ui';
import { RxPaperPlane } from 'react-icons/rx';
import Select from 'react-select';
// * 이미지 임시
import example from '../assets/board_example.jpg';
import userImg from '../assets/user_default_image.jpg';

function ChatDetail() {
  // * react-select
  const statusOptions = [
    { value: false, label: '판매중' },
    { value: true, label: '판매완료' }
  ];

  const [selectStatus, setSelectStatus] = useState(statusOptions[0]);

  return (
    <Layout>
      <ChatNav>
        <Image
          width={'80px'}
          height={'80px'}
          borderradius={'5px'}
          src={example}
          alt={'썸네일 이미지'}
        />
        <ItemInfoDiv>
          <span>디자인 의자</span>
          <span>50,000원</span>
        </ItemInfoDiv>
        <StyledSelect
          // defaultValue를 현재 게시글의 statusOption[N]번째 값으로 해둘 것
          defaultValue={selectStatus}
          onChange={setSelectStatus}
          options={statusOptions}
        />
      </ChatNav>

      <ChatSection>
        <OtherChatDiv>
          <Image
            width={'40px'}
            height={'40px'}
            borderradius={'50%'}
            src={userImg}
            alt={'상대방 프로필 이미지'}
          />
          <div>
            <OtherMessage>
              <p>
                오늘 잠깐 산책을 했는데요 그런데요 걸었는데요 긴 메세지 테스트
              </p>
              <span>
                오후 18:03
              </span>
            </OtherMessage>
            <OtherMessage>
              <p>
                한시간 반정도 잠깐 했는데도
              </p>
              <span>
              오후 18:03
              </span>
            </OtherMessage>
            <OtherMessage>
              <p>
                얼굴이 살짝 탄 것 같아요
              </p>
              <span>
                오후 18:04
              </span>
            </OtherMessage>
          </div>
        </OtherChatDiv>
        <MyChatDiv>
          <MyMessage>
              <span>
                오후 18:05
              </span>
              <p>
                저런 안타까운 소식이에요 그렇군요 걸었어요? 긴 메세지 테스트
              </p>
            </MyMessage>
          <MyMessage>
              <span>
                오후 18:06
              </span>
              <p>
                러쉬는 향이 좋아 기분도 좋음 야호
              </p>
          </MyMessage>
        </MyChatDiv>
      </ChatSection>

      <ChatInputForm>
        <Input
          placeholder="메세지 보내기"
        />
        <RxPaperPlane />
      </ChatInputForm>
    </Layout>
  )
}

export default ChatDetail

const ChatNav = styled.nav`
  height: 100px;
  width: 440px;
  padding: 10px 0;
  position: fixed;
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: white;
  border-bottom: 1px solid lightgrey;
`

const ItemInfoDiv = styled.div`
  width: 210px;
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid lightgrey;
  :first-child {
    font-weight: bold;
    font-size: 18px;
  }
`

const StyledSelect = styled(Select)`
  margin-left: 10px;
  font-size: 14px;
`

const ChatSection = styled.section`
  padding-top: 140px;
  padding-bottom: 60px;
  overflow-y: scroll;
`

const OtherChatDiv = styled.div`
  float: left;
`

const OtherMessage = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  :first-child {
    max-width: 250px;
    height: 100%;
    margin: 5px 0;
    padding: 10px 20px;
    background-color: #F9F4F4;
    border-radius: 20px;
  }
  :last-child {
    margin-bottom: 10px;
    font-size: 11px;
    color: lightgrey;
  }
`

const MyChatDiv = styled.div`
  float: right;
  margin: 10px 0;
`

const MyMessage = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  float: right;
  :first-child {
    margin-bottom: 10px;
    font-size: 11px;
    color: lightgrey;
  }
  :last-child {
    max-width: 250px;
    height: 100%;
    margin: 5px 0;
    padding: 10px 20px;
    background-color: #FF7E36;
    color: white;
    border-radius: 20px;
  }
`

const ChatInputForm = styled.form`
  width: 420px;
  padding: 10px;
  position: fixed;
  bottom: 60px;
  display: flex;
  gap: 10px;
  align-items: center;
  background-color: white;
  & input {
    width: 400px;
  }
  :last-child {
    font-size: 25px;
    color: grey;
    cursor: pointer;
  }
`