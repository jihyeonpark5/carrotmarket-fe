import React from 'react'
import { styled } from 'styled-components';

function Layout({children}) {
  return (
    <StLayout>
        <StContainer>
            {children}
        </StContainer>
    </StLayout>
  )
}

export default Layout;

const StLayout = styled.div`
    width:100%;
    background-color:#f9f5f4;
    margin:0;
`
const StContainer = styled.div`
    width:480px;
    min-height:100vh;
    margin:0 auto;
    background-color:#fff;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`