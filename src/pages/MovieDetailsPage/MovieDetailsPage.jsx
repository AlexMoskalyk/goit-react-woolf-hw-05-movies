import { fetchMovieById } from 'api/Api';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

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

  const handleGetBackBtn = () => {
    navigate(location.state ?? '/');
  };

  return (
    <>
      <MovieDetails handleGetBackBtn={handleGetBackBtn} movie={movie} />
      <Outlet />
    </>
  );
};

export default MovieDetailsPage;
