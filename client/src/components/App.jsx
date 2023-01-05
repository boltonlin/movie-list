import React from 'react';
import NavBar from './NavBar.jsx';
import SearchBar from './SearchBar.jsx';
import MovieList from './MovieList.jsx';

const { useState, useEffect } = React;

const testMovies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

const App = (props) => {

  const [movies, setMovies] = useState(testMovies);
  const [search, setSearch] = useState('');

  const handleSearchChange = (event) => {
    setSearch(event.target.value === '' ?
      '' : RegExp(event.target.value, 'i'));
  }

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    let results = [];
    let found = 0;
    movies.forEach(movie => {
      let copy = Object.create(movie);
      if (!!search && movie.title.match(search)) {
        Object.assign(copy, {className: 'highlight'});
        found++;
      } else
        Object.assign(copy, {className: ''});
      results.push(copy);
    });
    if (!found && !!search) {
      alert('No movie by that name found!');
    }
    setMovies(results);
  }

  return (
    <>
      <NavBar />
      <SearchBar
        handleChange={handleSearchChange}
        handleSubmit={handleSearchSubmit} />
      <MovieList movies={movies} />
    </>
  );
}

export default App;