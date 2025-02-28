import React, { useState, useEffect } from "react";
import "./PartyFilter.css";

const PartyFilter = () => {
  const [selectedOption, setSelectedOption] = useState("이상");
  const [isChecked, setIsChecked] = useState(false);
  const [weaponLevel, setWeaponLevel] = useState("");
  const [selectedDefense, setSelectedDefense] = useState("0");
  const [isCheckedRatpot, setIsCheckedRatpot] = useState(false);
  const [isCheckedRatdeal, setIsCheckedRatdeal] = useState(false);
  const [refreshTime, setRefreshTime] = useState(0);

  useEffect(() => {
    let timer;
    if (refreshTime > 0) {
      timer = setInterval(() => {
        setRefreshTime((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [refreshTime]);

  return (
    <div className="party-filter-container">
      <div className="filter-section left-section">
        <div className="filter-options">
          <div className="filter">
            <label>
              <input type="radio" name="filter" value="이상" checked={selectedOption === "이상"} onChange={() => setSelectedOption("이상")} />
              이상
            </label>
            <label>
              <input type="radio" name="filter" value="이하" checked={selectedOption === "이하"} onChange={() => setSelectedOption("이하")} />
              이하
            </label>
            <label>
              <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
              내 스펙 확인
            </label>
          </div>
        </div>

        <div className="input-row">
          <label>템렙</label>
          <input type="text" className="input-box half-width" placeholder="입력" />
        </div>

        <button className={`refresh-button ${refreshTime > 0 ? "disabled" : ""}`} onClick={() => refreshTime === 0 && setRefreshTime(8)} disabled={refreshTime > 0}>
          {refreshTime > 0 ? `내 캐릭터 갱신(${refreshTime}s)` : "내 캐릭터 갱신(칭호/카드)"}
        </button>
        <div className="input-row">
          <label>칭호</label>
          <select className="dropdown half-width">
            <option>선택</option>
          </select>
        </div>
        <div className="input-row">
          <label>카드</label>
          <select className="dropdown half-width">
            <option>선택</option>
          </select>
        </div>
        <div className="input-row">
          <label>각성</label>
          <select className="dropdown half-width">
            <option>선택</option>
          </select>
        </div>
        <div className="input-row">
          <label>분위기</label>
          <select className="dropdown half-width">
            <option>선택</option>
          </select>
        </div>
      </div>

      <div className="filter-section right-section">
        <div className="input-row">
          <label>진화</label>
          <input type="text" className="input-box half-width" placeholder="입력" />
        </div>
        <div className="input-row">
          <label>깨달음</label>
          <input type="text" className="input-box half-width" placeholder="입력" />
        </div>
        <div className="input-row">
          <label>도약</label>
          <input type="text" className="input-box half-width" placeholder="입력" />
        </div>
        <div className="input-row">초월</div>
        <div className="input-row">
          <label>무기</label>
          <input type="number" min="0" max="21" value={weaponLevel} onChange={(e) => setWeaponLevel(e.target.value)} className="input-box half-width" placeholder="0~21" />
        </div>
        <div className="input-row">
          <label>방어구</label>
          <select className="dropdown half-width" value={selectedDefense} onChange={(e) => setSelectedDefense(e.target.value)}>
            <option value="0">0</option>
            <option value="75">75</option>
            <option value="풀초">풀초</option>
          </select>
        </div>
        <div className="checkbox-group">
          <label>
            <input type="checkbox" checked={isCheckedRatpot} onChange={() => setIsCheckedRatpot(!isCheckedRatpot)} />
            랏폿
          </label>
          <label>
            <input type="checkbox" checked={isCheckedRatdeal} onChange={() => setIsCheckedRatdeal(!isCheckedRatdeal)} />
            랏딜
          </label>
        </div>

        <button className="btn blue full-width">신청한 파티 토글</button>
      </div>
    </div>
  );
};

export default PartyFilter;
