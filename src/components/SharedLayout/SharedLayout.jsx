import { Outlet } from 'react-router-dom';
import { Container, Header, StyledLink } from './SharedLayout.styled';
import { Suspense } from 'react';

const SaredLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SaredLayout;
