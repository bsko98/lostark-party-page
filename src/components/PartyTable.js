import React from "react";
import "./PartyTable.css";

const PartyTable = () => {
  // 파티 데이터 (4개)
  const parties = [
    { id: 1, name: "1 파티" },
    { id: 2, name: "2 파티" },
    { id: 3, name: "3 파티" },
    { id: 4, name: "4 파티" },
  ];

  // 각 파티별 멤버 데이터 (4명씩 고정)
  const members = Array(4).fill({
    job: "직업",
    nickname: "닉네임",
    level: "템렙",
  });

  return (
    <div className="party-container">
      <div className="party-header">
        <div className="title">파티명</div>
        <div className="subtitle">
          <div>보스</div>
          <div>난이도</div>
          <div>관문</div>
        </div>
      </div>

      <div className="party-grid">
        {parties.map((party) => (
          <div key={party.id} className="party-box">
            <div className="party-name">{party.name}</div>
            <div className="party-members">
              {members.map((member, index) => (
                <div key={index} className="party-member">
                  <div className="job">{member.job}</div>
                  <div className="nickname">{member.nickname}</div>
                  <div className="level">{member.level}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartyTable;
