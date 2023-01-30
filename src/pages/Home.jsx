import { fetchTraiding } from '../movieAPI';
import { useState, useEffect } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const Home = () => {
  const [movies, setMovies] = useState(() => null);

  useEffect(() => {
    console.log('it is useEffect');

    const trendingMovies = async () => {
      try {
        const data = await fetchTraiding();
        console.log('data', data);
        setMovies(data.results);
        console.log('movies after set', movies);
      } catch (error) {
        console.log(error);
      }
    };

    trendingMovies();
  }, [movies]);

  return (
    <main>
      <h1>Trending today</h1>
      {/* <MoviesList movies={movies} /> */}
    </main>
  );
};
