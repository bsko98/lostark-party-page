import React from 'react';
import './PartyMain.css'; 
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Modal from '../components/Modal';
import SkillIndicator from '../components/SkillIndicator';
import PartyFilter from '../components/PartyFilter';

const PartyMain = () => {
 
  const dataContainers = [
    { id: 1, difficulty: "하드", title: "카멘 하드", people: "3/8", range: "1-3", tags: ["숙련", "무풀초"] },
    { id: 2, difficulty: "노말", title: "카멘 노말", people: "5/8", range: "1-3", tags: ["숙제", "엘릭서40"] },
    { id: 3, difficulty: "하드", title: "카멘 하드2", people: "2/8", range: "1-2", tags: ["반숙", "방풀초"] },
    
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredContainers, setFilteredContainers] = useState(dataContainers);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const boxStyle = {
    border: "1px solid #333",
    textAlign: "center",
  };

  const handleSelectTags = (skills) => {
    setSelectedSkills(skills);
    console.log(skills)
  };//숙련도 가져오기 
  const handleSearch = () => {
    if (selectedSkills.length > 0) {
      setFilteredContainers(dataContainers.filter(item =>
        item.tags.some(tag => selectedSkills.includes(tag))
      ));
    } else {
      setFilteredContainers(dataContainers);
    }
  };// 검색 버튼 눌러서 필터 적용
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
        {dataContainers.map((item) => (
        <div className="partycontainer" key={item.id}>
          <div className="difficulty" style={boxStyle}>{item.difficulty}</div>
          <div className="title" style={boxStyle}>{item.title}</div>
          <div className="people" style={boxStyle}>{item.people}</div>
          <div className="buttoncontainer">
            <button className="applybutton" >신청</button>
          </div>
          <div className="questionrange" style={boxStyle}>{item.range}</div>
          <div className="tags" style={boxStyle}>{item.tags.join(" ")}</div>
          
        </div>
      ))}
        </div>
      </div>
      <div className = "box"> 
        <div className = "rightcontainer">
        <SkillIndicator onSelectTags={handleSelectTags} />
        <PartyFilter></PartyFilter>
        </div>
      </div>
    </div>
  );
};

export default PartyMain;
