import React ,{useState} from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';
import { SHA256 } from 'crypto-js';


const LoginPage = ({isLogin, setIsLogin}) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  // 입력 값 변경 핸들러
  const handleIdChange = (e) => setId(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  // 로그인 버튼 클릭 시 동작 로그인 인증 구현 해야함. 우선 테스트용임
  const handleLogin = () => {
    console.log('입력한 아이디:', id);
    console.log('입력한 비밀번호:', password);
    // 비밀번호 해시화
    const hash = SHA256(password).toString();
    console.log(hash);
    console.log(password);
    setIsLogin(true);
    console.log(isLogin);
    navigate('/');
  };

  return (
    <div className="login-container">
      <div className="logo">로고</div>
      <div className="input-group">
        <label>아이디</label>
        <input type="text" value={id} onChange = {handleIdChange} placeholder="아이디를 입력해주세요." />
      </div>
      <div className="input-group">
        <label>비밀번호</label>
        <input type="password" value={password} onChange = {handlePasswordChange} placeholder="비밀번호를 입력해주세요." />
      </div>
      <button className="login-button" onClick ={handleLogin} >로그인</button>
      <div className="options">
        <button className="option-btn">아이디 찾기</button>
        <button className="option-btn">비밀번호 재설정</button>
        <button className="option-btn">회원가입</button>
      </div>
    </div>
  );
};

export default LoginPage;
