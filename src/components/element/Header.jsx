import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import logo from "../../assets/Daangeun_Logo_Color_RGB.svg"
import { SlArrowLeft } from "react-icons/sl";

function Header({children}) {
    const navigate = useNavigate();
  return (
    <StHeader>
        <button type='button' onClick={() => navigate(-1)}><SlArrowLeft /></button>
        {children}
        <Link to='/BoardList' title="메인페이지로 이동"><img src={logo} alt='당근마켓로고'/></Link>
    </StHeader>
  )
}

export default Header;

const StHeader = styled.header`
    position: sticky;
    top:0;
    z-index:10;
    width:100%;
    height:55px;
    background-color:#fff;
    box-shadow: rgba(0, 0, 0, 0.1) 0 5px 6px -1px ;
    & button{
        position:absolute;
        top:50%;
        left:20px;
        transform:translateY(-50%);
        border:none;
        background-color:transparent;
        font-size:22px;
        color:#777;
    }
    & > a{
        display:block;
        width:150px;
        margin: 0 auto;
    }
    & > a > img{
        width:130px;
        margin:0 auto;
    }
`