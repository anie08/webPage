import React from "react";
import {
  FaUser,
  FaMapMarkerAlt,
  FaFolder,
  FaCheck,
  FaPlay,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import { nanoid } from "nanoid";
import "./Portfolio.scss";

import cyberpunk1Img from "../../assets/img/Rectangle 24.png";
import cyberpunk2Img from "../../assets/img/recentProjects/Rectangle 16.png";
import videoPreviewImg from "../../assets/img/recentProjects/Rectangle 16.png";
import Stars from "../portfolio/stars/Stars.jsx";
import { Link } from "react-router-dom";

const contentBlocks = [
  {
    id: nanoid(),
    type: "video",
    title: "Lorem Ipsum is simply dummy text.",
    image: videoPreviewImg,
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text over since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    list: [
      "Lorem Ipsum is simply",
      "Lorem Ipsum is simply",
      "Lorem Ipsum is simply",
      "Lorem Ipsum is simply",
    ],
    readMore: true,
  },
  {
    id: nanoid(),
    type: "image",
    title: "Lorem Ipsum is simply dummy text dummy text",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text over since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: cyberpunk1Img,
    readMore: true,
  },
  {
    id: nanoid(),
    type: "image",
    title: "Lorem Ipsum is simply dummy text dummy text",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text over since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: cyberpunk2Img,
  },
  {
    id: nanoid(),
    type: "image",
    title: "Lorem Ipsum is simply dummy text dummy text",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text over since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: cyberpunk1Img,
  },
];

const testimonialsData = [
  {
    id: nanoid(),
    name: "Viezh Robert",
    location: "Warsaw, Poland",
    rating: "5",
    avatar: "https://via.placeholder.com/50",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text over since the 1500s,",
  },
  {
    id: nanoid(),
    name: "Yessica Christy",
    location: "Shanxi, China",
    rating: "3",
    avatar: "https://via.placeholder.com/50",
    review: "Lorem Ipsum is simply dummy text of the printing and.",
  },
  {
    id: nanoid(),
    name: "Kim Young Jou",
    location: "Seoul, South Korea",
    rating: "2.7",
    avatar: "https://via.placeholder.com/50",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

const Portfolio = () => {
  return (
    <div className="portfolio-page ">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/" className="breadcrumb-link">
            Home
          </Link>
          {" > "}
          <span className="current">Portfolio</span>
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

        {contentBlocks.map((block) => {
          const isVideo = block.type === "video";
          const { image, id, title, desc } = block;

          return (
            <section key={id} className="feature-block">
              <div className={isVideo ? "video-card" : "feature-block__image"}>
                {isVideo ? (
                  <div className="video-preview">
                    <img
                      src={image}
                      alt="Video preview"
                      className="media-img"
                    />
                    <button className="play-button">
                      <FaPlay />
                    </button>
                  </div>
                ) : (
                  <img
                    src={image}
                    alt="Feature"
                    className="image-placeholder"
                  />
                )}
              </div>
              <div className="feature-block__text">
                <h2>{title}</h2>
                {desc && <p className="feature-block__desc">{desc}</p>}
                {!!block.list?.length && (
                  <ul className="check-list">
                    {block.list.map((item, index) => (
                      <li key={index}>
                        <span className="check-icon">
                          <FaCheck />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {block.readMore && (
                  <button className="read-more-btn">Read more</button>
                )}
              </div>
            </section>
          );
        })}

        <section className="testimonials">
          <div className="testimonials-header">
            <h2>Trusted by Thousands of Happy Customer</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy.
            </p>
          </div>

          <div className="testimonials-grid">
            {testimonialsData.map((testimonial) => (
              <div className="testimonial-card" key={testimonial.id}>
                <div className="user-top">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="user-avatar"
                  />
                  <div className="user-meta">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.location}</p>
                  </div>
                  <div className="rating">
                    <Stars rating={testimonial.rating} />
                  </div>
                </div>
                <p className="user-review">{testimonial.review}</p>
              </div>
            ))}
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
