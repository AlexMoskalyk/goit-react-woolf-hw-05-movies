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
        <Route path="/goit-react-woolf-hw-05-movies" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="Movie" element={<MoviePage />} />
          <Route path="Movie/:movieId" element={<MovieDetailsPage />}>
            <Route path="Cast" element={<Cast />} />
            <Route path="Reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
