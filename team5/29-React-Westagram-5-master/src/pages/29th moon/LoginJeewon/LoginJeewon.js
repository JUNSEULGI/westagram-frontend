import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './LoginJeewon.scss';

function LoginJeewon() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-Jeewon');
  };
  return (
    <div className="main-container">
      <main className="login-container">
        <span className="heading">Westargram</span>
        <div className="login-wrap">
          <input
            className="id login-input"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            className="password login-input"
            type="password"
            placeholder="비밀번호"
          />
          <Link to="/main-Jeewon">
            <button className="loginBtn button">로그인</button>
          </Link>
          <div className="reminder">
            <a href="google.com">비밀번호를 잊으셨나요?</a>
          </div>
          <button onClick={goToMain} className="test">
            테스트: Applied onClick function to button
          </button>
          {/* <button onClick={function(){}}></button> */}
        </div>
      </main>
    </div>
  );
}

export default LoginJeewon;
