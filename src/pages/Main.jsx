import React from 'react';
import { styled } from 'styled-components';
import {CommonButton, Layout} from '../components/ui';
import carrot from '../assets/carrot.webp'
import { useNavigate } from 'react-router-dom';

function Main() {
  const navigate = useNavigate();
  return (
    <Layout>
        <TextWrap>
          <img src={carrot} alt='당근마켓 메인 이미지'/>
          <h1>당신 근처의 당근마켓</h1>
          <p>중고 거래부터 동네 정보까지,<br />지금 내 동네를 선택하고 시작해보세요!</p>
        </TextWrap>
        <ButtonWrap>
          <CommonButton size='large' onClick={() => navigate('/Login')}>로그인</CommonButton>
          <CommonButton size='large' onClick={() => navigate('/SignUp')}>회원가입</CommonButton>
        </ButtonWrap>
    </Layout>
  )
}

export default Main;

const TextWrap = styled.div`
  height:calc(100% - 150px);
  display:flex;
  flex-direction:column;
  justify-content:center;
  text-align:center;

  & h1{
    font-size:28px;
    margin:0;
  }
  & p{
    font-size:18px;
    margin:5px 0;
  }
  &>img{
    width:150px;
    margin:0 auto;
  }

const Wrap = styled.div`
  width:100%;
  padding: 0 20px;
  box-sizing:border-box;

`

const ButtonWrap = styled.div`
  width:100%;
`