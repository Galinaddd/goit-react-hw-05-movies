import axios from 'axios';

const KEY = 'cc007006eb9f47c2d0b09069b6e665b4';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchTraiding = async () => {
  const responce = await axios.get(
    `${BASE_URL}/trending/all/day?api_key=${KEY}`
  );
  return responce.data.results;
};

export const fetchSearchMovie = async query => {
  const responce = await axios.get(
    `${BASE_URL}/search/movie?api_key=${KEY}&query=${query}`
  );
  return responce.data.results;
};

export const fetchMovieDetails = async id => {
  const responce = await axios.get(`${BASE_URL}/movie/${id}?api_key=${KEY}`);

  return responce.data;
};

export const fetchMovieCredits = async id => {
  const responce = await axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${KEY}`
  );
  return responce.data;
};

export const fetchMovieReviews = async id => {
  const responce = await axios.get(
    `${BASE_URL}/movie/${id}/reviews?api_key=${KEY}`
  );
  return responce.data;
};
