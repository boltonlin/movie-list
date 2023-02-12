import React from 'react';

function Tab({
  text,
  isActive,
  handleClick,
}) {
  return (
    <button
      className={`tablinks${isActive ? ' active' : ''}`}
      onClick={() => handleClick(text)}
      type="button"
    >
      {text}
    </button>
  );
}

export default Tab;
