import * as React from "react";
import {matchTheme} from "../utils/theme";
import {getItem, setItem} from "../utils/localStorage";
import {THEME} from "../constants";

const DARK_COLOUR = "#2a2a2a";
const LIGHT_COLOUR = "#ffffff";

const useTheme = () => {
  const themeStored = getItem("theme");
  const [theme, _setTheme] = React.useState(themeStored || THEME.LIGHT);

  const setBodyBackground = (theme) => {
    document.body.className = `ui-${theme}`;
    document.body.style.backgroundColor =
      theme === THEME.DARK ? DARK_COLOUR : LIGHT_COLOUR;
  };

  const setTheme = (newTheme) => {
    _setTheme(newTheme);
    setItem("theme", newTheme);
    setBodyBackground(newTheme);
  };

  const toggleTheme = () => {
    const newTheme = theme === THEME.DARK ? THEME.LIGHT : THEME.DARK;
    setTheme(newTheme);
  };

  React.useEffect(() => {
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
};

export default useTheme;
