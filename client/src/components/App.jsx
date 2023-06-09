import React, { useState, useEffect } from 'react';
import NavBar from './NavBar.jsx';
import AddMovieForm from './AddMovieForm.jsx';
import SearchBar from './SearchBar.jsx';
import MovieList from './MovieList.jsx';
import Tab from './Tabs.jsx';

function App({
  movies,
  tmdb,
}) {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchFlag, setSearchFlag] = useState(false);
  const [addTitle, setAddTitle] = useState('');
  const [activeTab, setActiveTab] = useState('To Watch');

  const basedOffTab = (movie) => (activeTab === 'To Watch' ? !movie.watched : movie.watched);

  const setFilteredMoviesBasedOffTab = () => movies.filter(basedOffTab)
    .then(setFilteredMovies);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.length) {
      movies.filter((movie) => movie.title.toLowerCase().includes(searchTerm.toLowerCase()))
        .then(setFilteredMovies)
        .then(() => {
          setSearchFlag(true);
          setSearchTerm('');
        });
    } else {
      setFilteredMoviesBasedOffTab();
    }
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (addTitle) {
      movies.add(addTitle)
        .catch(() => alert('Cannot add duplicates'))
        .then(() => setAddTitle(''))
        .then(setFilteredMoviesBasedOffTab);
    } else {
      alert('Invalid input.');
    }
  };

  const handleWatchToggle = (title) => {
    movies.updateWatched(title)
      .then(setFilteredMoviesBasedOffTab);
  };

  useEffect(() => {
    if (filteredMovies.length < 1 && searchFlag) alert('No movie by that name found');
    setSearchFlag(false);
  }, [filteredMovies, searchFlag]);

  useEffect(() => {
    setFilteredMoviesBasedOffTab();
  }, [activeTab]);

  useEffect(() => {
    setFilteredMoviesBasedOffTab();
  }, []);

  return (
    <>
      <NavBar />
      <AddMovieForm
        addTitle={addTitle}
        onAddChange={setAddTitle}
        onAddSubmit={handleAddSubmit}
      />
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
        onSearchSubmit={handleSearchSubmit}
      />
      <>
        <div className="tabs">
          <Tab
            text="Watched"
            isActive={activeTab === 'Watched'}
            handleClick={setActiveTab}
          />
          <Tab
            text="To Watch"
            isActive={activeTab === 'To Watch'}
            handleClick={setActiveTab}
          />
        </div>
        { filteredMovies.length
          ? (
            <MovieList
              movies={filteredMovies}
              onToggle={handleWatchToggle}
              tmdb={tmdb}
            />
          )
          : null }
      </>
    </>
  );
}

export default App;
