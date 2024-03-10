import React from 'react';
import { Link } from 'react-router-dom';
import Nothing from '../../images/NoImage.jpeg';

const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/';
const POSTER_SIZE = 'w500';

const MovieDetails = ({ movie, handleGetBackBtn }) => {
  return (
    movie && (
      <div>
        <button type="button" onClick={handleGetBackBtn}>
          Get Back
        </button>
        <img
          width="250"
          src={
            movie.poster_path
              ? `${BASE_IMAGE_URL}${POSTER_SIZE}${movie.poster_path}`
              : `${Nothing}`
          }
          alt="poster"
        />
        <div>
          <h1>{movie.original_title}</h1>
          <p>{movie.vote_average}</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <ul>
            {movie.genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Additional information</h3>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
        </div>
      </div>
    )
  );
};

export default MovieDetails;
