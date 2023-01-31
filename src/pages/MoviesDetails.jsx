import { fetchMovieDetails } from 'movieAPI';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

export const MoviesDetails = () => {
  const [movie, setMovie] = useState();
  const { id } = useParams();

  useEffect(() => {
    const getMoviesByID = async id => {
      const movieInfo = await fetchMovieDetails(id);
      console.log('movieInfo', movieInfo);
      setMovie(movieInfo);
    };

    getMoviesByID(id);
  }, [id]);

  return (
    <main>
      {/* <BackLink to={backLinkHref}>Back to products</BackLink> */}
      <MovieCard movieInfo={movie} />
    </main>
  );
};
