import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Movies from './data/Movies.js';

ReactDOM.render(<App movies={Movies} />, document.getElementById('app'));