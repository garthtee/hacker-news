import React, {useState} from 'react';
import {Dropdown} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

const GithubLink = () => (
  <Dropdown.Item
    rel="noopener noreferrer"
    target="_blank"
    href="https://github.com/garthtee/hacker-news"
  >
    View on Github
  </Dropdown.Item>
);

export default GithubLink;
