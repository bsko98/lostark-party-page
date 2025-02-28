import React from "react";
import './MyCharacterInfo.css';

function MyCharacterInfo({user}){
    return(
        <div>
            <div className="character-info">
                <img src={user.img} style={{ maxWidth: '100%', maxHeight: '100%' }}></img>
                <table style={{borderSpacing: '40px', borderCollapse: 'separate'}}><tbody><tr><td>{user.server}</td><td>{user.classes}</td><td>{user.itemLev}</td><td>{user.nickname}</td></tr></tbody></table>
                <button onClick={()=>{console.log(`${user.nickname}`)}}>갱신</button>
            </div>
            <br/>
        </div>
    );
}

export default MyCharacterInfo;