import { MoviesList } from 'components/MoviesList/MoviesList';
import { fetchSearchMovie } from '../movieAPI';
import { SearchBox } from 'components/Searchbox/SearchBox';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  // const [searchQuery, setSearchQuery] = useState();
  const [movies, setMovies] = useState(() => null);
  const [searchParams, setSearchParams] = useSearchParams('');

  const onSearchClick = ({ search }) => {
    setSearchParams({ query: search });
  };

  useEffect(() => {
    const searchQuery = searchParams.get('query');
    const searchMovies = async () => {
      try {
        if (searchQuery) {
          const visibleMovies = await fetchSearchMovie(searchQuery);
          setMovies(visibleMovies);
        }
      } catch (error) {
        console.log(error);
      }
    };

    searchMovies();
  }, [searchParams]);

  return (
    <main>
      <>
        <h1>Movies</h1>
        <SearchBox onClick={onSearchClick} />
        {movies && <MoviesList movies={movies} />}
      </>
    </main>
  );
};

export default Movies;
