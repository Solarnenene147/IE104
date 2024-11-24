import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/features/logo.png'
import '../../styles/Navbar.css';
import UserIcon from './UserIcon';

function Navbar() {
  return (
    <nav className="navbar">
        <Link to="/" className="logo" ><img src={Logo} alt="User"/></Link>
        <ul>
        <li>
            <Link to="/" className='navitem'>Trang chủ</Link>
          </li>
          <li className="dropdown">
            <Link to="#" className='navitem'>Các tổ chức</Link>
            <div className="dropdown-content">
              <Link to="/about" className='navitem' style={{width: 90}}>Giới thiệu</Link><br/>
              <Link to="/project" className='navitem'>Dự án</Link>
            </div>
          </li>
          <li>
            <Link to="/stats" className='navitem'>Thống kê</Link>
          </li>
          <li className="dropdown">
            <Link to="#" className='navitem'>Liên hệ</Link>
            <div className="dropdown-content">
              <Link to="/faq" className='navitem'>Câu hỏi thường gặp</Link><br/>
              <Link to="/support" className='navitem'>Hỗ trợ trực tuyến</Link>
            </div>
          </li>
          <li className='donate'>
            <Link to="/donate" className='navitem'>Quyên góp</Link>
          </li>
        </ul>
        <UserIcon className="avatar"/>
    </nav>
  );
}

export default Navbar;
