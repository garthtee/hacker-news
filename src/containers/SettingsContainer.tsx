import {Dropdown} from "react-bootstrap";
import ThemeToggle from "../components/Settings/ThemeToggle";
import Settings from "../components/Settings/Settings";
import GithubLink from "../components/Shared/GithubLink";
import {Theme, VERSION} from "../constants";

type Props = {
  theme: Theme;
  toggleTheme: () => void;
};

const SettingsContainer = ({theme, toggleTheme}: Props) => (
  // @ts-ignore
  <Settings>
    <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    <GithubLink />
    <Dropdown.Divider />
    <Dropdown.Item disabled>{VERSION}</Dropdown.Item>
  </Settings>
);

export default SettingsContainer;
