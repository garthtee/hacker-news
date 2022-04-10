import * as React from "react";
import {Dropdown} from "react-bootstrap";
import ThemeToggle from "../components/Settings/ThemeToggle";
import Settings from "../components/Settings/Settings";
import GithubLink from "../components/Shared/GithubLink";
import {VERSION} from "../constants";

const SettingsContainer = ({theme, toggleTheme}) => (
  <Settings>
    <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    <GithubLink />
    <Dropdown.Divider />
    <Dropdown.Item disabled>{VERSION}</Dropdown.Item>
  </Settings>
);

export default SettingsContainer;
