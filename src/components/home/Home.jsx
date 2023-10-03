// import axios from 'axios';
import { getTrendingMovies } from 'components/fetchAPI';
import MoviesList from 'components/moviesList/MoviesList';

import { useState } from 'react';
import { useEffect } from 'react';

// axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const Home = () => {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    getTrendingMovies()
      .then(data => {
        console.log(data);
        setMovies(data.results);
      })
      .catch(console.log);
  }, []);
  console.log(movies);
  if (!movies) {
    return;
  }
  return (
    <>
      <MoviesList movies={movies} />
    </>
  );
};

export default Home;