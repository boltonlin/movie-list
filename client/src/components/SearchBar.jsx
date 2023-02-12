import React from 'react';

function SearchBar({
  searchTerm,
  onSearchTermChange,
  onSearchSubmit,
}) {
  return (
    <form
      className="search-bar"
      onSubmit={onSearchSubmit}
    >
      <input
        id="search-text"
        type="text"
        value={searchTerm}
        placeholder="Search..."
        onChange={(e) => onSearchTermChange(e.target.value)}
      />
      <button type="submit" id="search-button">🔍</button>
    </form>
  );
}

export default SearchBar;
