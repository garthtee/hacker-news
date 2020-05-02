import React from 'react';
import {Dropdown} from 'react-bootstrap';

const ThemeToggle = ({
  theme,
  toggleTheme,
}) => (
  <Dropdown.Item onClick={() => toggleTheme()}>
    {theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
  </Dropdown.Item>
);

export default ThemeToggle;
