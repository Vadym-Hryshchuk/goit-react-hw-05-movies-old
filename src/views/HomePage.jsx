import { useEffect, useState } from 'react';

import * as fetchMovie from '../services/fetchMovieAPI';
import ListMovie from '../components/ListMovie';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovie.getTrendingMovie().then(({ results }) => {
      setMovies(results);
    });
  }, []);

  return (
    <>
      <ListMovie movies={movies} />
    </>
  );
}
