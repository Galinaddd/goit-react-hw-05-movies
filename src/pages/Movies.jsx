import { MoviesList } from 'components/MoviesList/MoviesList';
import { fetchSearchMovie } from '../movieAPI';
import { SearchBox } from 'components/Searchbox/SearchBox';
import { useEffect } from 'react';
import { useState } from 'react';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState();
  const [movies, setMovies] = useState(() => null);

  const onSearchClick = ({ search }) => {
    setSearchQuery(search);
  };

  useEffect(() => {
    const searchMovies = async () => {
      try {
        const visibleMovies = await fetchSearchMovie(searchQuery);

        setMovies(visibleMovies);
      } catch (error) {
        console.log(error);
      }
    };

    searchMovies();
  }, [searchQuery]);

  return (
    <main>
      <h1>Movies</h1>
      <SearchBox onClick={onSearchClick} />
      {searchQuery && movies && <MoviesList movies={movies} />}
    </main>
  );
};

export default Movies;
