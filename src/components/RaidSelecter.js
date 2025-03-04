import React, { useState } from "react";
import "./RaidSelecter.css";

const RaidSelecter = ({ onSelectRaid }) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(null);
  const [selectedRaidIndex, setSelectedRaidIndex] = useState(null);

  const buttonData = [
    { category: "카제로스 레이드", raids: ["에키드나", "1막", "2막", "3막"] },
    { category: "에픽 레이드", raids: ["베히모스"] },
    { category: "군단장 레이드", raids: ["발탄", "비아키스!", "쿠크세이튼", "아브렐슈드", "일리아칸", "카멘"] },
    { category: "어비스 던전", raids: ["카양겔", "상아탑"] },
  ];

  const raidData = [
    { category: "카제로스 레이드드", raids: ["에키드나", "1막", "2막", "3막"] },
    { category: "에픽 레이드", raids: ["베히모스"] },
    { category: "군단장 레이드", raids: ["발탄", "비아키스", "쿠크세이튼", "아브렐슈드", "일리아칸", "카멘"] },
    { category: "어비스 던전", raids: ["카양겔", "상아탑"] },
  ];

  const handleCategoryClick = (index) => {
    setSelectedCategoryIndex(selectedCategoryIndex === index ? null : index);
    setSelectedRaidIndex(null);
  };

  const handleRaidClick = (index) => {
    setSelectedRaidIndex(index);
    if (selectedCategoryIndex !== null) {
      const selectedCategory = raidData[selectedCategoryIndex].category;
      const selectedRaid = raidData[selectedCategoryIndex].raids[index];
      onSelectRaid(selectedCategory, selectedRaid);
    }
  };

  return (
    <div className="raid-container">
      <div className="category-container">
        {buttonData.map((item, index) => (
          <button
            key={item.category}
            className={`category-btn ${selectedCategoryIndex === index ? "active" : ""}`}
            onClick={() => handleCategoryClick(index)}
          >
            {item.category}
          </button>
        ))}
      </div>
      {selectedCategoryIndex !== null && (
        <div className="raid-list">
          {buttonData[selectedCategoryIndex].raids.map((raid, index) => (
            <button
              key={raid}
              className={`raid-btn ${selectedRaidIndex === index ? "selected" : ""}`}
              onClick={() => handleRaidClick(index)}
            >
              {raid}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default RaidSelecter;
