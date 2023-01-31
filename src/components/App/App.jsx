import { Route, Routes, Link } from 'react-router-dom';
import { Home } from '../../pages/Home';
import { Movies } from '../../pages/Movies';
import { MoviesDetails } from 'pages/MoviesDetails';

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
        <Route path="/movies/:movieId" element={<MoviesDetails />} />
        {/* <Route path="movies/:movieId/cast" element={<Cast />} />
        <Route path="movies/:movieId/reviews" element={<Reviews />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Container>
  );
};
