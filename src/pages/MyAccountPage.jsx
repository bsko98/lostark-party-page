import React, {useState} from 'react';
import './MyAccountPage.css';


function MyAccountPage() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {setIsHovered(true);
    console.log("hover on");
  };
  const handleMouseLeave = () => {setIsHovered(false)
    console.log("hover off");
  };

  return (
    <div className='myaccount-container'>
      <div className='myaccount-row'>
        <h2>내 api key</h2>
        <button className='round-button' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>?</button>
        {isHovered && <button>sdf</button>}
        <input type='text' style={{marginLeft:'100px', width:'300px'}}/>
        <button style={{marginLeft:'100px'}}>api key 저장하기</button>
      </div>
      <div className='myaccount-row'>
        <h2>복구용 이메일</h2><button className='round-button'>?</button>
        <input type='text' style={{marginLeft:'100px', width:'300px'}}/>
        <button style={{marginLeft:'100px'}}>변경하기</button>
      </div>
      <div className='myaccount-row'>
        <h2>비밀번호 재설정</h2>
        <input type='text' style={{marginLeft:'100px', width:'300px'}}/>
        <button style={{marginLeft:'100px'}}>변경하기</button>
      </div>
      <div className='myaccount-lastrow'><button className='leave-button'>탈퇴하기</button></div>
    </div>
  )
}

export default MyAccountPage;