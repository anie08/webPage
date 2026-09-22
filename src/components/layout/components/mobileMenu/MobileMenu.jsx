import React from "react";
import { NavLink } from "react-router-dom";
import { NAVIGATION } from "../../../../constants.js";

const getActiveClass = ({ isActive }) => (isActive ? "active" : "");

const MobileMenu = ({ closeMenu }) => {
  return (
    <div className="mobile-menu">
      <button className="mobile-menu__close" onClick={closeMenu}>
        <span className="mobile-menu__close-icon">X</span>
      </button>
      <ul className="mobile-menu__list">
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
    </div>
  );
};

export default MobileMenu;
