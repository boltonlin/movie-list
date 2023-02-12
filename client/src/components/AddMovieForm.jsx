import React from 'react';

function AddMovieForm({
  addTitle,
  onAddChange,
  onAddSubmit,
}) {
  return (
    <form
      className="addmovie-form"
      onSubmit={onAddSubmit}
    >
      <input
        id="addmovie-text"
        type="text"
        value={addTitle}
        placeholder="Add movie title here"
        onChange={(e) => onAddChange(e.target.value)}
      />
      <button type="submit" id="addmovie-button">➕</button>
    </form>
  );
}

export default AddMovieForm;
