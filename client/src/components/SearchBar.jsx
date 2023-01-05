import React from 'react';

const SearchBar = ({handleChange, handleSubmit}) => (
  <form
    className="searchbar"
    onSubmit={handleSubmit}>
    <input id="search-text"
      placeholder="Search..."
      onChange={handleChange}></input>
    <button type="submit" id="search-button">🔍</button>
  </form>
)

export default SearchBar;