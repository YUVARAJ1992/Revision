import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/login-page';
import PageNotFoundPage from './pages/pageNotFound';
import HomePage from './pages/home-page';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<LoginPage></LoginPage>}></Route>
          <Route path="home" element={<HomePage></HomePage>}></Route>

          <Route path="*" element={<PageNotFoundPage></PageNotFoundPage>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;