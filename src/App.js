import React, { 
  useEffect,
  useState,
} from 'react';
import logo from './hacker.png';
import './app.scss';
import {Button, Alert} from 'react-bootstrap';
import {FaEnvelope} from 'react-icons/fa';
import axios from 'axios';
import constants from './constants';
import Search from './components/Search/Search';
import Story from './components/Story/Story';
import Spinner from './components/Spinner/Spinner';
import ScrollToTop from './components/Shared/ScrollToTop';

const STORIES_PAGE_SIZE = 20;

const App = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [topStories, setTopStories] = useState([]);
  const [stories, setStories] = useState([]);
  const [unfilteredStories, setUnfilteredStories] = useState([]);

  const getStories = () => {
    setLoading(true);
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
    <>
      <div className="App">
        <div className="feedback">
          <a href="mailto:garth@garthtoland.com?subject=Hacker news app">
            <Button variant="secondary">
              Give feedback or suggestions <span>😃</span>
              <FaEnvelope />
            </Button>
          </a>
        </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {
              loading ?
                'Loading headlines...' :
                stories.length === 0 ? 'No headlines found' :
                  `Top ${stories.length} Hacker News headlines`
            }
          </p>
          <Search
            stories={stories}
            unfilteredStories={unfilteredStories}
            handler={handler}
            setIsSearching={(value) => setIsSearching(value)}
          />
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
      </div>
      <ScrollToTop />
    </>
  );
};

export default App;
