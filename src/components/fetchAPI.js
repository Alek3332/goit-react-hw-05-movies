import axios from 'axios';

const API_KEY = '7e0fc0f40a1f522dce260b9a97593bef';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
export const getTrendingMovies = async () => {
  const response = await axios.get('/trending/movie/day', {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
};

export const getMoviesById = async id => {
  console.log('getMoviesById', id);
  const response = await axios.get(`/movie/${id}`, {
    params: {
      api_key: API_KEY,
    },
  });
  console.log(response);
  return response.data;
};

export const getMovieCast = async id => {
  console.log(id);
  const response = await axios.get(`/movie/${id}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });
  console.log(response);
  return response.data.cast;
};

export const getMovieReviews = async id => {
  console.log(id);
  const response = await axios.get(`/movie/${id}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });
  console.log(response);
  return response.data.results;
};

export const getSearchQuery = async searchQuery => {
  console.log(searchQuery);
  const response = await axios.get(`/search/movie`, {
    params: {
      api_key: API_KEY,
      query: searchQuery,
    },
  });
  console.log(response);
  return response.data;
};