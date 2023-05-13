import React from 'react';
import { styled } from 'styled-components';
import { Layout, Image, CommonButton } from '../components/ui';
import { BsCameraFill } from 'react-icons/bs';
import { AiFillMinusCircle } from 'react-icons/ai';
// * 이미지 임시
import example from '../assets/board_example.jpg';

function BoardWrite() {
  return (
    <Layout>
      {/* 뒤로가기 버튼 클릭 && URL이 글 작성일 경우 뒤로 갈건지 확인 alert */}
      <ContentSection>
        <SetImgDiv>
            <BsCameraFill />
            {/* 👇🏼 유저가 올린 썸네일 화면에서 보여주기,
                보여지는 썸네일이 있는 상태에서 BsCamera 클릭 시 추가 등록 불가 alert
                StyledMinusCircle 클릭 시 삭제 confirm alert -> 등록한 썸네일 이미지 삭제 */}
            <Image
              width={'110px'}
              height={'110px'}
              borderradius={'5px'}
              src={example}
              alt={'썸네일 이미지'}
            />
            <StyledMinusCircle />
        </SetImgDiv>
        <SetBoardForm>
          <SetInfo>
            <BoardLabel htmlFor="title">제목</BoardLabel>
            <BoardInput
              type="text"
              id="title"
              name="title"
            />
          </SetInfo>
          <SetInfo>
            <BoardLabel htmlFor="price">가격</BoardLabel>
            <BoardInput
              type="text"
              id="price"
              name="price"
            />
          </SetInfo>
          <BoardLabel htmlFor="content" />
          <SetInfo>
            <SetContent
              placeholder="역삼동에 올릴 게시글 내용을 작성해주세요."
            />
          </SetInfo>
        </SetBoardForm>
        <CommonButton size={'large'}>글 작성하기</CommonButton>
      </ContentSection>
    </Layout>
  )
}

export default BoardWrite

const ContentSection = styled.section`
  margin-top: 20px;
`

const SetImgDiv = styled.div`
  position: relative;
  padding-bottom: 20px;
  display: flex;
  gap: 10px;
  border-bottom: 1px solid lightgrey;
  :first-child {
    width: 50px;
    height: 50px;
    padding: 30px;
    font-size: 30px;
    border: 1px solid lightgrey;
    border-radius: 5px;
    cursor: pointer;
  }
`

const StyledMinusCircle = styled(AiFillMinusCircle)`
  position: absolute;
  top: -5px;
  left: 220px;
  color: #F74D1B;
  cursor: pointer;
`

const SetBoardForm = styled.form`
  margin-bottom: 25px;
`

const SetInfo = styled.div`
  padding: 15px 10px;
  display: flex;
  align-items: center;
  gap: 15px;
  border-bottom: 1px solid lightgrey;
`

const BoardLabel = styled.label`
  color: grey;
`

const BoardInput = styled.input`
  width: 355px;
  height: 30px;
  padding: 5px 5px;
  border: none;
  font-size: 16px;
  &:focus {
    outline: none;
  }
`

const SetContent = styled.textarea`
  width: 100%;
  height: 400px;
  padding: 10px;
  font-size: 16px;
  border: none;
  resize: none;
  &:focus {
    outline: none;
  }
`