import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

// kpoxes Ani , TODO

const NAVIGATION = [{ to: "/", name: "Home" }];

const Header = () => {
  return (
    <header className="header">
      <div className="headerContainer container">
        <NavLink to="/" className="logo">
          LOGO
        </NavLink>
        <div className="navigations">
          <ul className="header-links">
            <li className="page-link">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li className="page-link">
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                About us
              </NavLink>
            </li>
            <li className="page-link">
              <NavLink
                to="/portfolio"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Portfolio
              </NavLink>
            </li>
            <li className="page-link">
              <NavLink
                to="/news"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                News
              </NavLink>
            </li>
          </ul>
          <button className="contact-btn">Contact us</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
