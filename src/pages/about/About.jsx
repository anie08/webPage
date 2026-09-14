import React from "react";
import "./About.scss";
import rec26 from "../../assets/img/Rectangle 26@3x.png";
import team1 from "../../assets/img/abotUs/Bill 1.png";
import team2 from "../../assets/img/abotUs/Claudia 1.png";
import team3 from "../../assets/img/abotUs/Beverly 1.png";
import team4 from "../../assets/img/abotUs/Avatar 1.png";
import showcaseImg from "../../assets/img/Rectangle 24.png";

const About = () => {
  const whyCards = [
    {
      id: 1,
      tag: "Lorem ipsum",
      tagColor: "purple",
      title: "Lorem Ipsum",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy, text ever since the 1500s,",
    },
    {
      id: 2,
      tag: "Lorem ipsum",
      tagColor: "brown",
      title: "Lorem Ipsum",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      id: 3,
      tag: "Lorem ipsum",
      tagColor: "green",
      title: "Lorem Ipsum",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
  ];

  const teamMembers = [
    { id: 1, name: "John peter", role: "coo", img: team1 },
    { id: 2, name: "John peter", role: "coo", img: team2 },
    { id: 3, name: "John peter", role: "coo", img: team3 },
    { id: 4, name: "John peter", role: "coo", img: team4 },
  ];

  return (
    <div className="about-page">
      {/* 1. Intro Section */}
      <section className="about-intro container">
        <div className="about-intro__content">
          <p className="routing">Home {">"} About us</p>
          <h1 className="about-intro__title">
            Lorem Ipsum is simply dummy text of the printing and.
          </h1>
          <p className="about-intro__text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <button className="about-intro__btn">Get in touch</button>
        </div>
        <div className="about-intro__image-wrapper">
          <div className="about-intro__image">
            <img src={rec26} alt="About showcase" />
          </div>
          <div className="slider-pagination">
            <span>{"<"}</span>
            <span>1 of 2</span>
            <span>{">"}</span>
          </div>
        </div>
      </section>

      <section className="why-us container">
        <h2 className="why-us__title">Why work with us</h2>
        <div className="why-us__grid">
          {whyCards.map((card) => (
            <div className="why-us__card" key={card.id}>
              <span className={`why-us__tag ${card.tagColor}`}>{card.tag}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="about-showcase ">
        <div className="about-showcase__image">
          <img src={showcaseImg} alt="Feature" />
        </div>
        <div className="about-showcase__content">
          <div className="red-dot-title">
            <span className="dot"></span>
            <p>Lorem ipsum</p>
          </div>
          <h2>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </p>
        </div>
      </section>

      <section className="our-team container">
        <h2 className="our-team__title">Our Team</h2>
        <div className="our-team__grid">
          {teamMembers.map((member) => (
            <div className="our-team__card" key={member.id}>
              <img src={member.img} alt={member.name} />
              <h4>{member.name}</h4>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
