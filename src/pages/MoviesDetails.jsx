import { fetchMovieDetails } from 'movieAPI';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { useParams, Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const MoviesDetails = () => {
  const [movie, setMovie] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    const getMoviesByID = async () => {
      const movieInfo = await fetchMovieDetails(movieId);
      console.log('movieInfo', movieInfo);
      setMovie(movieInfo);
    };

    getMoviesByID();
  }, [movieId]);

  return (
    <>
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
