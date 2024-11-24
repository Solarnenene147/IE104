import React, { useState } from 'react';
import '../../styles/Support.css';

function Support() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Yêu cầu hỗ trợ đã được gửi!");
    // Reset form sau khi gửi
    window.location.reload()
  };

  return (
    <div className='page bg-white'>
      <div className='page-title-container'>
        <div className='page-title-image'>
          <h1 className='about-title'>Hỗ trợ trực tuyến</h1>
        </div>
      </div>
      <div className='grid-container-support  '>
        <div>
          <h2>Liên hệ trực tiếp</h2>
          <p>Email: <a href="mailto:winnerhuynh1234@gmail.com" className='support-link'>hotline@givehub.vn.</a></p>
          <p>Hotline: <a href="tel:0384449268" className='support-link'>0366558899</a></p>
          <p>
            Live Chat:{" "}
            <a href='https://maps.app.goo.gl/qEVTkp3G8CizxpBA6' target="_blank" rel="noopener noreferrer" className='support-link'>Khu phố 6, Linh Trung, Thành phố Thủ Đức.</a>
          </p>
          <div className='mt-3'>
            <h2>Video hướng dẫn</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/3tamdFVLw_U?si=Sw2pn7iUZKlMk6pq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit} className='support-form'>
            <h2>Yêu cầu hỗ trợ</h2>
            <input
              type="text"
              placeholder="Họ và tên"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              
            />
            <select
              value={formData.topic}
              onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
              required
            >
              <option value="" disabled hidden style={{color:'#999'}}>Chọn chủ đề</option>
              <option value="account">Tài khoản</option>
              <option value="payment">Thanh toán</option>
            </select>

            <textarea
              className='textarea-support'
              placeholder="Mô tả chi tiết vấn đề"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
            />
            <button className='contact-button' type="submit">Gửi yêu cầu</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Support;
