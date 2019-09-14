import React from 'react';
import constants from '../../constants';
import './search.scss';

class Search extends React.Component {
  componentDidMount() {
    this.searchInput.focus();
  }

  handleChange = (event) => {
    const searchTerm = event.target.value;

    if (constants.previousSearch.length > searchTerm.length) {            
      this.props.handler(this.props.unfilteredStories, () => {
        this.filterStories(searchTerm);
      });
    } else {
      this.filterStories(searchTerm);
    }

    constants.previousSearch = searchTerm;
  }

  filterStories(searchTerm) {
    let updatedList = this.props.stories;

    updatedList = updatedList.filter((s) => s.title.toLowerCase().includes(searchTerm.toLowerCase()));
    this.props.handler(updatedList);
  }

  render() {
    return (
      <div className="search">
        <input className="form-control" placeholder="Search headlines.."
          onChange={this.handleChange}
          ref={(input) => {this.searchInput = input;}} 
        />
      </div>
    );
  }
}

export default Search;
