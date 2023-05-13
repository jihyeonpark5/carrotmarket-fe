import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main, Login, SignUp, MyPage, Intro, BoardList } from './pages/index';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/Main" element={<Main />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/MyPage" element={<MyPage />} />
          <Route path="/BoardList" element={<BoardList />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App