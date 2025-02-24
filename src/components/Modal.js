import React from 'react';
import './Modal.css';

const Modal = ({isOpen, onClose}) => {
    if(!isOpen) return null;
    console.log("모달 open")
    return(
        <div className="modaloverlay">
            <div className="modalcontent">
                모달창 test 
                <button onClick={onClose}>x</button>
            </div>
        </div>
    )
}

export default Modal;