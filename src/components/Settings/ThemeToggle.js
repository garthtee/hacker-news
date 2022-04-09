import * as React from "react";
import {Dropdown} from "react-bootstrap";
import {THEME} from "../../constants";

const ThemeToggle = ({theme, toggleTheme}) => (
  <Dropdown.Item onClick={() => toggleTheme()}>
    {theme === THEME.DARK ? "Switch to light theme" : "Switch to dark theme"}
  </Dropdown.Item>
);

export default ThemeToggle;
