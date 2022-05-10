import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as fetchMovie from '../../services/fetchMovieAPI';
import defaultAvatar from '../../defaultData/defaultAvatar.svg';
import { CastList } from './Cast.styled';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  const createSRC = profilePath => {
    if (!profilePath) {
      return defaultAvatar;
    }
    return `https://image.tmdb.org/t/p/w200//${profilePath}`;
  };

  useEffect(() => {
    fetchMovie.getMovieCredits(movieId).then(({ cast }) => setCast(cast));
  }, [movieId]);
  return (
    <CastList>
      {cast.map(actor => (
        <li key={actor.id}>
          <div>
            <img
              src={createSRC(actor.profile_path)}
              alt={actor.name}
              width={200}
              height={300}
            />
            <p>{actor.name}</p>
          </div>
        </li>
      ))}
    </CastList>
  );
}
