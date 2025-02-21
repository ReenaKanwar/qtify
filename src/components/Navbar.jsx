import React from "react";
import Logo from "./Logo"; 
import Search from "./search"; 
import Button from "./Button"; 
import "../styles/Navbar.css"; 

const Navbar = () => {
  const handleSearch = (query) => {
    console.log("Search Query:", query); 
  };

  const handleFeedbackClick = () => {
    alert("Redirecting to feedback form..."); 
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Logo />
      </div>
      <div className="navbar-search">
        <Search placeholder="search" onSearch={handleSearch} />
      </div>
      <div className="navbar-feedback">
        <Button text="Give Feedback" onClick={handleFeedbackClick} />
      </div>
    </nav>
  );
};

export default Navbar;
