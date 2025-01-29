import React from "react";
import headphones from "../assets/headphones.png"; 

const Hero = () => {
  return (
    <div className="hero-container">
      <img src={headphones} alt="Headphones" />
      <h1>Welcome to QTify</h1>
      <p>Your music, your way.</p>
    </div>
  );
};

export default Hero;
