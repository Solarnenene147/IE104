import React, { useState } from 'react';
import '../../styles/Authorization.css';
import Login from './Login';
import Register from './Register';
import logo from '../../images/features/logo.png';

function UserModal({ isOpen, onClose }) {
  const [currentTab, setCurrentTab] = useState('login');
  const [isClosing, setIsClosing] = useState(false); // Thêm trạng thái hiệu ứng đóng

  const switchToLogin = () => setCurrentTab('login');
  const switchToRegister = () => setCurrentTab('register');

  const handleClose = () => {
    setIsClosing(true); // Kích hoạt hiệu ứng đóng
    setTimeout(() => {
      setIsClosing(false); // Reset trạng thái sau khi hiệu ứng chạy xong
      onClose(); // Gọi hàm đóng modal từ props
    }, 500); // Thời gian tương ứng với animation
  };

  if (!isOpen && !isClosing) return null;

  return (
    <div
      className="modal-overlay"
      onClick={(e) => e.target === e.currentTarget && handleClose()}
    >
      <div className={`modal ${isClosing ? 'closing' : ''}`}>
        <button className="close-button" onClick={handleClose}>X</button>
        <img src={logo} className="login-logo" alt="Logo" />
        <div className="tab-buttons">
          <button
            onClick={switchToLogin}
            className={currentTab === 'login' ? 'active' : ''}
          >
            Đăng Nhập
          </button>
          <button
            onClick={switchToRegister}
            className={currentTab === 'register' ? 'active' : ''}
          >
            Đăng Ký
          </button>
        </div>
        {currentTab === 'login' ? (
          <Login onClose={handleClose} onSwitchToRegister={switchToRegister} />
        ) : (
          <Register onClose={handleClose} onSwitchToLogin={switchToLogin} />
        )}
      </div>
    </div>
  );
}

export default UserModal;
