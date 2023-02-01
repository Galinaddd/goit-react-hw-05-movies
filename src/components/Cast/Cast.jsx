import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'movieAPI';
import { useState, useEffect } from 'react';
import { ListItem, Img, Title } from './Cast.styled';

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
    <>
      {cast ? (
        <ul>
          {cast.map(item => (
            <ListItem key={item.id}>
              <Img
                src={`https://image.tmdb.org/t/p/w500${item.profile_path}
`}
                alt={item.name}
              />
              <Title>{item.name}</Title>
              <p>Character {item.character}</p>
            </ListItem>
          ))}
        </ul>
      ) : (
        <p>No information</p>
      )}
    </>
  );
};
export default Cast;
