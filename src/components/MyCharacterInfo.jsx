import React from "react";
import './MyCharacterInfo.css';

function MyCharacterInfo(){
    return(
        <div>
            <div className="character-info">
                <img src="https://img.lostark.co.kr/armory/5/B691AFAF7195DF0A3EBB77276B60431D2E1E6B00B5F5FF3059D5E05328947ADB.jpg" style={{ maxWidth: '100%', maxHeight: '100%' }}></img>
                <table style={{borderSpacing: '40px', borderCollapse: 'separate'}}><tbody><tr><td>아만</td><td>홀리나이트</td><td>1640</td><td>쌀먹은늘좋아</td></tr></tbody></table>
                <button>갱신</button>
            </div>
        </div>
    );
}

export default MyCharacterInfo;