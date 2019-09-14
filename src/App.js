import React, { Component } from 'react';
import logo from './hacker.png';
import './app.scss';
import axios from 'axios';
import constants from './constants';
import Search from './components/Search/Search';
import Story from './components/Story/Story';
import Spinner from './components/Spinner/Spinner';

class App extends Component {
  state = {
    loading: true,
    stories: [],
    unfilteredStories: [],
  }

  componentWillMount() {
    axios.get(`${constants.endpoint}/v0/topstories.json`)
      .then((response) => {
        const list = response.data.slice(0, 20);

        list.forEach((story) => {
          axios.get(`${constants.endpoint}/v0/item/${story}.json`)
            .then((response) => {
              this.setState((prevState) => ({
                loading: false,
                stories: [...prevState.stories, response.data],
                unfilteredStories: [...prevState.unfilteredStories, response.data],
              }));
            });
        });
      });
  }

  handler = (stories, promise) => {
    this.setState({
      stories,
    }, promise);
  }

  render() {
    const {
      loading,
    } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {
              loading ?
                'Loading stories..' :
                this.state.stories.length === 0 ? 'No stories found' :
                  `Top ${this.state.stories.length} Hacker News headlines`
            }
          </p>
          <Search 
            stories={this.state.stories}
            unfilteredStories={this.state.unfilteredStories}
            handler={this.handler}
          />
          {loading ?
            <Spinner /> :
            <ul className="list-group">
              {
                this.state.stories.map((story, i) => (
                  <Story key={story.id} story={story} />
                ))
              }
            </ul>
          }
        </header>
      </div>
    );
  }
}

export default App;
