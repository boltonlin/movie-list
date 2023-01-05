import React from 'react';
import NavBar from './NavBar.jsx';
import MovieList from './MovieList.jsx';

const { useState } = React;

const testMovies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

const App = (props) => {
  const [movies, setMovies] = useState(testMovies);
  return (
    <>
      < NavBar />
      < MovieList movies={movies} />
    </>
  );
}

export default App;