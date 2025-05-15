// src/components/Layout.js
import React, {useEffect, useState} from 'react';
import Navbar from './Navbar/Navbar'; 
import Footer from './Footer';
import logo from '../images/features/mess.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import '../styles/Layout.css';

function Layout({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  return (
    <div className="layout">
      <Navbar />
        <div className="content" style={{marginTop: 72}}>{children}</div>
        <a href='https://m.me/hmfuocc' className='mess'><img src={logo} alt='messenger' /></a>
        <div>
          {isVisible && (
            <button onClick={scrollToTop} className="back-to-top">
              <FontAwesomeIcon icon={faArrowUp} />
            </button>
          )}
        </div>
      <Footer />
    </div>
  );
}

export default Layout;
