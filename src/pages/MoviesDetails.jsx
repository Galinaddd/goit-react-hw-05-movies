import { fetchMovieDetails } from 'movieAPI';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense, lazy } from 'react';
import { Div } from 'components/SharedLayout/SharedLayout.styled';
import styled from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa';

const MovieCard = lazy(() => import('components/MovieCard/MovieCard'));

const BackLink = styled(Link)`
  text-decoration: none;
  font-weight: 700;
  color: #000000;
  &:focus,
  &:hover {
    color: #ff0000;
  }
`;

const MoviesDetails = () => {
  const [movie, setMovie] = useState();
  const { movieId } = useParams();
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    const getMoviesByID = async () => {
      const movieInfo = await fetchMovieDetails(movieId);

      setMovie(movieInfo);
    };

    getMoviesByID();
  }, [movieId]);

  return (
    <Div>
      <BackLink to={backLinkHref}>
        <FaArrowLeft />
        Go back
      </BackLink>
      {movie && <MovieCard movieInfo={movie} />}
      <ul>
        <li>
          <Link to="cast" state={{ from: backLinkHref }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: backLinkHref }}>
            Reviews
          </Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </Div>
  );
};

export default MoviesDetails;
