import React from "react";
import {
  FaUser,
  FaMapMarkerAlt,
  FaFolder,
  FaCheck,
  FaPlay,
  FaArrowLeft,
  FaArrowRight,
  FaStar,
} from "react-icons/fa";
import "./portfolio.scss";

const Portfolio = () => {
  return (
    <div className="portfolio-page">
      <div className="container">
        <div className="breadcrumb">
          Home <span>&gt;</span> Portfolio
        </div>

        <section className="portfolio-hero">
          <h1 className="portfolio-hero__title">
            Lorem Ipsum is simply dummy text of the printing and.
          </h1>
          <p className="portfolio-hero__subtitle">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>

          <div className="stats-box">
            <div className="stat-item">
              <span className="stat-icon">
                <FaUser />
              </span>
              <div className="stat-info">
                <h3>90+</h3>
                <p>Clients</p>
              </div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-icon">
                <FaMapMarkerAlt />
              </span>
              <div className="stat-info">
                <h3>30+</h3>
                <p>Countries</p>
              </div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-icon">
                <FaFolder />
              </span>
              <div className="stat-info">
                <h3>50+</h3>
                <p>Projects</p>
              </div>
            </div>
          </div>
        </section>

        <section className="video-features">
          <div className="video-card container">
            <div className="video-preview">
              <button className="play-button">
                <FaPlay />
              </button>
            </div>
          </div>
          <div className="features-content">
            <h2>Lorem Ipsum is simply dummy text.</h2>
            <p className="features-desc">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem ipsum is simply dummy.
            </p>
            <ul className="check-list">
              <li>
                <span className="check-icon">
                  <FaCheck />
                </span>{" "}
                Lorem Ipsum is simply
              </li>
              <li>
                <span className="check-icon">
                  <FaCheck />
                </span>{" "}
                Lorem Ipsum is simply
              </li>
              <li>
                <span className="check-icon">
                  <FaCheck />
                </span>{" "}
                Lorem Ipsum is simply
              </li>
              <li>
                <span className="check-icon">
                  <FaCheck />
                </span>{" "}
                Lorem Ipsum is simply
              </li>
            </ul>
          </div>
        </section>

        <section className="feature-block">
          <div className="feature-block__text container">
            <h3>Lorem Ipsum is simply dummy text dummy text</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text over since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries,
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <button className="read-more-btn">Read more</button>
          </div>
          <div className="feature-block__image">
            <div className="image-placeholder cyberpunk-1"></div>
          </div>
        </section>

        <section className="feature-block container ">
          <div className="feature-block__image  ">
            <div className="image-placeholder cyberpunk-2 "></div>
          </div>
          <div className="feature-block__text">
            <h3>Lorem Ipsum is simply dummy text dummy text</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text over since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries,
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <button className="read-more-btn">Read more</button>
          </div>
        </section>

        <section className="feature-block">
          <div className="feature-block__text container">
            <h3>Lorem Ipsum is simply dummy text dummy text</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text over since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries,
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <button className="read-more-btn">Read more</button>
          </div>
          <div className="feature-block__image">
            <div className="image-placeholder sci-fi-soldier"></div>
          </div>
        </section>

        <section className="testimonials container">
          <div className="testimonials-header">
            <h2>Trusted by Thousands of Happy Customer</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy.
            </p>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card  ">
              <div className="user-top">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Viezh Robert"
                  className="user-avatar"
                />
                <div className="user-meta">
                  <h4>Viezh Robert</h4>
                  <p>Warsaw, Poland</p>
                </div>
                <div className="rating">
                  4.5 <FaStar />
                </div>
              </div>
              <p className="user-review">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem ipsum has been the industry&apos;s standard
                dummy text over since the 1500s,
              </p>
            </div>

            <div className="testimonial-card">
              <div className="user-top">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Yessica Christy"
                  className="user-avatar"
                />
                <div className="user-meta">
                  <h4>Yessica Christy</h4>
                  <p>Shanxi, China</p>
                </div>
                <div className="rating">
                  4.5 <FaStar />
                </div>
              </div>
              <p className="user-review">
                Lorem Ipsum is simply dummy text of the printing and.
              </p>
            </div>

            <div className="testimonial-card">
              <div className="user-top">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Kim Young Jou"
                  className="user-avatar"
                />
                <div className="user-meta">
                  <h4>Kim Young Jou</h4>
                  <p>Seoul, South Korea</p>
                </div>
                <div className="rating">
                  4.5 <FaStar />
                </div>
              </div>
              <p className="user-review">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>

          <div className="testimonials-footer">
            <div className="pagination-dots">
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="slider-arrows">
              <button className="arrow-btn">
                <FaArrowLeft />
              </button>
              <button className="arrow-btn active">
                <FaArrowRight />
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
