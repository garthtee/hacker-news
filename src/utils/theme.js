import { 
  getItem,
  setItem,
} from './localStorage';

const matchTheme = () => {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }

  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    return 'light';
  }

  return 'light';
}

const getTheme = () => getItem('theme');

const setTheme = (theme) => setItem('theme', theme);

export {
  matchTheme,
  getTheme,
  setTheme,
};