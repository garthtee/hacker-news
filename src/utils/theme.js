import { 
  getItem,
  setItem
} from './localStorage';

const initTheme = () => {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    const theme = event.matches ? "#ffffff" : "#2a2a2e";
    document.body.style.backgroundColor = theme;
  });
};

const matchTheme = () => {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.style.backgroundColor = '#2a2a2a';
    return 'dark';
  }

  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    document.body.style.backgroundColor = '#ffffff';
    return 'light';
  }

  return null;
}

const getTheme = () => getItem('theme');

const setTheme = (theme) => setItem('theme', theme);

export {
  initTheme,
  matchTheme,
  getTheme,
  setTheme
};