import React, { useState } from 'react';

const ThemeToggle = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <button
      className="btn btn-success mt-3 mb-2"
      onClick={() => toggleTheme()}
    >
      {isDarkTheme ? 'Switch to light' : 'Switch to dark'}
    </button>
  );
};

export default ThemeToggle;
