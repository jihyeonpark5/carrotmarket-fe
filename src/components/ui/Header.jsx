import React from 'react'
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import logo from "../../assets/Daangeun_Logo_Color_RGB.svg"

function Header({children}) {
  return (
    <StHeader>
        {children}
        <Link to='/' title="메인페이지로 이동"><img src={logo} alt='당근마켓로고'/></Link>
    </StHeader>
  )
}

export default Header;

const StHeader = styled.header`
    position: relative;
    top:0;
    width:100%;
    height:55px;
    box-shadow: rgba(0, 0, 0, 0.1) 0 5px 6px -1px ;
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