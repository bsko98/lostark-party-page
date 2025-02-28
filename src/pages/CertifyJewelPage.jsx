import React, { useState, useEffect } from 'react';

function CertifyJewelPage() {
    const [timeLeft, setTimeLeft] = useState(60);

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
            <button>인증하기</button>
          </div>
          <h2>남은시간: {timeLeft}</h2>
      </div>
  )
}

export default CertifyJewelPage;