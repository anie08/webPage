import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

const NAVIGATION = [
  { to: "/", name: "Home" },
  { to: "/about", name: "About us" },
  { to: "/portfolio", name: "Portfolio" },
  { to: "/news", name: "News" },
];

const getActiveClass = ({ isActive }) => (isActive ? "active" : "");

const Header = () => {
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
                <NavLink to={item.to} className={getActiveClass}>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <NavLink to="/contact" className="contact-btn">
            Contact us
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
