import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Donate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import qrImage from '../../images/qr.jpg'; // Đường dẫn đến file ảnh QR

function OnlineDonate() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    email: '',
    amount: 30000,
    isAnonymous: false,
  });

  const [errors, setErrors] = useState({});
  const [showQR, setShowQR] = useState(false); // Quản lý hiển thị overlay QR

  const validatePhoneNumber = (phone) => {
    const regex = /^(0[3|5|7|8|9])([0-9]{8})$/;
    return regex.test(phone);
  };

  const handleDonate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Họ tên không được để trống.';
    if (!formData.email.trim()) newErrors.email = 'Email không được để trống.';
    if (!formData.phone.trim()) newErrors.phone = 'Số điện thoại không được để trống.';
    else if (!validatePhoneNumber(formData.phone)) newErrors.phone = 'Số điện thoại không hợp lệ.';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setShowQR(true); // Hiển thị overlay QR
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "amount") {
      const numericValue = value.replace(/\./g, '');
      setFormData((prev) => ({
        ...prev,
        [name]: numericValue ? parseInt(numericValue) : 0,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
      }));
    }
  };

  const formatAmount = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  const adjustAmount = (step) => {
    setFormData((prev) => ({
      ...prev,
      amount: Math.max(0, prev.amount + step),
    }));
  };

  const handleCloseQR = () => {
    const donorName = formData.isAnonymous ? 'Người dùng ẩn danh' : formData.name;
    const donationAmount = new Intl.NumberFormat('vi-VN').format(formData.amount); // Định dạng số tiền
    alert(`Cảm ơn ${donorName} đã ủng hộ số tiền ${donationAmount} VND!`);
    window.location.reload(); // Reload lại trang
  };
  

  return (
    <div className="online-container">
      {/* Form thông tin */}
      <div className="online-form-group">
        {/* Các input */}
        <div className="online-form-field">
          <label className="online-form-label">
            Họ tên người ủng hộ<span className="online-required">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`online-input ${errors.name ? 'online-input-error' : ''}`}
          />
          {errors.name && <p className="online-error-message">{errors.name}</p>}
        </div>
        <div className="online-form-field">
          <label className="online-form-label">
            Số điện thoại<span className="online-required">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`online-input ${errors.phone ? 'online-input-error' : ''}`}
          />
          {errors.phone && <p className="online-error-message">{errors.phone}</p>}
        </div>
      </div>
      <div className="online-form-group">
        <div className="online-form-field">
          <label className="online-form-label">Địa chỉ</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="online-input"
          />
        </div>
        <div className="online-form-field">
          <label className="online-form-label">
            Email<span className="online-required">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`online-input ${errors.email ? 'online-input-error' : ''}`}
          />
          {errors.email && <p className="online-error-message">{errors.email}</p>}
        </div>
      </div>
      <div className="online-anonymous">
        <input
          type="checkbox"
          name="isAnonymous"
          checked={formData.isAnonymous}
          onChange={handleChange}
          id="anonymous"
        />
        <label htmlFor="anonymous">Tôi muốn ủng hộ ẩn danh</label>
      </div>
      <hr className="online-divider" />
      <div className="online-amount-group">
        <label className="online-amount-label">Số tiền ủng hộ</label>
        <div className="online-amount-container">
          <input
            type="text"
            name="amount"
            value={formatAmount(formData.amount)}
            onChange={handleChange}
            className="online-amount-field"
          />
          <div className="online-amount-change">
            <button
              type="button"
              onClick={() => adjustAmount(10000)}
              className="online-amount-btn"
            >
              <FontAwesomeIcon icon={faChevronUp} />
            </button>
            <button
              type="button"
              onClick={() => adjustAmount(-10000)}
              className="online-amount-btn"
            >
              <FontAwesomeIcon icon={faChevronDown} />
            </button>
          </div>
        </div>
      </div>
      <hr className="online-divider" />
      <button onClick={handleDonate} className="online-donate-button">
        Ủng hộ
      </button>
      <p className="online-terms">
        Chúng tôi xác nhận là bạn đã đồng ý với{' '}
        <Link to="/term">điều khoản</Link> của chúng tôi.
      </p>

      {/* Overlay QR */}
      {showQR && (
        <div className="online-qr-overlay">
          <div className="online-qr-container">
            <button onClick={() => setShowQR(false)} className="online-qr-close-x">
              &times;
            </button>
            <img src={qrImage} alt="QR Code" className="online-qr-image" />
            <button onClick={handleCloseQR} className="online-close-btn">
              Xác nhận
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default OnlineDonate;
