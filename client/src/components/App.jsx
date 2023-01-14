import React, { useState, useEffect } from 'react';
import NavBar from './NavBar.jsx';
import AddMovieForm from './AddMovieForm.jsx';
import SearchBar from './SearchBar.jsx';
import MovieList from './MovieList.jsx';
import Tab from './Tabs.jsx';

const App = ({movies}) => {

  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchFlag, setSearchFlag] = useState(false);
  const [addTitle, setAddTitle] = useState('');
  const [activeTab, setActiveTab] = useState('To Watch');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    movies.filter( (movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    ).then(setFilteredMovies);
    setSearchFlag(true);
    setSearchTerm('');
  }

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (!!addTitle) {
      movies.add(addTitle)
        .catch((err) => alert('Cannot add duplicates'))
        .then(() => {
          setAddTitle('');
        }).then(() => {
          return movies.filter((movie) =>
          activeTab === 'To Watch' ? !movie.watched : movie.watched)
        }).then(setFilteredMovies);
    } else {
      alert('Invalid input.');
    }
  }

  const handleWatchToggle = (title) => {
    movies.updateWatched(title)
      .then(() => {
        return movies.filter((movie) =>
        activeTab === 'To Watch' ? !movie.watched : movie.watched)
      }).then(setFilteredMovies);
  }

  useEffect(() => {
    if (filteredMovies.length < 1 && searchFlag)
      alert('No movie by that name found');
    setSearchFlag(false);
  }, [filteredMovies, searchFlag]);

  useEffect(() => {
    movies.filter((movie) =>
      activeTab === 'To Watch' ? !movie.watched : movie.watched
    ).then(setFilteredMovies);
  }, [activeTab]);

  useEffect(() => {
    movies.filter((movie) =>
    activeTab === 'To Watch' ? !movie.watched : movie.watched
    ).then(setFilteredMovies);
  }, []);

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