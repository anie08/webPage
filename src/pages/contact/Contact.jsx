import React from "react";
import "./Contact.scss";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-breadcrumb container">
      <Link to="/" className="breadcrumb-link">
        Home
      </Link>
      {" > "}
      <span className="current">Contact us</span>

      <section className="contact-intro ">
        <h1 className="contact-intro__title">
          Lorem Ipsum is simply dummy text of the printing and.
        </h1>
        <p className="contact-intro__text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>

        <div className="world-map-box">
          <div className="map-placeholder">
            <div className="map-dot dot-1"></div>
            <div className="map-dot dot-2"></div>
            <div className="map-dot dot-3"></div>
            <div className="map-dot dot-4"></div>
          </div>

          <div className="contact-info-bar">
            <div className="info-item">
              <span className="info-label">Follow us</span>
              <div className="social-icons">
                <FaFacebookF />
                <FaTwitter />
                <FaLinkedinIn />
                <FaInstagram />
              </div>
            </div>

            <div className="info-divider"></div>

            <div className="info-item">
              <FaPhoneAlt className="icon-orange" />
              <span>+94 4444 5555 6</span>
            </div>

            <div className="info-divider"></div>

            <div className="info-item">
              <FaMapMarkerAlt className="icon-orange" />
              <span>but also the loop into electronic typesetting</span>
            </div>
          </div>
        </div>
      </section>

      <section className="say-hello ">
        <div className="say-hello__header">
          <h2>Say hello</h2>
          <p>Lorem Ipsum is simply dummy text of the printing.</p>
        </div>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-row">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="form-row">
            <input type="email" placeholder="Email Address" />
          </div>
          <div className="form-row">
            <textarea placeholder="Message" rows="5"></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Get in touch
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
