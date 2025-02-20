import React from "react";
import headphones from "../assets/vibrating-headphone 1.png";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands of podcast episodes</h1>
      </div>
      <img src={headphones} alt="Headphones" className="hero-image" />
    </div>
  );
};

export default Hero;
