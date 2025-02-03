import React from "react";
import headphones from "../assets/headphones.png";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <img src={headphones} alt="Headphones" />
      
    </div>
  );
};

export default Hero;
