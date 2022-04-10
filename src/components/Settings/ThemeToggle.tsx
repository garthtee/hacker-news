import * as React from "react";
import {Dropdown} from "react-bootstrap";
import {Theme} from "../../constants";

type Props = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeToggle = ({theme, toggleTheme}: Props) => (
  <Dropdown.Item onClick={toggleTheme}>
    {theme === Theme.DARK ? "Switch to light theme" : "Switch to dark theme"}
  </Dropdown.Item>
);

export default ThemeToggle;
