import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function CertifyJewelPage() {
    const [timeLeft, setTimeLeft] = useState(60);
    const [iscertify, setIscertify] = useState(true);
    const navigate = useNavigate();
    const handlemycharacter = ()=>{
      if(iscertify == true)
      {
        navigate('/mycharacter');
      }
      else{
        alert("인증 실패");
      }
    }
    useEffect(() => {
    if (timeLeft > 0) {
        const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1)
        }, 1000);

        return () => clearInterval(timer);
    }
    }, [timeLeft]);


  return (
    <div className='container'>
          <div className='info-box'>보석 추가하는법 설명 나오는부분</div>
          <div>
            <input type='text'/>
            <button onClick={handlemycharacter}>인증하기</button>
          </div>
          <h2>남은시간: {timeLeft}</h2>
      </div>
  )
}

export default CertifyJewelPage;