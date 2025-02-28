import React from 'react'
import './MyCharacterInfoPage.css';
import MyCharacterInfo from '../components/MyCharacterInfo';


const users = [
    { id: 1, img: 'https://img.lostark.co.kr/armory/5/B691AFAF7195DF0A3EBB77276B60431D2E1E6B00B5F5FF3059D5E05328947ADB.jpg',server:'아만', classes:'홀리나이트', itemLev:'1640', nickname: '쌀먹은늘좋아'},
    { id: 2, img: 'https://img.lostark.co.kr/armory/7/8F9F2D53C455C5535B999691FED87CFE9273078D819F3995A934A798C1FCCCAF.jpg',server:'아만', classes:'블레이드', itemLev:'1585', nickname: 'bsko'},
    { id: 3, img:'https://img.lostark.co.kr/armory/4/1F274B265DD776C43936AB61D1B8DC572BD94BB0791F281E6A109EF1E3735FE3.jpg',server:'아만', classes: '스카우터',  itemLev:'1600', nickname: '쌀려줘요'}
  ];



function MyCharacterInfoPage() {
  return (
    <div className="container">
        <div className="box">
            {users.map(user => (
                <MyCharacterInfo key={user.id} user={user} />
            ))}

            <button className='addButton' onClick={()=>{console.log("추가하기")}}>추가하기</button>
        </div>
    </div>
  )
}

export default MyCharacterInfoPage;