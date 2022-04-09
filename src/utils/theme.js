import {THEME} from "../constants";
import {getItem, setItem} from "./localStorage";

const matchTheme = () => {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return THEME.DARK;
  }

  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches
  ) {
    return THEME.LIGHT;
  }

  return THEME.LIGHT;
};

const getTheme = () => getItem("theme");

const setTheme = (theme) => setItem("theme", theme);

export {matchTheme, getTheme, setTheme};
