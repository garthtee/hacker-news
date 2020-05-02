import {
  useState,
  useEffect,
} from 'react';
import {matchTheme} from '../utils/theme';
import {
  getItem,
  setItem,
} from '../utils/localStorage';

const useTheme = () => {
  const themeStored = getItem('theme');
  const [theme, _setTheme] = useState(themeStored || 'light');

  const setBodyBackground = (theme) => {
    document.body.className = `ui-${theme}`;
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

  useEffect(() => {
    if (!themeStored) {
      const match = matchTheme();
      
      if (match) {
        setTheme(match);
      }
    } else {
      setBodyBackground(themeStored);
    }
  }, []);

  return {
    theme,
    toggleTheme,
  };
}

export default useTheme;
