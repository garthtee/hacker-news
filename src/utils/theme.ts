import {Theme} from "../constants";
import {getItem, setItem} from "./localStorage";

const matchTheme = () => {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return Theme.DARK;
  }

  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches
  ) {
    return Theme.LIGHT;
  }

  return Theme.LIGHT;
};

const getTheme = () => (getItem("theme") as Theme) || Theme.DARK;

const setTheme = (theme: Theme) => setItem("theme", theme);

export {matchTheme, getTheme, setTheme};
