import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as fetchMovie from '../services/fetchMovieAPI';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  const createSRC = profilePath => {
    return `https://image.tmdb.org/t/p/w200//${profilePath}`;
  };

  useEffect(() => {
    fetchMovie.getMovieCredits(movieId).then(({ cast }) => setCast(cast));
  }, [movieId]);
  return (
    <ul>
      {cast.map(actor => (
        <li key={actor.id}>
          <div>
            <img src={createSRC(actor.profile_path)} alt={actor.name} />
            <p>{actor.name}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
