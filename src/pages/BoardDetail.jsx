import React from 'react';
import { styled } from 'styled-components';
import { Layout, Image, CommonButton } from '../components/ui';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
// * 이미지 임시
import carrot from '../assets/dangeunee_test_img.png';
import userDefaultImg from '../assets/user_default_image.jpg';

function BoardDetail() {
  return (
    <Layout>
      <ContentSection>
        <Image
          width={'440px'}
          height={'440px'}
          borderradius={'5px'}
          src={carrot}
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
              <DetailH2>유저닉네임</DetailH2>
              <DetailH3>역삼동</DetailH3>
            </div>
          </UserInfoDiv>
          <CommonButton size="small">채팅하기</CommonButton>
        </UserDiv>
        <DetailDiv>
          <DetailH1>당근이 인형 팝니다.</DetailH1>
          <DetailH3>53분전</DetailH3>
          <DetailContent>
            역삼역 3번 출구에서 거래 예정입니다. <br/>
            인형 사이즈가 크니 거래하실 때 이 점 유의해주세요! <br/>
            역삼역 3번 출구에서 거래 예정입니다. <br/>
            인형 사이즈가 크니 거래하실 때 이 점 유의해주세요! <br/>
            역삼역 3번 출구에서 거래 예정입니다. <br/>
            인형 사이즈가 크니 거래하실 때 이 점 유의해주세요! <br/>
            역삼역 3번 출구에서 거래 예정입니다. <br/>
            인형 사이즈가 크니 거래하실 때 이 점 유의해주세요! <br/>
            역삼역 3번 출구에서 거래 예정입니다. <br/>
            인형 사이즈가 크니 거래하실 때 이 점 유의해주세요! <br/>
          </DetailContent>
        </DetailDiv>
        <DetailNav>
          {/* like status값에 따라 heart 다르게 보이도록 설정 */}
          <DetailH1>210,000원</DetailH1>
          <AiOutlineHeart />
          {/* <AiFillHeart /> */}
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