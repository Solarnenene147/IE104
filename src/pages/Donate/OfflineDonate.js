import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faUser, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function OfflineDonate() {
  return(
    <div className='offline-container'>
      <h3 className='offline-title'>Để có thể ủng hộ trực tiếp, bạn có thể đến trực tiếp hoặc gửi qua đường bưu điện đến</h3>
      <div>
        <p className='offline-item'><FontAwesomeIcon icon={faUser} className='offline-icon'/>Văn phòng quyên góp GiveHub.vn</p>
        <p className='offline-item'><FontAwesomeIcon icon={faBuilding} className='offline-icon'/><a href='https://maps.app.goo.gl/hiQZeLEeE3tS9wKX6' className='offline-link'>Tầng 11, Tòa E, Trường Đại Học Công Nghệ Thông Tin, Khu Phố 6, phường Linh Trung, Thành phố Thủ Đức, Thành phố Hồ Chí Minh</a></p>
        <p className='offline-item'><FontAwesomeIcon icon={faPhone} className='offline-icon'/><a href='tel:0384449268' className='offline-link'>0366558899</a></p>
        <p className='offline-item'><FontAwesomeIcon icon={faEnvelope} className='offline-icon'/><a href='mailto:winnerhuynh1234@gmail.com' className='offline-link'>hotline@givehub.vn</a></p>
        <p className='offline-quote'><i>GiveHub.vn, chia sẻ yêu thương, lan tỏa hy vọng.</i></p>
      </div>
    </div>
  )
}

export default OfflineDonate;
