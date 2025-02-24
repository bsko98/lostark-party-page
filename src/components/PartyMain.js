import React from 'react';
import './PartyMain.css'; 
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Modal from './Modal';

const PartyMain = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className = "maincontainer">
      <div className = "box"> 
        <div className = "lefttopcontainer">
              <button className = "characterselect" onClick = {() => setIsModalOpen(true)}>서버/캐릭터</button>
              <button className = "renewal">갱신</button>
              <Modal isOpen = {isModalOpen} onClose={() => setIsModalOpen(false)} />
          </div>
      </div>
      <div className = "box"> 
        <div className = "righttopcontainer">
            <input type = "text" className = "searchbox" placeholder = "검색하려는 파티명을 입력해주세요."></input>
            <button className = "searchpartybutton">검색</button>
        </div>
      </div>
      <div className = "box"> 
        <div className = "leftcontainer">
         left
        </div>
      </div>
      <div className = "box"> 
        <div className = "rightcontainer">
          right

        </div>
      </div>
    </div>
  );
};

export default PartyMain;
