import React from 'react';

const Tab = ({
  text,
  isActive,
  handleClick
}) => (
  <button
    className={'tablinks' + (isActive ? ' active' : '')}
    onClick={() => handleClick(text)}>{text}</button>
)

export default Tab;