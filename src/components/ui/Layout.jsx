import React from 'react'
import { styled } from 'styled-components';
import Character from "../../assets/dangeunee_01.png"
import Character2 from "../../assets/dangeunee_02.png"
import { Header, Navbar } from './index';

function Layout({children}) {
  return (
    <StLayout>
        <StContainer>
            <Header />
            <Wrap>
                {children}
            </Wrap>
            <Navbar />
        </StContainer>
        <img src={Character2} alt='당근이' className='tcharacter'/>
        <img src={Character} alt='당근이' className='bcharacter'/>
    </StLayout>
  )
}

export default Layout;

const StLayout = styled.div`
    position:relative;
    background-color:#f9f5f4;
    margin:0;
    &>img.bcharacter{
        position:absolute;
        bottom:0px;
        z-index:0;
        left:50px;
        width:450px;
    }
    &>img.tcharacter{
        position:absolute;
        top:0;
        z-index:0;
        right:50px;
        width:300px;
        transform:rotate(180deg);
    }

    @media (max-width: 1400px){
        &>img.tcharacter{
            right:0px;
        }
        &>img.bcharacter{
            left:-50px;
        }
    }
    @media (max-width: 1130px){
        &>img{
            display:none;
        }
    }
`
const StContainer = styled.div`
    width:480px;
    height:100vh;
    overflow-y:scroll;
    margin:0 auto;
    background-color:#fff;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    &::-webkit-scrollbar{
        width:3px;
    }
    &::-webkit-scrollbar-thumb{
        background-color:#ccc;
    } 
    &::-webkit-scrollbar-track{} 
`
const Wrap = styled.div`
  width:100%;
  min-height:calc(100vh - 115px);
  padding: 0 20px 70px;
  box-sizing:border-box;
  /* text-align:center; */
`