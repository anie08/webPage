import React from 'react';
import gamepadImg from '../../../assets/img/joy_stick 1.png';
import './Hero.scss'
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className='subtitle'>3D game Dev </span>
        <h1>Work that we produce for our clients</h1>
        <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
        <button className="details-btn">Contact us</button>
      </div>
      <div className="hero-image-container">
        <img src={gamepadImg} alt="Game Controller" className="gamepad-img" />

      </div>

    </section>
  );
};

export default Hero;