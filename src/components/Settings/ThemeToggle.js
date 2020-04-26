import React, {useState} from 'react';
import {Dropdown} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

const ThemeToggle = ({
  theme,
  toggleTheme
}) => (
  <Dropdown.Item onClick={() => toggleTheme()}>
    {theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
  </Dropdown.Item>
);

export default ThemeToggle;
