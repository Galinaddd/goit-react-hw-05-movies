import { Outlet, Link } from 'react-router-dom';
import { Container } from './SharedLayout.styled';
import { Suspense } from 'react';

const SaredLayout = () => {
  return (
    <Container>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SaredLayout;
