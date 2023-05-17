import React, { useState } from 'react';
import { styled } from 'styled-components';
import { Layout, Image, CommonButton } from '../components/element';
import { BsCameraFill } from 'react-icons/bs';
import { AiFillMinusCircle } from 'react-icons/ai';
import { useMutation } from 'react-query';
import { submitBoard } from '../api/boards';

// TODO 2023-05-17 로그인 pull 받고 업로드 다시 확인해볼 것

// ! 글 작성하기, 수정하기 모두 해당 페이지에서 진행
function BoardWrite() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [content, setContent] = useState('');
  const [preview, setPreview] = useState('');
  const [file, setFile] = useState('');

  // * 썸네일 업로드
  const onFileChange = (e) => {
    const newFile = e.target.files[0];
    if (!newFile) return;
    if (newFile.type !== 'image/jpeg' && newFile.type !== 'image/png') {
      alert('jpg, png 형식의 이미지 파일을 업로드해주세요.');
      return;
    } else {
      const previewURL = window.URL.createObjectURL(newFile);
      setPreview(previewURL);
      setFile(newFile);
    }
  }

  // * 썸네일 삭제
  const onFileDelete = () => {
    const deleteConfirm = window.confirm('업로드한 이미지를 삭제하시겠습니까?');
    if (deleteConfirm) setPreview('');
  }

  // * 제목 입력값 감지
  const onTitleChange = (e) => {
    if (e.target.value.length > 30) {
      alert('제목은 30자 이상 입력할 수 없습니다.');
      return;
    }
    setTitle(e.target.value);
  }

  // * 가격 입력값 감지
  const onPriceChange = (e) => {
    const newPrice = e.target.value.replace(/\D/g, '');
    if (newPrice === '') {
      setPrice('');
    } else {
      setPrice(Number(newPrice).toLocaleString());
    }
  }

  // * 내용 입력값 감지
  const onContentChange = (e) => {
    setContent(e.target.value);
  }

  // * 게시글 작성 버튼 클릭
  const onSubmitClick = (e) => {
    e.preventDefault();
    if (title === '' || price === '' || content === '' || file === '') {
      alert('모든 내용을 입력해주세요.');
      return;
    }

    const boardFormData = new FormData();
    boardFormData.append('title', title);
    boardFormData.append('image', file);
    boardFormData.append('content', content.replaceAll(/\n/g, '<br>'));
    boardFormData.append('price', price.replaceAll(',', ''));

    submitBoardMutaion.mutate(boardFormData);
  }

  // * 게시글 작성 useMutation
  const submitBoardMutaion = useMutation(submitBoard, {
    onSuccess: (response) => {
      // console.log('onSuccess', response);
    }
  })

  return (
    <Layout>
      {/* 뒤로가기 버튼 클릭 && URL이 글 작성일 경우 뒤로 갈건지 확인 alert */}
      <ContentForm
        method="post"
        encType="multipart/form-data"
      >
        <SetImgDiv>
            <label>
              <BsCameraFill />
              <input type="file" name="image" onChange={onFileChange} />
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
                  onClick={onFileDelete}
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
              value={title}
              onChange={onTitleChange}
            />
          </SetInfo>
          <SetInfo>
            <BoardLabel htmlFor="price">가격</BoardLabel>
            <BoardInput
              type="text"
              id="price"
              name="price"
              value={price}
              onChange={onPriceChange}
            />
          </SetInfo>
          <BoardLabel htmlFor="content" />
          <SetInfo>
            <SetContent
              id="content"
              name="content"
              value={content}
              onChange={onContentChange}
              placeholder="역삼동에 올릴 게시글 내용을 작성해주세요."
            />
          </SetInfo>
        </SetBoardDiv>
        {/* 수정하기 클릭해 진입했을 경우 글 수정하기로 출력 */}
        <CommonButton
          size={'large'}
          onClick={onSubmitClick}
        >
          글 작성하기
        </CommonButton>
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