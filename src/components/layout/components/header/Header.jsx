import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="headerContainer container">
        <div className="logo">LOGO</div>
        <div className="navigations">
          <ul className="header-links">
            <li className="active">
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About us</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#news">News</a>
            </li>
          </ul>
          <button className="contact-btn">Contact us</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
