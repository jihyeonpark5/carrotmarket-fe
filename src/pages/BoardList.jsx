import React from 'react';
import { styled } from 'styled-components';
import { Layout, Image, StatusButton } from '../components/ui';
import { SlArrowDown } from 'react-icons/sl';
// * 이미지 임시
import carrot from '../assets/dangeunee_test_img.png';

function BoardList() {
  return (
    <Layout>
      <ListNav>
        <span>문학동</span>
        <SlArrowDown />
      </ListNav>
      <ListSection>
        <ListOneDiv>
          <Image
            width={'130px'}
            height={'130px'}
            borderradius={'10px'}
            src={carrot}
            alt={'상품 이미지'}
          />
          <ListInfoDiv>
            <ListTitleH1>애플 에어팟 3세대 미개봉</ListTitleH1>
            <ListDetailH3>
              <span>미추홀구 학익동</span>
              <span>·</span>
              <span>37분 전</span>
            </ListDetailH3>
            <ListPriceH2>210,000원</ListPriceH2>
          </ListInfoDiv>
        </ListOneDiv>
        <ListOneDiv>
          <Image
            width={'130px'}
            height={'130px'}
            borderradius={'10px'}
            src={carrot}
            alt={'상품 이미지'}
          />
          <ListInfoDiv>
            <ListTitleH1>애플 에어팟 3세대 미개봉</ListTitleH1>
            <ListDetailH3>
              <span>미추홀구 학익동</span>
              <span>·</span>
              <span>37분 전</span>
            </ListDetailH3>
            <ListPriceH2>
              <StatusButton color={'black'}>거래완료</StatusButton>
              <span>210,000원</span>
            </ListPriceH2>
          </ListInfoDiv>
        </ListOneDiv>
        <ListOneDiv>
          <Image
            width={'130px'}
            height={'130px'}
            borderradius={'10px'}
            src={carrot}
            alt={'상품 이미지'}
          />
          <ListInfoDiv>
            <ListTitleH1>애플 에어팟 3세대 미개봉</ListTitleH1>
            <ListDetailH3>
              <span>미추홀구 학익동</span>
              <span>·</span>
              <span>37분 전</span>
            </ListDetailH3>
            <ListPriceH2>210,000원</ListPriceH2>
          </ListInfoDiv>
        </ListOneDiv>
        <ListOneDiv>
          <Image
            width={'130px'}
            height={'130px'}
            borderradius={'10px'}
            src={carrot}
            alt={'상품 이미지'}
          />
          <ListInfoDiv>
            <ListTitleH1>애플 에어팟 3세대 미개봉</ListTitleH1>
            <ListDetailH3>
              <span>미추홀구 학익동</span>
              <span>·</span>
              <span>37분 전</span>
            </ListDetailH3>
            <ListPriceH2>210,000원</ListPriceH2>
          </ListInfoDiv>
        </ListOneDiv>
        <ListOneDiv>
          <Image
            width={'130px'}
            height={'130px'}
            borderradius={'10px'}
            src={carrot}
            alt={'상품 이미지'}
          />
          <ListInfoDiv>
            <ListTitleH1>애플 에어팟 3세대 미개봉</ListTitleH1>
            <ListDetailH3>
              <span>미추홀구 학익동</span>
              <span>·</span>
              <span>37분 전</span>
            </ListDetailH3>
            <ListPriceH2>210,000원</ListPriceH2>
          </ListInfoDiv>
        </ListOneDiv>
        <WriteButton>+</WriteButton>
      </ListSection>
    </Layout>
  )
}

export default BoardList

const ListNav = styled.nav`
  height: 60px;
  width: 440px;
  display: flex;
  position: fixed;
  align-items: center;
  gap: 20px;
  border-bottom: 1px solid lightgrey;
  background-color: #FFFFFF;
  cursor: pointer;
  :first-child {
    font-size: 20px;
    font-weight: bold;
  }
  :last-child {
    margin-top: 5px;
  }
`

const ListSection = styled.section`
  display: flex;
  padding-top: 60px;
  flex-direction: column;
`

const ListOneDiv = styled.div`
  padding: 15px 5px;
  display: flex;
  border-bottom: 1px solid lightgrey;
  cursor: pointer;
`

const ListInfoDiv = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const ListTitleH1 = styled.h1`
  font-size: 18px;
  font-weight: 500;
  margin: 0;
`

const ListPriceH2 = styled.h2`
  & span {
    font-size: 20px;
    font-weight: 600;
    margin: 0;
  }
`

const ListDetailH3 = styled.h3`
  margin: 10px 0 7px 0;
  font-size: 15px;
  font-weight: 300;
  color: grey;
`

const WriteButton = styled.button`
  width: 60px;
  height: 60px;
  position: fixed;
  top: 810px;
  right: 760px;
  border: none;
  border-radius: 50%;
  background-color: #FF7E36;
  color: white;
  font-size: 30px;
  transition: all 0.03s ease-out;
  box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.25);
  &:hover {
    background-color: #ED6C26;
  }
`