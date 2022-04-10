import * as React from "react";
import InfiniteScroll from "react-infinite-scroller";
// @ts-ignore
import logo from "./hacker.png";
import "./app.scss";
import {Row, Col, Container} from "react-bootstrap";
import axios from "axios";
import constants from "./constants";
import Story from "./components/Story/Story";
import Spinner from "./components/Shared/Spinner";
import BottomNav from "./components/BottomNav";
import ShareLink from "./components/BottomNav/ShareLink";
import ScrollToTop from "./components/BottomNav/ScrollToTop";
import useTheme from "./hooks/useTheme";
import SettingsContainer from "./containers/SettingsContainer";
import {Theme, ToastContainer} from "react-toastify";
import {StoryType} from "./types/types";

const STANDARD_PAGE_SIZE = 10;

const renderLoading = () => (
  <div className="loader text-center" key="stories-loading">
    <Spinner />
  </div>
);

const App = () => {
  const {theme, toggleTheme} = useTheme();
  const [loading, setLoading] = React.useState(true);
  const [page, setPage] = React.useState(1);
  const [topStories, setTopStories] = React.useState([]);
  const [stories, setStories] = React.useState<StoryType[]>([]);

  const hasMoreStories = React.useMemo(
    () => stories.length > 0 && stories.length !== topStories.length,
    [stories, topStories]
  );

  const getStories = React.useCallback(() => {
    setLoading(true);
    const end = page * STANDARD_PAGE_SIZE;
    const start = end - STANDARD_PAGE_SIZE;
    const list = topStories.slice(start, end);

    list.forEach((story, i) => {
      axios
        .get(`${constants.endpoint}/v0/item/${story}.json`)
        .then((response) => {
          setStories((prev: StoryType[]) => [...prev, response.data]);

          if (i === STANDARD_PAGE_SIZE - 1) {
            setLoading(false);
          }
        });
    });
    setPage(page + 1);
  }, [topStories, page]);

  React.useEffect(() => {
    if (topStories.length === 0) {
      axios.get(`${constants.endpoint}/v0/topstories.json`).then((response) => {
        setTopStories(response.data);
      });
    } else {
      getStories();
    }
  }, [topStories]);

  return (
    <Container fluid className="app">
      <ToastContainer theme={theme as Theme} position="top-center" />
      <header className="app-header">
        <Row className="justify-content-end mt-3">
          <Col xs={3}>
            <SettingsContainer theme={theme} toggleTheme={toggleTheme} />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} sm={6} md={6} lg={4}>
            <div className="app-logo">
              <img src={logo} alt="logo" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              {loading
                ? "Loading headlines..."
                : stories.length === 0
                ? "No headlines found"
                : `Hacker News headlines`}
            </p>
          </Col>
        </Row>
      </header>
      <ul className="list-group">
        <InfiniteScroll
          loadMore={() => (loading ? null : getStories())}
          hasMore={hasMoreStories}
          loader={renderLoading()}
        >
          {stories.map((story: StoryType, i: number) => (
            <Story key={`${story.id}-${i}`} story={story} />
          ))}
        </InfiniteScroll>
      </ul>
      {/* @ts-ignore */}
      <BottomNav>
        <ShareLink />
        <ScrollToTop />
      </BottomNav>
    </Container>
  );
};

export default App;
