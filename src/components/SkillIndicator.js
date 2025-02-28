import React, { useState } from 'react';
import './SkillIndicator.css';

const SkillIndicator = ({ onSelectTags }) => {
  const skills = ["트라이", "클경", "반숙", "숙련", "숙제"];
  const [selectedSkills, setSelectedSkills] = useState([]);

  const handleChange = (index) => {
    let newSelected = [...selectedSkills];

    if (newSelected.includes(index)) {
      newSelected = newSelected.filter(i => i !== index);
    } else {
      if (newSelected.length < 2) {
        newSelected.push(index);
      } else {
        newSelected = [index];
      }
    }

    setSelectedSkills(newSelected);
    
    if (newSelected.length === 2) {
      const minIndex = Math.min(...newSelected);
      const maxIndex = Math.max(...newSelected);
      const selectedRange = skills.slice(minIndex, maxIndex + 1);
      onSelectTags(selectedRange);
    } else if (newSelected.length === 1) {
      onSelectTags([skills[newSelected[0]]]);
    } else {
      onSelectTags([]);
    }
  };

  return (
    <div className="step-container">
      {skills.map((skill, index) => (
        <div key={index} className="step">
          <input
            type="checkbox"
            id={`step-${index}`}
            className="radio-hidden"
            checked={selectedSkills.includes(index)}
            onChange={() => handleChange(index)}
          />
          <label htmlFor={`step-${index}`} className={`circle ${selectedSkills.includes(index) ? "selected" : ""}`}></label>
          <span className="step-label">{skill}</span>

          {index < skills.length - 1 && (
            <div
              className="line"
              style={{
                visibility:
                  selectedSkills.length === 2 &&
                  index >= Math.min(...selectedSkills) &&
                  index < Math.max(...selectedSkills)
                    ? "visible"
                    : "hidden",
              }}
            ></div>
          )}
        </div>
      ))}
      
    </div>
  );
};

export default SkillIndicator;
