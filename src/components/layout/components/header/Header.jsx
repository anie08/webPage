import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { NAVIGATION } from "../../../../constants.js";
import MobileMenu from "../mobileMenu/MobileMenu.jsx";

const getActiveClass = ({ isActive }) => (isActive ? "active" : "");

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="header">
      <div className="headerContainer container">
        <NavLink to="/" className="logo">
          LOGO
        </NavLink>

        <div className="navigations">
          <ul className="header-links">
            {NAVIGATION.map((item) => (
              <li className="page-link" key={item.to}>
                <NavLink
                  to={item.to}
                  className={getActiveClass}
                  onClick={closeMenu}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <NavLink to="/contact" className="contact-btn" onClick={closeMenu}>
            Contact us
          </NavLink>
          <button className="menuBtn" onClick={toggleMenu}>
            <RxHamburgerMenu />
          </button>
          {isOpen && <MobileMenu isOpen={isOpen} closeMenu={closeMenu} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
