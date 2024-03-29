import * as React from "react";
import {Dropdown} from "react-bootstrap";
import {FaCog} from "react-icons/fa";

const Settings: React.FC = ({children}: any) => (
  <Dropdown drop="down">
    <Dropdown.Toggle variant="secondary">
      <FaCog />
    </Dropdown.Toggle>

    <Dropdown.Menu>{children}</Dropdown.Menu>
  </Dropdown>
);

export default Settings;
