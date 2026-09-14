import React from "react";
import gamepadImg from "../../assets/img/joy_stick 1.png";
import unityLogo from "../../assets/img/unity 1.png";
import cryEngineLogo from "../../assets/img/cry 1.png";
import unrealLogo from "../../assets/img/unreal 1.png";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container container">
        <div className="hero-content  ">
          <span className="subtitle">3D game Dev </span>
          <h1>Work that we produce for our clients</h1>
          <p className="hero-content_p">
            orem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.
          </p>
          <button className="details-btn">Contact us</button>
        </div>
        <div className="hero-image-container">
          <div>
            <img
              src={gamepadImg}
              alt="Game Controller"
              className="gamepad-img"
            />
          </div>
          <div>
            <img src={unityLogo} alt="Unity" className="engine-logo unity" />
          </div>
          <div>
            <img
              src={cryEngineLogo}
              alt="CryEngine"
              className="engine-logo cryengine"
            />
          </div>
          <div>
            <img
              src={unrealLogo}
              alt="Unreal Engine"
              className="engine-logo unreal"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
