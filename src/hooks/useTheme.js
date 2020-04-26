import React, {
  useState,
  useEffect
} from 'react';
import {matchTheme} from '../utils/theme';
import {
  getItem,
  setItem
} from '../utils/localStorage';

const useTheme = (props) => {
  const themeStored = getItem('theme');
  const [theme, _setTheme] = useState(themeStored || 'light');

  const setBodyBackground = (theme) => {
    document.body.style.backgroundColor = theme === 'dark' ? '#2a2a2a' : '#ffffff';
  }

  const setTheme = (newTheme) => {
    _setTheme(newTheme);
    setItem('theme', newTheme);
    setBodyBackground(newTheme);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  const themeListener = (event) => {
    const theme = event.matches ? "dark" : "light";
    setTheme(theme);
  };
  
  useEffect(() => {
    if (!themeStored) {
      const match = matchTheme();
      
      if (match) {
        setTheme(match);
      }
    } else {
      setBodyBackground(themeStored);
    }
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', themeListener);

    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', themeListener);
    }
  }, []);

  return {
    theme,
    toggleTheme
  };
}

export default useTheme;
