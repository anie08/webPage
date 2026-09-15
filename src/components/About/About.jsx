import React from "react";
import { nanoid } from "nanoid";
import {
  FaMobileAlt,
  FaDesktop,
  FaPlaystation,
  FaVrCardboard,
} from "react-icons/fa";
import { GiCube } from "react-icons/gi";
import { TbAugmentedReality } from "react-icons/tb";
import { HiArrowRight } from "react-icons/hi";
import "./About.scss";

const servicesData = [
  {
    id: nanoid(),
    icon: <FaMobileAlt />,
    title: "Mobile Game Development",
  },
  {
    id: nanoid(),
    icon: <FaDesktop />,
    title: "PC Game Development",
  },
  {
    id: nanoid(),
    icon: <FaPlaystation />,
    title: "PS4 Game Development",
  },
  {
    id: nanoid(),
    icon: <FaVrCardboard />,
    title: "AR/VR Solutions",
  },
  {
    id: nanoid(),
    icon: <TbAugmentedReality />,
    title: "AR/ VR design",
  },
  {
    id: nanoid(),
    icon: <GiCube />,
    title: "3D Modelings",
  },
];

const About = () => {
  return (
    <section className="about">
      <div className="about_container ">
        <h3 className="about_title">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </h3>
        <p className="about_description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
        <div className="info">
          {servicesData.map((elm) => (
            <div className="services_card" key={elm.id}>
              <div className="icon-circle">{elm.icon}</div>
              <h4>{elm.title}</h4>
              <span className="arrow">
                <HiArrowRight />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
