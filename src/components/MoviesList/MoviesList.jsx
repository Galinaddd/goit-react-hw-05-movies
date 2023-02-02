import { useLocation } from 'react-router-dom';
import { Link } from './MovieList.styled';
import PropTypes from 'prop-types';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link
            to={`/movies/${movie.id}`}
            state={{ from: location.pathname + location.search }}
          >
            {movie.title || movie.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      poster_path: PropTypes.string.isRequired,
      title: PropTypes.string,
      vote_average: PropTypes.number.isRequired,
      vote_count: PropTypes.number.isRequired,
      popularity: PropTypes.number.isRequired,
      original_title: PropTypes.string,
      genres: PropTypes.array,
      overview: PropTypes.string,
    })
  ).isRequired,
};
