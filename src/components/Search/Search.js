import React, { 
  useRef,
  useState,
} from 'react';
import {FaTimesCircle} from 'react-icons/fa';

const Search = ({
  stories,
  unfilteredStories,
  handler,
  setIsSearching,
}) => {
  let searchInput = useRef();
  const [previousSearch, setPreviousSearch] = useState('');
  const [stateIsSearching, setStateIsSearching] = useState(false);

  const filterStories = (searchTerm, storiesToSearch) => {
    if (searchTerm === '') {
      handler(unfilteredStories);

      return;
    }

    const updatedList = storiesToSearch.filter((s) =>
      s.title.toLowerCase().includes(searchTerm.toLowerCase()));

    handler(updatedList);
  };

  const handleChange = (event) => {
    const searchTerm = event.target.value;

    setIsSearching(searchTerm.length > 0);
    setStateIsSearching(searchTerm.length > 0);

    if (previousSearch.length > searchTerm.length) {
      filterStories(searchTerm, unfilteredStories);
    } else {
      filterStories(searchTerm, stories);
    }

    setPreviousSearch(searchTerm);
  };

  const clearSearch = () => {
    searchInput.value = '';
    filterStories('', unfilteredStories);
    setStateIsSearching(false);
    setIsSearching(false);
  };

  return (
    <div className="search">
      <div className="input-group">
        <input className="form-control" placeholder="Search headlines..."
          onChange={handleChange}
          ref={(input) => {searchInput = input;}} 
        />
        {stateIsSearching &&
          <FaTimesCircle
            className="clear-button align-self-center"
            data-toggle="tooltip"
            title="Clear search"
            onClick={() => clearSearch()}
            style={{
              fontSize: '20px',
              marginLeft: '5px',
            }}
          />
        }
      </div>
    </div>
  );
};

export default Search;
