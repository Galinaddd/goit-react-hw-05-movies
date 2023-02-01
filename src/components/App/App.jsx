import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

// import { SaredLayout } from 'components/SharedLayout/SharedLayout';
// import { Home } from '../../pages/Home';
// import { Movies } from '../../pages/Movies';
// import { MoviesDetails } from 'pages/MoviesDetails';
// import { Cast } from 'components/Cast/Cast';
// import { Reviews } from 'components/Reviews/Reviews';

const SaredLayout = lazy(() => import('components/SharedLayout/SharedLayout'));
const Home = lazy(() => import('../../pages/Home'));
const Movies = lazy(() => import('../../pages/Movies'));
const MoviesDetails = lazy(() => import('pages/MoviesDetails'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SaredLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
