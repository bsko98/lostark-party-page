import React, { useState } from "react";
import "./PartyMain.css";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import SkillIndicator from "../components/SkillIndicator";
import PartyFilter from "../components/PartyFilter";
import RaidSelecter from "../components/RaidSelecter";
import PartyTable from "../components/PartyTable";

const PartyMain = () => {
  const dataContainers = [
    { id: 1, raidtag: "군단장 레이드", raid: "카멘", difficulty: "하드", title: "카멘 하드", people: "3/8", range: "1-3", tags: ["숙련", "무풀초"] },
    { id: 2, raidtag: "카제로스 레이드", raid: "에키드나", difficulty: "노말", title: "에키드나 노말", people: "5/8", range: "1-3", tags: ["숙제", "엘릭서40"] },
    { id: 3, raidtag: "어비스 던전", raid: "상아탑", difficulty: "하드", title: "상아탑 하드", people: "2/8", range: "1-2", tags: ["반숙", "방풀초"] },
  ];
  const [filterDataArr, setFilterDataArr]= useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredContainers, setFilteredContainers] = useState(dataContainers);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedRaidCategory, setSelectedRaidCategory] = useState(null);
  const [selectedRaid, setSelectedRaid] = useState(null);

  const boxStyle = {
    border: "1px solid #333",
    textAlign: "center",
  };

  const handleSelectTags = (skills) => {
    setSelectedSkills(skills);
  };
  const handleFindParty = () =>{
    console.log(filterDataArr);
  }

  const handleSelectRaid = (category, raid) => {
    setSelectedRaidCategory(category);
    setSelectedRaid(raid);
    applyFilters(category, raid, selectedSkills);
  };


  const applyFilters = (category, raid, skills) => {
    let filteredData = dataContainers;


    // if (category && raid) {
    //   filteredData = filteredData.filter((item) => item.raidtag === category && item.raid === raid);
    // } <- 레이드 카테고리 받았을 시 ex). 카제로스레이드
    if (raid) {
      filteredData = filteredData.filter((item) =>  item.raid === raid);
    }


    if (skills.length > 0) {
      filteredData = filteredData.filter((item) => item.tags.some((tag) => skills.includes(tag)));
    }

    setFilteredContainers(filteredData);
  };

  return (
    <div className="raidselecterbox">
      <RaidSelecter onSelectRaid={handleSelectRaid} />

      <div className="maincontainer">
        <div className="box">
          <div className="lefttopcontainer">
            <button className="characterselect" onClick={() => setIsModalOpen(true)}>서버/캐릭터</button>
            <button className="renewal">갱신</button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </div>
        </div>
        <div className="box">
          <div className="righttopcontainer">
            <input type="text" className="searchbox" placeholder="검색하려는 파티명을 입력해주세요." />
            <button className="searchpartybutton" onClick={handleFindParty}>검색</button>
          </div>
        </div>
        <div className="box">
          <div className="leftcontainer">
            {filteredContainers.length > 0 ? (
              filteredContainers.map((item) => (
                <div className="partycontainer" key={item.id}>
                  <div className="difficulty" style={boxStyle}>{item.difficulty}</div>
                  <div className="title" style={boxStyle}>{item.title}</div>
                  <div className="people" style={boxStyle}>{item.people}</div>
                  <div className="buttoncontainer">
                    <button className="applybutton">신청</button>
                  </div>
                  <div className="questionrange" style={boxStyle}>{item.range}</div>
                  <div className="tags" style={boxStyle}>{item.tags.join(" ")}</div>
                </div>
              ))
            ) : (
              <p className="no-results">선택한 조건에 맞는 파티가 없습니다.</p>
            )}

          </div>
        </div>
        <div className="box">
          <div className="rightcontainer">
            <SkillIndicator onSelectTags={handleSelectTags} />
            <PartyFilter filterDataArr={filterDataArr} setFilterDataArr={setFilterDataArr}/>
            <PartyTable></PartyTable>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartyMain;
