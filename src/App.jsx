import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main, Login, SignUp, MyPage, Intro, BoardList, Search, BoardDetail, BoardWrite, ChatList, ChatDetail, LocationSetting } from './pages/index';
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';


const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/Main" element={<Main />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/MyPage" element={<MyPage />} />
            <Route path="/Search" element={<Search />} />
            <Route path="/BoardList" element={<BoardList />} />
            <Route path="/LocationSetting" element={<LocationSetting />} />
            <Route path="/BoardDetail" element={<BoardDetail />} />
            <Route path="/BoardWrite" element={<BoardWrite />} />
            <Route path="/ChatList" element={<ChatList />} />
            <Route path="/ChatDetail" element={<ChatDetail />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </QueryClientProvider>
  )
}

export default App