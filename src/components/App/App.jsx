import { Route, Routes } from 'react-router-dom';
import { SaredLayout } from 'components/SharedLayout/SharedLayout';
import { Home } from '../../pages/Home';
import { Movies } from '../../pages/Movies';
import { MoviesDetails } from 'pages/MoviesDetails';
import { Cast } from 'components/Cast/Cast';
import { Reviews } from 'components/Reviews/Reviews';

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
