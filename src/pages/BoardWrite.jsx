import React, { useState } from 'react';
import { styled } from 'styled-components';
import { Layout, Image, CommonButton } from '../components/ui';
import { BsCameraFill } from 'react-icons/bs';
import { AiFillMinusCircle } from 'react-icons/ai';

// ! 글 작성하기, 수정하기 모두 해당 페이지에서 진행
function BoardWrite() {
  const [preview, setPreview] = useState('');

  // * 썸네일 업로드
  const fileChangeHandler = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
      alert('jpg, png 형식의 이미지 파일을 업로드해주세요.');
      return;
    } else {
      const previewURL = window.URL.createObjectURL(file);
      setPreview(previewURL)
    }
  }

  // * 썸네일 삭제
  const onDeleteThumbnail = () => {
    const deleteConfirm = window.confirm('업로드한 이미지를 삭제하시겠습니까?');
    if (deleteConfirm) setPreview('');
  }

  return (
    <Layout>
      {/* 뒤로가기 버튼 클릭 && URL이 글 작성일 경우 뒤로 갈건지 확인 alert */}
      <ContentForm>
        <SetImgDiv>
            <label>
              <BsCameraFill />
              <input type="file" name="image" onChange={fileChangeHandler} />
            </label>
            {
              preview !== '' &&
              <>
                <Image
                  width={'110px'}
                  height={'110px'}
                  borderradius={'5px'}
                  src={preview}
                  alt={'썸네일 이미지'}
                />
                <StyledMinusCircle
                  onClick={onDeleteThumbnail}
                />
              </>
            }
        </SetImgDiv>
        <SetBoardDiv>
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
        </SetBoardDiv>
        {/* 수정하기 클릭해 진입했을 경우 글 수정하기로 출력 */}
        <CommonButton size={'large'}>글 작성하기</CommonButton>
      </ContentForm>
    </Layout>
  )
}

export default BoardWrite

const ContentForm = styled.form`
  margin-top: 20px;
`

const SetImgDiv = styled.div`
  position: relative;
  padding-bottom: 20px;
  display: flex;
  gap: 10px;
  border-bottom: 1px solid lightgrey;
  & label {
    width: 50px;
    height: 50px;
    display: flex;
    padding: 30px;
    font-size: 50px;
    border: 1px solid lightgrey;
    border-radius: 5px;
    cursor: pointer;
  }
  & input {
    display: none;
  }
`

const StyledMinusCircle = styled(AiFillMinusCircle)`
  position: absolute;
  top: -5px;
  left: 220px;
  color: #F74D1B;
  cursor: pointer;
`

const SetBoardDiv = styled.div`
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