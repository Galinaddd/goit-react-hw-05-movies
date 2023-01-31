import { Route, Routes, Link } from 'react-router-dom';
import { Home } from '../../pages/Home';
import { Movies } from '../../pages/Movies';
import { MoviesDetails } from 'pages/MoviesDetails';
import { Cast } from 'components/Cast/Cast';
import { Reviews } from 'components/Reviews/Reviews';

import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        {/* <Route path="movies/:movieId/cast" element={<Cast />} />
        <Route path="movies/:movieId/reviews" element={<Reviews />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Container>
  );
};
