import { fetchMoreInfoByMovieId, fetchMovieById } from 'api/Api';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [casts, setCasts] = useState(null);
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const getMovieById = async () => {
      try {
        const data = await fetchMovieById(movieId);
        setMovie(data);
      } catch (error) {
        alert(error.message);
      }
    };

    movieId && getMovieById();
  }, [movieId]);

  const getCastById = async () => {
    try {
      const data = await fetchMoreInfoByMovieId(movieId, 'credits');
      setCasts(data);
    } catch (error) {
      alert(error.message);
    }
  };

  const getReviewsById = async () => {
    try {
      const data = await fetchMoreInfoByMovieId(movieId, 'reviews');
      setReviews(data);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <MovieDetails
        movie={movie}
        getCastById={getCastById}
        getReviewsById={getReviewsById}
      />
      <Outlet context={{ casts, reviews }} />
    </>
  );
};

export default MovieDetailsPage;
