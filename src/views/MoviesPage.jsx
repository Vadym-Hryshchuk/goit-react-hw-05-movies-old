import { useEffect, useState } from 'react';
// import { Outlet } from 'react-router-dom';
import ListMovie from '../components/ListMovie/ListMovie';
import LoadMoreBtn from '../components/LoadMoreBtn/LoadMoreBtn';
import SearchForm from '../components/SearchForm/SearchForm';
import * as fetchMovie from '../services/fetchMovieAPI';

export default function MoviesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const getMovieForQuery = query => {
    setSearchQuery(query);
    setPage(1);
  };
  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    fetchMovie
      .searchMovies(searchQuery, page)
      .then(({ results }) =>
        setMovies(prevResults => [...prevResults, ...results]),
      );
  }, [page, searchQuery]);
  const increasePage = () => {
    setPage(prevPage => prevPage + 1);
  };
  const loadMoreMovies = () => {
    increasePage();
  };
  return (
    <>
      <SearchForm onSubmit={getMovieForQuery} />
      <ListMovie movies={movies} />
      {movies.length > 0 && <LoadMoreBtn loadMore={loadMoreMovies} />}
    </>
  );
}
