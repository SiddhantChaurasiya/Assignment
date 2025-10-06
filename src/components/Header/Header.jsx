import React from 'react';
import './header.css';
import logo from '../../assets/logo.png';
import instagram from '../../assets/instagram.png';
import facebook from '../../assets/facebook.png';
import bgImage from '../../assets/header.png';

const Header = () => {
  return (
    <div className='page-container' style={{ backgroundImage: `url(${bgImage})` }}>
      <div className='navbar-content'>
        <div className='logo' style={{ backgroundImage: `url(${logo})` }}></div>
        <div className='nav-items'>
          <p>Home</p>
          <p>About Us</p>
          <p>Testimonial</p>
          <p>Contact Us</p>
          <div className='insta' style={{ backgroundImage: `url(${instagram})` }}></div>
          <div className='fb' style={{ backgroundImage: `url(${facebook})` }}></div>
        </div>
      </div>

      <div className='hero-text'>
        <h1>Mohsin Ali</h1>
        <h1>Khan</h1>
      </div>
    </div>
  );
};

export default Header;
