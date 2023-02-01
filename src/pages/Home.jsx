import { fetchTraiding } from '../movieAPI';
import { useState, useEffect } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState(() => null);

  useEffect(() => {
    const trendingMovies = async () => {
      try {
        const data = await fetchTraiding();

        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    };

    trendingMovies();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      {movies && <MoviesList movies={movies} />}
    </main>
  );
};
export default Home;
