import axios from 'axios';

const API_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOWI3ZTlkMjg1YWNlMzJkYjJjYmU3ZGIzZGZlYzQ2ZCIsInN1YiI6IjYxNjQ3NDA0MTU4Yzg1MDA5NmFmYTFhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FYxAKY_NWgNka9XVjuobwNFfKeXleTvPzi0Vpdin7Gs';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrandingMovies = async () => {
  const response = await axios.get('trending/movie/day?language=en-U', {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });
  return response.data;
};

export const fetchMovieById = async (id = '') => {
  const response = await axios.get(`movie/${id}`, {
    params: { language: 'en-US' },
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });
  return response.data;
};

export const fetchMovieBySearchQuery = async (query = '') => {
  const response = await axios.get(`search/movie?query=${query}`, {
    params: { include_adult: 'false', language: 'en-US', page: '1' },
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });
  return response.data;
};

export const fetchMoreInfoByMovieId = async (id = '', query = '') => {
  const response = await axios.get(`movie/${id}/${query}`, {
    params: { language: 'en-US' },
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });
  return response.data;
};
