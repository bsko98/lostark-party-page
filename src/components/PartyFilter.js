import React, { useState, useEffect } from "react";
import "./PartyFilter.css";

const PartyFilter = ({ filterDataArr, setFilterDataArr }) => {
  const [selectedOption, setSelectedOption] = useState("이상"); // 이상 이하 선택택
  const [isChecked, setIsChecked] = useState(false); // 내 스펙 확인 체크박스
  const [itemlevel, setItemLevel] = useState("0"); // 템렙
  const [title, setTitle] = useState(""); //칭호
  const [cardset, setCardset] = useState(""); //카드
  const [cardsetlevel, setCardsetLevel] = useState(""); // 각성
  const [ambience,setAmbience] = useState("x"); //분위기
  const [evolutionpoint,setEvolutionPoint] = useState("0"); //진화
  const [realizationpoint,setRealizationPoint] = useState("0"); //깨달음
  const [leafpoint, setLeafPoint] = useState("0"); //도약
  const [weaponLevel, setWeaponLevel] = useState("0"); //무기 초월
  const [armorlevel, setArmorLevel] = useState("0"); //방어구 초월
  const [isCheckedlastsupport, setIsCheckedlastsupport] = useState(false); //랏폿
  const [isCheckedlastdeal, setIsCheckedlastdeal] = useState(false); //랏딜
  const [refreshTime, setRefreshTime] = useState(0);//쿨타임
  const [isMyPartyToggle, setIsMyPartyToggle]= useState(false);

  const handleitemlevel = (event) =>{
    setItemLevel(event.target.value);
  };
  const handletitle = (event) =>{
    setTitle(event.target.value);
  };
  const handlecardset = (event) =>{
    setCardset(event.target.value);
  };
  const handlecardsetlevel = (event) =>{
    setCardsetLevel(event.target.value);
  };
  const handleambience = (event) =>{
    setAmbience(event.target.value);
    console.log("ambience : " + ambience)
  };

  const handleevolutionpoint = (event) =>{
    setEvolutionPoint(event.target.value);
  };
  const handlerealizationpoint = (event) =>{
    setRealizationPoint(event.target.value);
  };
  const handleleafpoint = (event) =>{
    setLeafPoint(event.target.value);
  };
  const handleToggle = () =>{
    console.log(isMyPartyToggle);
    setIsMyPartyToggle(!isMyPartyToggle);
    console.log(isMyPartyToggle);
  };
  const filterdata = () => {
    // 새로운 객체를 한 번에 생성하여 추가
    const newFilterData = {
      selectedOption,
      isChecked,
      itemlevel,
      title,
      cardset,
      cardsetlevel,
      ambience,
      evolutionpoint,
      realizationpoint,
      leafpoint,
      weaponLevel,
      armorlevel,
      isCheckedlastsupport,
      isCheckedlastdeal,
      isMyPartyToggle,
    };
  
    setFilterDataArr([newFilterData]);
  
    setTimeout(() => {
      // console.log(newFilterData);
      // console.log("업데이트된 filterdataarr:", filterDataArr);
    }, 0);
  };
  



  const test = () =>{
  console.log(selectedOption+"  체크 여부 : "+isChecked +"  아이템 레벨: "+itemlevel)
  console.log("  칭호 : "+title+"   카드 : "+cardset+cardsetlevel+"  분위기 : "+ambience)
  console.log("    진화 : " +evolutionpoint +"    깨달음 : "+ realizationpoint +"   도약 : "+leafpoint)
  console.log(" 무기 초월 :"+ weaponLevel+"  방어구 초월 :"+ armorlevel+"  랏폿 :"+isCheckedlastsupport+"  랏딜 :"+isCheckedlastdeal)
  }


  useEffect(() => {
    // ✅ `refreshTime`이 변경될 때마다 `filterdata` 실행
    filterdata();

    let timer;
    if (refreshTime > 0) {
      timer = setInterval(() => {
        setRefreshTime((prev) => {
          const newTime = prev > 0 ? prev - 1 : 0;
          filterdata(); // ✅ refreshTime 변경될 때마다 실행
          return newTime;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [refreshTime, selectedOption, isChecked, itemlevel, title, cardset, cardsetlevel, ambience, evolutionpoint, realizationpoint, leafpoint, weaponLevel, armorlevel, isCheckedlastsupport, isCheckedlastdeal]); 


  return (
    <div className="party-filter-container">
      <div className="filter-section left-section">
        <div className="filter-options">
          <div className="filter">
            {filterdata}
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
          <input type="text" className="input-box half-width" placeholder="입력" value={itemlevel} onChange ={handleitemlevel} />
        </div>

        <button className={`refresh-button ${refreshTime > 0 ? "disabled" : ""}`} onClick={() => refreshTime === 0 && setRefreshTime(8)} disabled={refreshTime > 0}>
          {refreshTime > 0 ? `갱신(${refreshTime}s)` : "갱신"}
        </button>

        <div className="input-row">
          <label>칭호</label>
          <select className="dropdown half-width" value={title} onChange ={handletitle}>
            <option value="없음">없음</option>
            <option value="빛을 꺼트리는 자">빛을 꺼트리는 자</option>
            <option value="어둠 군단장">어둠 군단장</option>
          </select>
        </div>
        <div className="input-row">
          <label>카드</label>
          <select className="dropdown half-width" value={cardset} onChange ={handlecardset}>
            <option value='없음'>없음</option>
            <option value="세구빛">세상을 구하는 빛</option>
            <option value="암구빛">카제로스의 군단장</option>
          </select>
        </div>
        <div className="input-row">
          <label>각성</label>
          <select className="dropdown half-width" value={cardsetlevel} onChange ={handlecardsetlevel}>
            <option value='0'>0</option>
            <option value='18+'>18+</option>
            <option value='24+'>24+</option>
            <option value='30'>30</option>
          </select>
        </div>
        <div className="input-row">
          <label>분위기</label>
          <select className="dropdown half-width" value={ambience} onChange ={handleambience}>
          <option value="x">없음</option>
            <option value="예민x">예민x</option>
            <option value="예민max">예민max</option>
          </select>
        </div>
      </div>

      <div className="filter-section right-section">
        <div className="input-row">
          <label>진화</label>
          <input type="text" className="input-box half-width" placeholder="입력" value={evolutionpoint} onChange ={handleevolutionpoint}/>
        </div>
        <div className="input-row">
          <label>깨달음</label>
          <input type="text" className="input-box half-width" placeholder="입력" value={realizationpoint} onChange ={handlerealizationpoint}/>
        </div>
        <div className="input-row">
          <label>도약</label>
          <input type="text" className="input-box half-width" placeholder="입력" value={leafpoint} onChange ={handleleafpoint}/>
        </div>
        <div className="input-row">초월</div>
        <div className="input-row">
          <label>무기</label>
          <input type="number" min="0" max="21" value={weaponLevel} onChange={(e) => setWeaponLevel(e.target.value)} className="input-box half-width" placeholder="0~21" />
        </div>
        <div className="input-row">
          <label>방어구</label>
          <select className="dropdown half-width" value={armorlevel} onChange={(e) => setArmorLevel(e.target.value)}>
            <option value="0">0</option>
            <option value="75">75</option>
            <option value="풀초">풀초</option>
          </select>
        </div>
        <div className="checkbox-group">
          <label>
            <input type="checkbox" checked={isCheckedlastsupport} onChange={() => setIsCheckedlastsupport(!isCheckedlastsupport)} />
            랏폿
          </label>
          <label>
            <input type="checkbox" checked={isCheckedlastdeal} onChange={() => setIsCheckedlastdeal(!isCheckedlastdeal)} />
            랏딜
          </label>
          
        </div>
          <label className="checkbox-group">
              <input type="checkbox" checked={isMyPartyToggle} onChange={() => setIsMyPartyToggle(!isMyPartyToggle)} />신청한 파티 토글</label>
        {/* <button className="btn blue full-width" onClick={() => handleToggle()}> 신청한 파티 토글 </button> */}
      </div>
    </div>
  );
};

export default PartyFilter;
