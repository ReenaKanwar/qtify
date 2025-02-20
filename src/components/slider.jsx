import React, { useRef } from "react";
import { IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import "../styles/Slider.css";

const Slider = ({ albums }) => {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 200; // Adjust scrolling distance
      sliderRef.current.scrollBy({
        left: direction === "next" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="slider-container">
      <IconButton className="slider-btn left" onClick={() => scroll("prev")}>
        <ArrowBackIos />
      </IconButton>

      <div className="slider" ref={sliderRef}>
        {albums.map((album) => (
          <div key={album.id} className="slide">
            <img src={album.image} alt={album.title} className="slide-image" />
            <p className="slide-title">{album.title}</p>
          </div>
        ))}
      </div>

      <IconButton className="slider-btn right" onClick={() => scroll("next")}>
        <ArrowForwardIos />
      </IconButton>
    </div>
  );
};

export default Slider;
