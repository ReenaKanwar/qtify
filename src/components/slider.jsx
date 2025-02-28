import React, { useRef } from "react";
import { Card, CardContent, CardMedia, Chip, IconButton, Typography } from "@mui/material";
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import "../styles/slider.css";

const Slider = ({ albums }) => {
  const sliderRef = useRef(null);
console.log (albums)
  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 200; 
      sliderRef.current.scrollBy({
        left: direction === "next" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="slider-container">
      <IconButton onClick={() => scroll("prev")} sx={{
    backgroundColor: "#00ff00",
    left: "10px",
    "&:hover": {
      backgroundColor: "green", 
    }
  }} >
        <KeyboardArrowLeftRoundedIcon sx={{color:"white"}} />
        
      </IconButton>

      <div className="slider" ref={sliderRef}>
        {albums.map((album) => (
         <div>
         <Card className="album-card">
           <CardMedia component="img" image={album.image} alt={album.title} sx={{width:"100%" , height:"75%"}} />
           <CardContent sx={{textAlign:"left"}}>
             <Chip label={`${album.follows} Follows`} sx={{backgroundColor:"black", color:"white", }}/>
           </CardContent>
         </Card>
         <Typography variant="h6"  sx={{fontSize:"16px"}}>{album.title}</Typography>
       </div>
        ))}
      </div>

      <IconButton onClick={() => scroll("next")} sx={{
    backgroundColor: "#00ff00",
    right: "10px",
    "&:hover": {
      backgroundColor: "green", 
    }
  }} >
      <KeyboardArrowRightRoundedIcon sx={{color:"white"}} />
      </IconButton>
    </div>
  );
};

export default Slider;
