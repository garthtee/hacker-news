import React from 'react';
import ThemeToggle from '../components/Settings/ThemeToggle';
import Settings from '../components/Settings/Settings';
import GithubLink from '../components/Shared/GithubLink';

const SettingsContainer = ({
  theme, 
  toggleTheme,
}) => (
  <Settings>
    <ThemeToggle
      theme={theme}
      toggleTheme={toggleTheme}
    />
    <GithubLink />
  </Settings>
);

export default SettingsContainer;
