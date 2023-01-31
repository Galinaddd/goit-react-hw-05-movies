// import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchBox } from 'components/Searchbox/SearchBox';
export const Movies = () => {
  const onSearchClick = search => {
    console.log(search);
  };

  return (
    <main>
      <h1>Movies</h1>
      <SearchBox onClick={onSearchClick}></SearchBox>
      {/* <MoviesList movies={visibleMovies} /> */}
    </main>
  );
};
