import React from 'react'
import {CommonButton, Layout} from '../components/ui';

function Login() {
  return (
    <Layout>
        <form>
            <input type="text" value="" />
            <input type="password" value="" />
            <CommonButton size='large'>로그인</CommonButton>
        </form>
    </Layout>
  )
}

export default Login;
