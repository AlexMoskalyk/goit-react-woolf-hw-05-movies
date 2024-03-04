import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchForm = () => {
  const [query, setQuery] = useState('');
  const [, setSearhParams] = useSearchParams();

  const hadleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearhParams({
      search: query,
    });
    setQuery('');
  };
  return (
    <form>
      <label>
        <input
          type="search"
          name="search"
          value={query}
          onChange={hadleChange}
        />
      </label>
      <button type="submit" onClick={handleSubmit}>
        Search
      </button>
    </form>
  );
};

export default SearchForm;
