import React from 'react'
import { styled } from 'styled-components';
import Character from "../../assets/carrot-character.png"

function Layout({children}) {
  return (
    <StLayout>
        <StContainer>
            {children}
        </StContainer>
        <img src={Character} alt='당근이'/>
    </StLayout>
  )
}

export default Layout;

const StLayout = styled.div`
    position:relative;
    width:100%;
    background-color:#f9f5f4;
    margin:0;
    &>img{
        position:absolute;
        bottom:0px;
        z-index:0;
        right:50px;
        width:400px;
    }
`
const StContainer = styled.div`
    width:480px;
    min-height:100vh;
    margin:0 auto;
    background-color:#fff;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`