import React from 'react';
import {Dropdown} from 'react-bootstrap';
import {FaCog} from 'react-icons/fa';

const Settings = ({children}) => (
  <Dropdown>
    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
      <FaCog />
    </Dropdown.Toggle>

    <Dropdown.Menu>
      {children}
    </Dropdown.Menu>
  </Dropdown>
);

export default Settings;
