import React,{useState} from 'react';
import './Header.css'; 
import { useNavigate } from 'react-router-dom';
import logo from '../image/logo2.png'

const Header = ( {isLogin, setIsLogin}) => {
  const navigate = useNavigate();
  const handleLogin = ()=>{
    navigate('/login');
  }
  const handleLogout = ()=>{
    setIsLogin("false");
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    window.location.href = "/";
  }
  return (
    <header className="header">
      <div className="header-left">
        <nav>
          <ul className="nav-list">
            <li><a href="/">
              <img src={logo} alt="로고" style={{ width: "100px", height: "auto", color: "#000000" }}></img>
            </a></li>
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
