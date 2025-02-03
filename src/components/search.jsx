import React from "react";
import "../styles/search.css"; 
import Icon from "../assets/search icon.png";

const Search = ({ placeholder = "Search...", onSearch }) => {
  const handleInputChange = (event) => {
    if (onSearch) {
      onSearch(event.target.value);
    }
  };

  return (
    <div className="search">
      <input
        type="text"
        className="search-input"
        placeholder={placeholder}
        onChange={handleInputChange}
      />
      <button className="search-button">
        <img src={Icon} alt="Search" className="search-icon" />
      </button>
    </div>
  
      
    
  );
};

export default Search;
