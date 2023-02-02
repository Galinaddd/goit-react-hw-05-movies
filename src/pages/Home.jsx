import { fetchTraiding } from '../movieAPI';
import { useState, useEffect } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Div } from 'components/SharedLayout/SharedLayout.styled';

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
      <Div>
        <h1>Trending today</h1>
        {movies && <MoviesList movies={movies} />}
      </Div>
    </main>
  );
};
export default Home;
