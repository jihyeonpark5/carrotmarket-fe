import React from 'react'
import { styled } from 'styled-components';
import { Input, CommonButton, Layout } from '../components/ui';

function SignUp() {
  return (
    <Layout>
        <StForm>
            <label htmlFor='nickname'>닉네임</label>
            <p className='alertText'>5~10글자 사이 영문을 사용하세요.</p>
            <Input type="text" value="" id='nickname'/>

            <label htmlFor='ID'>아이디</label>
            <p className='alertText'>8~15글자 사이 영문 소문자,숫자를 시용하세요.</p>
            <Input type="text" value="" id='ID'/>
            <CommonButton size='small'>중복확인</CommonButton>
            
            <label htmlFor='PW'>패스워드</label>
            <p className='alertText'>8~15글자 사이 영문,숫자,특수문자 를 사용하세요.</p>
            <Input type="password" value="" id='PW'/>

            <CommonButton size='large'>회원가입</CommonButton>
        </StForm>
    </Layout>
  )
}

export default SignUp;

const StForm = styled.form`
    display:flex;
    flex-direction:column;
    justify-content:center;
    height:calc(100vh - 100px);

    & > label{

    }
    & > .alertText{
        color:#f00;
        margin:0;
    }

`
