import React from "react";
import { nanoid } from "nanoid";
import "./Projects.scss";
import project1 from "../../assets/img/recentProjects/Rectangle 15.png";
import project2 from "../../assets/img/recentProjects/Rectangle 16.png";
import project3 from "../../assets/img/recentProjects/Rectangle 17.png";
import project4 from "../../assets/img/recentProjects/Rectangle 18.png";
import project5 from "../../assets/img/recentProjects/Rectangle 19.png";
import project6 from "../../assets/img/recentProjects/Rectangle 20.png";

const projectsData = [
  {
    id: nanoid(),
    img: project1,
    className: "projects_item--1",
  },
  {
    id: nanoid(),
    img: project2,
    className: "projects_item--1",
  },
  {
    id: nanoid(),
    img: project3,
    className: "projects_item--2",
  },
  {
    id: nanoid(),
    img: project5,
    className: "projects_item--3",
  },
  {
    id: nanoid(),
    img: project4,
    className: "projects_item--4",
  },
  {
    id: nanoid(),
    img: project6,
    className: "projects_item--5",
  },
];

const Projects = () => {
  return (
    <section className="projects">
      <div className="projects_container container">
        <h2 className="projects_title">Our Recent Projects</h2>
        <p className="projects_description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>

        <div className="projects_grid">
          {projectsData.map((elm) => (
            <div className={`${elm.className} projects_item`} key={elm.id}>
              <img src={elm.img} alt="project" />
            </div>
          ))}
        </div>

        <button className="projects_btn">SEE ALL</button>
      </div>
    </section>
  );
};

export default Projects;
