import React, { useState } from "react";
import "../../styles/Donate.css"; 
import OnlineDonate from './OnlineDonate';
import OfflineDonate from './OfflineDonate';


function Modal({ isVisible, onClose, charityTitle }) {
    const [currentTab, setCurrentTab] = useState('online');
    const isActiveTab = (tabName) => currentTab === tabName;

    if (!isVisible) return null;

    return (
        <div className="donate-modal-overlay" onClick={onClose}>
        <div className="donate-modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="donate-modal-close" onClick={onClose}>
            &times;
            </button>
            <div className="donate-modal-content">
                <p className="donate-modal-title">Ủng hộ cho dự án <strong>"{charityTitle}"</strong></p>
                <div className="donate-modal-tab-buttons">
                    <button
                        onClick={() => setCurrentTab('online')}
                        className={isActiveTab('online') ? 'active' : ''}
                    >
                        Trực tuyến
                    </button>
                    <button
                        onClick={() => setCurrentTab('offline')}
                        className={isActiveTab('offline') ? 'active' : ''}
                    >
                        Trực tiếp
                    </button>
                </div>
                <div className="donate-modal-content">
                    {isActiveTab('online') ? (
                    <OnlineDonate/>
                    ) : (
                    <OfflineDonate/>
                    )}
                </div>
                
            </div>
        </div>
        </div>
    );
}

export default Modal;
