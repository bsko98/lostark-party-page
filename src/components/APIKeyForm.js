import React, { useState } from "react";
import "./APIKeyForm.css";
import logo from '../image/logo2.png'
import { useNavigate } from 'react-router-dom';


const APIKeyForm = () => {
    const navigate = useNavigate();
    const [apiKey, setApiKey] = useState("");
    const handleSave = () => {
        if (!apiKey) {
        alert("API Key를 입력해주세요.");
        return;
        }
        localStorage.setItem("apiKey", apiKey);
        console.log(apiKey);
        alert("API Key가 저장되었습니다.");
        navigate('/');
    };
    const handleSkip = () =>{
        navigate('/');
    }

    return (
        <div className="api-form-container">
        <div className="api-logo"><img src={logo} alt="로고" style={{ width: "127px", height: "auto", color: "#000000" }}></img></div>
        <div className="api-info-box">Api 키 입력 권장문구</div>
        <div className=" api-input-group">
            <div className="api-label">Api 키</div>
            <input className="api-input"
            type="text"
            placeholder="Api 키를 입력해주세요."
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            />
        </div>
        <a href="https://developer-lostark.game.onstove.com/" target="_blank" rel="noopener noreferrer" className="api-key-link">
            Api 키 발급 페이지입니다.
        </a>
        <div className="api-button-group">
            <button className="api-btn secondary" onClick={handleSkip}>건너뛰기</button>
            <button className="api-btn primary" onClick={handleSave}>저장하기</button>
        </div>
        </div>
    );
};

export default APIKeyForm;
