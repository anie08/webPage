import React from "react";
import "./News.scss";
import rec24 from "../../assets/img/news/Rectangle 274.png";
import rec23 from "../../assets/img/news/Rectangle 274 (1).png";
import img1 from "../../assets/img/news/Rectangle 276 (2).png";
import img2 from "../../assets/img/news/Rectangle 276.png";
import img3 from "../../assets/img/news/Rectangle 276 (1).png";
import img4 from "../../assets/img/news/Rectangle 276 (3).png";
import img5 from "../../assets/img/news/Rectangle 276 (4).png";
import img6 from "../../assets/img/news/Rectangle 276 (6).png";
import img7 from "../../assets/img/news/Rectangle 276 (7).png";
import img8 from "../../assets/img/news/Rectangle 276 (8).png";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { nanoid } from "nanoid";

const bigNews = [
  {
    id: nanoid(),
    img: rec24,
    tag: "John smoath",
    readTime: "5min",
    title: "Lorem Ipsum is simply dummy text dummy text",
    paragraphs: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    ],
  },
  {
    id: nanoid(),
    img: rec23,
    tag: "John smoath",
    readTime: "5min",
    title: "Lorem Ipsum is simply dummy text dummy text",
    paragraphs: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    ],
  },
];

const News = () => {
  const sidebarNews = [
    {
      id: nanoid(),
      tag: "John smoath",
      readTime: "5min",
      title: "Lorem Ipsum is simply dummy text dummy text ?",
      img: img1,
    },
    {
      id: nanoid(),
      tag: "John smoath",
      readTime: "5min",
      title: "Lorem Ipsum is simply dummy text dummy text ?",
      img: img2,
    },
    {
      id: nanoid(),
      tag: "John smoath",
      readTime: "5min",
      title: "Lorem Ipsum is simply dummy text dummy text ?",
      img: img3,
    },
    {
      id: nanoid(),
      tag: "John smoath",
      readTime: "5min",
      title: "Lorem Ipsum is simply dummy text dummy text ?",
      img: img4,
    },
    {
      id: nanoid(),
      tag: "John smoath",
      readTime: "5min",
      title: "Lorem Ipsum is simply dummy text dummy text ?",
      img: img5,
    },
    {
      id: nanoid(),
      tag: "John smoath",
      readTime: "5min",
      title: "Lorem Ipsum is simply dummy text dummy text ?",
      img: img6,
    },
    {
      id: nanoid(),
      tag: "John smoath",
      readTime: "5min",
      title: "Lorem Ipsum is simply dummy text dummy text ?",
      img: img7,
    },
    {
      id: nanoid(),
      tag: "John smoath",
      readTime: "5min",
      title: "Lorem Ipsum is simply dummy text dummy text ?",
      img: img8,
    },
  ];

  return (
    <div className="news-page">
      <section className="news-intro container">
        <div className="breadcrumb">
          <Link to="/" className="breadcrumb-link">
            Home
          </Link>
          {" > "}
          <span className="current">News</span>
        </div>

        <h1 className="news-intro__title">
          Lorem Ipsum is simply dummy text of the printing and.
        </h1>
        <p className="news-intro__text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>

        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search" />
        </div>
      </section>

      <section className="news-layout container">
        <div className="news-main-column">
          {bigNews.map((item) => (
            <div className="news-card-big" key={item.id}>
              <img
                className="news-card-big__img"
                src={item.img}
                alt={item.title}
              />
              <div className="news-meta">
                <span className="author-tag">{item.tag}</span>
                <span className="read-time">{item.readTime}</span>
              </div>
              <h2 className="news-card-big__title">{item.title}</h2>
              {item.paragraphs.map((text, i) => (
                <p className="news-card-big__text" key={i}>
                  {text}
                </p>
              ))}
            </div>
          ))}

          <div className="news-block-text">
            <h3 className="news-block-text__title">Lorem Ipsum</h3>
            <p className="news-block-text__text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>

        <div className="news-sidebar">
          {sidebarNews.map((item) => (
            <div className="sidebar-card" key={item.id}>
              <div className="sidebar-thumb">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="sidebar-content">
                <div className="news-meta">
                  <span className="author-tag">{item.tag}</span>
                  <span className="read-time">{item.readTime}</span>
                </div>
                <h4 className="sidebar-content__title">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default News;
