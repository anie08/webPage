import React from 'react';
import './Header.scss'

const Header = () => {
  return (
    <header className="header">
      <div className="logo">LOGO</div>
      <ul className="header-links">
        <li className="active"><a href="#home">Home</a></li>
        <li><a href="#about">About us</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#news">News</a></li>
      </ul>
      <button className="contact-btn">Contact us</button>

    </header>
  );
};

export default Header;