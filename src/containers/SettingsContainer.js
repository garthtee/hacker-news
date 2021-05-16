import React from "react";
import {Dropdown} from "react-bootstrap";
import ThemeToggle from "../components/Settings/ThemeToggle";
import Settings from "../components/Settings/Settings";
import GithubLink from "../components/Shared/GithubLink";

const SettingsContainer = ({theme, toggleTheme}) => {
  const version = process?.env?.VERSION ? `v${process?.env?.VERSION}` : "";

  return (
    <Settings>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <GithubLink />
      <Dropdown.Divider />
      <Dropdown.Item disabled>{version}</Dropdown.Item>
    </Settings>
  );
};

export default SettingsContainer;
