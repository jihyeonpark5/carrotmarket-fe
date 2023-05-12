import React from 'react';
import { styled } from 'styled-components';
import CommonButton from '../components/ui/Button';
import Header from '../components/ui/Header';
import Layout from '../components/ui/Layout';
import carrot from '../assets/carrot.webp'

function Main() {
  return (
    <Layout>
      <Header />
      <Wrap>
        <img src={carrot} alt='당근마켓 메인 이미지'/>
        <h1>당신 근처의 당근마켓</h1>
        <p>중고 거래부터 동네 정보까지,<br />지금 내 동네를 선택하고 시작해보세요!</p>
        <ButtonWrap>
          <CommonButton size='large'>로그인</CommonButton>
          <CommonButton size='large'>회원가입</CommonButton>
        </ButtonWrap>
      </Wrap>
    </Layout>
  )
}

export default Main;

const Wrap = styled.div`
  width:100%;
  padding: 0 20px;
  box-sizing:border-box;
`

const ButtonWrap = styled.div`
  width:100%;
`