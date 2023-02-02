import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'movieAPI';
import { useState, useEffect } from 'react';
import notfound from '../../images/notfound.png';
import { ListItem, Img, Title, List } from './Cast.styled';

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
      {cast.length > 0 ? (
        <List>
          {cast.map(item => (
            <ListItem key={item.cast_id}>
              <div>
                <Img
                  src={
                    item.profile_path
                      ? `https://image.tmdb.org/t/p/w500${item.profile_path}
`
                      : notfound
                  }
                  alt={item.name}
                />
                <Title>{item.name}</Title>
                <p>Character {item.character}</p>
              </div>
            </ListItem>
          ))}
        </List>
      ) : (
        <p>No information</p>
      )}
    </>
  );
};
export default Cast;
