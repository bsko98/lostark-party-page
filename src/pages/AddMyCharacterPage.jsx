import React from 'react';
import './AddMyCharacterPage.css';
import { useNavigate } from 'react-router-dom';


function AddMyCharacterPage() {
  const navigate = useNavigate();
  const handlejewelpage = ()=>{
    navigate('/certifyjewelpage');
  }
  return (
      <div className='addcontainer'>
          <div className='info-box'>캐릭터 추가하는법 설명이 나오는부분</div>
          <div>
            <input type='text'/>
            <button className="nextbutton"onClick={handlejewelpage}>다음</button>
          </div>
      </div>
  )
}

export default AddMyCharacterPage