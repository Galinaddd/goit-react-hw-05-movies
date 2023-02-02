import { Tumb, Img } from './MovieCard.styled';
import PropTypes from 'prop-types';

const MovieCard = ({ movieInfo }) => {
  return (
    <main>
      <Tumb>
        <Img
          src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`}
          alt={movieInfo.title}
        />

        <div>
          <h2>{movieInfo.title}</h2>

          <p>
            Vote/Votes
            <span>
              {movieInfo.vote_average.toFixed(1)}/{movieInfo.vote_count}
            </span>
          </p>

          <p>
            Popularity <span> {movieInfo.popularity.toFixed(1) ?? '-'}</span>
          </p>

          <p>
            Original Title <span>{movieInfo.original_title}</span>
          </p>

          <p>
            Genre <span>{getGenres(movieInfo.genres)}</span>
          </p>

          <h3>ABOUT</h3>
          <p>{movieInfo.overview ?? '---'}</p>
        </div>
      </Tumb>
    </main>
  );
};

MovieCard.propTypes = {
  movieInfo: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string,
    vote_average: PropTypes.number.isRequired,
    vote_count: PropTypes.number.isRequired,
    popularity: PropTypes.number.isRequired,
    original_title: PropTypes.string,
    genres: PropTypes.array,
    overview: PropTypes.string,
  }).isRequired,
};

function getGenres(arrOfGenres) {
  return arrOfGenres.map(genr => genr.name).join(', ');
}

export default MovieCard;
