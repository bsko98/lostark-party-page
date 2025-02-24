import React from 'react';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-container">
      {/* 로고 */}
      <div className="logo">로고</div>

      {/* 아이디 입력 */}
      <div className="input-group">
        <label>아이디</label>
        <input type="text" placeholder="아이디를 입력해주세요." />
      </div>

      {/* 비밀번호 입력 */}
      <div className="input-group">
        <label>비밀번호</label>
        <input type="password" placeholder="비밀번호를 입력해주세요." />
      </div>

      {/* 로그인 버튼 */}
      <button className="login-button">로그인 버튼</button>

      {/* 추가 옵션 (아이디 찾기, 비밀번호 재설정, 회원가입) */}
      <div className="options">
        <button className="option-btn">아이디 찾기</button>
        <button className="option-btn">비밀번호 재설정</button>
        <button className="option-btn">회원가입</button>
      </div>
    </div>
  );
};

export default LoginPage;
