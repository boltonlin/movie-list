import React, { useState, useEffect } from 'react';
import NavBar from './NavBar.jsx';
import AddMovieForm from './AddMovieForm.jsx';
import SearchBar from './SearchBar.jsx';
import MovieList from './MovieList.jsx';
import Tab from './Tabs.jsx';

const App = ({movies}) => {

  const [filteredMovies, setFilteredMovies] = useState(movies.get());
  const [searchTerm, setSearchTerm] = useState('');
  const [searchFlag, setSearchFlag] = useState(false);
  const [addTitle, setAddTitle] = useState('');
  const [activeTab, setActiveTab] = useState('To Watch');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setFilteredMovies(
      movies.filter( (movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())));
    setSearchFlag(true);
    setSearchTerm('');
  }

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (!!addTitle) {
      if (!movies.add(addTitle))
        alert('Cannot add duplicates');
    } else
      alert('Invalid input');
    setAddTitle('');
    setFilteredMovies(movies.get());
  }

  const handleWatchToggle = (title) => {
    movies.extend(title, movies.get(title).watched ? {watched: false} : {watched: true});
    setFilteredMovies(
      movies.filter( (movie) => activeTab === 'To Watch' ? !movie.watched : movie.watched));
  }

  useEffect(() => {
    if (filteredMovies.length < 1 && searchFlag)
      alert('No movie by that name found');
    setSearchFlag(false);
  }, [filteredMovies, searchFlag]);

  useEffect(() => {
    //setfilteredmovies to only include watched/unwatched
    setFilteredMovies(
      movies.filter( (movie) => activeTab === 'To Watch' ? !movie.watched : movie.watched));
  }, [activeTab]);

  return (
    <>
    < NavBar />
    < AddMovieForm
      addTitle={addTitle}
      onAddChange={setAddTitle}
      onAddSubmit={handleAddSubmit} />
    < SearchBar
      searchTerm={searchTerm}
      onSearchTermChange={setSearchTerm}
      onSearchSubmit={handleSearchSubmit} />
      <>
      <div className="tabs">
        < Tab
          text="Watched"
          isActive={activeTab === 'Watched'}
          handleClick={setActiveTab} />
        < Tab
          text="To Watch"
          isActive={activeTab === 'To Watch'}
          handleClick={setActiveTab} />
      </div>
      { filteredMovies.length ?
        < MovieList
          movies={filteredMovies}
          onToggle={handleWatchToggle} />
        : <></> }
      </>
    </>
  );
}

export default App;