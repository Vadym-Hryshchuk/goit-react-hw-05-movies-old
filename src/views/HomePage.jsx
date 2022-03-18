import { useEffect, useState } from 'react';
import * as fetchMovie from '../services/fetchMovieAPI';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovie.getTrendingMovie().then(({ results }) => {
      setMovies(results);
    });
  }, []);
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>{movie.title ?? movie.name}</li>
      ))}
    </ul>
  );
}
