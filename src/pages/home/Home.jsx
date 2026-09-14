import React from "react";
import Hero from "../../components/hero/Hero.jsx";
import TrendingGames from "../../components/games/TrendingGames.jsx";
import About from "../../components/About/About.jsx";
import Projects from "../../components/projects/Projects.jsx";

const Home = () => {
  return (
    <div>
      <Hero />
      <TrendingGames />
      <About />
      <Projects />
    </div>
  );
};

export default Home;
