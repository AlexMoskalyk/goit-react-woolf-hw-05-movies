import { fetchTrandingMovies } from '../../api/Api.js';
import React, { useEffect, useState } from 'react';
import MovieList from 'components/MovieList/MovieList.jsx';

const HomePage = () => {
  const [trandingMovies, setTrandingMovies] = useState([]);

  useEffect(() => {
    const getTrandingMovies = async () => {
      try {
        const { results } = await fetchTrandingMovies();
        setTrandingMovies(results);
      } catch (error) {
        alert(error.message);
      }
    };
    getTrandingMovies();
  }, []);

  return (
    <div>
      <h1>Tranding Today</h1>

      <MovieList movies={trandingMovies} pageType={'Home'} />
    </div>
  );
};

export default HomePage;
