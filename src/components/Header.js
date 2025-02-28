import React,{useState} from 'react';
import './Header.css'; 
import { useNavigate } from 'react-router-dom';

const Header = ( {isLogin, setIsLogin}) => {
  const navigate = useNavigate();
  const handleLogin = ()=>{
    navigate('/login');
  }
  const handleLogout = ()=>{
    //나중에 로그아웃 처리
    setIsLogin(false);
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
       {
        isLogin ? 
        (<button className="logout-btn" onClick={handleLogout}>Logout</button>):
        (<button className="logout-btn" onClick={handleLogin}>Login</button>)
       }
      </div>
    </header>
  );
};

export default Header;
