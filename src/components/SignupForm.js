import React, { useState } from "react";
import "./SignupForm.css"; 

const SignupForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [error, setError] = useState("");
    const serverurl = "";// 아직 url 안넣어놈
    // 비밀번호, 비밀번호 확인 일치?
    const isPasswordMatch = password === confirmPassword;

    // 회원가입 요청
    const handleSubmit = async (e) => {
        e.preventDefault(); 
        setError(""); 
        setSuccessMessage("");
        console.log(username,password,email)
        if (!isPasswordMatch) {
        setError("비밀번호가 일치하지 않습니다.");
        alert("비밀번호가 일치하지 않습니다.");
        navigator('/optional');
        return;
        }

        try {
        const response = await fetch(serverurl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password, email }),
        });

        const data = await response.json(); 
        if (response.ok) {

            setSuccessMessage(data.message);
            alert(data.message);
            setUsername("");
            setPassword("");
            setConfirmPassword("");
            setEmail("");
        } else {
            setError(data.errors.join(" / "));
            alert(data.errors.join("\n"));
        }
        } catch (err) {
        setError("서버와의 통신 중 오류가 발생했습니다.");
        alert("서버와의 통신 중 오류가 발생했습니다.");
        }
    };

    return (
        <div className="signup-container">
        <h2 className="singuph2">회원가입</h2>
        <form className="signupform" onSubmit={handleSubmit}>
            <label className="signuplabel">아이디</label>
            <input
            className="signupinput"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            />
            <label className="signuplabel">비밀번호</label>
            <input
            className="signupinput"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
            <label className="signuplabel">비밀번호 확인</label>
            <input
            className="signupinput"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            />
            {!isPasswordMatch && <p className="error-text">비밀번호가 일치하지 않습니다.</p>}
            <label className="signuplabel" >이메일(선택사항)</label>
            <input
            className="signupinput"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
            <button type="submit" className="signupbutton">회원가입</button>
            {successMessage && <p className="success-text">{successMessage}</p>}
            {error && <p className="error-text">{error}</p>}
        </form>
        </div>
    );
};

export default SignupForm;
