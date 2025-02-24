import React from 'react';
import './Header.css'; 
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const handleLogut = ()=>{
    // 나중에 로그아웃 처리 할 곳
    navigate('/');
  }
  return (
    <header className="header">
      <div className="header-left">
        <nav>
          <ul className="nav-list">
            <li><a href="/">logo</a></li>
            <li><a href="/findparty">파티찾기</a></li>
            <li><a href="/myparty">내 방가기</a></li>
            <li><a href="/mycharacter">내 캐릭터</a></li>
            <li><a href="/myaccount">계정 관리</a></li>
          </ul>
        </nav>
      </div>
      <div className="header-right">
        <button className="logout-btn" onClick={handleLogut}>Logout</button>
      </div>
    </header>
  );
};

export default Header;
