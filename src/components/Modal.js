import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose }) => {
    const serverdata = ["니나브", "루페온", "실리안", "아만", "아브렐슈드", "카단", "카마인", "카제로스"];

    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('modaloverlay')) {
            onClose();
        }
    };

    const handleItemClick = (item) => {
        console.log(item);
    };

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
                <button onClick={onClose}>닫기</button>
            </div>
        </div>
    );
};

export default Modal;
