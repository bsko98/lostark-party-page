import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose }) => {
    const serverdata = ["니나브", "루페온", "실리안", "아만", "아브렐슈드", "카단", "카마인", "카제로스"];

    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('modaloverlay')) {
            onClose();
        }
    };//모달 외부 클릭시 닫게 하는 부분분

    const handleItemClick = (item) => {
        console.log(item);
    };// 여기는 서버 클릭부분 나중에 이거랑 캐릭터 클릭시 데이터 가져와야함.

    return (
        <div className="modaloverlay" onClick={handleOverlayClick}>
            <div className="modalcontent" onClick={(e) => e.stopPropagation()}>
                <div className="modalservercontainer">
                    {serverdata.map((item, index) => (
                        <button key={index} className="serverdatabutton" onClick={() => handleItemClick(item)}>
                            {item}
                        </button>
                    ))}
                </div>
                {/* <button onClick={onClose}>닫기</button> */}
            </div>
        </div>
    );
};

export default Modal;
