import MainLayout from 'layouts/MainLayout';
import HomePage from 'pages/HomePage/HomePage';
import MoviePage from 'pages/MoviePage/MoviePage';
import { Route, Routes } from 'react-router-dom';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import MovieDetailsPage from 'pages/MovieDetailsPage/MovieDetailsPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/movie" element={<MoviePage />} />
          <Route path="/movie/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
