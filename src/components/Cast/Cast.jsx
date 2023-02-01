import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'movieAPI';
import { useState, useEffect } from 'react';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getmovieCreditsID = async () => {
      const movieCredits = await fetchMovieCredits(movieId);

      setCast(movieCredits);
    };

    getmovieCreditsID();
  }, [movieId]);

  return (
    <ul>
      {cast.map(item => (
        <li key={item.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${item.profile_path}
`}
            alt={item.name}
          />
          <h4>{item.name}</h4>
          <p>Character {item.character}</p>
        </li>
      ))}
    </ul>
  );
};
export default Cast;
