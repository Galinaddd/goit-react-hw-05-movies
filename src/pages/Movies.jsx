import { MoviesList } from 'components/MoviesList/MoviesList';
import { fetchSearchMovie } from '../movieAPI';
import { SearchBox } from 'components/Searchbox/SearchBox';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Div } from 'components/SharedLayout/SharedLayout.styled';

const Movies = () => {
  const [message, setMessage] = useState();
  const [movies, setMovies] = useState(() => null);
  const [searchParams, setSearchParams] = useSearchParams('');

  const onSearchClick = ({ search }) => {
    const normalisedSearch = search.trim().toLowerCase();
    if (normalisedSearch === '') {
      setMessage('enter search query');
      return;
    }
    setSearchParams({ query: search });
    setMessage('');
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
      <Div>
        <h1>Movies</h1>
        <SearchBox onClick={onSearchClick} />

        {!message && movies ? <MoviesList movies={movies} /> : <p>{message}</p>}
      </Div>
    </main>
  );
};

export default Movies;
