import React, { useState } from "react";
import "./RaidSelecter.css";

const RaidSelecter = ({ onSelectRaid }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRaid, setSelectedRaid] = useState(null);

  const raidData = {
    "카제로스 레이드": ["에키드나", "1막", "2막", "3막"],
    "에픽 레이드": ["베히모스"],
    "군단장 레이드": ["발탄", "비아키스", "쿠크세이튼", "아브렐슈드", "일리아칸", "카멘"],
    "어비스 던전": ["카양겔", "상아탑"],
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
    setSelectedRaid(null);
  };

  const handleRaidClick = (raid) => {
    setSelectedRaid(raid);
    onSelectRaid(selectedCategory, raid);
  };

  return (
    <div className="raid-container">
      <div className="category-container">
        {Object.keys(raidData).map((category) => (
          <button
            key={category}
            className={`category-btn ${selectedCategory === category ? "active" : ""}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {selectedCategory && (
        <div className="raid-list">
          {raidData[selectedCategory].map((raid) => (
            <button
              key={raid}
              className={`raid-btn ${selectedRaid === raid ? "selected" : ""}`}
              onClick={() => handleRaidClick(raid)}
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
