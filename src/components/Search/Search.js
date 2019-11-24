import React, { 
  useEffect,
  useRef,
  useState,
} from 'react';

const Search = ({
  stories,
  unfilteredStories,
  handler,
  setIsSearching,
}) => {
  let searchInput = useRef();
  const [previousSearch, setPreviousSearch] = useState('');

  useEffect(() => searchInput.focus(), []);

  const filterStories = (searchTerm, storiesToSearch) => {
    const updatedList = storiesToSearch.filter((s) =>
      s.title.toLowerCase().includes(searchTerm.toLowerCase()));

    handler(updatedList);
  };

  const handleChange = (event) => {
    const searchTerm = event.target.value;

    setIsSearching(searchTerm.length > 0);

    if (previousSearch.length > searchTerm.length) {
      filterStories(searchTerm, unfilteredStories);
    } else {
      filterStories(searchTerm, stories);
    }

    setPreviousSearch(searchTerm);
  };

  return (
    <div className="search">
      <input className="form-control" placeholder="Search headlines.."
        onChange={handleChange}
        ref={(input) => {searchInput = input;}} 
      />
    </div>
  );
};

export default Search;
