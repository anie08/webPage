import React from "react";
import Header from "./components/header/Header.jsx";
import Hero from "../hero/Hero.jsx";
import TrendingGames from "../games/TrendingGames.jsx";
const Layout = () => {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <TrendingGames></TrendingGames>
    </div>
  );
};

export default Layout;
