import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ movies, pageType }) => {
  const location = useLocation();
  return (
    <>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`} state={location}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MovieList;
