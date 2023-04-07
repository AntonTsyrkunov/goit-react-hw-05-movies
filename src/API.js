import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'b548e18956509bbab355422895e2e3b8';

export const getTrending = () => {
  const data = axios.get(`${BASE_URL}/trending/all/week?api_key=${API_KEY}`);
  return data;
};

export const getSearchMovie = query => {
  const data = axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}`
  );
  return data;
};

export const getFilmDetails = movieId => {
  const data = axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

export const getTheCast = movieId => {
  const data = axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

export const getReview = movieId => {
  const data = axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
  return data;
};
