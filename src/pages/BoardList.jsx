import React from 'react';
import { styled } from 'styled-components';
import { Layout, Image, Input } from '../components/ui';
import { SlArrowDown } from 'react-icons/sl';
import { GoSearch } from 'react-icons/go';
import { HiPlus } from 'react-icons/hi';
// * 이미지 임시
import carrot from '../assets/carrot.webp';

function BoardList() {
  return (
    <Layout>
      {/* ListNav 컴포넌트로 쓸건지 별도로 만들건지 */}
      <ListNav>
        <div>
          <span>문학동</span>
          <span><SlArrowDown /></span>
        </div>
        <div>
          <Input type="text" />
          <span><GoSearch /></span>
        </div>
      </ListNav>
      <ListSection>
        <ListOneDiv>
          <Image
            width={'140px'}
            height={'140px'}
            borderRadius={'0px'}
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
            width={'140px'}
            height={'140px'}
            borderRadius={'0px'}
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
            width={'140px'}
            height={'140px'}
            borderRadius={'0px'}
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
        {/* button 컴포넌트로 쓸건지 별도로 만들건지 */}
        <button>+</button>
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
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid lightgrey;
  background-color: #FFFFFF;
`

const ListSection = styled.section`
  display: flex;
  padding-top: 60px;
  flex-direction: column;
`

const ListOneDiv = styled.div`
  padding: 5px 0 10px 0;
  display: flex;
  border-bottom: 1px solid lightgrey;
`

const ListInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const ListTitleH1 = styled.h1`
  font-size: 18px;
  // 400? 500?
  font-weight: 500;
  margin: 0;
`

const ListPriceH2 = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin: 0;
`

const ListDetailH3 = styled.h3`
  font-size: 15px;
  font-weight: 300;
  margin: 10px 0 7px 0;
  color: grey;
`