// import axios from 'axios';

import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { SharedLayout } from './sharedLayout/SharedLayout';

const Home = lazy(() => import('./home/Home'));
const Movies = lazy(() => import('./movies/Movies'));
const MovieDetails = lazy(() => import('./movieDetails/MovieDetails'));
const CastMovie = lazy(() => import('../page/castMovie/CastMovie'));
const ReviewsMovie = lazy(() => import('../page/reviewsMovie/ReviewsMovie'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<CastMovie />} />
            <Route path="reviews" element={<ReviewsMovie />} />
          </Route>
          <Route path="*" element={<p>oopps</p>} />
        </Route>
      </Routes>
    </div>
  );
};