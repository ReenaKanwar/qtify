import React from "react";
import headphones from "../assets/vibrating-headphone 1.png";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      
      <h1>100 Thousand Songs, ad-free <br></br>
      Over thousands podcast episodes</h1>
      
      
      <img src= {headphones} alt="Headphones" />
    </div>
  );
};

export default Hero;
