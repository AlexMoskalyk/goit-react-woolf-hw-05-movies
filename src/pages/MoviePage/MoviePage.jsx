import { fetchMovieBySearchQuery } from 'api/Api';
import MovieList from 'components/MovieList/MovieList';
import SearchForm from 'components/SearchForm/SearchForm';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const MoviePage = () => {
  const [movies, setMovies] = useState([]);

  const [serachParams] = useSearchParams();

  useEffect(() => {
    const searchQuery = serachParams.get('search');

    const getMovieById = async () => {
      try {
        const data = await fetchMovieBySearchQuery(searchQuery);
        setMovies(data.results);
      } catch (error) {
        alert(error.message);
      }
    };

    searchQuery && getMovieById();
  }, [serachParams]);

  return (
    <>
      <SearchForm />
      <MovieList movies={movies} />
    </>
  );
};

export default MoviePage;
