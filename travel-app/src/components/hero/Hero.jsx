import React from "react";
import "./hero.css";

const Hero = ({ hero, img, title, text, btn, btnclass }) => {
  return (
    <div className={hero}>
      <img alt="hero-img" src={img} />
      <div className="htext">
        <h1>{title}</h1>
        <p>{text}</p>
        <button className={btnclass}>{btn}</button>
      </div>
    </div>
  );
};

export default Hero;
