import React from "react";
import  "../styles/Button.css"; 

const Button = ({ text = "Button", onClick }) => {
  return (
    <button className="Button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
