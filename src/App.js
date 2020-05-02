import React, { 
  useEffect,
  useState,
} from 'react';
import logo from './hacker.png';
import './app.scss';
import {
  Row,
  Col,
  Container,
} from 'react-bootstrap';
import axios from 'axios';
import constants from './constants';
import Search from './components/Search/Search';
import Story from './components/Story/Story';
import Spinner from './components/Spinner/Spinner';
import useTheme from './hooks/useTheme';
import ScrollToTop from './components/Shared/ScrollToTop';
import SettingsContainer from './containers/SettingsContainer';

const App = () => {
  const {theme, toggleTheme} = useTheme();
  const [isSearching, setIsSearching] = useState(false);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [topStories, setTopStories] = useState([]);
  const [stories, setStories] = useState([]);
  const [unfilteredStories, setUnfilteredStories] = useState([]);

  const getStories = (isLargeLoad) => {
    setLoading(true);
    const STORIES_PAGE_SIZE = isLargeLoad ? 60 : 20;
    const end = page * STORIES_PAGE_SIZE;
    const start = end - STORIES_PAGE_SIZE;
    const list = topStories.slice(start, end);

    list.forEach((story, i) => {
      axios.get(`${constants.endpoint}/v0/item/${story}.json`)
        .then((response) => {
          setStories((prev) => [...prev, response.data]);
          setUnfilteredStories((prev) => [...prev, response.data]);
          
          if (i === (STORIES_PAGE_SIZE - 1)) {
            setLoading(false);
          }
        });
    });
    setPage(page + 1);
  };

  useEffect(() => {
    if (topStories.length === 0) {
      axios.get(`${constants.endpoint}/v0/topstories.json`)
        .then((response) => {
          setTopStories(response.data);
        });
    } else {
      getStories();
    }
  }, [topStories]);

  const handler = (stories) => {
    setStories(stories);
  };

  return (
    <Container fluid className="app">
      <header className="app-header">
        <Row className="justify-content-end mt-3">
          <Col xs={3}>
            <SettingsContainer
              getStories={getStories}
              loading={loading}
              theme={theme}
              toggleTheme={toggleTheme}
            />
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
              {
                loading ?
                  'Loading headlines...' :
                  stories.length === 0 ? 'No headlines found' :
                    `Top ${stories.length} Hacker News headlines`
              }
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={10} sm={6} md={3} lg={4}>
            <Search
              stories={stories}
              unfilteredStories={unfilteredStories}
              handler={handler}
              setIsSearching={(value) => setIsSearching(value)}
            />
          </Col>
        </Row>
      </header>
      <ul className="list-group">
        {
          stories.map((story, i) => (
            <Story key={`${story.id}${i}${i}`} story={story} />
          ))
        }
        {(loading && !isSearching) &&
          <div className="text-center">
            <Spinner />
          </div>
        }
        {(stories.length > 0 && stories.length !== topStories.length &&
          !loading && !isSearching) &&
          <button
            className="btn btn-success mt-3 mb-2"
            onClick={() => getStories()}
          >
            Load more
          </button>
        }
      </ul>
      <ScrollToTop />
    </Container>
  );
};

export default App;
