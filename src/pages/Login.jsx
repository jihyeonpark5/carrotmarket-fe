import React, { useState } from 'react'
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { SlArrowLeft } from "react-icons/sl";
import {CommonButton, Flx, Input, IntroLayout } from '../components/ui';
import { addLogin } from '../api/users';

function Login() {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        id:'',
        pw:''
    });

    const onChangeInputHandler = (e) => {
        setInput({...input, [e.target.id]: e.target.value})
    };

    // 가입하기 버튼 클릭 이벤트핸들러
    const onSubmitLoginHandler = (e) => {
        e.preventDefault()
        const userInfo = {
            id:input.id,
            pw:input.pw
        };
        addLogin(userInfo);
        setInput({id:'',pw:''});
    };
  return (
    <IntroLayout>
        <Backbutton type='button' onClick={() => navigate(-1)}><SlArrowLeft /></Backbutton>
        <h1 style={{marginTop:"40px",marginBottom:"0px"}}>로그인</h1>
        <StForm onSubmit={onSubmitLoginHandler}>
            <div>
                <Flx>
                    <label htmlFor='id'>아이디</label>
                    <Input type="text" value={input.id} id='id' onChange={onChangeInputHandler}/>
                </Flx>
                
                <Flx>
                    <label htmlFor='pw'>패스워드</label>
                    <Input type="password" value={input.pw} id='pw' onChange={onChangeInputHandler}/>
                </Flx>
            </div>
        
            <CommonButton size='large'>로그인</CommonButton>
        </StForm>
    </IntroLayout>
  )
}

export default Login;

const Backbutton = styled.button`
    position:relative;
    top:20px;
    left:0;
    border:none;
    background-color:transparent;
    font-size:22px;
    color:#777;
`
const StForm = styled.form`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    height:calc(100vh - 220px);
    padding-top:30px;

    & label{
        display:inline-block;
        width:65px;
        line-height:43px;
        font-weight:500;
    }
    & input{
        display:inline-block;
        width:calc(100% - 65px);
        margin-bottom:15px;
    }
`

