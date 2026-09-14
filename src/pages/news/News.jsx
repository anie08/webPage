import React from "react";
import "./News.scss";
import rec24 from "../../assets/img/Rectangle 24.png";
import rec23 from "../../assets/img/Rectangle 23.png";
import { FaSearch } from "react-icons/fa";

const News = () => {
  const sidebarNews = [
    {
      id: 1,
      tag: "John smoath",
      readTime: "5min",
      title: "Lorem Ipsum is simply dummy text dummy text ?",
    },
    {
      id: 2,
      tag: "John smoath",
      readTime: "5min",
      title: "Lorem Ipsum is simply dummy text dummy text ?",
    },
    {
      id: 3,
      tag: "John smoath",
      readTime: "5min",
      title: "Lorem Ipsum is simply dummy text dummy text ?",
    },
    {
      id: 4,
      tag: "John smoath",
      readTime: "5min",
      title: "Lorem Ipsum is simply dummy text dummy text ?",
    },
    {
      id: 5,
      tag: "John smoath",
      readTime: "5min",
      title: "Lorem Ipsum is simply dummy text dummy text ?",
    },
    {
      id: 6,
      tag: "John smoath",
      readTime: "5min",
      title: "Lorem Ipsum is simply dummy text dummy text ?",
    },
    {
      id: 7,
      tag: "John smoath",
      readTime: "5min",
      title: "Lorem Ipsum is simply dummy text dummy text ?",
    },
  ];

  return (
    <div className="news-page">
      {/* Intro & Search */}
      <section className="news-intro container">
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
        {/* Left Big Articles */}
        <div className="news-main-column">
          <div className="news-card-big">
            <img src={rec24} alt="news" />
            <div className="news-meta">
              <span className="author-tag">John smoath</span>
              <span className="read-time">5min</span>
            </div>
            <h2>Lorem Ipsum is simply dummy text dummy text</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          <div className="news-card-big">
            <img src={rec23} alt="news" />
            <div className="news-meta">
              <span className="author-tag">John smoath</span>
              <span className="read-time">5min</span>
            </div>
            <h2>Lorem Ipsum is simply dummy text dummy text</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries.
            </p>
          </div>

          <div className="news-block-text">
            <h3>Lorem Ipsum</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>

        <div className="news-sidebar">
          {sidebarNews.map((item) => (
            <div className="sidebar-card" key={item.id}>
              <div className="sidebar-thumb"></div>
              <div className="sidebar-content">
                <div className="news-meta">
                  <span className="author-tag">John smoath</span>
                  <span className="read-time">{item.readTime}</span>
                </div>
                <h4>{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="stay-loop container">
        <div className="stay-loop__box">
          <div className="stay-loop__text">
            <h3>Stay in the loop</h3>
            <p>
              Subscribe to receive the latest news and updates about TDA. We
              promise not to spam you!
            </p>
          </div>
          <div className="stay-loop__form">
            <input type="email" placeholder="Enter your email" />
            <button>Continue</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
