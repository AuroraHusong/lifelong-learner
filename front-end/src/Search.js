import React, { useState } from 'react';
import coursesData from './api/api.js';
import SearchResults from './SearchResults';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent the default form submission
    // Perform the search here
    const results = searchCourses(searchQuery);
    setSearchResults(results);
  };

  const searchCourses = (query) => {
    query = query.toLowerCase();
    // Filter courses that match the search query
    const results = coursesData.reduce((acc, category) => {
      const filteredCourses = category.courses.filter((course) =>
        course.title.toLowerCase().includes(query)
      );
      return acc.concat(filteredCourses);
    }, []);
    return results;
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for courses..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <SearchResults results={searchResults} />
    </div>
  );
}

export default Search;

