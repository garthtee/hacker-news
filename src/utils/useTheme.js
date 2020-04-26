import React, {
  useState,
  useEffect
} from 'react';
import {matchTheme} from './theme';
import {
  getItem,
  setItem
} from './localStorage';

const useTheme = (props) => {
  const themeStored = getItem('theme');
  const [theme, _setTheme] = useState(themeStored || 'light');

  const setTheme = (newTheme) => {
    _setTheme(newTheme);
    setItem('theme', newTheme);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    document.body.style.backgroundColor = newTheme === 'dark' ? '#2a2a2a' : '#ffffff';
    setTheme(newTheme);
  };
  
  useEffect(() => {
    const match = matchTheme();
    
    if (match) {
      setTheme(match);
    }

    console.log('Found a match! ', match);
  }, []);

  return {
    theme,
    toggleTheme
  };
}

export default useTheme;
