import React, {useState} from 'react';
import useTheme from '../../utils/useTheme';

const ThemeToggle = ({
  theme,
  toggleTheme
}) => (
  <button
    className="btn btn-success mt-3 mb-2"
    onClick={() => toggleTheme()}
  >
    {theme === 'dark' ? 'Switch to light' : 'Switch to dark'}
  </button>
);

export default ThemeToggle;
