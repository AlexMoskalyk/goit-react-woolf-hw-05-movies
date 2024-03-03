import { Link } from 'react-router-dom';
import { fetchTrandingMovies } from '../../api/Api.js';
import React, { useEffect, useState } from 'react';

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
      <ul>
        {trandingMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`Movie/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
