import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginJeeyoon from './pages/29th kim/LoginJeeyoon/LoginJeeyoon';
import MainJeeyoon from './pages/29th kim/MainJeeyoon/MainJeeyoon';

import JaehyungLogin from './pages/29th-park/LoginJaehyung/LoginJaehyung';
import JaehyungMain from './pages/29th-park/MainJaehyung/MainJaehyung';

import LoginJeewon from './pages/29th moon/LoginJeewon/LoginJeewon';
import MainJeewon from './pages/29th moon/MainJeewon/MainJeewon';

import YejiLogin from './pages/29th-jang/LoginYeji/LoginYeji';
import YejiMain from './pages/29th-jang/MainYeji/MainYeji';
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login-jeeyoon" element={<LoginJeeyoon />} />
        <Route path="/main-jeeyoon" element={<MainJeeyoon />} />

        <Route path="/login-jaehyung" element={<JaehyungLogin />} />
        <Route path="/main-jaehyung" element={<JaehyungMain />} />

        <Route path="/login-Jeewon" element={<LoginJeewon />} />
        <Route path="/main-Jeewon" element={<MainJeewon />} />

        <Route path="/login-yeji" element={<YejiLogin />} />
        <Route path="/main-yeji" element={<YejiMain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
