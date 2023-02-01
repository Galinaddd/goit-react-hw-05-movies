import { Outlet, Link } from 'react-router-dom';
import { Container } from './SharedLayout.styled';

export const SaredLayout = () => {
  return (
    <Container>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>
      <Outlet />
    </Container>
  );
};
