import { Link } from 'react-router-dom';

export const MoviesList = ({ movies, onClick }) => {
  console.log('movie list  movies searchmovie', movies);
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link
            to={`/movies/${movie.id}`}
            // state={{ from: location.pathname + location.search }}
          >
            {movie.title || movie.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
