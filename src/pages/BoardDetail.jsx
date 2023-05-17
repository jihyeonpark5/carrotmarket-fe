import React from 'react';
import { styled } from 'styled-components';
import { Layout, Image, CommonButton } from '../components/element';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
// * 이미지 임시
import carrot from '../assets/dangeunee_test_img.png';
import userDefaultImg from '../assets/user_default_image.jpg';
import { useQuery, QueryClient } from 'react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import { getBoardDetai, setDeleteBoard } from '../api/boards';

function BoardDetail() {
  // * 게시글 상세 조회
  const currentBoardId = useLocation().pathname.slice(13);
  const { data } = useQuery('getBoardDetail', getBoardDetail(currentBoardId));
  
  // * 데이터 캐싱
  const queryClient = new QueryClient();
  queryClient.setQueryData('나머지 데이터', data);

  // * 게시글 수정 버튼 클릭
  const navigate = useNavigate();
  const onBoardEdit = () => {
    navigate(`/BoardWrite`, {
      state: {
        boardId: currentBoardId,
        title: data.title,
        price: data.price,
        content: data.content,
        image: data.image,
      }
    })
  }

  // * 게시글 삭제 버튼 클릭
  const onBoardDelete = () => {
    const deleteConfirm = window.confirm('게시글을 삭제하시겠습니까?');
    if (!deleteConfirm) {
      alert('게시글 삭제를 취소하였습니다.');
      return;
    } else {
      deleteBoardMutation.mutate(currentBoardId);
    }
  }

  // * 게시글 삭제 useMutation
  const deleteBoardMutation = useMutation(setDeleteBoard, {
    onSucess: (response) => {

    }
  })

  return (
    <Layout>
      <ContentSection>
        <Image
          width={'440px'}
          height={'440px'}
          borderradius={'5px'}
          src={data.image}
          alt={'상품 이미지'}
        />
        <UserDiv>
          <UserInfoDiv>
            <Image
              width={'40px'}
              height={'40px'}
              borderradius={'50%'}
              src={userDefaultImg}
              alt={'유저 프로필 이미지'}
            />
            <div>
              <DetailH2>{data.nickname}</DetailH2>
              <DetailH3>{data.address}</DetailH3>
            </div>
          </UserInfoDiv>
          {/* 로그인 한 회원 === 글 작성자면 UserEditDiv, 불일치하면 CommonButton 출력 */}
          <CommonButton size="small">채팅하기</CommonButton>
          {/* <UserEditDiv>
            <span onClick={onBoardEdit}>수정하기</span>
            <span onClick={onBoardDelete}>삭제하기</span>
          </UserEditDiv> */}
        </UserDiv>
        <DetailDiv>
          <DetailH1>{data.title}</DetailH1>
          <DetailContent>
            {data.content.replace(/<br>/g, '\n')}
          </DetailContent>
        </DetailDiv>
        <DetailNav>
          <DetailH1>{Number(data.price).toLocaleString()}원</DetailH1>
          {!data.likeStatue ? <AiOutlineHeart /> : <AiFillHeart />}
        </DetailNav>
      </ContentSection>
    </Layout>
  )
}

export default BoardDetail

const ContentSection = styled.section`
  margin-top: 20px;
`

const UserDiv = styled.div`
  padding: 15px 5px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightgrey;
`
const UserInfoDiv = styled.div`
  display: flex;
  align-items: center;
  & img {
    margin-right: 10px;
  }
`

const UserEditDiv = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 14px;
  color: grey;
`

const DetailDiv = styled.div`
  margin-top: 15px;
  margin-left: 5px;
`

const DetailH1 = styled.h1`
  font-size: 22px;
  font-weight: 600;
  margin: 0;
`

const DetailH2 = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin: 0;
`

const DetailH3 = styled.h3`
  margin: 0;
  font-size: 15px;
  font-weight: 300;
  color: grey;
`

const DetailContent = styled.p`
  margin: 25px 0 90px 0;
`

const DetailNav = styled.nav`
  height: 70px;
  width: 440px;
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  bottom: 60px;
  background-color: #FFFFFF;
  border-top: 1px solid lightgrey;
  :first-child {
    padding-left: 5px;
  }
  :last-child {
    width: 40px;
    height: 40px;
    padding-right: 5px;
    padding-left: 15px;
    font-size: 30px;
    font-weight: bold;
    color: #ED8C26;
    border-left: 2px solid lightgrey;
    cursor: pointer;
  }
`