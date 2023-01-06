import React from 'react';

const SearchBar = ({
  searchTerm,
  onSearchTermChange,
  onSearchSubmit
}) => (
  <form
    className="search-bar"
    onSubmit={onSearchSubmit}>
    <input
      id="search-text"
      type="text"
      value={searchTerm} placeholder="Search..."
      onChange={(e) => onSearchTermChange(e.target.value)} />
    <button type="submit" id="search-button">🔍</button>
  </form>
)

export default SearchBar;