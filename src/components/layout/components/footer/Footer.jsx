import React from "react";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import "./Footer.scss";
import { NAVIGATION } from "../../../../constants.js";

const socialLinks = [
  { id: nanoid(), icon: <FaFacebookF /> },
  { id: nanoid(), icon: <FaInstagram /> },
  { id: nanoid(), icon: <FaTwitter /> },
  { id: nanoid(), icon: <FaLinkedinIn /> },
];

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer_container container">
          <div className="footer_col footer_about">
            <h3 className="footer_logo">LOGO</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <span className="footer_handle">@Logo</span>
          </div>

          <div className="footer_col">
            <h4>About us</h4>
            <ul className="footer-links">
              {NAVIGATION.map((elm) => (
                <li className="footer-item" key={elm.id}>
                  <Link to={elm.path} className="footer-link">
                    {elm.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer_col">
            <h4>Contact us</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <span className="footer_phone">+908 89097 890</span>
          </div>

          <div className="footer_col footer_social">
            {socialLinks.map((elm) => (
              <span className="footer_social_icon" key={elm.id}>
                {elm.icon}
              </span>
            ))}
          </div>
        </div>

        <div className="footer_bottom">
          <p>Copyright &copy; 2021 Lorem All rights Reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
