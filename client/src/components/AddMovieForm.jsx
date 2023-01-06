import React from 'react';

const AddMovieForm = ({
  addTitle,
  onAddChange,
  onAddSubmit
}) => (
  <form
    className="addmovie-form"
    onSubmit={onAddSubmit}>
  <input
    id="addmovie-text"
    type="text"
    value={addTitle} placeholder="Add movie title here"
    onChange={(e) => onAddChange(e.target.value)}></input>
  <button type="submit" id="addmovie-button">➕</button>
  </form>
);


export default AddMovieForm;