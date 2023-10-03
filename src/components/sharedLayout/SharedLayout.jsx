import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <header>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="movies">Movies</Link>
        </nav>
      </div>
      <Suspense fallback={<div>Loading page ...</div>}>
        <Outlet />
      </Suspense>
    </header>
  );
};