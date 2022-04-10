import * as React from "react";
import {matchTheme} from "../utils/theme";
import {getItem, setItem} from "../utils/localStorage";
import {Theme} from "../constants";

const DARK_COLOUR = "#2a2a2a";
const LIGHT_COLOUR = "#ffffff";

const useTheme = () => {
  const themeStored = getItem("theme") as Theme ?? Theme.DARK;
  const [theme, _setTheme] = React.useState<Theme>(themeStored || Theme.LIGHT);

  const setBodyBackground = (theme: Theme) => {
    document.body.className = `ui-${theme}`;
    document.body.style.backgroundColor =
      theme === Theme.DARK ? DARK_COLOUR : LIGHT_COLOUR;
  };

  const setTheme = (newTheme: Theme) => {
    _setTheme(newTheme);
    setItem("theme", newTheme);
    setBodyBackground(newTheme);
  };

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme(newTheme);
  };

  React.useEffect(() => {
    if (!themeStored) {
      const match = matchTheme();

      if (match) {
        setTheme(match);
      }
    } else {
      setBodyBackground(themeStored as Theme);
    }
  }, []);

  return {
    theme,
    toggleTheme,
  };
};

export default useTheme;
