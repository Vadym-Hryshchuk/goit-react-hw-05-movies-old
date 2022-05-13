import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import {
  LinkStyled,
  MovieItem,
  MovieItemImage,
  MovieList,
  Title,
} from './ListMovie.styled';
import defaultPoster from '../../defaultData/defaultPoster.jpg';

export default function ListMovie({ movies }) {
  const location = useLocation();

  const createSRC = posterPath => {
    if (!posterPath) {
      return defaultPoster;
    }
    return `https://image.tmdb.org/t/p/w500//${posterPath}`;
  };

  return (
    <MovieList>
      {movies.map(({ id, title, name, poster_path }) => (
        <MovieItem key={id}>
          <LinkStyled to={`/movies/${id}`} state={{ from: location }}>
            <MovieItemImage src={createSRC(poster_path)} alt={title ?? name} />
            <Title>{title ?? name}</Title>
          </LinkStyled>
        </MovieItem>
      ))}
    </MovieList>
  );
}

ListMovie.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  name: PropTypes.string,
  poster_path: PropTypes.string,
};
