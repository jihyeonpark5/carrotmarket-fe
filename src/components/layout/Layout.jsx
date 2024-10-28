import React from 'react'
import { styled } from 'styled-components';
import Character from "../../assets/image_01.png"
import Character2 from "../../assets/image_02.png"
import { Header, Navbar } from '../element/index';

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
        <img src={Character2} alt='식품' className='tcharacter'/>
        <img src={Character} alt='소비자' className='bcharacter'/>
    </StLayout>
  )
}

export default Layout;

const StLayout = styled.div`
    position:relative;
    background-color:#FFFBF5;
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
    ::-webkit-scrollbar {
      display: none;
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
    @media (max-width: 820px){
        &>img{
            display:none;
        }
    }
`
const StContainer = styled.div`
    position:relative;
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

    @media (max-width: 820px){
        width:100%;
        height:100vh;
    }
`
const Wrap = styled.div`
  width:100%;
  min-height:calc(100vh - 115px);
  padding: 0 20px 70px;
  box-sizing:border-box;
  /* text-align:center; */
`