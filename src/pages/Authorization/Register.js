import React, { useState } from 'react';
import '../../styles/Authorization.css';
import { Link } from 'react-router-dom';
import googleLogo from '../../images/features/Google_logo.png';

function RegisterModal({ onClose, onSwitchToLogin }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState('');
  
  // Hàm xử lý khi bấm đăng ký
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Đăng ký thành công!");
      // Chuyển hướng về trang Home sau khi bấm OK trên alert
      window.location.reload(); 
    }
  };

  // Kiểm tra form
  const validateForm = () => {
    if (lastName.length < 2 || firstName.length < 2) {
      setError("Họ và tên phải có ít nhất 2 ký tự");
      return false;
    }
    if (!/^(0|\+84)(3|5|7|8|9)\d{8}$/.test(phone)) {
      setError("Số điện thoại không hợp lệ. Vui lòng nhập số điện thoại Việt Nam hợp lệ.");
      return false;
    }
    if (!/^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setError("Email không hợp lệ");
      return false;
    }    
    setError('');
    return true;
  };

  return (
    <div className="modal-content">
      <button className="close-button" onClick={onClose}>X</button>
      <form className='form' onSubmit={handleSubmit}>
        <label className='login-text'>Họ và tên:</label>
        <div className="input-group">
          <input
            type="text"
            placeholder="Họ"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className='login-input'
            required
          />
          <input
            type="text"
            placeholder="Tên"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className='login-input'
            required
          />
        </div>

        <label className='login-text'>Số điện thoại:</label>
        <div className="input-group">
          <input
            type="text"
            placeholder="Số điện thoại"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className='login-input'
            required
          />
        </div>

        <label className='login-text'>Email:</label>
        <div className="input-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='login-input'
            required
          />
        </div>

        <label className='login-text'>Địa chỉ:</label>
        <div className="input-group">
          <input
            type="text"
            placeholder="Địa chỉ"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className='login-input'
            required
          />
        </div>

        {error && <p className="error-message" style={{color:'red', fontSize:12}}>{error}</p>}

        <button type="submit" className='submit'>Đăng ký</button>

        <div>
          <input
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
            className='checkbox'
            required
          />
          <label> Bạn có đồng ý với các điều khoản <Link to="/term" className='policy'>ở đây</Link> không?</label>
        </div>

        <p className='login-text'>- Hoặc đăng ký bằng -</p>
        <button type="button" className="google-login-button">
          <div><img src={googleLogo} alt="google" className='googleLogo' />Đăng ký với Google</div>
        </button>

        <p className='login-text'>
          Đã có tài khoản? <button type="button" onClick={onSwitchToLogin} className="link-button">Đăng nhập ngay!</button>
        </p>
      </form>
    </div>
  );
}

export default RegisterModal;
