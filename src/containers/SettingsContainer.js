import React from 'react';
import {Dropdown } from 'react-bootstrap';
import ThemeToggle from '../components/Settings/ThemeToggle';
import Settings from '../components/Settings/Settings';
import GithubLink from '../components/Shared/GithubLink';

const SettingsContainer = ({
  loading,
  getStories,
  theme, 
  toggleTheme,
}) => (
  <Settings>
    <ThemeToggle
      theme={theme}
      toggleTheme={toggleTheme}
    />
    <Dropdown.Item
      disabled={loading}
      onClick={() => getStories(true)}
    >
      Load a bunch (+60)
    </Dropdown.Item>
    <GithubLink />
  </Settings>
);

export default SettingsContainer;
