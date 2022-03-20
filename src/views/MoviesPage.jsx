import { useState } from 'react';
// import { Outlet } from 'react-router-dom';
import ListMovie from '../components/ListMovie';
import SearchForm from '../components/SearchForm';
import * as fetchMovie from '../services/fetchMovieAPI';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);

  const getMovieForQuery = query => {
    fetchMovie.searchMovies(query).then(({ results }) => setMovies(results));
  };

  return (
    <>
      <SearchForm onSubmit={getMovieForQuery} />
      <ListMovie movies={movies} />
    </>
  );
}
