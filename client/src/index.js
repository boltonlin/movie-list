import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import MoviesDb from './data/MoviesDb.js';

ReactDOM.render(<App movies={MoviesDb} />, document.getElementById('app'));