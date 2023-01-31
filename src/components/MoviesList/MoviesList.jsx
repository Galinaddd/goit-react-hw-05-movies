import { Link } from 'react-router-dom';
export const MoviesList = ({ movies, onClick }) => {
  // const handleClick = () => {
  //   onClick();
  // };

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`${movie.id}`}>{movie.title || movie.name}</Link>
        </li>
      ))}
    </ul>
  );
};
