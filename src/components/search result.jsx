import React from "react";
import PropTypes from "prop-types";
import "../styles/search result.css"; 
const SearchResults = ({ results }) => {
  return (
    <div className="search-results-container">
      {results.length > 0 ? (
        <ul className="search-results-list">
          {results.map((result, index) => (
            <li key={index} className="search-result-item">
              <h3>{result.title}</h3>
              <p>{result.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-results-text">No results found. Try searching for something else!</p>
      )}
    </div>
  );
};


SearchResults.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
};

export default SearchResults;
