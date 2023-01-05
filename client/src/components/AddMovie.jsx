import React from 'react';

const AddMovie = ({handleSubmit, handleChange}) => (
  <form
    className="addmovie-form"
    onSubmit={handleSubmit}>
  <input id="addmovie-text"
    placeholder="Add movie title here"
    onChange={handleChange}></input>
  <button type="submit" id="addmovie-button">➕</button>
</form>
)

export default AddMovie;