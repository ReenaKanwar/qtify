import React from "react";
import "../styles/search.css"; 

const Search = ({ placeholder = "Search...", onSearch }) => {
  const handleInputChange = (event) => {
    if (onSearch) {
      onSearch(event.target.value);
    }
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-input"
        placeholder={placeholder}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Search;
