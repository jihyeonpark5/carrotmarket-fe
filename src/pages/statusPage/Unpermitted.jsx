import React from 'react'
import { Layout } from '../../components/element'
import error from '../../assets/error_dangeun.png'
import { styled } from 'styled-components'

const Error = () => {
  return (
    <Layout>
        <Wrapper>
            <Img src={error} alt="오류"/>
            <h1>오류가 발생하였습니다</h1>
        </Wrapper>
    </Layout>
  )
}

export default Error;
const Wrapper = styled.section`
    width:100%;
    height:calc(100vh - 117px);
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;   
`

const Img = styled.img`
    width:200px;
    height:200px;
`