import React from "react";
import styles from "../styles/Button.css"; 

const Button = ({ text = "Button", onClick }) => {
  return (
    <button className={styles.Button} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
