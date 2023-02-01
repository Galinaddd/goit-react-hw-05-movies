import { fetchMovieDetails } from 'movieAPI';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const MoviesDetails = () => {
  const [movie, setMovie] = useState();
  const { movieId } = useParams();
  const location = useLocation();

  const backLinkHref = location.state?.from;

  console.log('location in details', backLinkHref);

  useEffect(() => {
    const getMoviesByID = async () => {
      const movieInfo = await fetchMovieDetails(movieId);

      setMovie(movieInfo);
    };

    getMoviesByID();
  }, [movieId]);

  return (
    <>
      <Link to={backLinkHref}>Go back</Link>
      {/* <BackLink to={backLinkHref}>Back to products</BackLink> */}
      {movie && <MovieCard movieInfo={movie} />}
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
