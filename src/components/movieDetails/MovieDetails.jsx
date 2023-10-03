import AdditionalInfo from 'components/additionalInfo/AdditionalInfo';
import ButtonGoBack from 'components/ButtonGoBack';
import { getMoviesById } from 'components/fetchAPI';
import MovieInfo from 'components/movieInfo/MovieInfo';
import { useEffect } from 'react';
import { Suspense, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [movie, setMovie] = useState();
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    console.log('moviesDetals', movieId);
    getMoviesById(movieId)
      .then(data => {
        setMovie(data);
      })
      .catch(console.log);
  }, [movieId]);

  if (!movie) {
    return;
  }
  return (
    <>
      <ButtonGoBack backLinkHref={backLinkHref} />
      <MovieInfo movie={movie} />
      <AdditionalInfo location={backLinkHref} />
      <Suspense fallback={<div>Loading page ...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;